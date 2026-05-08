import EventCard from '@/components/shared/eventCard'

export default function EventList() {
  return (
    <section className="px-10 w-full flex flex-col items-center">     

      <div className="max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {[1,2,3,4,5,6].map((item) => (
          <EventCard
            key={item}
            label={'Intensive Fullstack Web Bootcamp'}
            location={'Aula SMA Negeri 2 Nganjuk, Nganjuk Kota, Kabupaten Nganjuk'}
            calender={'Jan 20, 2020'}
            comp_image={'/photo-1561489396-888724a1543d.avif'}
            cost={'120.000'}
            quota={'120'}
            type={'Job Fair'}
          />
        ))}
      </div>
    </section>
  );
}