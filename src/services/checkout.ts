import api from './api';

export interface Address {
  cep: string;
  street: string;
  number: string;
  complement?: string;
  city: string;
  state: string;
}

export interface OrderItem {
  productId: string;
  quantity: number;
}

export interface CreateOrderRequest {
  items: OrderItem[];
  address?: Address;
  useAddressId?: string;
}

export interface CreateOrderResponse {
  orderId: string;
  totalCents: number;
  shippingCents: number;
}

export interface PaymentResponse {
  ok: boolean;
  payment: any;
  invoiceId: string;
}

export const checkoutService = {
  async createOrder(data: CreateOrderRequest): Promise<CreateOrderResponse> {
    const response = await api.post<CreateOrderResponse>('/checkout/create-order', data);
    return response.data;
  },

  async pay(orderId: string): Promise<PaymentResponse> {
    const response = await api.post<PaymentResponse>('/checkout/pay', { orderId });
    return response.data;
  },

  async getCep(cep: string): Promise<any> {
    const cleanCep = cep.replace(/[^0-9]/g, '');
    const response = await api.get(`/cep/${cleanCep}`);
    return response.data;
  },
};

