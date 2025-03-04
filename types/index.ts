import { z } from "zod";

import { insertProductSchema } from "@/lib/validators";

export type TProduct = z.infer<typeof insertProductSchema> & {
  id: string;
  rating: number;
  createdAt: Date;
};
