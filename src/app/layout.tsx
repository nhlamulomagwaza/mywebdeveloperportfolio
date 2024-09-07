
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '@/app/index.scss';
import Navbar from "@/components/navbar/Navbar";
import { FaLaptopCode } from "react-icons/fa";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nhlamulo Magwaza | Web Developer",
  description: "always ready to write some code",
  icons:{

    icon:'../../public/favicon.png',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={inter.className}>
      
        <Navbar />
        {children}
      </body>
    </html>
  );
}