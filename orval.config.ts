import { defineConfig } from 'orval';

export default defineConfig({
  // NOME PARA API (PODE SER QUALQUER UM, NOME DO PROJETO VAMOS DIZER ASSIM)
  api: {
    // URL ONDE ESTÁ A DOCUMENTAÇÃO DO SWAGGER
    input: 'http://localhost:3333/docs/json',
    output: {
      // ARQUIVO QUE VAI SER GERADO DE FORMA AUTOMÁTICA COM BASE NA DOCUMENTAÇÃO
      target: './src/http/api.ts',
      // QUAL LIB DE API VAI SER UTILIZADA
      client: 'fetch',
      httpClient: 'fetch',
      // QUANDO GERAR O ARQUIVO VAI APAGAR O ANTERIOR E ASSIM EVITA CONFLITOS
      clean: true,
      // URL DO BACK-END
      baseUrl: 'http://localhost:3333',

      /**
       * POR PADRÃO, SE UMA REQUISIÇÃO PODE DEVOLVER VÁRIOS CÓDIGOS
       * DE RESPOSTAS DIFERENTES, EXEMPLO: 200 PARA SUCESSO, 400 PARA ERRO,
       * 409 PARA UM ERRO DE CONFLITO ESPECÍFICO. GERALMENTE ELES RETORNAM
       * ESSES STATUS CODE JUNTOS. MAS SÓ QUEREMOS OS DADOS
       */
      override: {
        fetch: {
          includeHttpResponseReturnType: false,
        },
      },
    },
  },
});
