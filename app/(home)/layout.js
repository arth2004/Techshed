import "@styles/globals.css";
import { Raleway } from "next/font/google";
import Nav from "@components/Nav.js";
import { ClerkProvider } from "@clerk/nextjs";
import LBar from "@components/LBar";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "TechShed",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${raleway.className} bg-[#edecec]`}>
          <Nav />
          <LBar />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
