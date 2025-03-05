import { z } from "zod";
import { formateNumberWithDecimal } from "./utils";
const currency = z
  .string()
  .refine(
    (value) => /^\d+(\.\d{2})?$/.test(formateNumberWithDecimal(Number(value))),
    "Price must have exactl two decimal places"
  );
// Schema for inserting Products
export const insertProductSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  slug: z.string().min(3, "Slug must be provided"),
  category: z.string().min(1, "Category must be provided"),
  brand: z.string().min(1, "Brand must be provided"),
  description: z.string().min(1, "Description must be provided"),
  stock: z.coerce.number(),
  images: z.array(z.string()).min(1, "Product must have at least one image"),
  isFeatured: z.boolean(),
  banner: z.string().nullable(),
  price: currency,
});

export const signInFormSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});
