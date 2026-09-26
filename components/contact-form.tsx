"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(10, "Enter a valid phone number"),
  course: z.string().min(1, "Please select an interest"),
  message: z.string().min(10, "Please share a few details"),
});

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(formSchema) });

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 800));
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5 rounded-4xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Full Name
          </label>
          <Input {...register("name")} placeholder="Your name" />
          {errors.name ? (
            <p className="mt-2 text-sm text-red-600">{errors.name.message}</p>
          ) : null}
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Email Address
          </label>
          <Input {...register("email")} placeholder="you@example.com" />
          {errors.email ? (
            <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>
          ) : null}
        </div>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Phone Number
          </label>
          <Input {...register("phone")} placeholder="98765 43210" />
          {errors.phone ? (
            <p className="mt-2 text-sm text-red-600">{errors.phone.message}</p>
          ) : null}
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Course Interest
          </label>
          <Input
            {...register("course")}
            placeholder="CCNA / IELTS / Digital Marketing"
          />
          {errors.course ? (
            <p className="mt-2 text-sm text-red-600">{errors.course.message}</p>
          ) : null}
        </div>
      </div>
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          How can we help?
        </label>
        <Textarea
          {...register("message")}
          placeholder="Share your goals, background, and preferred batch timing."
        />
        {errors.message ? (
          <p className="mt-2 text-sm text-red-600">{errors.message.message}</p>
        ) : null}
      </div>
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Request Enrollment"}
      </Button>
    </form>
  );
}
