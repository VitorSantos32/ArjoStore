const FirebaseError = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
            <svg
              className="h-6 w-6 text-red-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Firebase não configurado
          </h1>
          <p className="text-gray-600 mb-6">
            Por favor, configure as variáveis de ambiente do Firebase.
          </p>
          <div className="bg-gray-50 rounded-lg p-4 text-left">
            <p className="text-sm font-semibold text-gray-700 mb-2">
              Passos para configurar:
            </p>
            <ol className="list-decimal list-inside text-sm text-gray-600 space-y-1">
              <li>Crie um arquivo <code className="bg-gray-200 px-1 rounded">.env</code> na pasta <code className="bg-gray-200 px-1 rounded">frontend</code></li>
              <li>Adicione as credenciais do Firebase (veja <code className="bg-gray-200 px-1 rounded">.env.example</code>)</li>
              <li>Reinicie o servidor de desenvolvimento</li>
            </ol>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            Verifique o console do navegador para mais detalhes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FirebaseError;

