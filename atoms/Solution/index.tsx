export default function Solution({ index }: { index: number }) {
    return (
        <img src={`/images/level${index}/${index === 1 ? 'solution1.png' : (index === 2 ? 'solution2.png' : 'solution3.png')}`} alt="Level 1 Solution" className="w-[5rem] h-[5rem] md:w-[6rem] md:h-[6rem] lg:w-[12rem] lg:h-[12rem] z-[10] relative border-2 border-primary border-solid rounded-md" />
    )
}