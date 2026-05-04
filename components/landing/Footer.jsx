import { HugeiconsIcon } from '@hugeicons/react'
import { TelegramFreeIcons, TiktokFreeIcons, InstagramFreeIcons, WhatsappFreeIcons, Mail01FreeIcons, YoutubeFreeIcons } from '@hugeicons/core-free-icons'

export default function Footer() {
  const JTI_LINKS = [
    { name: 'JTI POLIJE', href: 'https://jti.polije.ac.id/' },
    { name: 'S-Learn JTI', href: 'https://slearn-jti.com/' },
    { name: 'Publikasi JTI', href: 'http://jtit.polije.ac.id/' },
    { name: 'Pusat Karir Polije', href: 'https://pusatkarir.polije.ac.id/' },
    { name: 'SiM Online', href: 'http://sim-online.polije.ac.id/' },
    { name: 'Evaluasi Pembelajaran', href: 'http://project-jti.polije.ac.id/jtiform' },
    { name: 'JTI Surat', href: 'https://jti.polije.ac.id/jtisurat/' },
    { name: 'Ruang Baca', href: 'http://jti.polije.ac.id/ruangbaca' },
    { name: 'Pameran JTI', href: 'https://pameran-jti.polije.ac.id/' },
    { name: 'JTI Marchendise', href: 'https://s.id/jtimerchcatalog' },
  ];

  const OTHER_LINKS = [
    { name: 'Politeknik Negeri Jember', href: 'http://polije.ac.id/' },
    { name: 'LSP P1 POLIJE', href: 'https://lsp.polije.ac.id/' },
    { name: 'Perpustakaan POLIJE', href: 'https://perpustakaan.polije.ac.id/' },
    { name: 'Jurnal POLIJE', href: 'https://publikasi.polije.ac.id/' },
  ];

  const SOCIAL_LINK = [
    {icon: TelegramFreeIcons, href: 'https://web.telegram.org/a/#885057659'},
    {icon: Mail01FreeIcons, href: ''},
    {icon: WhatsappFreeIcons, href: ''},
    {icon: InstagramFreeIcons, href: 'https://www.instagram.com/tif.nganjuk?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='},
    {icon: TiktokFreeIcons, href: 'https://www.tiktok.com/@tif.nganjuk?is_from_webapp=1&sender_device=pc'},
    {icon: YoutubeFreeIcons, href: 'https://www.youtube.com/@TIFNganjuk'}
  ]

  return (
    <footer className="bg-blue-900 text-white mt-10">
      
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        
        {/* Kiri */}
        <div className='w-full'>
          <h2 className="font-semibold text-lg mb-2">
            PRODI D4 Teknik Informatika <br />
            PSDKU Kab. Nganjuk
          </h2>
          <p className="text-sm text-blue-200 mb-4">
            Jl. Gatot Subroto 2, Kauman, Kec. Nganjuk, Kab. Nganjuk
          </p>

          {/* Sosial Icon */}
          <div className="flex gap-3 flex-wrap">
            {
              SOCIAL_LINK.map((item, index) => (
                <a key={index} href={item.href} target='_blank' className="bg-blue-200 border border-blue-300 p-3 rounded-lg hover:bg-blue-300 hover:scale-105 duration-300 cursor-pointer">
                  <HugeiconsIcon icon={item.icon} size={24} color="blue" strokeWidth={1.5} />
                </a>
              ))
            }
          </div>
        </div>

        {/* Tengah */}
        <div className='w-fit'>
          <h3 className="font-semibold mb-3">Internal Link</h3>
          <ul className="space-y-2 text-xs text-blue-200">
            {JTI_LINKS.map((link, index) => (
              <li 
                key={index} 
                className="hover:text-blue-400 duration-300 cursor-pointer"
              >
                <a href={link.href} target='_blank'>• {link.name}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Kanan */}
        <div className='w-fit'>
          <h3 className="font-semibold mb-3">Other Link</h3>
          <ul className="space-y-2 text-xs text-blue-200">
            {OTHER_LINKS.map((link, index) => (
              <li 
                key={index} 
                className="hover:text-blue-400 duration-300 cursor-pointer"
              >
                <a href={link.href} target='_blank'>• {link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="bg-gray-900 px-6 py-4 flex flex-col md:flex-row justify-between items-end text-sm">
        <span>TIF PSDKU Nganjuk</span>
        <span className='text-gray-400 font-normal opacity-50'>© Copyright PT Barisan_wong_ruwet_Team Corporations 2026</span>
      </div>
    </footer>
  );
}