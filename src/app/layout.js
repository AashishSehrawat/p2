import { Lato, Nunito_Sans } from "next/font/google";
import "./globals.css";

// Define Lato for headings (with 'variable' for CSS flexibility)
const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"], // Normal + Bold
  variable: "--font-heading", // CSS variable name
});

// Define Nunito Sans for body text
const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "600"], // Normal + Semi-bold
  variable: "--font-body",
});

export const metadata = {
  title: "Your App",
  description: "Custom fonts demo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${lato.variable} ${nunitoSans.variable}`}>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
