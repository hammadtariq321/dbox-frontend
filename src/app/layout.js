import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "DBOX",
  description: "Powered by BrightXTechnology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Toaster position="top-right" reverseOrder={false} richColors />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
