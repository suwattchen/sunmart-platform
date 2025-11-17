// apps/frontend/app/layout.tsx

// ต้องมีการ import Font
import type { Metadata } from "next";

// นี่คือ Root Layout Component ที่จำเป็น
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* นี่คือ body ของหน้าเว็บ */}
      <body>{children}</body>
    </html>
  );
}
