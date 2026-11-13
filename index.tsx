import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Marquee } from "@/components/landing/Marquee";
import { Experience } from "@/components/landing/Experience";
import { Rodizio } from "@/components/landing/Rodizio";
import { Recipes } from "@/components/landing/Recipes";
import { Reservation } from "@/components/landing/Reservation";
import { Location } from "@/components/landing/Location";
import { Footer } from "@/components/landing/Footer";
import { WhatsAppFloat } from "@/components/landing/WhatsAppFloat";
import { SITE } from "@/lib/site";
import { WhatsAppBlockedDialog } from "@/lib/whatsapp";

const TITLE = "Pizzaria Seu Lima — Uma experiência que vai muito além da pizza";
const DESC =
  "Rodízio de pizzas salgadas e doces, massas e outras receitas em Rondonópolis, de R$ 40 a R$ 60 por pessoa. Reserve sua mesa pelo WhatsApp — segunda a sábado, das 19h às 22h30.";

const JSON_LD = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: SITE.name,
  description: DESC,
  telephone: `+${SITE.whatsappNumber}`,
  priceRange: "R$ 40 - R$ 60",
  servesCuisine: ["Pizza", "Massas", "Brasileira"],
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.addressStreet,
    addressLocality: "Rondonópolis",
    addressRegion: "MT",
    postalCode: SITE.addressCep,
    addressCountry: "BR",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "19:00",
      closes: "22:30",
    },
  ],
  sameAs: [SITE.instagram, SITE.facebook],
});

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    scripts: [{ type: "application/ld+json", children: JSON_LD }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Experience />
        <Rodizio />
        <Recipes />
        <Reservation />
        <Location />
      </main>
      <Footer />
      <WhatsAppFloat />
      <WhatsAppBlockedDialog />
    </div>
  );
}
