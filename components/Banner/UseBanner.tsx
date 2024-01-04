import { useState } from "react"
import { DataBannerT } from "@/lib/types"
import banner1 from '@/images/banner.jpg'
import banner2 from '@/images/banner2.jpg'
import banner3 from '@/images/banner3.jpg'
import banner4 from '@/images/banner4.jpg'
import banner5 from '@/images/banner5.jpg'

export default function UseBanner(){
    const [dataBanner] = useState<DataBannerT[]>([
        {
            image: banner1
        },
        {
            image: banner2
        },
        {
            image: banner3
        },
        {
            image: banner4
        },
        {
            image: banner5
        },
    ])

    return {
        dataBanner
    }
}