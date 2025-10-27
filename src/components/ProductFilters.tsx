'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { categories } from "@/lib/data";

const colors = ["White", "Black", "Navy", "Red", "Natural"];
const sizes = ["S", "M", "L", "XL", "XXL"];
const sortingOptions = [
    { value: 'newest', label: 'New Arrivals' },
    { value: 'price-asc', label: 'Price: Low to High' },
    { value: 'price-desc', label: 'Price: High to Low' },
    { value: 'popularity', label: 'Best Selling' },
];

export function ProductFilters() {
    return (
        <aside className="lg:w-64">
            <Card className="p-4 lg:p-6">
                <h3 className="text-lg font-headline font-bold mb-4">Filters</h3>
                <Accordion type="multiple" defaultValue={['category', 'price', 'sort']} className="w-full">
                    <AccordionItem value="sort">
                        <AccordionTrigger className="font-semibold">Sort By</AccordionTrigger>
                        <AccordionContent>
                            <RadioGroup defaultValue="newest" className="space-y-2 pt-2">
                                {sortingOptions.map(option => (
                                    <div key={option.value} className="flex items-center space-x-2">
                                        <RadioGroupItem value={option.value} id={`sort-${option.value}`} />
                                        <Label htmlFor={`sort-${option.value}`}>{option.label}</Label>
                                    </div>
                                ))}
                            </RadioGroup>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="category">
                        <AccordionTrigger className="font-semibold">Category</AccordionTrigger>
                        <AccordionContent>
                            <div className="space-y-2 pt-2">
                                {categories.map(category => (
                                    <div key={category.id} className="flex items-center space-x-2">
                                        <Checkbox id={`cat-${category.id}`} />
                                        <Label htmlFor={`cat-${category.id}`}>{category.name}</Label>
                                    </div>
                                ))}
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="price">
                        <AccordionTrigger className="font-semibold">Price</AccordionTrigger>
                        <AccordionContent>
                            <div className="pt-4">
                               <Slider defaultValue={[50]} max={100} step={1} />
                               <div className="flex justify-between text-sm text-muted-foreground mt-2">
                                   <span>$0</span>
                                   <span>$100+</span>
                               </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="colors">
                        <AccordionTrigger className="font-semibold">Color</AccordionTrigger>
                        <AccordionContent>
                            <div className="space-y-2 pt-2">
                                {colors.map(color => (
                                    <div key={color} className="flex items-center space-x-2">
                                        <Checkbox id={`color-${color}`} />
                                        <Label htmlFor={`color-${color}`}>{color}</Label>
                                    </div>
                                ))}
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                     <AccordionItem value="sizes">
                        <AccordionTrigger className="font-semibold">Size</AccordionTrigger>
                        <AccordionContent>
                            <div className="space-y-2 pt-2">
                                {sizes.map(size => (
                                    <div key={size} className="flex items-center space-x-2">
                                        <Checkbox id={`size-${size}`} />
                                        <Label htmlFor={`size-${size}`}>{size}</Label>
                                    </div>
                                ))}
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </Card>
        </aside>
    );
}
