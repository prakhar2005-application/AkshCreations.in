import { notFound } from 'next/navigation';
import Image from 'next/image';
import { blogPosts } from '@/lib/data';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Twitter, Facebook, Linkedin, Copy } from 'lucide-react';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(p => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container py-12">
       <Breadcrumb className="mb-8">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="max-w-48 truncate">{post.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      
      <article className="max-w-3xl mx-auto">
        <header className="mb-8 text-center">
            <Badge variant="secondary" className="mb-4">{post.category}</Badge>
            <h1 className="text-4xl md:text-5xl font-headline font-bold">{post.title}</h1>
            <div className="flex items-center justify-center gap-3 mt-6">
                <Avatar>
                    <AvatarImage src={post.authorImage.imageUrl} alt={post.author} data-ai-hint={post.authorImage.imageHint} />
                    <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                    <p className="font-semibold text-sm">{post.author}</p>
                    <p className="text-xs text-muted-foreground">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>
            </div>
        </header>

        <div className="relative aspect-video w-full overflow-hidden rounded-lg mb-8">
             <Image
                src={post.featuredImage.imageUrl}
                alt={post.title}
                fill
                className="object-cover"
                data-ai-hint={post.featuredImage.imageHint}
            />
        </div>

        <div 
          className="prose prose-lg dark:prose-invert max-w-none mx-auto" 
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />
        
        <div className="mt-12 pt-8 border-t flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="font-semibold">Share this post</p>
            <div className="flex gap-2">
                <Button variant="outline" size="icon"><Twitter className="h-4 w-4" /></Button>
                <Button variant="outline" size="icon"><Facebook className="h-4 w-4" /></Button>
                <Button variant="outline" size="icon"><Linkedin className="h-4 w-4" /></Button>
                <Button variant="outline" size="icon"><Copy className="h-4 w-4" /></Button>
            </div>
        </div>
      </article>
    </div>
  );
}
