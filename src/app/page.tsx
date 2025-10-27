import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ProductCard } from '@/components/ProductCard';
import { NewsletterForm } from '@/components/NewsletterForm';
import { categories, products, testimonials, serviceHighlights } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const heroBanner = PlaceHolderImages.find(img => img.id === 'hero-banner');

export default function Home() {
  const featuredProducts = products.filter(p => p.isFeatured);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] w-full bg-secondary">
        {heroBanner && (
            <Image
            src={heroBanner.imageUrl}
            alt={heroBanner.description}
            data-ai-hint={heroBanner.imageHint}
            fill
            priority
            className="object-cover"
            />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="relative container h-full flex flex-col items-start justify-end pb-12 text-white">
          <h1 className="text-4xl md:text-6xl font-headline font-bold drop-shadow-lg">
            Your Vision, Printed.
          </h1>
          <p className="mt-4 max-w-md text-lg drop-shadow">
            From custom t-shirts to professional business cards, we bring your ideas to life with premium quality printing.
          </p>
          <div className="mt-6 flex gap-4">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/shop">Shop Now</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/ai-suggestion">Get Design Ideas</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container">
          <h2 className="mb-8 text-center text-3xl font-headline font-bold">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {categories.map((category) => (
              <Link href={category.href} key={category.id} className="group block">
                <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="aspect-square overflow-hidden">
                    <Image
                      src={category.image.imageUrl}
                      alt={category.name}
                      width={400}
                      height={400}
                      data-ai-hint={category.image.imageHint}
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4 bg-card">
                    <h3 className="text-center font-headline font-semibold">{category.name}</h3>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container">
          <h2 className="mb-8 text-center text-3xl font-headline font-bold">Featured Products</h2>
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {featuredProducts.map((product) => (
                <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <ProductCard product={product} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden lg:flex" />
            <CarouselNext className="hidden lg:flex" />
          </Carousel>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                {serviceHighlights.map((highlight) => (
                <div key={highlight.id} className="flex flex-col items-center">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-accent-foreground">
                    <highlight.icon className="h-8 w-8" />
                    </div>
                    <h3 className="mb-2 text-xl font-headline font-bold">{highlight.title}</h3>
                    <p className="text-muted-foreground">{highlight.description}</p>
                </div>
                ))}
            </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container">
          <h2 className="mb-8 text-center text-3xl font-headline font-bold">What Our Customers Say</h2>
            <Carousel
                opts={{ align: "start", loop: true }}
                className="w-full max-w-4xl mx-auto"
            >
                <CarouselContent>
                {testimonials.map((testimonial) => (
                    <CarouselItem key={testimonial.id}>
                    <Card className="bg-card">
                        <CardContent className="p-8 flex flex-col items-center text-center">
                        <Avatar className="h-20 w-20 mb-4">
                            <AvatarImage src={testimonial.avatar.imageUrl} alt={testimonial.name} data-ai-hint={testimonial.avatar.imageHint} />
                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <blockquote className="max-w-xl text-lg italic">
                            "{testimonial.quote}"
                        </blockquote>
                        <p className="mt-4 font-bold font-headline">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </CardContent>
                    </Card>
                    </CarouselItem>
                ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
            <h2 className="text-3xl font-headline font-bold">Join Our Community</h2>
            <p className="mt-2 max-w-2xl mx-auto">
                Sign up for our newsletter to get the latest updates on new products, special offers, and design tips.
            </p>
            <div className="mt-6 max-w-sm mx-auto">
                <NewsletterForm />
            </div>
        </div>
      </section>

    </div>
  );
}
