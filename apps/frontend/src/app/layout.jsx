import "./globals.css";

export const metadata = {
  title: "SunMart Hosting",
  description: "โฮสติ้งพร้อมใช้งานภายใน 30 วินาที พร้อม SSL และสำรองข้อมูล",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
