import type { Metadata } from "next";
import { Inter, Kanit, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import { ContextProvider } from "@/components/provider/context-provider";
import MasterProvider from "@/components/provider/master-provider";

const inter = Inter({ subsets: ["latin"] });
const kanit = Kanit({
  subsets: ['latin'],
  weight: '400'
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: '400'
})

export const metadata: Metadata = {
  title: "Splice",
  description: "Samples and Loops",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ContextProvider>
        <MasterProvider>
          <Header />
          {children}
        </MasterProvider>
      </ContextProvider>
      </body>
    </html>
  );
}
