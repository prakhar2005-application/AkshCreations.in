'use client';

import { useState } from 'react';
import Image from 'next/image';
import type { Product } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { useCart } from '@/contexts/CartContext';
import { ShoppingCart, UploadCloud, Type } from 'lucide-react';

interface ProductCustomizerProps {
  product: Product;
}

export function ProductCustomizer({ product }: ProductCustomizerProps) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || '');
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || '');
  
  // Customization state
  const [text, setText] = useState('');
  const [textColor, setTextColor] = useState('#000000');
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddToCart = () => {
    const customization = {
      text,
      textColor,
      uploadedImage,
    };
    addToCart(product, quantity, customization);
  };

  return (
    <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
      {/* Preview Section */}
      <div className="bg-secondary p-4 rounded-lg sticky top-24 self-start">
        <div className="relative w-full aspect-square bg-gray-200 rounded-md overflow-hidden">
          <Image
            src={product.images[0].imageUrl}
            alt={product.name}
            fill
            className="object-contain"
            data-ai-hint={product.images[0].imageHint}
          />
          {uploadedImage && (
            <div className="absolute inset-0 flex items-center justify-center p-8 pointer-events-none">
              <Image src={uploadedImage} alt="Uploaded design" fill className="object-contain" />
            </div>
          )}
          {text && (
            <div
              style={{ color: textColor }}
              className="absolute bottom-1/4 left-1/2 -translate-x-1/2 text-center font-bold text-2xl whitespace-pre-wrap pointer-events-none"
            >
              {text}
            </div>
          )}
        </div>
      </div>

      {/* Controls Section */}
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl lg:text-4xl font-headline font-bold">{product.name}</h1>
          <p className="mt-2 text-2xl font-bold text-primary">₹{(product.price * quantity).toFixed(2)}</p>
          <p className="mt-4 text-muted-foreground">{product.longDescription}</p>
        </div>

        {product.colors.length > 1 && (
          <div>
            <Label className="font-semibold">Color: {selectedColor}</Label>
            <RadioGroup value={selectedColor} onValueChange={setSelectedColor} className="flex flex-wrap gap-2 mt-2">
              {product.colors.map((color) => (
                <RadioGroupItem key={color.name} value={color.name} id={`color-${color.name}`} className="sr-only" />
              ))}
            </RadioGroup>
          </div>
        )}

        {product.sizes && (
          <div>
            <Label htmlFor="size-select" className="font-semibold">Size</Label>
            {/* Implement Select component here if needed */}
          </div>
        )}
        
        <Accordion type="multiple" defaultValue={['customize-text']} className="w-full">
            <AccordionItem value="customize-text">
                <AccordionTrigger className="font-semibold text-lg flex items-center gap-2"><Type size={20} /> Add Text</AccordionTrigger>
                <AccordionContent className="space-y-4 pt-4">
                     <div className="grid gap-2">
                        <Label htmlFor="custom-text">Text</Label>
                        <Input id="custom-text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Your Text Here" />
                     </div>
                     <div className="grid gap-2">
                        <Label htmlFor="text-color">Text Color</Label>
                        <Input id="text-color" type="color" value={textColor} onChange={(e) => setTextColor(e.target.value)} className="w-24"/>
                     </div>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="customize-image">
                <AccordionTrigger className="font-semibold text-lg flex items-center gap-2"><UploadCloud size={20} /> Upload Image</AccordionTrigger>
                <AccordionContent className="pt-4">
                     <div className="grid gap-2">
                        <Label htmlFor="image-upload">Upload your logo or design</Label>
                        <Input id="image-upload" type="file" onChange={handleImageUpload} accept="image/png, image/jpeg, image/svg+xml" />
                     </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>

        <div className="flex items-center gap-4">
          <Label htmlFor="quantity" className="font-semibold">Quantity</Label>
          <Input
            id="quantity"
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value, 10)))}
            min="1"
            className="w-20"
          />
        </div>

        <div className="sticky bottom-4">
            <Button size="lg" className="w-full" onClick={handleAddToCart}>
                <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
            </Button>
        </div>
      </div>
    </div>
  );
}
