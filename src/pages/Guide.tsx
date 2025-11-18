const Guide = () => {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Guia de Compras</h1>
          <p className="text-gray-600 text-lg">
            Tudo que você precisa saber para escolher o perfume perfeito
          </p>
        </div>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-3xl font-bold mb-4">Famílias Olfativas</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Os perfumes são classificados em famílias olfativas baseadas nas notas dominantes. 
              Conhecer essas famílias ajuda a encontrar perfumes que combinam com seu gosto pessoal.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Floral</h3>
                <p className="text-gray-700 mb-2">
                  Perfumes delicados e românticos com notas de flores como rosa, jasmim, lavanda e lírio.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Ideal para:</strong> Dia a dia, ocasiões românticas, personalidades delicadas
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Amadeirado</h3>
                <p className="text-gray-700 mb-2">
                  Fragrâncias elegantes e marcantes com notas de madeiras como sândalo, cedro e patchouli.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Ideal para:</strong> Eventos formais, noite, personalidades sofisticadas
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Oriental</h3>
                <p className="text-gray-700 mb-2">
                  Perfumes intensos e envolventes com notas de baunilha, âmbar, especiarias e incenso.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Ideal para:</strong> Noite, inverno, personalidades marcantes
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Cítrico</h3>
                <p className="text-gray-700 mb-2">
                  Fragrâncias frescas e energizantes com notas de limão, laranja, bergamota e grapefruit.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Ideal para:</strong> Dia, verão, personalidades ativas e descontraídas
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Como Escolher o Perfume Ideal</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">1. Considere a Ocasião</h3>
                <p className="text-gray-700 leading-relaxed">
                  Perfumes mais leves e frescos são ideais para o dia a dia e trabalho. 
                  Fragrâncias mais intensas e marcantes funcionam melhor para eventos noturnos e ocasiões especiais.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">2. Pense na Estação</h3>
                <p className="text-gray-700 leading-relaxed">
                  No verão, prefira perfumes mais leves e cítricos. No inverno, fragrâncias mais intensas 
                  e amadeiradas tendem a funcionar melhor, pois o calor corporal ajuda a projetar o aroma.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">3. Teste na Pele</h3>
                <p className="text-gray-700 leading-relaxed">
                  O perfume reage com a química natural da sua pele, então o mesmo perfume pode cheirar 
                  diferente em pessoas diferentes. Sempre teste na pele e espere alguns minutos para sentir 
                  a evolução do aroma.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">4. Conheça as Notas</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  Os perfumes têm três camadas de notas:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li><strong>Notas de Saída (Top):</strong> Primeira impressão, duram 5-15 minutos</li>
                  <li><strong>Notas de Coração (Middle):</strong> Aroma principal, duram 2-4 horas</li>
                  <li><strong>Notas de Fundo (Base):</strong> Aroma que permanece, pode durar o dia todo</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Dicas de Aplicação</h2>
            
            <div className="bg-gray-50 p-6 rounded-lg space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Pontos de Pulso</h3>
                <p className="text-gray-700">
                  Aplique nos pontos onde há pulsação: pulsos, pescoço, atrás das orelhas. 
                  O calor dessas áreas ajuda a projetar o aroma.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Quantidade</h3>
                <p className="text-gray-700">
                  Menos é mais! 2-3 borrifadas são suficientes. Perfumes muito fortes podem ser 
                  desconfortáveis para quem está ao seu redor.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Não Esfregue</h3>
                <p className="text-gray-700">
                  Após aplicar, não esfregue os pulsos. Isso pode quebrar as moléculas do perfume 
                  e alterar o aroma.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Armazenamento</h3>
                <p className="text-gray-700">
                  Mantenha seus perfumes em local fresco, seco e longe da luz direta do sol. 
                  Isso preserva a qualidade e durabilidade do produto.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Concentrações de Perfume</h2>
            
            <div className="space-y-4">
              <div className="border-l-4 border-black pl-4">
                <h3 className="text-lg font-semibold mb-1">Eau de Parfum (EDP)</h3>
                <p className="text-gray-700">
                  Concentração de 15-20% de essência. Duração de 4-6 horas. Ideal para uso diário.
                </p>
              </div>

              <div className="border-l-4 border-gray-400 pl-4">
                <h3 className="text-lg font-semibold mb-1">Eau de Toilette (EDT)</h3>
                <p className="text-gray-700">
                  Concentração de 5-15% de essência. Duração de 2-4 horas. Mais leve e refrescante.
                </p>
              </div>

              <div className="border-l-4 border-gray-400 pl-4">
                <h3 className="text-lg font-semibold mb-1">Eau de Cologne (EDC)</h3>
                <p className="text-gray-700">
                  Concentração de 2-5% de essência. Duração de 1-2 horas. Muito leve e refrescante.
                </p>
              </div>

              <div className="border-l-4 border-black pl-4">
                <h3 className="text-lg font-semibold mb-1">Parfum / Extrait</h3>
                <p className="text-gray-700">
                  Concentração de 20-30% de essência. Duração de 6-8 horas ou mais. Mais intenso e duradouro.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Perguntas Frequentes</h2>
            
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Por que o perfume cheira diferente em mim?</h3>
                <p className="text-gray-700 text-sm">
                  Cada pessoa tem uma química única da pele (pH, temperatura, umidade) que interage 
                  com o perfume, criando um aroma personalizado.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Quanto tempo dura um perfume?</h3>
                <p className="text-gray-700 text-sm">
                  Depende da concentração e da química da sua pele. Em média, EDP dura 4-6 horas, 
                  enquanto Parfum pode durar 8 horas ou mais.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Posso usar perfume masculino sendo mulher (e vice-versa)?</h3>
                <p className="text-gray-700 text-sm">
                  Claro! Não há regras rígidas. Use o perfume que você gosta, independente da classificação. 
                  Muitos perfumes são unissex e funcionam bem para todos.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-gray-50 p-6 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Precisa de Mais Ajuda?</h2>
            <p className="text-gray-700 mb-4">
              Nossa equipe está pronta para ajudá-lo a encontrar o perfume perfeito!
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

export default Guide;

