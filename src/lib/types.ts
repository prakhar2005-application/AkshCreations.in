import type { ImagePlaceholder } from './placeholder-images';

export type Product = {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  price: number;
  images: ImagePlaceholder[];
  category: string;
  rating: number;
  reviews: number;
  colors: { name: string; class: string }[];
  sizes?: string[];
  stock: number;
  isFeatured: boolean;
};

export type Category = {
  id: string;
  name: string;
  image: ImagePlaceholder;
  href: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorImage: ImagePlaceholder;
  date: string;
  featuredImage: ImagePlaceholder;
  category: string;
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  avatar: ImagePlaceholder;
  quote: string;
};

export type ServiceHighlight = {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
};

export type NavItem = {
  title: string;
  href: string;
};

export type CartItem = {
  product: Product;
  quantity: number;
  customization?: {
    text?: string;
    textColor?: string;
    uploadedImage?: string;
  };
};
