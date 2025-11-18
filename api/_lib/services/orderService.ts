import { randomUUID } from 'crypto';
import type { Address, Order, OrderItem } from '../types';
import { readJson, writeJson } from '../utils/fileDb';

const FILE = 'orders.json';

const getAll = (): Order[] => readJson<Order[]>(FILE, []);
const persist = (orders: Order[]) => writeJson<Order[]>(FILE, orders);

export const orderService = {
  listByUser(userId: string): Order[] {
    return getAll()
      .filter((order) => order.userId === userId)
      .sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
  },

  findById(userId: string, id: string): Order | undefined {
    return getAll().find((order) => order.id === id && order.userId === userId);
  },

  createOrder(params: {
    userId: string;
    items: Omit<OrderItem, 'id'>[];
    shippingCents: number;
    totalCents: number;
    address?: Address;
  }): Order {
    const orders = getAll();
    const order: Order = {
      id: randomUUID(),
      userId: params.userId,
      status: 'DRAFT',
      totalCents: params.totalCents,
      shippingCents: params.shippingCents,
      items: params.items.map((item) => ({ ...item, id: randomUUID() })),
      createdAt: new Date().toISOString(),
    };

    if (params.address) {
      order.address = params.address;
    }

    orders.push(order);
    persist(orders);
    return order;
  },

  updateOrder(order: Order): void {
    const orders = getAll();
    const index = orders.findIndex((item) => item.id === order.id);
    if (index >= 0) {
      orders[index] = order;
      persist(orders);
    }
  },
};

