const Security = () => {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Segurança</h1>
          <p className="text-gray-600 text-lg">
            Sua segurança é nossa prioridade. Conheça as medidas que implementamos para proteger seus dados
          </p>
        </div>

        <div className="prose prose-lg max-w-none space-y-8">
          <section className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Criptografia SSL/TLS</h2>
            <p className="text-gray-700 leading-relaxed">
              Todo o nosso site utiliza criptografia SSL/TLS (Secure Sockets Layer/Transport Layer Security), 
              garantindo que todas as informações transmitidas entre seu navegador e nossos servidores estejam 
              protegidas e criptografadas. Você pode verificar isso pelo ícone de cadeado na barra de endereços 
              do seu navegador.
            </p>
          </section>

          <section className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Processamento Seguro de Pagamentos</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Trabalhamos apenas com processadores de pagamento certificados e em conformidade com os padrões 
              internacionais de segurança:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>PCI DSS:</strong> Conformidade com o padrão de segurança de dados da indústria de cartões de pagamento</li>
              <li><strong>Tokenização:</strong> Dados sensíveis são substituídos por tokens seguros</li>
              <li><strong>Não armazenamos:</strong> Informações completas de cartão de crédito em nossos servidores</li>
            </ul>
          </section>

          <section className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Proteção de Dados Pessoais</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Implementamos várias camadas de proteção para seus dados pessoais:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Armazenamento seguro em servidores protegidos</li>
              <li>Controles de acesso rigorosos</li>
              <li>Monitoramento contínuo de segurança</li>
              <li>Backups regulares e seguros</li>
              <li>Conformidade com a LGPD (Lei Geral de Proteção de Dados)</li>
            </ul>
          </section>

          <section className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Autenticação de Conta</h2>
            <p className="text-gray-700 leading-relaxed">
              Suas credenciais de login são protegidas através de:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mt-4">
              <li>Senhas criptografadas usando algoritmos seguros</li>
              <li>Verificação de e-mail para criação de conta</li>
              <li>Opção de recuperação segura de senha</li>
              <li>Proteção contra tentativas de login não autorizadas</li>
            </ul>
          </section>

          <section className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Monitoramento e Prevenção de Fraudes</h2>
            <p className="text-gray-700 leading-relaxed">
              Utilizamos sistemas avançados de monitoramento para detectar e prevenir atividades fraudulentas, 
              incluindo análise de padrões de compra, verificação de identidade e alertas de segurança em tempo real.
            </p>
          </section>

          <section className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Atualizações de Segurança</h2>
            <p className="text-gray-700 leading-relaxed">
              Mantemos nossos sistemas atualizados com as últimas correções de segurança e patches, garantindo 
              proteção contra vulnerabilidades conhecidas.
            </p>
          </section>

          <section className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Como Você Pode Ajudar</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Você também desempenha um papel importante na segurança:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Use senhas fortes e únicas</li>
              <li>Não compartilhe suas credenciais de login</li>
              <li>Faça logout ao usar computadores compartilhados</li>
              <li>Mantenha seu navegador e sistema operacional atualizados</li>
              <li>Desconfie de e-mails suspeitos que pareçam ser da Arjostore</li>
              <li>Verifique sempre a URL do site antes de inserir informações</li>
            </ul>
          </section>

          <section className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Relatório de Problemas de Segurança</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Se você descobrir uma vulnerabilidade de segurança ou suspeitar de atividade fraudulenta, 
              entre em contato conosco imediatamente:
            </p>
            <div className="bg-white p-4 rounded border border-gray-200">
              <p className="mb-2"><strong>E-mail de Segurança:</strong> security@arjostore.com.br</p>
              <p className="mb-2"><strong>Telefone:</strong> (71) 99999-9999</p>
              <p className="text-sm text-gray-600">
                Por favor, forneça o máximo de detalhes possível para que possamos investigar e resolver o problema rapidamente.
              </p>
            </div>
          </section>

          <section className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Certificações e Conformidade</h2>
            <p className="text-gray-700 leading-relaxed">
              Estamos comprometidos em manter os mais altos padrões de segurança e conformidade, incluindo:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mt-4">
              <li>LGPD (Lei Geral de Proteção de Dados)</li>
              <li>PCI DSS (Payment Card Industry Data Security Standard)</li>
              <li>Boas práticas de segurança da informação</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Security;

