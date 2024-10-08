import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { ClerkProvider} from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import "./globals.css";
import GlobalStyleProvider from "./providers/GlobalStyleProvider";
import ContextProvider from "./providers/ContextProvider";
import NextTopLoader from "nextjs-toploader";
import Footer from "./Components/Footer/Footer";
import { ThemeProvider } from "./Components/ThemeProvider/ThemeProvider";
import { GlobalLayoutProvider } from "./Components/GlobalLayoutProvider/GlobalLayoutProvider";

const nunito = Nunito({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Focusmate",
  description: "Have a full capacity of your tasks and note",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const { userId } = auth();

  const user  = await currentUser();

  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
            integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
          />
        </head>
        <body className={nunito.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <NextTopLoader
            height={2}
            color="#27AE60"
            easing="cubic-bezier(0.53,0.21,0,1)"
          />
          <ContextProvider>
              <GlobalLayoutProvider>
                {children}
              </GlobalLayoutProvider>
          </ContextProvider>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
