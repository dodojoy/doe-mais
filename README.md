# DOE+ 📦

**DOE+** é um aplicativo mobile desenvolvido com **React Native** e **Expo** que conecta pessoas que querem doar com quem precisa de doações. O app facilita a localização de pontos de doação próximos e permite gerenciar solicitações de forma prática e eficiente.

## 🚀 Tecnologias Utilizadas

- **React Native** - Framework para desenvolvimento mobile
- **Expo** - Plataforma de desenvolvimento e build
- **Expo Router** - Sistema de navegação baseado em arquivos
- **NativeWind** - Tailwind CSS para React Native
- **React Native Bottom Tabs** - Navegação em tabs nativas
- **TypeScript** - Tipagem estática
- **MaterialCommunityIcons** - Biblioteca de ícones

## 🎨 Design System

### Cores Principais
- **Verde Principal**: `#699636` (`green-main`)
- **Verde Escuro**: `#386641` (`green-dark`)
- **Verde Claro**: `#A7C957` (`green-light`)
- **Branco**: `#F5F5F5` (`white`)
- **Preto**: `#333333` (`black`)
- **Bege**: `#F2E8CF` (`beige`)
- **Laranja**: `#E36C33` (`orange`)
- **Vermelho**: `#E36C33` (`red`)

### Fonte
- **Poppins** - Fonte principal do aplicativo

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (versão 18 ou superior)
- **npm** ou **yarn**
- **Expo CLI**: `npm install -g @expo/cli`
- **Git**

### Para desenvolvimento mobile:
- **Expo Go** (no celular) ou
- **Android Studio** (para emulador Android) ou
- **Xcode** (para simulador iOS - apenas macOS)

## 🛠️ Instalação e Configuração

### 1. Clone o repositório
```bash
git clone [URL_DO_REPOSITORIO]
cd doe-mais
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Configure as fontes (se necessário)
```bash
npx expo install expo-font @expo-google-fonts/poppins
```

### 4. Inicie o servidor de desenvolvimento
```bash
npx expo start
```

### 5. Abra o app
- **Expo Go**: Escaneie o QR code no terminal
- **Emulador Android**: Pressione `a` no terminal
- **Simulador iOS**: Pressione `i` no terminal
- **Web**: Pressione `w` no terminal

## 📁 Estrutura do Projeto

```
doe-mais/
├── app/                    # Rotas da aplicação (Expo Router)
│   ├── (tabs)/            # Rotas com tabs
│   │   ├── index.tsx      # Tela Início
│   │   ├── mapa.tsx       # Tela Mapa
│   │   ├── doacoes.tsx    # Tela Doações
│   │   ├── solicitacoes.tsx # Tela Solicitações
│   │   └── perfil.tsx     # Tela Perfil
│   ├── _layout.tsx        # Layout raiz
│   ├── index.tsx          # Tela inicial (Login/Registro)
│   ├── login.tsx          # Tela de Login
│   ├── register.tsx       # Tela de Registro
│   ├── forgot-password.tsx # Tela de Recuperação de Senha
│   └── pontos-doacao.tsx  # Tela de Pontos de Doação
├── components/            # Componentes reutilizáveis
├── styles/               # Estilos globais
│   └── global.css        # CSS global do NativeWind
├── assets/               # Recursos estáticos (imagens, ícones)
├── tailwind.config.js    # Configuração do Tailwind/NativeWind
├── metro.config.js       # Configuração do Metro (bundler)
└── babel.config.js       # Configuração do Babel
```

## ⚙️ Configurações Importantes

### NativeWind (Tailwind CSS)
O projeto usa **NativeWind** para estilização. As configurações estão em:
- `tailwind.config.js` - Cores personalizadas e configurações
- `styles/global.css` - Estilos globais
- `metro.config.js` - Configuração do bundler

### Navegação
- **Expo Router** para navegação baseada em arquivos
- **Bottom Tabs** nativas para navegação principal
- Headers desabilitados por padrão (`headerShown: false`)

## 🎯 Funcionalidades

### Implementadas
- [x] Tela inicial com opções de Login/Registro
- [x] Sistema de autenticação (Login, Registro, Recuperação de senha)
- [x] Navegação em tabs com ícones personalizados
- [x] Tela de pontos de doação próximos
- [x] Design system com cores personalizadas
- [x] Fonte Poppins configurada globalmente

### Em Desenvolvimento
- [ ] Integração com backend
- [ ] Mapas interativos
- [ ] Sistema de notificações
- [ ] Perfil do usuário
- [ ] Filtros de doação

## 🔧 Scripts Disponíveis

```bash
# Iniciar o servidor de desenvolvimento
npm start

# Executar no Android
npm run android

# Executar no iOS
npm run ios

# Executar na Web
npm run web

# Linting
npm run lint

# Reset do projeto
npm run reset-project
```

## 🤝 Como Contribuir

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feat/nova-feature`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feat/nova-feature`)
5. Abra um Pull Request

## 📱 Testando o App

### No dispositivo físico:
1. Instale o **Expo Go** na Play Store/App Store
2. Execute `npx expo start`
3. Escaneie o QR code com o Expo Go

### No emulador:
1. Configure o Android Studio ou Xcode
2. Execute `npx expo start`
3. Pressione `a` (Android) ou `i` (iOS)

## 🐛 Resolução de Problemas

### NativeWind não está funcionando:
```bash
# Limpe o cache e reinicie
npx expo start --clear
```

### Erro de dependências:
```bash
# Remova node_modules e reinstale
rm -rf node_modules
npm install
```

### Problemas com Metro:
```bash
# Reset do Metro cache
npx expo start --clear
```

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

**Desenvolvido com ❤️ para conectar pessoas através da solidariedade**
