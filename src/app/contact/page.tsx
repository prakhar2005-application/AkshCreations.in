import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin } from 'lucide-react';

const mapImage = PlaceHolderImages.find(img => img.id === 'contact-map');

export default function ContactPage() {
    return (
        <div className="container py-16">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-headline font-bold">Get In Touch</h1>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                    Have a question or a project in mind? We'd love to hear from you.
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
                <Card>
                    <CardContent className="p-8">
                        <h2 className="text-2xl font-headline font-bold mb-6">Send us a Message</h2>
                        <form className="space-y-4">
                            <div className="grid gap-2">
                                <Label htmlFor="name">Full Name</Label>
                                <Input id="name" placeholder="Your Name" />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" placeholder="your.email@example.com" />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="message">Message</Label>
                                <Textarea id="message" placeholder="How can we help you today?" rows={5} />
                            </div>
                            <Button type="submit" className="w-full">Send Message</Button>
                        </form>
                    </CardContent>
                </Card>

                <div className="space-y-8">
                    <Card>
                        <CardContent className="p-6">
                            <h3 className="text-xl font-headline font-semibold mb-4">Contact Information</h3>
                            <ul className="space-y-4 text-muted-foreground">
                                <li className="flex items-center gap-4">
                                    <Mail className="h-5 w-5 text-accent" />
                                    <a href="mailto:support@akshcreations.com" className="hover:text-primary">support@akshcreations.com</a>
                                </li>
                                <li className="flex items-center gap-4">
                                    <Phone className="h-5 w-5 text-accent" />
                                    <a href="tel:+1234567890" className="hover:text-primary">+1 (234) 567-890</a>
                                </li>
                                <li className="flex items-start gap-4">
                                    <MapPin className="h-5 w-5 text-accent mt-1" />
                                    <span>123 Print St, Design City, DC 12345</span>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                    <Card className="overflow-hidden">
                        {mapImage && (
                            <div className="relative h-64 w-full">
                                <Image
                                    src={mapImage.imageUrl}
                                    alt="Location map"
                                    fill
                                    className="object-cover"
                                    data-ai-hint={mapImage.imageHint}
                                />
                            </div>
                        )}
                    </Card>
                </div>
            </div>
        </div>
    );
}
