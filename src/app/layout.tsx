import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { DocSidebar, DocSidebarItem } from "@/components/DocSidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex h-screen font-sans bg-white">
          <DocSidebar className="bg-gray-900 w-80 p-4 flex flex-col gap-2 fixed h-screen overflow-y-auto">
            <DocSidebarItem href="/">
              <div className="px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded cursor-pointer">
                Home
              </div>
            </DocSidebarItem>
            <DocSidebarItem href="/doc-sidebar">
              <div className="px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded cursor-pointer">
                Doc Sidebar
              </div>
            </DocSidebarItem>
            <DocSidebarItem href="/button">
              <div className="px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded cursor-pointer">
                Button
              </div>
            </DocSidebarItem>
          </DocSidebar>

          <main className="flex-1 p-8 ml-80 overflow-y-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}
