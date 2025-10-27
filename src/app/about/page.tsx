import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const aboutImage = PlaceHolderImages.find(img => img.id === 'about-us-main');

const values = [
    { title: "Customer Commitment", description: "We develop relationships that make a positive difference in our customers' lives." },
    { title: "Quality", description: "We provide outstanding products and unsurpassed service that deliver premium value." },
    { title: "Integrity", description: "We uphold the highest standards of integrity in all of our actions." },
    { title: "Teamwork", description: "We work together, across boundaries, to meet the needs of our customers." }
];

export default function AboutPage() {
    return (
        <div>
            <section className="relative h-[40vh] bg-secondary flex items-center justify-center text-center">
                 {aboutImage && (
                    <Image
                    src={aboutImage.imageUrl}
                    alt={aboutImage.description}
                    data-ai-hint={aboutImage.imageHint}
                    fill
                    priority
                    className="object-cover"
                    />
                )}
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative container text-white">
                    <h1 className="text-4xl md:text-5xl font-headline font-bold">About AkshCreations</h1>
                    <p className="mt-4 text-lg max-w-2xl mx-auto">Learn more about our journey, mission, and commitment to quality.</p>
                </div>
            </section>

            <section className="py-16 lg:py-24">
                <div className="container grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-headline font-bold">Our Story</h2>
                        <p className="mt-4 text-muted-foreground leading-relaxed">
                            AkshCreations was founded in 2024 with a simple mission: to make high-quality custom printing accessible and straightforward for everyone. What started as a small operation in a garage has grown into a leading online printing service, trusted by thousands of individuals and businesses. We saw a need for a printing partner that not only delivered exceptional products but also provided the tools and support to make the creative process enjoyable.
                        </p>
                         <p className="mt-4 text-muted-foreground leading-relaxed">
                            We've invested in state-of-the-art printing technology and built a team of passionate experts who are dedicated to bringing your vision to life. From the first click to the final product arriving at your door, we're committed to a seamless and satisfying experience.
                        </p>
                    </div>
                    <div>
                        <Card className="p-8 bg-secondary">
                             <h3 className="text-2xl font-headline font-bold mb-4">Our Mission & Vision</h3>
                             <p className="mt-2 text-muted-foreground font-semibold">
                                Our mission is to empower creativity by providing easy-to-use tools and professional-grade printing services.
                             </p>
                            <p className="mt-4 text-muted-foreground">
                                Our vision is to be the most trusted and inspiring platform for custom printing, helping individuals and businesses express themselves and grow their brands. We believe that a printed product is more than just ink on paper or fabric—it's a story, a brand, a memory.
                            </p>
                        </Card>
                    </div>
                </div>
            </section>
            
            <section className="py-16 lg:py-24 bg-secondary">
                <div className="container">
                    <h2 className="text-3xl font-headline font-bold text-center mb-12">Our Core Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map(value => (
                            <Card key={value.title} className="p-6 text-center">
                                <CheckCircle className="mx-auto h-10 w-10 text-accent mb-4" />
                                <h3 className="text-xl font-headline font-semibold">{value.title}</h3>
                                <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
