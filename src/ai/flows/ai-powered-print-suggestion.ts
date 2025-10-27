'use server';

/**
 * @fileOverview An AI-powered print suggestion tool.
 *
 * - getPrintSuggestion - A function that generates design suggestions based on user input.
 * - PrintSuggestionInput - The input type for the getPrintSuggestion function.
 * - PrintSuggestionOutput - The return type for the getPrintSuggestion function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PrintSuggestionInputSchema = z.object({
  textInput: z
    .string()
    .describe('The text input from the user to generate design suggestions.'),
});
export type PrintSuggestionInput = z.infer<typeof PrintSuggestionInputSchema>;

const PrintSuggestionOutputSchema = z.object({
  designSuggestion: z
    .string()
    .describe('The AI-powered design suggestion based on the user input.'),
});
export type PrintSuggestionOutput = z.infer<typeof PrintSuggestionOutputSchema>;

export async function getPrintSuggestion(input: PrintSuggestionInput): Promise<PrintSuggestionOutput> {
  return printSuggestionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'printSuggestionPrompt',
  input: {schema: PrintSuggestionInputSchema},
  output: {schema: PrintSuggestionOutputSchema},
  prompt: `You are a creative design assistant for AkshCreations, an online printing business. Generate a design suggestion based on the user's text input. Focus on providing specific and actionable ideas that the user can easily implement.

User Input: {{{textInput}}}

Design Suggestion:`, // Removed Handlebars 'safeString' helper as it's not needed.
});

const printSuggestionFlow = ai.defineFlow(
  {
    name: 'printSuggestionFlow',
    inputSchema: PrintSuggestionInputSchema,
    outputSchema: PrintSuggestionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
