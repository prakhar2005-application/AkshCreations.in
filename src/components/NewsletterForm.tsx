'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Mail } from 'lucide-react';

export function NewsletterForm() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');
    
    // In a real app, you would handle the form submission here (e.g., API call)
    console.log('Newsletter subscription for:', email);

    toast({
      title: 'Subscribed!',
      description: "Thanks for joining our newsletter. Look out for updates in your inbox.",
    });

    e.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-sm items-center space-x-2">
      <Input
        type="email"
        name="email"
        placeholder="Enter your email"
        required
        className="bg-card"
        aria-label="Email for newsletter"
      />
      <Button type="submit" variant="secondary" size="icon" aria-label="Subscribe to newsletter">
        <Mail className="h-4 w-4" />
      </Button>
    </form>
  );
}
