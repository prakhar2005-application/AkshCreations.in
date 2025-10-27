'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { getPrintSuggestionAction } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Lightbulb, Loader2, AlertCircle, Sparkles } from 'lucide-react';
import { FormMessage } from '@/components/ui/form';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Generating...
        </>
      ) : (
        <>
          <Sparkles className="mr-2 h-4 w-4" />
          Get Suggestion
        </>
      )}
    </Button>
  );
}

export default function AiSuggestionPage() {
  const initialState: { suggestion?: string | null, error?: string | null, fieldErrors?: any } = {};
  const [state, formAction] = useFormState(getPrintSuggestionAction, initialState);

  return (
    <div className="container py-12">
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader className="text-center">
            <div className="mx-auto bg-primary text-primary-foreground p-3 rounded-full mb-4 w-fit">
              <Lightbulb className="h-8 w-8" />
            </div>
            <CardTitle className="font-headline text-3xl">AI-Powered Design Suggestions</CardTitle>
            <CardDescription>
              Stuck for ideas? Describe what you're looking for, and our AI will generate a creative starting point for your print design.
            </CardDescription>
          </CardHeader>
          <form action={formAction}>
            <CardContent className="space-y-4">
              <div className="grid w-full gap-2">
                <Label htmlFor="textInput" className="font-semibold">Describe your idea</Label>
                <Textarea
                  id="textInput"
                  name="textInput"
                  placeholder="e.g., 'A vintage-style t-shirt for a coffee shop named The Daily Grind', 'A modern, minimalist business card for a graphic designer', or 'A fun mug design for a cat lover'"
                  rows={5}
                />
                {state?.fieldErrors?.textInput && (
                    <p className="text-sm font-medium text-destructive">{state.fieldErrors.textInput[0]}</p>
                )}
              </div>
            </CardContent>
            <CardFooter>
              <SubmitButton />
            </CardFooter>
          </form>
        </Card>

        {state?.error && (
            <Alert variant="destructive" className="mt-6">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>An Error Occurred</AlertTitle>
                <AlertDescription>{state.error}</AlertDescription>
            </Alert>
        )}
        
        {state?.suggestion && (
            <Card className="mt-6">
                <CardHeader>
                    <CardTitle className="font-headline flex items-center gap-2"><Sparkles size={20} className="text-accent" /> Here's an idea for you:</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground whitespace-pre-line">{state.suggestion}</p>
                </CardContent>
            </Card>
        )}
      </div>
    </div>
  );
}
