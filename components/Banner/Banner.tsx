'use client'

import { Carousel } from "flowbite-react";
import Image from "next/image";
import UseBanner from "./UseBanner";

export default function Banner() {
    const {
        dataBanner
    } = UseBanner()

    return (
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
            <Carousel>
                {dataBanner.map((e, i) => (
                    <Image
                        key={i}
                        src={e.image}
                        height={500}
                        width={500}
                        alt="candi prambanan"
                    />
                ))}
            </Carousel>
        </div>
    )
}