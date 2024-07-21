export default function Logo({ title, size }: { title: string, size: number }) {
    return (
        <div>
            <h1 
                className={`font-lexend relative px-2 text-center z-[90] text-${size-2}xl md:text-${size}xl pb-4 md:pb-10 font-semibold text-[#FFEDFD]`} 
                style={{
                    textShadow: '0px 4px 3px #A61E24',
                }}
            >{title}</h1>
        </div>
    )
}