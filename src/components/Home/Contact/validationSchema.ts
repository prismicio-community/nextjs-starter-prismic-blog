import { z } from "zod";

const emptyStringToUndefined = z.literal("").transform(() => undefined);

function asOptionalField<T extends z.ZodTypeAny>(schema: T) {
  return schema.optional().or(emptyStringToUndefined);
}

export const validationSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  phone: z.string().min(1, { message: "Phone is required" }),
  email: asOptionalField(z.string().email({ message: "Email is not valid" })),
  message: z.string(),
});

export type ValidationSchema = z.infer<typeof validationSchema>;
