import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { ScrollToTop } from "@/components/scroll-to-top";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "AS Career Consultancy | Career Guidance & Placement Training",
    template: "%s | AS Career Consultancy",
  },
  description:
    "AS Career Consultancy helps ambitious learners build secure, career-ready futures through IT training, placement support, and mentorship.",
  metadataBase: new URL("https://ascareerconsultancy.in"),
  openGraph: {
    title: "AS Career Consultancy | Career Guidance & Placement Training",
    description:
      "Career-focused training, placement support, and industry mentoring for aspiring IT professionals.",
    type: "website",
    url: "https://ascareerconsultancy.in",
  },
  twitter: {
    card: "summary_large_image",
    title: "AS Career Consultancy | Career Guidance & Placement Training",
    description:
      "Career-focused training, placement support, and industry mentoring for aspiring IT professionals.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#f8f5ee] text-slate-800">
        <ScrollToTop />
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
        <Script
          id="ld-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "AS Career Consultancy",
              description:
                "A career consultancy and training institute focused on IT readiness, placement support, and professional growth.",
              url: "https://ascareerconsultancy.in",
              telephone: "+919876543210",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Office 402, Prestige Tower",
                addressLocality: "Pune",
                addressRegion: "MH",
                postalCode: "411001",
                addressCountry: "IN",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
