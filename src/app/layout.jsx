import { Open_Sans } from "next/font/google";
import { ThemeProvider } from "../components/ThemeProvider";
import "./globals.css";

export const openSans = Open_Sans({
  subsets: ['cyrillic'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-opensans'
});

export const metadata = {
  title: "Motivational Podcast",
  description: "This is my personal podcast website",
  keywords:
    "motivational podcast, inspirational podcast, podcast motivation, podcast inspiration, motivating podcast, inspiring podcast",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={openSans.variable}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
