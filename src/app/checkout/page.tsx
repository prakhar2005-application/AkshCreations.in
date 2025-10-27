'use client';

import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Separator } from '@/components/ui/separator';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CreditCard } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';

export default function CheckoutPage() {
  const { cartItems, cartTotal, itemCount } = useCart();
  const router = useRouter();
  
  useEffect(() => {
    if (itemCount === 0) {
        router.push('/shop');
    }
  }, [itemCount, router]);
  
  if (itemCount === 0) {
    return null;
  }

  const getUniqueKey = (item: { product: { id: any; }; customization: any; }) => {
    return `${item.product.id}-${JSON.stringify(item.customization)}`;
  }

  const shippingCost = 5.99;
  const taxRate = 0.08;
  const taxes = cartTotal * taxRate;
  const finalTotal = cartTotal + shippingCost + taxes;

  return (
    <div className="container py-8">
      <Breadcrumb className="mb-8">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/cart">Cart</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Checkout</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="flex flex-col gap-8">
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">Shipping Information</CardTitle>
                </CardHeader>
                <CardContent>
                    <form className="space-y-4">
                        <div className="grid gap-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" placeholder="you@example.com" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="first-name">First Name</Label>
                                <Input id="first-name" placeholder="John" />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="last-name">Last Name</Label>
                                <Input id="last-name" placeholder="Doe" />
                            </div>
                        </div>
                        <div className="grid gap-2">
                        <Label htmlFor="address">Address</Label>
                        <Input id="address" placeholder="123 Main St" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="city">City</Label>
                                <Input id="city" placeholder="Anytown" />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="state">State</Label>
                                <Input id="state" placeholder="CA" />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="zip">ZIP Code</Label>                    <Input id="zip" placeholder="12345" />
                            </div>
                        </div>
                    </form>
                </CardContent>
            </Card>

            <Card>
                 <CardHeader>
                    <CardTitle className="font-headline text-2xl">Shipping Options</CardTitle>
                </CardHeader>
                <CardContent>
                    <RadioGroup defaultValue="standard" className="space-y-2">
                        <Label htmlFor="shipping-standard" className="flex items-center gap-4 p-4 border rounded-md has-[[data-state=checked]]:border-primary">
                            <RadioGroupItem value="standard" id="shipping-standard" />
                            <div>
                                <p className="font-semibold">Standard Shipping</p>
                                <p className="text-sm text-muted-foreground">5-7 business days - ₹499</p>
                            </div>
                        </Label>
                        <Label htmlFor="shipping-express" className="flex items-center gap-4 p-4 border rounded-md has-[[data-state=checked]]:border-primary">
                            <RadioGroupItem value="express" id="shipping-express" />
                            <div>
                                <p className="font-semibold">Express Shipping</p>
                                <p className="text-sm text-muted-foreground">2-3 business days - ₹1299</p>
                            </div>
                        </Label>
                    </RadioGroup>
                </CardContent>
            </Card>
            
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-2xl flex items-center gap-2">
                        <CreditCard /> Payment Information
                    </CardTitle>
                    <CardDescription>Enter your payment details below.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid gap-2">
                        <Label htmlFor="card-number">Card Number</Label>
                        <Input id="card-number" placeholder="**** **** **** 1234" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="expiry-date">Expiration Date</Label>
                            <Input id="expiry-date" placeholder="MM/YY" />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="cvc">CVC</Label>
                            <Input id="cvc" placeholder="123" />
                        </div>
                    </div>
                     <div className="space-y-4">
                        <div className="flex items-center space-x-2 pt-4">
                            <Checkbox id="same-billing" defaultChecked />
                            <Label htmlFor="same-billing">Billing address is the same as my shipping address</Label>
                        </div>
                    </div>
                </CardContent>
            </Card>

        </div>
        
        <div className="sticky top-24 self-start">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Order Summary ({itemCount} {itemCount > 1 ? 'items' : 'item'})</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 mb-6">
                {cartItems.map(item => (
                  <li key={getUniqueKey(item)} className="flex items-center gap-4">
                    <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md bg-secondary">
                      <Image src={item.product.images[0].imageUrl} alt={item.product.name} fill className="object-contain" />
                       <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">{item.quantity}</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-sm">{item.product.name}</p>
                    </div>
                    <p className="text-sm">₹{(item.product.price * item.quantity).toFixed(2)}</p>
                  </li>
                ))}
              </ul>
              <Separator />
              <div className="space-y-2 mt-4">
                <div className="flex justify-between text-sm">
                  <span>Subtotal</span>
                  <span>₹{cartTotal.toFixed(2)}</span>
                </div>
                 <div className="flex justify-between text-sm">
                  <span>Shipping</span>
                  <span>₹{shippingCost.toFixed(2)}</span>
                </div>
                 <div className="flex justify-between text-sm">
                  <span>Taxes</span>
                  <span>₹{taxes.toFixed(2)}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>₹{finalTotal.toFixed(2)}</span>
                </div>
              </div>
              <Button size="lg" className="w-full mt-6">Place Order</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
