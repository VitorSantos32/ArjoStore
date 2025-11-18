import type { Category, Product } from '../types';
import { readJson } from '../utils/fileDb';

export const productService = {
  getAll(): Product[] {
    return readJson<Product[]>('products.json', []);
  },

  getById(id: string): Product | undefined {
    return this.getAll().find((product) => product.id === id);
  },

  getCategories(): Category[] {
    return readJson<Category[]>('categories.json', []);
  },
};

