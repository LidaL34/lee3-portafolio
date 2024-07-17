export function SectionLayout({children, className}) {
    return (
        <section className={`md:px-[104px] px-4 ${className}`}>
            {
                children
            }
        </section>
    )
}