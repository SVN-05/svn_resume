"use client";
import { ContextProvider } from "@/context/context.provider";
import { ThemeProvider } from "next-themes";
import SmoothScrolling from "@/components/layouts/SmoothScroll/SmoothScrolling";
import { ChakraProvider } from "@chakra-ui/react";
import AppLayout from "@/components/layouts/AppLayout";

export function Providers({ children }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      enableColorScheme={true}
    >
      <AppLayout>
        <ContextProvider>
          <SmoothScrolling>
            <ChakraProvider>{children}</ChakraProvider>
          </SmoothScrolling>
        </ContextProvider>
      </AppLayout>
    </ThemeProvider>
  );
}
