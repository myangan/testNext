import { Inter } from "next/font/google";

export const dynamicParams = false;

const inter = Inter({ subsets: ["latin"] });

export default async function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>{" "}
    </html>
  );
}
