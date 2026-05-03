import { Nunito } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";

const NunitoFont = Nunito({
  variable: "--font-Nunito-Font",
  subsets: ["latin"]
})

export const metadata = {
  title: "Tails Gallary",
  description: "A New Tails Gallary",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`container mx-auto antialiased`}
    >
      <body className={`min-h-full flex flex-col ${NunitoFont.className} `}>
        <ToastContainer />
        <main> {children} </main>
      </body>
    </html >
  );
}
