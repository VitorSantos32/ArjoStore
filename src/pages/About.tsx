const About = () => {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sobre Nós</h1>
          <p className="text-gray-600 text-lg">
            Conheça a história da Arjostore e nossa paixão por fragrâncias
          </p>
        </div>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-3xl font-bold mb-4">Nossa História</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              A Arjostore nasceu da paixão por perfumes importados e do desejo de oferecer aos brasileiros 
              acesso a fragrâncias exclusivas e autênticas de todo o mundo. Fundada em Salvador, Bahia, 
              nossa loja se tornou referência em perfumaria premium.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Com anos de experiência no mercado, selecionamos cuidadosamente cada produto, garantindo 
              autenticidade, qualidade e a melhor experiência de compra para nossos clientes.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Nossa Missão</h2>
            <p className="text-gray-700 leading-relaxed">
              Oferecer perfumes importados autênticos, proporcionando uma experiência única de compra 
              e ajudando nossos clientes a encontrarem a fragrância perfeita que expressa sua personalidade 
              e eleva sua presença.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Nossos Valores</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Autenticidade:</strong> Garantimos que todos os produtos são 100% originais</li>
              <li><strong>Qualidade:</strong> Selecionamos apenas as melhores fragrâncias do mercado</li>
              <li><strong>Atendimento:</strong> Priorizamos a satisfação e experiência do cliente</li>
              <li><strong>Transparência:</strong> Comunicação clara e honesta em todas as etapas</li>
              <li><strong>Inovação:</strong> Sempre em busca das últimas tendências e lançamentos</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Por Que Escolher a Arjostore?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Produtos Autênticos</h3>
                <p className="text-gray-700">
                  Todos os nossos perfumes são importados diretamente dos fabricantes ou distribuidores autorizados, 
                  garantindo 100% de autenticidade.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Variedade Premium</h3>
                <p className="text-gray-700">
                  Oferecemos uma ampla seleção de perfumes importados das principais marcas internacionais, 
                  incluindo lançamentos exclusivos.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Atendimento Personalizado</h3>
                <p className="text-gray-700">
                  Nossa equipe está sempre pronta para ajudar você a encontrar o perfume ideal, 
                  oferecendo orientação especializada.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Entrega Segura</h3>
                <p className="text-gray-700">
                  Embalagem especial para garantir que seus perfumes cheguem em perfeito estado, 
                  com rastreamento em tempo real.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Nossa Localização</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Estamos localizados em Salvador, Bahia, mas atendemos todo o Brasil através de nossa 
              plataforma online. Nossa equipe está sempre disponível para atender você, seja presencialmente 
              ou através dos nossos canais digitais.
            </p>
          </section>

          <section className="bg-gray-50 p-6 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Entre em Contato</h2>
            <p className="text-gray-700 mb-4">
              Tem alguma dúvida ou sugestão? Estamos sempre abertos para conversar!
            </p>
            <a
              href="/contact"
              className="inline-block bg-black text-white px-6 py-3 rounded font-semibold hover:bg-gray-800 transition-colors"
            >
              Fale Conosco
            </a>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;

