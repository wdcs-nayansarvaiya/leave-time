import { Inter } from "next/font/google";
import './globals.css'
// import "../app/style.css";
// import "../app/heckerForm.css"


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Leave now",
  description: "Created by Nayan Sarvaiya",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
