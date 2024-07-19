import { v4 as uuidv4 } from "uuid";
import DropdownItem from "./dropdown-item";

export default function DropdownMenu({ menuItems }) {
	return (
		<ul className="menu">
			{menuItems?.length &&
				menuItems.map((item) => (
					<DropdownItem
						navItemText={item.title}
						path={item.path}
						key={uuidv4()}
					/>
				))}
		</ul>
	);
}