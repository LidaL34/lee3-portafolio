// Eslint
/* eslint-disable react/prop-types */

import { socialLinks } from "../../const/socialLinks"
import { InstagramIcon, BehanceIcon, LinkedinIcon } from "../../components/Icons"

export function Social() {

    return (
        <>
            <SocialIcon link={socialLinks[0].link} icon={<InstagramIcon/>}/>
            <SocialIcon link={socialLinks[1].link} icon={<LinkedinIcon/>}/>
            <SocialIcon link={socialLinks[2].link} icon={<BehanceIcon/>}/>
        </>
    )
}

function SocialIcon({ link, icon }) {
    return (
        <a
            href={link}
            target="_blank"
            className="w-[48px] h-[48px] rounded-full grid place-items-center border-2 text-[#00A3FF] border-[#00A3FF] transition-colors hover:bg-[#00A3FF] hover:text-black">
            {icon}
        </a>
    )
}