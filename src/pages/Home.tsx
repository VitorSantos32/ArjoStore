import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { productsService, Product, Category } from '../services/products';

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  // Estados para filtros
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({
    perfumes: true,
    marca: false,
    preco: false,
    desconto: false,
  });
  const [selectedFilters, setSelectedFilters] = useState<{
    perfumes: string[];
    marcas: string[];
    preco: string[];
    desconto: string[];
  }>({
    perfumes: [],
    marcas: [],
    preco: [],
    desconto: [],
  });

  const slides = [
    '/imagenslayout/anuncio1.png',
    '/imagenslayout/anuncio2.jpg'
  ];

  useEffect(() => {
    const loadData = async () => {
      try {
        const [productsData, categoriesData] = await Promise.all([
          productsService.getAll(),
          productsService.getCategories(),
        ]);
        setAllProducts(productsData);
        setProducts(productsData.slice(0, 8)); // Mostrar 8 produtos na home
        setCategories(categoriesData);
      } catch (error) {
        console.error('Erro ao carregar dados:', error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  // Extrair marcas únicas dos produtos
  const getUniqueBrands = () => {
    const brands = new Set<string>();
    allProducts.forEach(product => {
      // Extrair marca do nome do produto (geralmente a primeira palavra)
      const brand = product.name.split(' ')[0];
      if (brand) brands.add(brand);
    });
    return Array.from(brands).sort();
  };

  // Toggle de seções expansíveis
  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Toggle de filtros
  const toggleFilter = (type: 'perfumes' | 'marcas' | 'preco' | 'desconto', value: string) => {
    setSelectedFilters(prev => {
      const current = prev[type];
      const newFilters = current.includes(value)
        ? current.filter(f => f !== value)
        : [...current, value];
      
      return {
        ...prev,
        [type]: newFilters
      };
    });
  };

  // Limpar todos os filtros
  const clearAllFilters = () => {
    setSelectedFilters({
      perfumes: [],
      marcas: [],
      preco: [],
      desconto: [],
    });
  };

  // Aplicar filtros e navegar
  const applyFilters = () => {
    const params = new URLSearchParams();
    
    if (selectedFilters.perfumes.length > 0) {
      params.append('category', selectedFilters.perfumes[0]);
    }
    if (selectedFilters.marcas.length > 0) {
      params.append('brand', selectedFilters.marcas[0]);
    }
    if (selectedFilters.preco.length > 0) {
      params.append('price', selectedFilters.preco[0]);
    }
    if (selectedFilters.desconto.length > 0) {
      params.append('discount', selectedFilters.desconto[0]);
    }

    navigate(`/products?${params.toString()}`);
  };

  // Verificar se há filtros ativos
  const hasActiveFilters = Object.values(selectedFilters).some(filters => filters.length > 0);

  // Alternância automática do carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Alterna a cada 5 segundos

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="bg-white">
      {/* Hero Banner com layout flex para deixar espaço à esquerda */}
      <section className="flex flex-col lg:flex-row">
        {/* Sidebar com Filtros */}
        <aside className="hidden lg:block lg:w-64 xl:w-80 flex-shrink-0 bg-white border-r border-gray-200">
          <div className="sticky top-24 bg-white shadow-sm">
            {/* Cabeçalho dos Filtros */}
            <div className="px-4 py-4 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-lg font-bold text-black uppercase">Filtros</h2>
              {hasActiveFilters && (
                <button
                  onClick={clearAllFilters}
                  className="text-sm text-red-600 underline hover:text-red-700 transition"
                >
                  Limpar Tudo
                </button>
              )}
            </div>

            <div className="px-4 py-4 space-y-4">
              {/* Seção PERFUMES */}
              <div className="border-b border-gray-200 pb-4">
                <button
                  onClick={() => toggleSection('perfumes')}
                  className="w-full flex items-center justify-between text-sm font-semibold uppercase text-black mb-3"
                >
                  <span>Perfumes</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${expandedSections.perfumes ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedSections.perfumes && (
                  <div className="space-y-2">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedFilters.perfumes.includes('feminino')}
                        onChange={() => toggleFilter('perfumes', 'feminino')}
                        className="mr-2 w-4 h-4 text-black border-gray-300 rounded focus:ring-black"
                      />
                      <span className="text-sm text-gray-700">Perfumes Femininos</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedFilters.perfumes.includes('masculino')}
                        onChange={() => toggleFilter('perfumes', 'masculino')}
                        className="mr-2 w-4 h-4 text-black border-gray-300 rounded focus:ring-black"
                      />
                      <span className="text-sm text-gray-700">Perfumes Masculinos</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedFilters.perfumes.includes('unissex')}
                        onChange={() => toggleFilter('perfumes', 'unissex')}
                        className="mr-2 w-4 h-4 text-black border-gray-300 rounded focus:ring-black"
                      />
                      <span className="text-sm text-gray-700">Perfumes Unissex</span>
                    </label>
                    {categories.slice(0, 5).map((category) => (
                      <label key={category.id} className="flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedFilters.perfumes.includes(category.id)}
                          onChange={() => toggleFilter('perfumes', category.id)}
                          className="mr-2 w-4 h-4 text-black border-gray-300 rounded focus:ring-black"
                        />
                        <span className="text-sm text-gray-700">{category.name}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* Seção MARCA */}
              <div className="border-b border-gray-200 pb-4">
                <button
                  onClick={() => toggleSection('marca')}
                  className="w-full flex items-center justify-between text-sm font-semibold uppercase text-black mb-3"
                >
                  <span>Marca</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${expandedSections.marca ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedSections.marca && (
                  <div className="space-y-2 max-h-60 overflow-y-auto">
                    {getUniqueBrands().slice(0, 15).map((brand) => (
                      <label key={brand} className="flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedFilters.marcas.includes(brand)}
                          onChange={() => toggleFilter('marcas', brand)}
                          className="mr-2 w-4 h-4 text-black border-gray-300 rounded focus:ring-black"
                        />
                        <span className="text-sm text-gray-700">{brand}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* Seção PREÇO */}
              <div className="border-b border-gray-200 pb-4">
                <button
                  onClick={() => toggleSection('preco')}
                  className="w-full flex items-center justify-between text-sm font-semibold uppercase text-black mb-3"
                >
                  <span>Preço</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${expandedSections.preco ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedSections.preco && (
                  <div className="space-y-2">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedFilters.preco.includes('0-100')}
                        onChange={() => toggleFilter('preco', '0-100')}
                        className="mr-2 w-4 h-4 text-black border-gray-300 rounded focus:ring-black"
                      />
                      <span className="text-sm text-gray-700">Até R$ 100</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedFilters.preco.includes('100-200')}
                        onChange={() => toggleFilter('preco', '100-200')}
                        className="mr-2 w-4 h-4 text-black border-gray-300 rounded focus:ring-black"
                      />
                      <span className="text-sm text-gray-700">R$ 100 - R$ 200</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedFilters.preco.includes('200-300')}
                        onChange={() => toggleFilter('preco', '200-300')}
                        className="mr-2 w-4 h-4 text-black border-gray-300 rounded focus:ring-black"
                      />
                      <span className="text-sm text-gray-700">R$ 200 - R$ 300</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedFilters.preco.includes('300-500')}
                        onChange={() => toggleFilter('preco', '300-500')}
                        className="mr-2 w-4 h-4 text-black border-gray-300 rounded focus:ring-black"
                      />
                      <span className="text-sm text-gray-700">R$ 300 - R$ 500</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedFilters.preco.includes('500+')}
                        onChange={() => toggleFilter('preco', '500+')}
                        className="mr-2 w-4 h-4 text-black border-gray-300 rounded focus:ring-black"
                      />
                      <span className="text-sm text-gray-700">Acima de R$ 500</span>
                    </label>
                  </div>
                )}
              </div>

              {/* Seção DESCONTO */}
              <div className="pb-4">
                <button
                  onClick={() => toggleSection('desconto')}
                  className="w-full flex items-center justify-between text-sm font-semibold uppercase text-black mb-3"
                >
                  <span>Desconto</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${expandedSections.desconto ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedSections.desconto && (
                  <div className="space-y-2">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedFilters.desconto.includes('10')}
                        onChange={() => toggleFilter('desconto', '10')}
                        className="mr-2 w-4 h-4 text-black border-gray-300 rounded focus:ring-black"
                      />
                      <span className="text-sm text-gray-700">10% OFF ou mais</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedFilters.desconto.includes('20')}
                        onChange={() => toggleFilter('desconto', '20')}
                        className="mr-2 w-4 h-4 text-black border-gray-300 rounded focus:ring-black"
                      />
                      <span className="text-sm text-gray-700">20% OFF ou mais</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedFilters.desconto.includes('30')}
                        onChange={() => toggleFilter('desconto', '30')}
                        className="mr-2 w-4 h-4 text-black border-gray-300 rounded focus:ring-black"
                      />
                      <span className="text-sm text-gray-700">30% OFF ou mais</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedFilters.desconto.includes('40')}
                        onChange={() => toggleFilter('desconto', '40')}
                        className="mr-2 w-4 h-4 text-black border-gray-300 rounded focus:ring-black"
                      />
                      <span className="text-sm text-gray-700">40% OFF ou mais</span>
                    </label>
                  </div>
                )}
              </div>

              {/* Botão Aplicar Filtros */}
              {hasActiveFilters && (
                <button
                  onClick={applyFilters}
                  className="w-full bg-black text-white py-2.5 rounded font-semibold text-sm hover:bg-gray-800 transition-colors mt-4"
                >
                  Aplicar Filtros
                </button>
              )}
            </div>
          </div>
        </aside>

        {/* Banner Carousel - Ocupa o restante da largura */}
        <div className="relative text-white py-16 md:py-20 lg:py-24 flex-1 overflow-hidden min-h-[400px] md:min-h-[500px]">
          {/* Background Images */}
          <div className="absolute inset-0">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  backgroundImage: `url(${slide})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              />
            ))}
            {/* Overlay escuro para melhorar legibilidade do texto */}
            <div className="absolute inset-0 bg-black bg-opacity-40" />
          </div>

          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="text-center w-full">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                Fragrâncias Irresistíveis
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-100">
                Descubra perfumes importados que elevam sua presença
              </p>
              <Link
                to="/products"
                className="inline-block px-8 py-4 bg-white text-black rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg"
              >
                Explorar Perfumes
              </Link>
            </div>
          </div>

          {/* Setas de navegação */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300 z-10"
            aria-label="Slide anterior"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300 z-10"
            aria-label="Próximo slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Indicadores de slide */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white w-8' : 'bg-white bg-opacity-50'
                }`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Promoção Banner - Acompanha o layout do banner */}
      <section className="flex flex-col lg:flex-row">
        {/* Espaço à esquerda (mesma largura do sidebar) */}
        <div className="hidden lg:block lg:w-64 xl:w-80 flex-shrink-0 bg-white border-r border-gray-200"></div>
        
        {/* Barra de promoção */}
        <div className="bg-black text-white py-4 flex-1">
          <div className="px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm md:text-base">
              <strong>Fragrâncias irresistíveis até 40% OFF</strong> - Aproveite agora!
            </p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Produtos em Destaque</h2>
            <p className="text-gray-600 text-lg">
              Explore nossa seleção de perfumes premium
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
            </div>
          ) : products.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <Link
                  key={product.id}
                  to={`/products/${product.id}`}
                  className="product-card group"
                >
                  <div className="relative h-64 bg-gray-100 overflow-hidden">
                    {product.images && product.images.length > 0 ? (
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-200">
                        <span className="text-gray-400">Sem imagem</span>
                      </div>
                    )}
                    {/* Badge de desconto (opcional) */}
                    {Math.random() > 0.7 && (
                      <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                        -20%
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 min-h-[3rem]">
                      {product.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-lg font-bold text-black">
                          R$ {(product.priceCents / 100).toFixed(2).replace('.', ',')}
                        </p>
                        {Math.random() > 0.7 && (
                          <p className="text-sm text-gray-500 line-through">
                            R$ {((product.priceCents * 1.25) / 100).toFixed(2).replace('.', ',')}
                          </p>
                        )}
                      </div>
                    </div>
                    <button className="mt-3 w-full bg-black text-white py-2 rounded-full font-semibold hover:bg-gray-800 transition-colors">
                      Ver Detalhes
                    </button>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 py-20">Nenhum produto disponível no momento.</p>
          )}

          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-block px-8 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition-colors"
            >
              Ver Todos os Produtos
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Famílias Olfativas</h2>
            <p className="text-gray-600 text-lg">
              Encontre o perfume ideal para cada momento
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Floral', description: 'Românticas e delicadas' },
              { name: 'Amadeirado', description: 'Elegantes e marcantes' },
              { name: 'Oriental', description: 'Intensas e envolventes' },
              { name: 'Cítrico', description: 'Frescas e energizantes' },
            ].map((category) => (
              <Link
                key={category.name}
                to={`/products?category=${category.name.toLowerCase()}`}
                className="group border-2 border-gray-200 rounded-lg p-8 hover:border-black transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex flex-col items-center text-center">
                  <h3 className="text-2xl font-bold mb-3 text-black group-hover:text-gray-700 transition">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-600">{category.description}</p>
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Cadastre-se em nossa newsletter</h2>
          <p className="text-gray-400 mb-8">
            Fique por dentro das novidades, lançamentos e promoções exclusivas
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Seu e-mail"
              className="flex-1 px-6 py-3 rounded-full bg-gray-900 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-white"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-colors"
            >
              Cadastrar
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
