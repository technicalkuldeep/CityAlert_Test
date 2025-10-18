export const metadata = {
  title: "CityAlert Dashboard",
  description: "Live public incident feed powered by blockchain + Kwala",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-900 text-white font-sans">{children}</body>
    </html>
  );
}
