import Image from 'next/image';
import { products } from '@/lib/data';
import { notFound } from 'next/navigation';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { ProductCustomizer } from '@/components/ProductCustomizer';
import { ProductCard } from '@/components/ProductCard';

export async function generateStaticParams() {
  return products.map((product) => ({
    productId: product.id,
  }));
}

export default function ProductDetailPage({ params }: { params: { productId: string } }) {
  const product = products.find(p => p.id === params.productId);

  if (!product) {
    notFound();
  }

  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div className="container py-8">
      <Breadcrumb className="mb-8">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/shop">Shop</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{product.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <ProductCustomizer product={product} />

      {/* Image Gallery */}
      {product.images.length > 1 && (
        <section className="mt-16">
            <h2 className="text-2xl font-headline font-bold mb-6">Product Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {product.images.map(image => (
                    <Card key={image.id} className="overflow-hidden">
                        <div className="aspect-square bg-secondary">
                           <Image src={image.imageUrl} alt={`${product.name} - view`} width={400} height={400} className="object-contain w-full h-full" data-ai-hint={image.imageHint} />
                        </div>
                    </Card>
                ))}
            </div>
        </section>
      )}
      
      {/* Related Products */}
      <section className="mt-16">
        <h2 className="text-2xl font-headline font-bold mb-6">You Might Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map(related => (
                <ProductCard key={related.id} product={related} />
            ))}
        </div>
      </section>
    </div>
  );
}
