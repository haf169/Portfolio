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
   title: "Nguyễn Hữu Trần Hà | Software Engineer",
   description:
      "Software Engineer tại Rikai Technology. Full-stack với Ruby on Rails, ReactJS, NextJS và Docker.",
   keywords: [
      "Software Engineer", "Full Stack Developer",
      "Ruby on Rails", "ReactJS", "NextJS",
      "Rikai Technology", "Vietnam", "Da Nang",
   ],
   authors: [{ name: "Nguyễn Hữu Trần Hà" }],
   openGraph: {
      title: "Nguyễn Hữu Trần Hà | Software Engineer",
      description: "Software Engineer tại Rikai Technology — Ruby on Rails · NextJS · Docker.",
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
