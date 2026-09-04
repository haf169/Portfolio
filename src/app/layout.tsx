import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
   subsets: ["latin", "vietnamese"],
   variable: "--font-inter",
   display: "swap",
});

const spaceGrotesk = Space_Grotesk({
   subsets: ["latin"],
   variable: "--font-space",
   weight: ["300", "400", "500", "600", "700"],
   display: "swap",
});

export const metadata: Metadata = {
   title: "Nguyễn Hữu Trần Hà | IT Monitoring & Service Engineer",
   description:
      "IT Monitoring & IT Service tại Glory Software Vietnam. Giám sát hệ thống, vận hành dịch vụ IT, Docker và Full-stack Web Development.",
   keywords: [
      "IT Monitoring", "IT Service", "System Operations",
      "Software Engineer", "Glory Software Vietnam",
      "Ruby on Rails", "ReactJS", "NextJS", "Docker",
      "Vietnam", "Da Nang",
   ],
   authors: [{ name: "Nguyễn Hữu Trần Hà" }],
   openGraph: {
      title: "Nguyễn Hữu Trần Hà | IT Monitoring & Service Engineer",
      description: "IT Monitoring & IT Service tại Glory Software Vietnam — Giám sát hệ thống · Docker · Web Development.",
      type: "website",
      locale: "vi_VN",
   },
   icons: { icon: "/iconweb.png" },
};

export default function RootLayout({
   children,
}: Readonly<{ children: React.ReactNode }>) {
   return (
      <html lang="vi" className="dark">
         <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
            {children}
         </body>
      </html>
   );
}
