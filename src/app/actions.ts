'use server';

import { getPrintSuggestion as getPrintSuggestionFlow } from '@/ai/flows/ai-powered-print-suggestion';
import { z } from 'zod';

const suggestionSchema = z.object({
  textInput: z.string().min(10, 'Please enter at least 10 characters.'),
});

type SuggestionState = {
  suggestion?: string | null;
  error?: string | null;
  fieldErrors?: {
    textInput?: string[];
  };
};

export async function getPrintSuggestionAction(
  prevState: SuggestionState,
  formData: FormData
): Promise<SuggestionState> {
  const validatedFields = suggestionSchema.safeParse({
    textInput: formData.get('textInput'),
  });

  if (!validatedFields.success) {
    return {
      error: 'Invalid input.',
      fieldErrors: validatedFields.error.flatten().fieldErrors,
    };
  }
  
  try {
    const result = await getPrintSuggestionFlow({ textInput: validatedFields.data.textInput });
    return { suggestion: result.designSuggestion };
  } catch (error) {
    console.error(error);
    return { error: 'Failed to get a suggestion. Please try again.' };
  }
}
