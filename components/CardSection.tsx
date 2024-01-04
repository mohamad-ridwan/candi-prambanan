import { ReactNode } from "react"
import Marquee from "react-fast-marquee"

type Props = {
    title: string
    desc: string | ReactNode
    sectionID: string
}

export default function CardSection({
    title,
    desc,
    sectionID
}: Props) {
    return (
        <div className="mt-16" id={sectionID}>
            <div className="flex justify-center">
                <h1 className="text-center border-b-solid border-b-[1px] border-b-sky-500 w-fit pb-[1px] uppercase">
                    <strong>
                        <Marquee>
                            {title}
                        </Marquee>
                    </strong>
                </h1>
            </div>
            <div className="mt-4">
                <p className="text-center text-gray-700">
                    {desc}
                </p>
            </div>
        </div>
    )
}