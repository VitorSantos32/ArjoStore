import { useState } from 'react';
import toast from 'react-hot-toast';

const Returns = () => {
  const [formData, setFormData] = useState({
    orderNumber: '',
    reason: '',
    description: '',
    returnType: 'devolucao',
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success('Solicitação de devolução/troca enviada com sucesso! Entraremos em contato em breve.');
      setFormData({
        orderNumber: '',
        reason: '',
        description: '',
        returnType: 'devolucao',
      });
    } catch (error) {
      toast.error('Erro ao enviar solicitação. Tente novamente.');
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

  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Política de Devolução e Troca</h1>
          <p className="text-gray-600 text-lg">
            Garantimos sua satisfação! Conheça nossa política de devolução e troca
          </p>
        </div>

        {/* Política */}
        <div className="mb-12 space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Prazo para Devolução/Troca</h2>
            <p className="text-gray-700 mb-4">
              Você tem até <strong>7 dias corridos</strong>, contados a partir da data de recebimento do produto, 
              para solicitar a devolução ou troca.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Condições para Devolução/Troca</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>O produto deve estar em perfeito estado, sem uso</li>
              <li>A embalagem original deve estar intacta</li>
              <li>O produto deve conter todos os acessórios e manuais</li>
              <li>A nota fiscal deve estar presente</li>
              <li>O produto não pode ter sido usado ou testado</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Como Solicitar Devolução/Troca</h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Preencha o formulário abaixo com os dados do pedido</li>
              <li>Selecione o motivo da devolução/troca</li>
              <li>Nossa equipe entrará em contato em até 48 horas</li>
              <li>Você receberá um código de postagem para envio do produto</li>
              <li>Após recebermos e analisarmos o produto, processaremos o reembolso ou troca</li>
            </ol>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Reembolso</h2>
            <p className="text-gray-700 mb-2">
              O reembolso será processado na mesma forma de pagamento utilizada na compra:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Cartão de Crédito:</strong> Estorno em até 2 faturas</li>
              <li><strong>PIX:</strong> Reembolso em até 5 dias úteis</li>
              <li><strong>Boleto:</strong> Reembolso em até 10 dias úteis</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Custos de Envio</h2>
            <p className="text-gray-700">
              O custo do frete de retorno é por conta do cliente, exceto em casos de produtos com defeito 
              ou envio incorreto por nossa parte.
            </p>
          </div>
        </div>

        {/* Formulário */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Solicitar Devolução/Troca</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="orderNumber" className="block text-sm font-medium text-gray-700 mb-1">
                Número do Pedido *
              </label>
              <input
                type="text"
                id="orderNumber"
                name="orderNumber"
                required
                value={formData.orderNumber}
                onChange={handleChange}
                placeholder="Ex: #12345"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
              />
              <p className="text-xs text-gray-500 mt-1">
                Encontre o número do pedido em <a href="/orders" className="text-black underline">Meus Pedidos</a>
              </p>
            </div>

            <div>
              <label htmlFor="returnType" className="block text-sm font-medium text-gray-700 mb-1">
                Tipo de Solicitação *
              </label>
              <select
                id="returnType"
                name="returnType"
                required
                value={formData.returnType}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
              >
                <option value="devolucao">Devolução (Reembolso)</option>
                <option value="troca">Troca por outro produto</option>
              </select>
            </div>

            <div>
              <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-1">
                Motivo *
              </label>
              <select
                id="reason"
                name="reason"
                required
                value={formData.reason}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
              >
                <option value="">Selecione o motivo</option>
                <option value="defeito">Produto com defeito</option>
                <option value="errado">Produto diferente do pedido</option>
                <option value="tamanho">Tamanho incorreto</option>
                <option value="arrependimento">Arrependimento da compra</option>
                <option value="outro">Outro motivo</option>
              </select>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                Descrição Detalhada *
              </label>
              <textarea
                id="description"
                name="description"
                required
                rows={6}
                value={formData.description}
                onChange={handleChange}
                placeholder="Descreva detalhadamente o motivo da devolução/troca..."
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white py-3 rounded font-semibold hover:bg-gray-800 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {loading ? 'Enviando...' : 'Enviar Solicitação'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Returns;

