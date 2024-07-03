import { Inter } from "next/font/google";
import "./globals.css";
import AppLayout from "@/components/layouts/AppLayout";
import SmoothScrolling from "@/components/layouts/SmoothScroll/SmoothScrolling";
import { Providers } from "./providers/providers";
import { ContextProvider } from "@/context/context.provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nagaraj's Resume",
  description: "Developed in Next Js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppLayout>
          <Providers>
            <SmoothScrolling>
              <ContextProvider>{children}</ContextProvider>
            </SmoothScrolling>
          </Providers>
        </AppLayout>
      </body>
    </html>
  );
}
