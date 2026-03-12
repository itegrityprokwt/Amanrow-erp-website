import "./globals.css";

export const metadata = {
  title: "Amanrow ERP",
  description: "Amanrow ERP Cloud Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}