import { useState } from 'react';
import toast from 'react-hot-toast';

const Careers = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    resume: '',
    coverLetter: '',
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success('Candidatura enviada com sucesso! Entraremos em contato em breve.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        position: '',
        resume: '',
        coverLetter: '',
      });
    } catch (error) {
      toast.error('Erro ao enviar candidatura. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const positions = [
    'Vendedor(a) de Perfumes',
    'Atendente de Loja',
    'Analista de E-commerce',
    'Gerente de Marketing',
    'Assistente de Logística',
    'Desenvolvedor Web',
    'Designer Gráfico',
    'Outro',
  ];

  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Trabalhe Conosco</h1>
          <p className="text-gray-600 text-lg">
            Faça parte da equipe Arjostore e ajude-nos a levar fragrâncias incríveis para todo o Brasil
          </p>
        </div>

        <div className="space-y-8 mb-12">
          <section>
            <h2 className="text-2xl font-bold mb-4">Por Que Trabalhar na Arjostore?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Ambiente Inovador</h3>
                <p className="text-gray-700">
                  Trabalhamos com as últimas tecnologias e tendências do mercado de perfumaria, 
                  oferecendo um ambiente dinâmico e inovador.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Crescimento Profissional</h3>
                <p className="text-gray-700">
                  Investimos no desenvolvimento de nossos colaboradores através de treinamentos, 
                  capacitações e oportunidades de crescimento.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Benefícios Competitivos</h3>
                <p className="text-gray-700">
                  Oferecemos pacote de benefícios completo, incluindo vale-refeição, plano de saúde, 
                  descontos em produtos e muito mais.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Cultura Colaborativa</h3>
                <p className="text-gray-700">
                  Valorizamos o trabalho em equipe, a comunicação aberta e um ambiente onde todos 
                  podem contribuir e fazer a diferença.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Vagas Disponíveis</h2>
            <div className="space-y-4">
              {positions.map((position, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-black transition">
                  <h3 className="text-lg font-semibold mb-2">{position}</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Estamos sempre em busca de talentos para fazer parte da nossa equipe. 
                    Envie seu currículo mesmo que não haja uma vaga específica aberta.
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Formulário de Candidatura */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Envie Seu Currículo</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Nome Completo *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Telefone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(00) 00000-0000"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
            </div>

            <div>
              <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">
                Cargo de Interesse *
              </label>
              <select
                id="position"
                name="position"
                required
                value={formData.position}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
              >
                <option value="">Selecione uma vaga</option>
                {positions.map((pos, index) => (
                  <option key={index} value={pos}>{pos}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-1">
                Currículo (Link ou Texto) *
              </label>
              <textarea
                id="resume"
                name="resume"
                required
                rows={4}
                value={formData.resume}
                onChange={handleChange}
                placeholder="Cole aqui seu currículo ou forneça um link (LinkedIn, Google Drive, etc.)"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 mb-1">
                Carta de Apresentação
              </label>
              <textarea
                id="coverLetter"
                name="coverLetter"
                rows={6}
                value={formData.coverLetter}
                onChange={handleChange}
                placeholder="Conte-nos por que você gostaria de trabalhar na Arjostore..."
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white py-3 rounded font-semibold hover:bg-gray-800 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {loading ? 'Enviando...' : 'Enviar Candidatura'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Careers;

