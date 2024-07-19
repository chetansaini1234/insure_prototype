import { v4 as uuidv4 } from "uuid";
import MegaDropdownItem from "./mega-dropdown-item";

export default function MegaMenuItem({ menuItems }) {
	return (
		<li className="col-lg-3">
			<div className="single-dropdown-block">
				<h3>{menuItems?.title}</h3>
				<ul className="menu-list">
					{menuItems?.items?.length > 0 &&
						menuItems.items.map((item) => (
							<MegaDropdownItem
								dropdownItem={item}
								key={uuidv4()}
							/>
						))}
				</ul>
			</div>
		</li>
	);
}