// import { Inter } from "next/font/google";
// import './globals.css'
// // import "../app/style.css";
// // import "../app/heckerForm.css"

// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Leave now",
//   description: "Created by Nayan Sarvaiya",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>{children}</body>
//     </html>
//   );
// }

import { Inter } from "next/font/google";
import Head from "next/head"; // Import the Head component
import "./globals.css";
// import "../app/style.css";
// import "../app/heckerForm.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Leave now",
  description: "Created by Nayan Sarvaiya",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />

        {/* Google Analytics Tag */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-GEG9MKOY58"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GEG9MKOY58');
          `,
          }}
        />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
