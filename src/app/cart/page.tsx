'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Separator } from '@/components/ui/separator';
import { Trash2, ShoppingBag } from 'lucide-react';

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, cartTotal, itemCount } = useCart();

  const getUniqueKey = (item: { product: { id: any; }; customization: any; }) => {
    return `${item.product.id}-${JSON.stringify(item.customization)}`;
  }

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
            <BreadcrumbPage>Shopping Cart</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      
      <h1 className="text-3xl font-headline font-bold mb-8">Your Shopping Cart</h1>

      {itemCount === 0 ? (
        <Card className="text-center py-20">
            <CardContent className="flex flex-col items-center">
                <ShoppingBag className="h-16 w-16 text-muted-foreground mb-4" />
                <h2 className="text-2xl font-semibold">Your cart is empty</h2>
                <p className="text-muted-foreground mt-2">Looks like you haven't added anything to your cart yet.</p>
                <Button asChild className="mt-6">
                    <Link href="/shop">Start Shopping</Link>
                </Button>
            </CardContent>
        </Card>
      ) : (
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-0">
                <ul className="divide-y divide-border">
                  {cartItems.map(item => (
                    <li key={getUniqueKey(item)} className="flex items-start gap-4 p-4">
                      <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-md bg-secondary">
                        <Image src={item.product.images[0].imageUrl} alt={item.product.name} fill className="object-contain"/>
                      </div>
                      <div className="flex-1">
                        <Link href={`/shop/${item.product.id}`} className="font-semibold hover:underline">{item.product.name}</Link>
                        <p className="text-sm text-muted-foreground">₹{item.product.price.toFixed(2)}</p>
                        {item.customization?.text && <p className="text-sm text-muted-foreground">Custom Text: "{item.customization.text}"</p>}
                        {item.customization?.uploadedImage && <p className="text-sm text-muted-foreground">Custom Image: Uploaded</p>}
                        <div className="flex items-center gap-2 mt-2">
                            <Input
                                type="number"
                                value={item.quantity}
                                onChange={(e) => updateQuantity(item.product.id, parseInt(e.target.value))}
                                min="0"
                                className="w-20 h-9"
                                aria-label="Quantity"
                            />
                            <Button variant="ghost" size="icon" onClick={() => removeFromCart(item.product.id)}>
                                <Trash2 className="h-4 w-4" />
                                <span className="sr-only">Remove item</span>
                            </Button>
                        </div>
                      </div>
                      <p className="font-semibold">₹{(item.product.price * item.quantity).toFixed(2)}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-muted-foreground">Calculated at checkout</span>
                </div>
                <div className="flex justify-between">
                  <span>Taxes</span>
                  <span className="text-muted-foreground">Calculated at checkout</span>
                </div>
                <Separator />
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>₹{cartTotal.toFixed(2)}</span>
                </div>
                <div className="space-y-2 pt-4">
                    <Input placeholder="Coupon Code" />
                    <Button variant="outline" className="w-full">Apply Coupon</Button>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild size="lg" className="w-full">
                  <Link href="/checkout">Proceed to Checkout</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}
