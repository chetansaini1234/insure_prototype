export default function NavItem({ navItemText }) {
	return (
		<li className="nav-item">
			<a href="#" className="nav-link-item">
				{navItemText}
			</a>
		</li>
	);
}