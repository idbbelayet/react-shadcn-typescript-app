// src/validation/salesSchema.ts
import { z } from "zod";

export const salesSchema = z.object({
  salesId: z.number().min(0, "Sales ID is required"),
  salesDate: z.date({ required_error: "Sales Date is required" }),
  product: z.string().min(3, "Product name is required"),
  amount: z
    .number({ invalid_type_error: "Amount must be a number" })
    .positive("Amount must be positive"),
});

export type SalesFormData = z.infer<typeof salesSchema>;
