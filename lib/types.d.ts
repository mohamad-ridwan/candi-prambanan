import { StaticImageData } from "next/image"

export type MenuT = {
    name: string,
    path: string | null
}

export type DataBannerT = {
    image: StaticImageData
}