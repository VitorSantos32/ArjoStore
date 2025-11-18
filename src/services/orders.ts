import api from './api';

export interface OrderItem {
  id: string;
  productId: string;
  quantity: number;
  unitPrice: number;
  product?: {
    id: string;
    name: string;
    images: string[];
  };
}

export interface Order {
  id: string;
  userId: string;
  addressId: string;
  status: string;
  totalCents: number;
  shippingCents: number;
  items: OrderItem[];
  createdAt: string;
  address?: {
    cep: string;
    street: string;
    number: string;
    complement?: string;
    city: string;
    state: string;
  };
  invoice?: {
    id: string;
    invoiceNumber: string;
    pdfUrl?: string;
  };
}

export const ordersService = {
  async getAll(): Promise<Order[]> {
    const response = await api.get<Order[]>('/orders');
    return response.data;
  },

  async getById(id: string): Promise<Order> {
    const response = await api.get<Order>(`/orders/${id}`);
    return response.data;
  },
};

