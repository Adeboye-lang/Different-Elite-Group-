import { z } from "zod";

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "Full name must be at least 2 characters." })
    .max(80, { message: "Full name cannot exceed 80 characters." }),
  email: z
    .string()
    .email({ message: "Please provide a valid email address." }),
  subject: z
    .string()
    .min(3, { message: "Subject must be at least 3 characters." })
    .max(120, { message: "Subject cannot exceed 120 characters." }),
  message: z
    .string()
    .min(15, { message: "Message must be at least 15 characters to explain your ambitions." })
    .max(2000, { message: "Message cannot exceed 2000 characters." }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export interface FormSubmissionState {
  status: "idle" | "submitting" | "success" | "error";
  message?: string;
  fieldErrors?: Partial<Record<keyof ContactFormData, string>>;
}
