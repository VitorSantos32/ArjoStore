import api from './api';

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

export interface Category {
  id: string;
  name: string;
  slug: string;
}

export const productsService = {
  async getAll(): Promise<Product[]> {
    const response = await api.get<Product[]>('/products');
    return response.data;
  },

  async getById(id: string): Promise<Product> {
    const response = await api.get<Product>(`/products/${id}`);
    return response.data;
  },

  async getCategories(): Promise<Category[]> {
    const response = await api.get<Category[]>('/categories');
    return response.data;
  },
};

