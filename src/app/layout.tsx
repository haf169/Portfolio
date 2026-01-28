import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
   subsets: ["latin", "vietnamese"],
   variable: "--font-inter",
});

export const metadata: Metadata = {
   title: "Nguyễn Hữu Trần Hà | Software Engineer",
   description:
      "Software Engineer với kinh nghiệm full-stack development. Chuyên ReactJS, NextJS, Spring Boot và NodeJS.",
   keywords: [
      "Software Engineer",
      "Full Stack Developer",
      "ReactJS",
      "NextJS",
      "Spring Boot",
      "Vietnam",
      "Da Nang",
   ],
   authors: [{ name: "Nguyễn Hữu Trần Hà" }],
   openGraph: {
      title: "Nguyễn Hữu Trần Hà | Software Engineer",
      description:
         "Software Engineer với kinh nghiệm full-stack development từ FPT Software.",
      type: "website",
      locale: "vi_VN",
   },
   icons: {
      icon: "/iconweb.png",
   },
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="vi" className="dark">
         <body className={`${inter.variable} antialiased`}>{children}</body>
      </html>
   );
}
