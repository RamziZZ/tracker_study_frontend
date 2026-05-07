// import "./globals.css";

import Navbar from '@/components/shared/navbar' 

export default function RootLayout({ children }) {
  return (
    // <html lang="en">
    //   <body>
    //     <Navbar />
    //     {children}
    //   </body>
    // </html>
    <>
      <Navbar />
      {children}
    </>
  );
}