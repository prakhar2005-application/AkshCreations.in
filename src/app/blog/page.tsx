import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

export default function BlogPage() {
  return (
    <div className="container py-12">
      <Breadcrumb className="mb-8">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Blog</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">The AkshCreations Blog</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Tips, inspiration, and ideas for your next print project.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map(post => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
            <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="aspect-video overflow-hidden">
                <Image
                  src={post.featuredImage.imageUrl}
                  alt={post.title}
                  width={600}
                  height={400}
                  data-ai-hint={post.featuredImage.imageHint}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-6 flex flex-col flex-1">
                <Badge variant="secondary" className="w-fit mb-2">{post.category}</Badge>
                <h2 className="text-xl font-headline font-bold group-hover:text-primary transition-colors">{post.title}</h2>
                <p className="mt-2 text-muted-foreground flex-1">{post.excerpt}</p>
                <div className="flex items-center gap-3 mt-6 pt-4 border-t">
                  <Avatar>
                    <AvatarImage src={post.authorImage.imageUrl} alt={post.author} data-ai-hint={post.authorImage.imageHint} />
                    <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-sm">{post.author}</p>
                    <p className="text-xs text-muted-foreground">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
