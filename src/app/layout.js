import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nagaraj's Resume",
  description: "Developed in Next Js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
