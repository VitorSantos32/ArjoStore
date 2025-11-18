import type { VercelRequest, VercelResponse } from '@vercel/node';
import { orderService } from '../_lib/services/orderService';
import { productService } from '../_lib/services/productService';
import { requireAuth } from '../_lib/utils/auth';

const attachProductInfo = (orders: any[]) => {
  const products = productService.getAll();
  return orders.map((order) => ({
    ...order,
    items: order.items.map((item: any) => {
      const product = products.find((p) => p.id === item.productId);
      return {
        ...item,
        product: product
          ? {
              id: product.id,
              name: product.name,
              images: product.images,
            }
          : undefined,
      };
    }),
  }));
};

export default requireAuth((_req: VercelRequest, res: VercelResponse, user) => {
  const orders = orderService.listByUser(user.id);
  return res.status(200).json(attachProductInfo(orders));
});

