// Eslint
/* eslint-disable react/prop-types */

export function SkillCard({ icon, title, desc }) {
    return (
        <div className="px-10 py-20 border border-white/5 bg-[#0B0C10] max-w-[380px] md:min-h-[414px] flex flex-col gap-8 shadow-2xl">
            <span className='rounded-full w-fit grid place-items-center text-[#0285CF] bg-[#092232] p-4'>
                {icon}
            </span>

            <article className="flex flex-col gap-4">
                <h3 className='font-bold text-3xl'>
                    {title}
                </h3>

                <p>
                    {desc}
                </p>
            </article>
        </div>
    )
}