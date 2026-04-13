export default function SearchResultList({ keyword }) {
  const data = [
    {
      name: "Tan Malaka",
      nim: "E41230545",
      year: "1994",
      image: "/images/user1.jpg",
    },
  ];

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <section className="px-10 py-10">
      <h2 className="text-2xl font-bold text-center mb-8">
        Hasil Pencarian
      </h2>

      {filteredData.map((item, index) => (
        <div key={index}>{item.name}</div>
      ))}
    </section>
  );
}