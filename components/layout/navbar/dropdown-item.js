import Link from "next/link";

export default function DropdownItem({ navItemText, path }) {
	return (
		<li className="menu-item">
			<Link href={path} legacyBehavior>
				<a className="drop-trigger">
					{navItemText}
				</a>
			</Link>
		</li>
	);
}