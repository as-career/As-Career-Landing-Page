import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import { Clock3, Mail, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with AS Career Consultancy for course guidance, enrollment support, and placement assistance.",
};

const faqs = [
  {
    question: "How does the admission process work?",
    answer:
      "You can request a consultation, share your goals, and we will recommend the right course and batch.",
  },
  {
    question: "Do you offer both online and offline batches?",
    answer:
      "Yes, we offer hybrid learning options depending on the program and your preferred schedule.",
  },
  {
    question: "What is included in placement support?",
    answer:
      "Our support includes resume guidance, interview preparation, and employer matching assistance.",
  },
  {
    question: "Can I enroll for more than one course?",
    answer:
      "Absolutely. We can suggest a learning path that combines communication, technical, and career readiness training.",
  },
];

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Contact & Enrollment"
        title="Start your journey with a conversation"
        description="Whether you are looking for a course, placement support, or a career roadmap, our team is ready to help."
      />
      <div className="mt-10 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-6">
          <Card className="rounded-4xl border-slate-200 bg-[#f9f6ed] p-6">
            <CardContent className="p-0 space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="mt-1 text-[#c8972b]" size={18} />
                <div>
                  <p className="font-semibold text-[#1a2a4a]">Phone</p>
                  <p className="text-sm text-slate-600">+91 88673 75152</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="mt-1 text-[#c8972b]" size={18} />
                <div>
                  <p className="font-semibold text-[#1a2a4a]">Email</p>
                  <p className="text-sm text-slate-600">
                    ascareerconsultancy@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 text-[#c8972b]" size={18} />
                <div>
                  <p className="font-semibold text-[#1a2a4a]">Location</p>
                  <p className="text-sm text-slate-600">Belagavi, Karnataka</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock3 className="mt-1 text-[#c8972b]" size={18} />
                <div>
                  <p className="font-semibold text-[#1a2a4a]">Business Hours</p>
                  <p className="text-sm text-slate-600">
                    Mon-Sat: 9:00 AM - 7:00 PM
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="overflow-hidden rounded-4xl border border-slate-200 bg-white shadow-sm">
            <iframe
              title="AS Career Consultancy location"
              className="h-72 w-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3837.873050445376!2d74.5160384!3d15.863268199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf67d2de33a7e5%3A0x45294b5af7ae64a!2sS%20tower%20%23%203714%2C%201%2C%20Darbar%20Galli%2C%20Khade%20Bazar%2C%20Raviwar%20Peth%2C%20Belagavi%2C%20Karnataka%20590001!5e0!3m2!1sen!2sin!4v1790437341738!5m2!1sen!2sin"
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <ContactForm />
      </div>

      <section className="mt-16 rounded-4xl border border-slate-200 bg-white p-8 shadow-sm">
        <SectionHeading
          eyebrow="FAQs"
          title="Common questions before enrollment"
          description="Everything you need to know before taking the next step."
        />
        <Accordion type="single" collapsible className="mt-8 space-y-3">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.question}
              value={faq.question}
              className="rounded-2xl border border-slate-200 px-4"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-[#1a2a4a]">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </main>
  );
}
