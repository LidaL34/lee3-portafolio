import { ArrowRightIcon } from "./Icons"

export function Bento() {
    return (
        <div className="w-full grid grid-cols-10 auto-rows-[392px] mx-auto gap-4">
            <BentoItem name="Nexus | UI Project" href='https://www.behance.net/gallery/158336877/NEXUS-UI-PROYECT' image='/nexus.webp' className='col-span-10' />

            <BentoItem name="Market Place | UXUI Project" href='https://www.behance.net/gallery/172658785/Marketplace-UXUI-Project' image='/marketPlace.webp' className='col-span-10 md:col-span-5' />

            <BentoItem name="Cleo | Metaverse Interface" href='https://www.behance.net/gallery/145387285/Cleo-Metaverse-interface' image='/cleo.webp' className='col-span-10 md:col-span-5' />

            <BentoItem name="OnCheck | UI Project" href='https://www.behance.net/gallery/155575969/On-Check-UXUI-PROJECT' image='/onCheck.webp' className='col-span-10' />
        </div>
    )
}

function BentoItem({ image, name, className, href }) {
    return (
        <a target="_blank" href={href} className={`${className} overflow-hidden relative cursor-pointer flex flex-col justify-end bg-cover rounded-xl group`}>
            <div className="p-4 transition-transform ease-in duration-300 group-hover:-translate-y-3">
                <span className="w-full flex items-center justify-between px-4 py-2 rounded-md transition-colors ease-in duration-500 group-hover:bg-[#00A3FF]/80 bg-[#0B0C10]/80 backdrop-blur-md">
                    {name}
                    <ArrowRightIcon />
                </span>
            </div>

            <div className="absolute bg-cover bg-center bg-no-repeat w-full h-full transition-scale ease-in duration-300 -z-10 group-hover:scale-105" style={{
                backgroundImage: `url(${image})`
            }}></div>
        </a>
    )
}