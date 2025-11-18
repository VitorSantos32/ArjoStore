import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { user, isAuthenticated, logout } = useAuth();
  const { getItemCount } = useCart();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [showMenu, setShowMenu] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const handleLogout = async () => {
    await logout();
    navigate('/');
    setShowUserMenu(false);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Top Bar */}
      <div className="bg-black text-white text-xs py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center">
            <p className="text-center">
              Ganhe frete grátis em compras acima de R$ 349
            </p>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Header */}
          <div className="flex items-center justify-between h-28 md:h-32">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img 
                src="/marcaloja.png" 
                alt="Arjostore" 
                className="h-24 md:h-28 object-contain"
              />
            </Link>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="flex-1 max-w-2xl mx-8 hidden md:block">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Pesquisar no catálogo"
                  className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-black"
                />
                <button
                  type="submit"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-black"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </form>

            {/* Right Icons */}
            <div className="flex items-center space-x-6">
              {/* Atendimento */}
              <button className="hidden lg:flex flex-col items-center text-xs hover:text-gray-600 transition">
                <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <span>Atendimento</span>
              </button>

              {/* Wishlist */}
              <button className="hidden lg:flex flex-col items-center text-xs hover:text-gray-600 transition">
                <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <span>Wishlist</span>
              </button>

              {/* User Account */}
              <div className="relative">
                {isAuthenticated ? (
                  <>
                    <button
                      onClick={() => setShowUserMenu(!showUserMenu)}
                      className="flex flex-col items-center text-xs hover:text-gray-600 transition"
                    >
                      <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <span className="hidden lg:inline">Minha Conta</span>
                    </button>
                    {showUserMenu && (
                      <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
                        <div className="px-4 py-2 border-b border-gray-200">
                          <p className="text-sm font-medium text-gray-900">{user?.name || user?.email}</p>
                        </div>
                        <Link
                          to="/orders"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => setShowUserMenu(false)}
                        >
                          Meus Pedidos
                        </Link>
                        <button
                          onClick={handleLogout}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Sair
                        </button>
                      </div>
                    )}
                  </>
                ) : (
                  <Link to="/login" className="flex flex-col items-center text-xs hover:text-gray-600 transition">
                    <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span className="hidden lg:inline">Entrar</span>
                  </Link>
                )}
              </div>

              {/* Cart */}
              <Link to="/cart" className="relative flex flex-col items-center text-xs hover:text-gray-600 transition">
                <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="hidden lg:inline">Carrinho</span>
                {getItemCount() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                    {getItemCount()}
                  </span>
                )}
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setShowMenu(!showMenu)}
                className="lg:hidden p-2 text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="hidden lg:flex items-center justify-center space-x-8 h-14 border-t border-gray-200">
            <Link to="/products" className="text-sm font-medium text-gray-700 hover:text-black transition py-4 border-b-2 border-transparent hover:border-black">
              PERFUMES
            </Link>
            <Link to="/products?category=feminino" className="text-sm font-medium text-gray-700 hover:text-black transition py-4 border-b-2 border-transparent hover:border-black">
              FEMININO
            </Link>
            <Link to="/products?category=masculino" className="text-sm font-medium text-gray-700 hover:text-black transition py-4 border-b-2 border-transparent hover:border-black">
              MASCULINO
            </Link>
            <Link to="/products?category=unissex" className="text-sm font-medium text-gray-700 hover:text-black transition py-4 border-b-2 border-transparent hover:border-black">
              UNISSEX
            </Link>
            <Link to="/products" className="text-sm font-medium text-gray-700 hover:text-black transition py-4 border-b-2 border-transparent hover:border-black">
              KITS
            </Link>
            <Link to="/products" className="text-sm font-medium text-gray-700 hover:text-black transition py-4 border-b-2 border-transparent hover:border-black">
              NOVIDADES
            </Link>
          </nav>

          {/* Mobile Menu */}
          {showMenu && (
            <div className="lg:hidden border-t border-gray-200 py-4">
              <div className="flex flex-col space-y-4">
                <form onSubmit={handleSearch} className="px-4">
                  <div className="relative">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Pesquisar no catálogo"
                      className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-black"
                    />
                    <button
                      type="submit"
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </button>
                  </div>
                </form>
                <Link to="/products" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-black">
                  PERFUMES
                </Link>
                <Link to="/products?category=feminino" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-black">
                  FEMININO
                </Link>
                <Link to="/products?category=masculino" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-black">
                  MASCULINO
                </Link>
                {isAuthenticated && (
                  <Link to="/orders" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-black">
                    MEUS PEDIDOS
                  </Link>
                )}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <footer className="bg-black text-white mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Atendimento ao Cliente */}
            <div>
              <h3 className="font-semibold mb-4 text-sm uppercase">Atendimento ao Cliente</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/contact" className="hover:text-white transition">Fale Conosco</Link></li>
                <li><Link to="/faq" className="hover:text-white transition">Perguntas Frequentes</Link></li>
                <li><Link to="/orders" className="hover:text-white transition">Meus Pedidos</Link></li>
                <li><Link to="/account" className="hover:text-white transition">Minha Conta</Link></li>
                <li><Link to="/returns" className="hover:text-white transition">Devoluções</Link></li>
              </ul>
            </div>

            {/* Institucional */}
            <div>
              <h3 className="font-semibold mb-4 text-sm uppercase">Institucional</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/about" className="hover:text-white transition">Sobre Nós</Link></li>
                <li><Link to="/privacy" className="hover:text-white transition">Privacidade</Link></li>
                <li><Link to="/terms" className="hover:text-white transition">Termos e Condições</Link></li>
                <li><Link to="/security" className="hover:text-white transition">Segurança</Link></li>
                <li><Link to="/careers" className="hover:text-white transition">Trabalhe Conosco</Link></li>
              </ul>
            </div>

            {/* Destaques */}
            <div>
              <h3 className="font-semibold mb-4 text-sm uppercase">Destaques</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/products?new=true" className="hover:text-white transition">Novidades</Link></li>
                <li><Link to="/products?bestseller=true" className="hover:text-white transition">Mais Vendidos</Link></li>
                <li><Link to="/products?offer=true" className="hover:text-white transition">Ofertas</Link></li>
                <li><Link to="/guide" className="hover:text-white transition">Guia de Compras</Link></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="font-semibold mb-4 text-sm uppercase">Newsletter</h3>
              <p className="text-sm text-gray-400 mb-4">
                Cadastre-se e fique por dentro das novidades, lançamentos e promoções.
              </p>
              <form className="space-y-2">
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded text-white placeholder-gray-400 focus:outline-none focus:border-white"
                />
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-white text-black rounded font-semibold hover:bg-gray-200 transition"
                >
                  Cadastrar
                </button>
              </form>
            </div>
          </div>

          {/* Social Media */}
          <div className="mt-8 pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex space-x-4 mb-4 md:mb-0">
                <a 
                  href="https://www.instagram.com/arjostoreba/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
              <p className="text-sm text-gray-400 text-center md:text-right">
                © 2025 Arjostore. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
