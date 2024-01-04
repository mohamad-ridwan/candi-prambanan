import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

export default function Container({children}: Props){
    return(
        <div className="flex justify-center w-full">
            <div className="w-[768px]">
                {children}
            </div>
        </div>
    )
}