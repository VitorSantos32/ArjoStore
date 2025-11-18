import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { productsService, Product } from '../services/products';
import { useCart } from '../context/CartContext';
import toast from 'react-hot-toast';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  useEffect(() => {
    const loadProduct = async () => {
      if (!id) return;
      try {
        const data = await productsService.getById(id);
        setProduct(data);
      } catch (error) {
        console.error('Erro ao carregar produto:', error);
        toast.error('Produto não encontrado');
        navigate('/products');
      } finally {
        setLoading(false);
      }
    };
    loadProduct();
  }, [id, navigate]);

  const handleAddToCart = () => {
    if (!product) return;
    if (product.stock < quantity) {
      toast.error('Quantidade indisponível em estoque');
      return;
    }
    addItem(product, quantity);
    toast.success('Produto adicionado ao carrinho!');
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (!product) {
    return null;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Image */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-96 bg-gray-200 flex items-center justify-center">
            {product.images && product.images.length > 0 ? (
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-gray-400 text-xl">Sem imagem</span>
            )}
          </div>
        </div>

        {/* Details */}
        <div>
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-3xl font-bold text-primary-600 mb-6">
            R$ {(product.priceCents / 100).toFixed(2)}
          </p>

          {product.description && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Descrição</h2>
              <p className="text-gray-700">{product.description}</p>
            </div>
          )}

          <div className="mb-6">
            <p className="text-sm text-gray-600 mb-2">
              <span className="font-semibold">SKU:</span> {product.sku || 'N/A'}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-semibold">Estoque:</span>{' '}
              {product.stock > 0 ? `${product.stock} unidades` : 'Fora de estoque'}
            </p>
          </div>

          {product.stock > 0 && (
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Quantidade
              </label>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
                >
                  -
                </button>
                <span className="text-lg font-semibold w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                  className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
                >
                  +
                </button>
              </div>
            </div>
          )}

          <div className="flex space-x-4">
            <button
              onClick={handleAddToCart}
              disabled={product.stock <= 0 || product.stock < quantity}
              className={`flex-1 px-6 py-3 rounded-lg font-semibold transition ${
                product.stock <= 0 || product.stock < quantity
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-primary-600 text-white hover:bg-primary-700'
              }`}
            >
              Adicionar ao Carrinho
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

