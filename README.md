# 🛡️ BRITO.ACCESS / academic-system
 
> **Sistemas de Autenticação de Alta Performance para EdTech**

O **BRITO.ACCESS** é uma solução de gerenciamento de acesso acadêmico desenvolvida com foco em engenharia de software e performance. O projeto utiliza tecnologias nativas para criar uma arquitetura modular, escalável e de fácil manutenção, servindo como um laboratório de alto nível para práticas de desenvolvimento profissional sob a metodologia da **BRITO.STUDIO**.

---

## ⚙️ Arquitetura e Engenharia

O projeto foi construído sob pilares de código limpo, eficiência técnica e gerenciamento de produto:

- **Framework-less Core:** Implementação total em **Vanilla JavaScript**, garantindo zero dependências externas pesadas e máxima velocidade de execução.
- **Validação com Just-Validate:** Integração da biblioteca **Just-validate** para garantir a integridade dos dados no client-side com feedback em tempo real e regras customizadas para o ambiente acadêmico.
- **CSS Modular:** Arquitetura de estilos segmentada para evitar conflitos e facilitar a escalabilidade visual em ambientes institucionais.
- **Gestão de Produto:** Fluxo de desenvolvimento baseado em gerenciamento de tarefas (Tasks) e entregas modulares (Sprints).
- **Semântica & UX:** Marcação HTML5 avançada para acessibilidade e fluxo de usuário otimizado para o perfil estudante.

---

## 🛠️ Stack Técnica

- **Lógica:** JavaScript (ES6+)
- **Validação:** Just-validate (Vanilla JS Library)
- **Interface:** CSS3 (Flexbox/Grid/Modules)
- **Estrutura:** HTML5 Semântico
- **Processos:** Metodologias Ágeis e Gestão de Tarefas
- **QA & Testing:** Cypress (End-to-End Automation)

---

## 🛡️ Camada de Validação (Just-validate)
Para elevar o padrão de UX e segurança, o sistema utiliza o **Just-validate** para:
- **UX Reativa:** Mensagens de erro instantâneas sem recarregar a página.
- **Custom Rules:** Validação específica para credenciais acadêmicas (como formatos de matrícula) e requisitos de complexidade de senha.
- **Performance:** Uma solução leve que mantém a filosofia de um sistema rápido e responsivo.

---

## 🚀 Roadmap de Evolução

- **Quality Assurance:** Integração de **Cypress** para automação de testes End-to-End, garantindo que o fluxo de login seja à prova de falhas.
- **Backend Integration:** Implementação de **Supabase** para persistência de dados, autenticação real e banco de dados em nuvem.
- **Micro-interações:** Refinamento de feedbacks visuais para estados de autenticação e carregamento.

---

## 🛠️ Como Clonar e Rodar o Projeto

```bash
# Clone o repositório
git clone https://github.com/Marceloa20/academic-system

# Acesse a pasta do projeto
cd academic-system

```

## 🧪 Qualidade e Automação (Cypress)

Para garantir a confiabilidade do sistema, implementamos uma camada de testes **End-to-End (E2E)** utilizando **Cypress**. Isso permite simular a jornada real do usuário e garantir que nenhuma alteração futura quebre as funcionalidades críticas.

### O que já foi testado:
  - Fluxo de Cadastro:  Verificação de presença de elementos essenciais na UI.
  - Alternância de visibilidade de senha (ícone de visualização).
  - Validação de formulário (bloqueio de envios inválidos).
  - Simulação de sucesso com preenchimento de credenciais fortes e exibição de feedback via SweetAlert2.

### Como instalar e rodar os testes:

1. **Instale as dependências:**
   Certifique-se de ter o Node.js instalado e rode:
   ```bash
   npm install
   ```
2. Abra a interface do Cypress:

 ```bash
 npx cypress open
 ```

## 🌿 Gerenciamento de Branches (Git Flow)
O projeto adota uma estratégia de versionamento para separar o ambiente de experimentação da linha de produção estável:

- main: Detém o código oficial e validado. É a branch principal voltada para o ambiente de produção.

- password-field-implementation: Branch dedicada a testes de interface, validações de lógica e rascunhos técnicos. Nela, validamos novas ideias antes do merge final.

Para navegar entre as branches e explorar as ideias em desenvolvimento:

```bash
# Para visualizar as branches disponíveis
git branch

# Para mudar para o ambiente de rascunhos/ideias
git checkout password-field-implementation

# Para retornar à versão principal
git checkout main

```

## 🚀 Como Visualizar

1. Clone o repositório.
2. Utilize o **Live Server** (ou ferramenta similar) para rodar o ambiente a partir do `index.html`.

---
<p align="center">
  <strong>BRITO.ACCESS</strong> — Engenharia e Gestão de Software.
</p>
