
export default function Section({ padding, className, children }) {
    return (
        <section className={`relative ${padding || 'pb-[60px] md:pb-[80px] cLg:pb-[100px] xl:pb-[120px]'} ${className}`}>
            {children}
        </section>
    )
}
