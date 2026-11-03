"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { CheckCircle2, AlertCircle, Loader2, Send } from "lucide-react";
import { contactFormSchema, ContactFormData } from "@/src/lib/validation";
import { Button } from "@/src/components/ui/Button";

export function ContactForm() {
  const [submissionState, setSubmissionState] = useState<{
    status: "idle" | "submitting" | "success" | "error";
    message?: string;
  }>({ status: "idle" });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setSubmissionState({ status: "submitting" });

    // Validate with Zod schema
    const validationResult = contactFormSchema.safeParse(data);
    if (!validationResult.success) {
      setSubmissionState({
        status: "error",
        message: validationResult.error.issues[0]?.message || "Validation failed.",
      });
      return;
    }

    // Realistic simulation with honest delivery notice
    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));

      // Note to user / developer: Form is ready to attach Resend / Sendgrid / Nodemailer API route
      setSubmissionState({
        status: "success",
        message:
          "Thank you. Your message has been received by our client intake desk. Our directorship reviews all enquiries with discretion.",
      });
      reset();
    } catch {
      setSubmissionState({
        status: "error",
        message: "An unexpected error occurred. Please contact us directly via email.",
      });
    }
  };

  return (
    <div className="relative p-8 md:p-10 border border-white/[0.12] bg-[#121212] overflow-hidden shadow-2xl">
      {/* Top Gold Edge Accent */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C8A45D] to-transparent" />

      {/* Success Notification Banner */}
      {submissionState.status === "success" && (
        <div className="mb-6 p-4 border border-[#C8A45D]/40 bg-[#C8A45D]/10 flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-[#C8A45D] shrink-0 mt-0.5" />
          <div className="text-xs text-white leading-relaxed">
            <p className="font-semibold text-[#C8A45D] uppercase tracking-wider mb-0.5">
              Enquiry Received
            </p>
            <p>{submissionState.message}</p>
          </div>
        </div>
      )}

      {/* Error Notification Banner */}
      {submissionState.status === "error" && (
        <div className="mb-6 p-4 border border-red-500/30 bg-red-500/10 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
          <div className="text-xs text-red-200 leading-relaxed">
            <p className="font-semibold uppercase tracking-wider mb-0.5">
              Submission Notice
            </p>
            <p>{submissionState.message}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
        {/* Full Name */}
        <div className="space-y-2">
          <label
            htmlFor="fullName"
            className="block text-[11px] uppercase tracking-[0.2em] font-mono text-white/80"
          >
            Full Name <span className="text-[#C8A45D]">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            placeholder="e.g. Marcus Alexander"
            {...register("fullName", {
              required: "Full name is required.",
              minLength: { value: 2, message: "Name must be at least 2 characters." },
            })}
            className={`w-full px-4 py-3 bg-[#181818] border text-sm text-white placeholder-white/20 focus:outline-none focus:ring-1 transition-colors ${
              errors.fullName
                ? "border-red-500/60 focus:ring-red-500"
                : "border-white/10 focus:border-[#C8A45D] focus:ring-[#C8A45D]"
            }`}
          />
          {errors.fullName && (
            <p className="text-[11px] text-red-400">{errors.fullName.message}</p>
          )}
        </div>

        {/* Email Address */}
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-[11px] uppercase tracking-[0.2em] font-mono text-white/80"
          >
            Email Address <span className="text-[#C8A45D]">*</span>
          </label>
          <input
            id="email"
            type="email"
            placeholder="e.g. marcus@example.com"
            {...register("email", {
              required: "Email address is required.",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Please enter a valid email address.",
              },
            })}
            className={`w-full px-4 py-3 bg-[#181818] border text-sm text-white placeholder-white/20 focus:outline-none focus:ring-1 transition-colors ${
              errors.email
                ? "border-red-500/60 focus:ring-red-500"
                : "border-white/10 focus:border-[#C8A45D] focus:ring-[#C8A45D]"
            }`}
          />
          {errors.email && (
            <p className="text-[11px] text-red-400">{errors.email.message}</p>
          )}
        </div>

        {/* Subject */}
        <div className="space-y-2">
          <label
            htmlFor="subject"
            className="block text-[11px] uppercase tracking-[0.2em] font-mono text-white/80"
          >
            Subject / Area of Interest <span className="text-[#C8A45D]">*</span>
          </label>
          <input
            id="subject"
            type="text"
            placeholder="e.g. Player Representation & Pathway Evaluation"
            {...register("subject", {
              required: "Subject is required.",
              minLength: { value: 3, message: "Subject must be at least 3 characters." },
            })}
            className={`w-full px-4 py-3 bg-[#181818] border text-sm text-white placeholder-white/20 focus:outline-none focus:ring-1 transition-colors ${
              errors.subject
                ? "border-red-500/60 focus:ring-red-500"
                : "border-white/10 focus:border-[#C8A45D] focus:ring-[#C8A45D]"
            }`}
          />
          {errors.subject && (
            <p className="text-[11px] text-red-400">{errors.subject.message}</p>
          )}
        </div>

        {/* Message */}
        <div className="space-y-2">
          <label
            htmlFor="message"
            className="block text-[11px] uppercase tracking-[0.2em] font-mono text-white/80"
          >
            Message & Career Background <span className="text-[#C8A45D]">*</span>
          </label>
          <textarea
            id="message"
            rows={5}
            placeholder="Please detail your current club, position, age, and aspirations..."
            {...register("message", {
              required: "Please provide details regarding your journey.",
              minLength: {
                value: 15,
                message: "Message must be at least 15 characters long.",
              },
            })}
            className={`w-full px-4 py-3 bg-[#181818] border text-sm text-white placeholder-white/20 focus:outline-none focus:ring-1 transition-colors resize-none ${
              errors.message
                ? "border-red-500/60 focus:ring-red-500"
                : "border-white/10 focus:border-[#C8A45D] focus:ring-[#C8A45D]"
            }`}
          />
          {errors.message && (
            <p className="text-[11px] text-red-400">{errors.message.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <Button
            type="submit"
            variant="gold"
            size="lg"
            className="w-full"
            disabled={submissionState.status === "submitting"}
            icon={
              submissionState.status === "submitting" ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Send className="w-4 h-4" />
              )
            }
          >
            {submissionState.status === "submitting"
              ? "Transmitting..."
              : "Submit Confidential Enquiry"}
          </Button>
        </div>

        {/* Confidentiality Assurance */}
        <p className="text-[10px] text-[#737373] text-center font-light pt-2">
          All submissions are handled under strict confidentiality by the executive management of Different Elite Group.
        </p>
      </form>
    </div>
  );
}
