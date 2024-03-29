import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Analytics } from "@vercel/analytics/react";

import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lucas Bertinchamp's Portfolio",
  description: "Lucas Bertinchamp's portfolio.",
};

export default function RootLayout({ params: { lang }, children }) {
  return (
    <html>
      <body className={inter.className}>
        <Analytics />
        <Navbar params={{ lang }} />
        {children}
        <Footer params={{ lang }} />
      </body>
    </html>
  );
}
