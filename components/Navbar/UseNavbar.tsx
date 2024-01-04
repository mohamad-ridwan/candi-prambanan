import { useState } from "react"
import { MenuT } from "@/lib/types"
import { usePathname } from "next/navigation"

export default function UseNavbar() {
    const [menu] = useState<MenuT[]>([
        {
            name: 'Beranda',
            path: '/'
        },
        {
            name: 'Tentang',
            path: '/#tentang'
        },
        {
            name: 'Sejarah',
            path: '/#sejarah'
        },
        {
            name: 'Wistawan',
            path: '/#wisatawan'
        },
    ])
    const pathname = usePathname()

    return {
        menu,
        pathname
    }
}