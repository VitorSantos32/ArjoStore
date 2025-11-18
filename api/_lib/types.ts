export interface Category {
  id: string;
  name: string;
  slug: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  description?: string;
  priceCents: number;
  stock: number;
  sku?: string;
  categoryId?: string;
  images: string[];
}

export interface Address {
  cep: string;
  street: string;
  number: string;
  complement?: string;
  city: string;
  state: string;
}

export type OrderStatus = 'DRAFT' | 'PAID' | 'PROCESSING' | 'SHIPPED' | 'CANCELLED';

export interface OrderItem {
  id: string;
  productId: string;
  quantity: number;
  unitPrice: number;
}

export interface Order {
  id: string;
  userId: string;
  addressId?: string;
  address?: Address;
  status: OrderStatus;
  totalCents: number;
  shippingCents: number;
  items: OrderItem[];
  createdAt: string;
  invoice?: {
    id: string;
    invoiceNumber: string;
    pdfUrl?: string | null;
  };
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'customer' | 'admin';
}

