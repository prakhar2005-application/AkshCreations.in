import { PlaceHolderImages } from './placeholder-images';
import type { Product, Category, BlogPost, Testimonial, ServiceHighlight } from './types';
import { ShieldCheck, Truck, Sparkles } from 'lucide-react';

const findImage = (id: string) => {
  const image = PlaceHolderImages.find((img) => img.id === id);
  if (!image) {
    throw new Error(`Image with id "${id}" not found.`);
  }
  return image;
};

export const categories: Category[] = [
  { id: 't-shirts', name: 'T-shirts', image: findImage('category-tshirts'), href: '/shop?category=t-shirts' },
  { id: 'mugs', name: 'Mugs', image: findImage('category-mugs'), href: '/shop?category=mugs' },
  { id: 'business-cards', name: 'Business Cards', image: findImage('category-business-cards'), href: '/shop?category=business-cards' },
  { id: 'banners', name: 'Banners', image: findImage('category-banners'), href: '/shop?category=banners' },
];

export const products: Product[] = [
  {
    id: 'prod-001',
    name: 'Custom Cotton T-Shirt',
    description: 'High-quality 100% cotton t-shirt, perfect for your custom designs.',
    longDescription: 'Our best-selling t-shirt is made from pre-shrunk 100% cotton, offering a classic fit and durable construction. It\'s the perfect canvas for your logos, artwork, or text. Available in a wide range of colors and sizes to fit everyone.',
    price: 24.99,
    images: [findImage('product-1-a'), findImage('product-1-b')],
    category: 't-shirts',
    rating: 4.8,
    reviews: 125,
    colors: [
      { name: 'White', class: 'bg-white' },
      { name: 'Black', class: 'bg-black' },
      { name: 'Navy', class: 'bg-blue-900' },
      { name: 'Red', class: 'bg-red-600' },
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    stock: 100,
    isFeatured: true,
  },
  {
    id: 'prod-002',
    name: 'Personalized Ceramic Mug',
    description: '11oz ceramic mug, dishwasher and microwave safe.',
    longDescription: 'Start your day with a personal touch. Our 11oz ceramic mugs are perfect for photos, logos, or a special message. The high-quality sublimation printing ensures your design won\'t fade. It\'s both dishwasher and microwave safe for everyday convenience.',
    price: 15.99,
    images: [findImage('product-2-a'), findImage('product-2-b')],
    category: 'mugs',
    rating: 4.9,
    reviews: 230,
    colors: [{ name: 'White', class: 'bg-white' }],
    stock: 150,
    isFeatured: true,
  },
  {
    id: 'prod-003',
    name: 'Premium Business Cards',
    description: 'Thick, matte-finish business cards that make an impression.',
    longDescription: 'Networking is key, and our premium business cards help you stand out. Printed on thick, 16pt card stock with a smooth matte finish, they feel as good as they look. Upload your design or create one with our tool.',
    price: 49.99,
    images: [findImage('product-3-a')],
    category: 'business-cards',
    rating: 4.9,
    reviews: 98,
    colors: [{ name: 'Multiple', class: 'bg-gradient-to-r from-gray-200 to-gray-400' }],
    sizes: ['Standard (3.5" x 2")'],
    stock: 500,
    isFeatured: true,
  },
  {
    id: 'prod-004',
    name: 'Outdoor Vinyl Banner',
    description: 'Durable, weather-resistant vinyl banner for any occasion.',
    longDescription: 'Get your message seen with our durable vinyl banners. Made from weather-resistant 13oz vinyl, they are perfect for outdoor events, grand openings, and promotions. Grommets and reinforced edges come standard for easy hanging.',
    price: 79.99,
    images: [findImage('product-4-a')],
    category: 'banners',
    rating: 4.7,
    reviews: 45,
    colors: [{ name: 'Custom', class: 'bg-gradient-to-r from-gray-200 to-gray-400' }],
    sizes: ['3\' x 6\'', '4\' x 8\'', 'Custom'],
    stock: 80,
    isFeatured: true,
  },
  {
    id: 'prod-005',
    name: 'Custom Tote Bag',
    description: 'Eco-friendly canvas tote bag, ready for your design.',
    longDescription: 'Go green in style with our custom canvas tote bags. Made from durable, eco-friendly cotton canvas, these bags are perfect for shopping, events, or everyday use. A large print area offers plenty of space for your branding or artwork.',
    price: 19.99,
    images: [findImage('product-5-a')],
    category: 'gifts',
    rating: 4.6,
    reviews: 72,
    colors: [{ name: 'Natural', class: 'bg-amber-50' }],
    stock: 200,
    isFeatured: false,
  },
  {
    id: 'prod-006',
    name: 'Personalized Phone Case',
    description: 'Protect your phone with a unique, custom-printed case.',
    longDescription: 'Show off your style while protecting your device. Our tough phone cases feature a dual-layer design for extra durability, with a glossy finish that makes your photos or designs pop. Available for most popular iPhone and Samsung models.',
    price: 29.99,
    images: [findImage('product-6-a')],
    category: 'gifts',
    rating: 4.8,
    reviews: 150,
    colors: [{ name: 'Custom', class: 'bg-gradient-to-r from-gray-200 to-gray-400' }],
    stock: 120,
    isFeatured: false,
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Sarah L.',
    role: 'Marketing Manager',
    avatar: findImage('testimonial-1'),
    quote: 'The quality of the business cards we ordered from PrintPro was outstanding. The colors were vibrant and the cardstock was premium. Our team was very impressed!',
  },
  {
    id: 'test-2',
    name: 'Mike D.',
    role: 'Event Organizer',
    avatar: findImage('testimonial-2'),
    quote: 'I needed a large banner for an outdoor event on short notice. PrintPro delivered ahead of schedule, and the banner held up perfectly despite the wind and rain. Lifesavers!',
  },
  {
    id: 'test-3',
    name: 'Jessica P.',
    role: 'Small Business Owner',
    avatar: findImage('testimonial-3'),
    quote: 'The t-shirts I designed for my cafe staff came out amazing. The online design tool was so easy to use, and the final product was professional and comfortable. Highly recommend!',
  },
];

export const serviceHighlights: ServiceHighlight[] = [
  {
    id: 'service-1',
    icon: Truck,
    title: 'Fast Delivery',
    description: 'Get your prints delivered to your doorstep in record time with our expedited shipping options.',
  },
  {
    id: 'service-2',
    icon: ShieldCheck,
    title: 'Premium Quality',
    description: 'We use state-of-the-art printing technology and the finest materials for a professional finish.',
  },
  {
    id: 'service-3',
    icon: Sparkles,
    title: 'Easy Customization',
    description: 'Our user-friendly design tools make it simple to bring your creative vision to life.',
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: '5-design-tips-for-eye-catching-tshirts',
    title: '5 Design Tips for Eye-Catching T-Shirts',
    excerpt: 'Learn how to make your t-shirt designs stand out from the crowd with these simple but effective design principles.',
    content: '<p>Content coming soon.</p>',
    author: 'Jane Doe',
    authorImage: findImage('testimonial-2'),
    date: '2024-05-15',
    featuredImage: findImage('blog-1'),
    category: 'Design Inspiration',
  },
  {
    slug: 'how-custom-merch-can-boost-your-business',
    title: 'How Custom Merch Can Boost Your Business',
    excerpt: 'Discover the power of branded merchandise as a marketing tool to increase brand awareness and customer loyalty.',
    content: '<p>Content coming soon.</p>',
    author: 'John Smith',
    authorImage: findImage('testimonial-1'),
    date: '2024-05-10',
    featuredImage: findImage('blog-2'),
    category: 'Business Growth',
  },
  {
    slug: 'understanding-print-finishes-matte-vs-glossy',
    title: 'Understanding Print Finishes: Matte vs. Glossy',
    excerpt: 'Choosing the right finish can elevate your print project. We break down the differences between matte and glossy finishes.',
    content: '<p>Content coming soon.</p>',
    author: 'Emily White',
    authorImage: findImage('testimonial-3'),
    date: '2024-05-05',
    featuredImage: findImage('blog-3'),
    category: 'Printing Tips',
  },
];
