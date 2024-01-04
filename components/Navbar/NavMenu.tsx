import { MenuT } from "@/lib/types";
import { Navbar } from "flowbite-react";

type Props = {
    menu: MenuT[]
    currentPath: string
}

export default function NavMenu({
    menu,
    currentPath
}: Props) {
    return (
        <Navbar.Collapse>
            {menu.length > 0 && menu.map((e, i) => (
                <div key={i}>
                    <Navbar.Link href={e.path as string} active={e.path == currentPath}>
                    {e.name}
                    </Navbar.Link>
                </div>
            ))}
        </Navbar.Collapse>
    )
}