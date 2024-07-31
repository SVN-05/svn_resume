import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers/providers";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nagaraj's Resume",
  description: "Developed in Next Js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <NextTopLoader
          showSpinner={false}
          color="#6fc276"
          crawlSpeed={100}
          height={5}
          speed={100}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
