// import Image from "next/image";
import AlumniCard from "../../ui/alumni_card";

export default function FindResultAlumni() {
    return (
        <section className="max-w-7xl mx-auto px-10 py-16 flex flex-col items-center gap-10">
            <h2 className="text-xl md:text-5xl font-bold text-gray-900 leading-tight text-center lg:text-start">Hasil Pencarian</h2>
            {[1,2,3].map((item) => (
                <AlumniCard
                    key={item}
                    image={'/test_company.png'}
                    name={'Praditya Ivan'}
                    nim={'E41230457'}
                    graduate={'2023'}
                />
            ))}
        </section>
    )
}