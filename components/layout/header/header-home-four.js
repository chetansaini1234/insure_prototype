import Link from "next/link";
import { useState, useEffect } from "react";
import {
  BlogDropdownMenus,
  ContactDropdownMenus,
  DemoDropdownMenus,
  ElementsMegaMenu,
  PagesDropdownMenus,
} from "../navbar/menu-data";
import NavItem from "../navbar/nav-item";
import Navbar from "../navbar/navbar";
import useScroll from "./../../../hooks/useScroll";
import { AuthClient } from "@dfinity/auth-client";

export default function HeaderHomeFour() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [walletAddress, setWalletAddress] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const handleCloseMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const scroll = useScroll();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the size as per your design
    };

    handleResize(); // Check on initial load
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const connectWallet = async () => {
    try {
      const authClient = await AuthClient.create();
      await authClient.login({
        identityProvider: "https://identity.ic0.app",
        onSuccess: () => {
          const identity = authClient.getIdentity();
          const address = identity.getPrincipal().toText();
          setWalletAddress(address);
        },
        onError: (error) => {
          console.error("Sign-in error:", error);
        },
      });
    } catch (error) {
      console.error("Failed to connect wallet:", error);
    }
  };

  const copyToClipboard = () => {
    if (walletAddress) {
      navigator.clipboard.writeText(walletAddress);
      alert("Wallet address copied to clipboard!");
    }
  };

  const shortenAddress = (address) => {
    return address ? `${address.slice(0, 6)}...${address.slice(-4)}` : "";
  };

  return (
    <header className={`site-header fugu--header-section fugu--header-two ${scroll ? "sticky-menu" : ""}`} id="sticky-menu">
      <div className="container-fluid">
        <nav className="navbar site-navbar">
          <div className="brand-logo rt-mr-20">
            <Link href="/">
              <img src="/images/logo/logo-black.svg" alt="" className="light-version-logo" />
            </Link>
          </div>
          <div className="menu-block-wrapper">
            <div className={`menu-overlay ${isMobileMenuOpen ? "active" : null}`} onClick={handleCloseMobileMenu}></div>
            <nav className={`menu-block ${isMobileMenuOpen ? "active" : null}`} id="append-menu-header">
              <div className="mobile-menu-head">
                <div className="mobile-menu-close" onClick={handleCloseMobileMenu}>
                  &times;
                </div>
              </div>

              <Navbar>
                <NavItem navItemText="Home" menuItems={DemoDropdownMenus} />
                <NavItem navItemText="Airdrop" menuItems={PagesDropdownMenus} />
                <NavItem navItemText="Roadmap" menuItems={ElementsMegaMenu} megaMenu />
                <NavItem navItemText="Contact Us" menuItems={ContactDropdownMenus} />
                {isMobile && (
                  <li className="nav-item">
                    <a href="#" onClick={walletAddress ? copyToClipboard : connectWallet}>
                      {walletAddress ? shortenAddress(walletAddress) : "Connect Wallet"}
                    </a>
                  </li>
                )}
              </Navbar>
            </nav>
          </div>
          {!isMobile && (
            <div className="header-btn header-btn-l1 ms-auto d-none d-xs-inline-flex">
              <a className="fugu--btn fugu--menu-btn2" href="#" onClick={walletAddress ? copyToClipboard : connectWallet}>
                {walletAddress ? shortenAddress(walletAddress) : "Connect Wallet"}
              </a>
            </div>
          )}

          <div className="mobile-menu-trigger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <span></span>
          </div>
        </nav>
      </div>
    </header>
  );
}