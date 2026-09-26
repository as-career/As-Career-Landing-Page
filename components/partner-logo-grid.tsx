import { Card } from "@/components/ui/card";
import type { Partner } from "@/types/content";

export function PartnerLogoGrid({ partners }: { partners: Partner[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {partners.map((partner) => (
        <Card
          key={partner.name}
          className="rounded-3xl border border-slate-200/80 bg-[#f9f6ed] p-6 text-center transition duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_-24px_rgba(26,42,74,0.45)]"
        >
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#1a2a4a] text-xl font-semibold text-white">
            {partner.name.slice(0, 2).toUpperCase()}
          </div>
          <h3 className="mt-4 text-lg font-semibold text-[#1a2a4a]">
            {partner.name}
          </h3>
          <p className="mt-2 text-sm font-medium uppercase tracking-[0.2em] text-[#c8972b]">
            {partner.type}
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            {partner.description}
          </p>
        </Card>
      ))}
    </div>
  );
}
