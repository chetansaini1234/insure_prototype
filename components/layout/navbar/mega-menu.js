import { v4 as uuidv4 } from "uuid";
import MegaMenuItem from "./mega-menu-item";

export default function MegaMenu({ menuItems }) {
	return (
		<div className="megamenu d-lg-flex">
			<ul className="list-unstyled py-lg-7">
				{menuItems?.length > 0 &&
					menuItems.map((item) => (
						<MegaMenuItem
							menuItems={item}
							key={uuidv4()}
						/>
					))
				}
			</ul>
		</div>
	);
}