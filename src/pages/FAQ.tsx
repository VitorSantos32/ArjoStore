import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: 'Como faço para comprar um perfume?',
      answer: 'Para comprar um perfume, navegue pela nossa loja, escolha o produto desejado, adicione ao carrinho e finalize a compra. Você precisará criar uma conta ou fazer login para completar o pedido.'
    },
    {
      question: 'Quais são as formas de pagamento aceitas?',
      answer: 'Aceitamos cartões de crédito (Visa, Mastercard, Elo, Amex), cartões de débito, PIX e boleto bancário. Todos os pagamentos são processados de forma segura.'
    },
    {
      question: 'Qual o prazo de entrega?',
      answer: 'O prazo de entrega varia conforme a região. Em média, o envio leva de 5 a 10 dias úteis após a confirmação do pagamento. Você receberá um código de rastreamento por e-mail assim que o pedido for enviado.'
    },
    {
      question: 'Como rastrear meu pedido?',
      answer: 'Após a confirmação do pagamento e envio do pedido, você receberá um e-mail com o código de rastreamento. Você também pode acompanhar seu pedido na área "Meus Pedidos" após fazer login em sua conta.'
    },
    {
      question: 'Posso trocar ou devolver um produto?',
      answer: 'Sim! Você tem até 7 dias corridos após o recebimento do produto para solicitar a troca ou devolução, desde que o produto esteja em perfeito estado, com a embalagem original e nota fiscal. Consulte nossa política de devolução completa na página "Devoluções".'
    },
    {
      question: 'Os perfumes são originais?',
      answer: 'Sim, todos os nossos perfumes são 100% originais e importados diretamente dos fabricantes ou distribuidores autorizados. Garantimos a autenticidade de todos os produtos.'
    },
    {
      question: 'Como escolher o perfume ideal?',
      answer: 'Considere suas preferências pessoais, ocasião de uso e família olfativa (floral, amadeirado, oriental, cítrico). Leia as descrições dos produtos e, se possível, teste antes de comprar. Nossa equipe também está disponível para ajudar!'
    },
    {
      question: 'O que fazer se o produto chegar danificado?',
      answer: 'Se o produto chegar danificado, entre em contato conosco imediatamente através do e-mail suporte@arjostore.com.br ou pelo formulário "Fale Conosco". Envie fotos do produto e da embalagem. Faremos a troca ou reembolso sem custos adicionais.'
    },
    {
      question: 'Há frete grátis?',
      answer: 'Sim! Oferecemos frete grátis para compras acima de R$ 349,00 em todo o Brasil. Para valores menores, o frete é calculado automaticamente no checkout.'
    },
    {
      question: 'Como atualizar meus dados cadastrais?',
      answer: 'Faça login em sua conta e acesse "Minha Conta". Lá você poderá atualizar seus dados pessoais, endereço de entrega e alterar sua senha.'
    },
    {
      question: 'Esqueci minha senha. Como recuperar?',
      answer: 'Na página de login, clique em "Esqueci minha senha" e informe o e-mail cadastrado. Você receberá um link para redefinir sua senha.'
    },
    {
      question: 'Vocês fazem entregas para todo o Brasil?',
      answer: 'Sim, entregamos para todo o território nacional. Os prazos e valores de frete variam conforme a região. Consulte o valor do frete no carrinho de compras antes de finalizar o pedido.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Perguntas Frequentes</h1>
          <p className="text-gray-600 text-lg">
            Encontre respostas para as dúvidas mais comuns sobre nossos produtos e serviços
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-gray-600 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gray-50 p-6 rounded-lg text-center">
          <h2 className="text-xl font-bold mb-2">Não encontrou o que procurava?</h2>
          <p className="text-gray-600 mb-4">
            Nossa equipe está pronta para ajudar você!
          </p>
          <a
            href="/contact"
            className="inline-block bg-black text-white px-6 py-3 rounded font-semibold hover:bg-gray-800 transition-colors"
          >
            Fale Conosco
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;

