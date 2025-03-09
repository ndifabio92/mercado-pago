import { string, number, type InferInput, object, optional } from "valibot";

export const ItemSchema = object({
    title: string(),
    unit_price: number(),
    quantity: number(),
    category_id: optional(string()),
    currency_id: optional(string(), 'ARS'),
    description: optional(string()),
});

export type ItemDto = InferInput<typeof ItemSchema> & { id: string };