'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const firstImage = product.images[0];

  return (
    <Card className="group overflow-hidden rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <Link href={`/shop/${product.id}`} className="block">
        <CardContent className="p-0">
          <div className="aspect-square overflow-hidden bg-secondary">
            <Image
              src={firstImage.imageUrl}
              alt={product.name}
              width={400}
              height={400}
              data-ai-hint={firstImage.imageHint}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="p-4">
            <h3 className="font-headline text-lg font-semibold truncate">{product.name}</h3>
            <p className="text-sm text-muted-foreground">{product.category}</p>
            <div className="mt-4 flex items-center justify-between">
              <p className="text-xl font-bold text-primary">₹{product.price.toFixed(2)}</p>
            </div>
          </div>
        </CardContent>
      </Link>
      <div className="px-4 pb-4">
         <Button 
            className="w-full" 
            variant="outline"
            onClick={() => addToCart(product, 1)}
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
      </div>
    </Card>
  );
}
