import { ArrowRightIcon } from "./Icons"

export function PrimaryButton({children, href}) {
    return (
        <a target="_blank" href={href} className="p-4 cursor-pointer hover:bg-[#00A3FF] transition-colors flex items-center justify-center w-[240px] text-md gap-2 border-2 border-[#00A3FF] group">
            {children}
            <span className="transition-transform group-hover:translate-x-3">
                <ArrowRightIcon/>
            </span>
        </a>
    )
}