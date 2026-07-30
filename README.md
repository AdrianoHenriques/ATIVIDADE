# ViaCEP React Native App

## Objetivo

Aplicativo React Native em TypeScript para buscar informações de endereço a partir de um CEP utilizando a API pública ViaCEP.

## Tecnologias

- React Native
- TypeScript
- Axios
- ActivityIndicator
- Hooks (useState)
- Componentização

## Instalação

1. Clone o repositório.
2. Execute `npm install`.

## Execução

- Iniciar Expo: `npm start`
- Executar no Android: `npm run android`
- Executar no iOS: `npm run ios`

## Estrutura

```
src/
│
├── components/
│   └── AddressInfo/
│       ├── index.tsx
│       └── styles.ts
│
├── screens/
│   └── Home/
│       ├── index.tsx
│       └── styles.ts
│
├── services/
│   └── api.ts
│
├── types/
│   └── cep.ts
│
└── App.tsx
```

## Funcionamento

- O campo de CEP aceita apenas números e limita a entrada a 8 dígitos.
- O botão de busca só funciona quando não há uma requisição em andamento.
- Enquanto a API responde, um `ActivityIndicator` é exibido.
- Se o CEP for inválido ou não encontrado, o app mostra um alerta.
- Os dados do endereço são exibidos em um componente separado `AddressInfo`.

## Histórico de commits sugerido

- feat: estrutura inicial do projeto
- feat: integração com API ViaCEP usando Axios
- feat: componente AddressInfo
- style: separação dos estilos
- fix: tratamento de erros da API
- docs: adiciona README
