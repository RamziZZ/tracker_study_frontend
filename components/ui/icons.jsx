import Image from "next/image";

function BaseIcon({ src, className = "", alt = "icon", width = 24, height = 24, ...props }) {
  return (
    <span className={`inline-block ${className}`}>
      <Image src={src} alt={alt} width={width} height={height} {...props} />
    </span>
  );
}

// ================= ICONS =================

// Book
export function IconBook(props) {
  return <BaseIcon src="/icons/book-ico.png" alt="book" {...props} />;
}

// Home
export function IconHome(props) {
  return <BaseIcon src="/icons/home-ico.png" alt="home" {...props} />;
}

// Chevron Down
export function IconChevronDown(props) {
  return <BaseIcon src="/icons/chevron-down-ico.png" alt="chevron" {...props} />;
}

// Calendar (fallback inline SVG)
export function IconCalendar(props) {
  return (
    <span className="inline-flex items-center justify-center" {...props}>
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-6 w-6" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M7 3v3M17 3v3M4 8h16M5 5h14a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

// Mail
export function IconMail(props) {
  return <BaseIcon src="/icons/mail-ico.png" alt="mail" {...props} />;
}

// Phone
export function IconPhone(props) {
  return <BaseIcon src="/icons/phone-ico.png" alt="phone" {...props} />;
}

// Telegram
export function IconTelegram(props) {
  return <BaseIcon src="/icons/Telegram-ico.png" alt="telegram" {...props} />;
}

// Whatsapp
export function IconWhatsapp(props) {
  return <BaseIcon src="/icons/Whatsapp-ico.png" alt="whatsapp" {...props} />;
}

// Send
export function IconSend(props) {
  return <BaseIcon src="/icons/Telegram-ico.png" alt="send" {...props} />;
}

// Tiktok
export function IconTiktok(props) {
  return <BaseIcon src="/icons/Tiktok-ico.png" alt="tiktok" {...props} />;
}

// Instagram
export function IconInstagram(props) {
  return <BaseIcon src="/icons/instagram-ico.png" alt="instagram" {...props} />;
}

// Export semua
export {
  IconBook,
  IconHome,
  IconChevronDown,
  IconCalendar,
  IconMail,
  IconPhone,
  IconTelegram,
  IconWhatsapp,
  IconSend,
  IconTiktok,
  IconInstagram,
};