import Nav from "../components/Nav";
import Footer from "../components/Footer";

import "../styles/globals.css";

export const metadata = {
  title: "हिंदुस्तान - Hindi News, Latest News in Hindi, हिंदी समाचार",
  description:
    "हिंदुस्तान - हिंदी न्यूज़, समाचार, ताज़ा खबर। देश, विदेश, खेल, मनोरंजन, बिज़नेस की हिंदी न्यूज़ पढ़ें।",
};

export default function RootLayout({ children }) {
  return (
    <html lang="hi">
      <body className="bg-gray-50">
        <Nav />
        <main className="max-w-7xl mx-auto px-4 py-4 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
