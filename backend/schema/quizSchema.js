import { z } from "zod";

const quizBodySchema = z.object({
    title: z.string(),
    question: z.string(),
    options: z.array(z.string()),
    answer: z.string(),
}).strict();

export const quizSchema = z.object({
    body: quizBodySchema
    });