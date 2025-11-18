const Privacy = () => {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Política de Privacidade</h1>
          <p className="text-gray-600">Última atualização: Janeiro de 2025</p>
        </div>

        <div className="prose prose-lg max-w-none space-y-8 text-gray-700">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">1. Introdução</h2>
            <p className="leading-relaxed">
              A Arjostore está comprometida em proteger a privacidade e os dados pessoais de nossos clientes. 
              Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas 
              informações pessoais quando você utiliza nosso site e serviços.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">2. Informações que Coletamos</h2>
            <h3 className="text-xl font-semibold mb-2">2.1. Informações Fornecidas por Você</h3>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Nome completo</li>
              <li>Endereço de e-mail</li>
              <li>Número de telefone</li>
              <li>Endereço de entrega e faturamento</li>
              <li>Informações de pagamento (processadas de forma segura)</li>
              <li>Histórico de compras</li>
            </ul>
            <h3 className="text-xl font-semibold mb-2">2.2. Informações Coletadas Automaticamente</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Endereço IP</li>
              <li>Tipo de navegador e dispositivo</li>
              <li>Páginas visitadas e tempo de permanência</li>
              <li>Cookies e tecnologias similares</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">3. Como Usamos Suas Informações</h2>
            <p className="leading-relaxed mb-4">Utilizamos suas informações pessoais para:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Processar e entregar seus pedidos</li>
              <li>Comunicar sobre status de pedidos e atualizações</li>
              <li>Enviar informações sobre produtos, promoções e novidades (com seu consentimento)</li>
              <li>Melhorar nossos produtos e serviços</li>
              <li>Prevenir fraudes e garantir a segurança</li>
              <li>Cumprir obrigações legais</li>
              <li>Personalizar sua experiência de compra</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">4. Compartilhamento de Informações</h2>
            <p className="leading-relaxed mb-4">
              Não vendemos suas informações pessoais. Podemos compartilhar seus dados apenas com:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Prestadores de serviços:</strong> Empresas que nos ajudam a operar nosso negócio (processamento de pagamento, entrega, etc.)</li>
              <li><strong>Autoridades legais:</strong> Quando exigido por lei ou para proteger nossos direitos</li>
              <li><strong>Com seu consentimento:</strong> Em outras situações, apenas com sua autorização explícita</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">5. Segurança dos Dados</h2>
            <p className="leading-relaxed">
              Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações 
              pessoais contra acesso não autorizado, alteração, divulgação ou destruição. Utilizamos 
              criptografia SSL/TLS para transmissão de dados e armazenamento seguro.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">6. Cookies</h2>
            <p className="leading-relaxed mb-4">
              Utilizamos cookies e tecnologias similares para melhorar sua experiência, analisar o uso do site 
              e personalizar conteúdo. Você pode gerenciar suas preferências de cookies através das configurações 
              do seu navegador.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">7. Seus Direitos</h2>
            <p className="leading-relaxed mb-4">Você tem o direito de:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Acessar suas informações pessoais</li>
              <li>Corrigir dados incorretos ou incompletos</li>
              <li>Solicitar a exclusão de seus dados</li>
              <li>Revogar consentimento para processamento de dados</li>
              <li>Opor-se ao processamento de seus dados</li>
              <li>Solicitar portabilidade dos dados</li>
            </ul>
            <p className="leading-relaxed mt-4">
              Para exercer esses direitos, entre em contato conosco através do e-mail: 
              <a href="mailto:privacidade@arjostore.com.br" className="text-black underline ml-1">
                privacidade@arjostore.com.br
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">8. Retenção de Dados</h2>
            <p className="leading-relaxed">
              Mantemos suas informações pessoais apenas pelo tempo necessário para cumprir os propósitos 
              descritos nesta política, a menos que um período de retenção mais longo seja exigido ou 
              permitido por lei.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">9. Alterações nesta Política</h2>
            <p className="leading-relaxed">
              Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos sobre mudanças 
              significativas através do nosso site ou por e-mail. Recomendamos revisar esta política 
              regularmente.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">10. Contato</h2>
            <p className="leading-relaxed">
              Se você tiver dúvidas sobre esta Política de Privacidade ou sobre como tratamos seus dados pessoais, 
              entre em contato conosco:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mt-4">
              <p className="mb-2"><strong>E-mail:</strong> privacidade@arjostore.com.br</p>
              <p className="mb-2"><strong>Telefone:</strong> (71) 99999-9999</p>
              <p><strong>Endereço:</strong> Salvador, BA, Brasil</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;

