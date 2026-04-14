import JobCard from "./JobCard";

export default function ResultSection() {
  const jobs = [
    { title: "Front End Developer", company: "X Platform", image: "/x.png" },
    { title: "Front End Developer", company: "Canva", image: "/canva.png" },
    { title: "Front End Developer", company: "Ferrari", image: "/ferrari.png" },
    { title: "Front End Developer", company: "Figma", image: "/figma.png" },
    { title: "Front End Developer", company: "Spotify", image: "/spotify.png" },
    { title: "Front End Developer", company: "Adobe", image: "/adobe.png" },
  ];

  return (
    <section className="px-10 py-10 bg-gray-100">
      <h2 className="text-2xl font-bold text-center mb-8">
        Hasil Pencarian
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {jobs.map((job, index) => (
          <JobCard key={index} {...job} />
        ))}
      </div>
    </section>
  );
}