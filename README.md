# 🧠 Gerador de Flashcards para NotebookLM

Ferramenta web para gerar prompts otimizados que criam flashcards baseados em **repetição espaçada** no Google NotebookLM. Desenvolvido especialmente para estudantes que desejam maximizar a retenção de longo prazo de seus materiais de estudo.

![Interface do Gerador](https://img.shields.io/badge/React-18.x-blue?style=flat-square&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-38B2AC?style=flat-square&logo=tailwind-css)
![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)

## 📋 Índice

- [Sobre](#sobre)
- [Funcionalidades](#funcionalidades)
- [Modalidades de Estudo](#modalidades-de-estudo)
- [Fundamentos Científicos](#fundamentos-científicos)
- [Como Usar](#como-usar)
- [Instalação Local](#instalação-local)
- [Tecnologias](#tecnologias)
- [Contribuindo](#contribuindo)
- [Licença](#licença)

## 🎯 Sobre

Este gerador cria prompts especializados para o [Google NotebookLM](https://notebooklm.google.com/) que produzem flashcards fundamentados em **princípios neurocientíficos de repetição espaçada**. 

### Por que usar este gerador?

- ✅ **Flashcards baseados em ciência**: Incorpora 4 princípios fundamentais de repetição espaçada
- ✅ **Contextualização profunda**: Cada flashcard é auto-suficiente, eliminando necessidade de consultar fontes
- ✅ **Recuperação ativa otimizada**: Promove esforço cognitivo para consolidação de memória
- ✅ **Detecção de fraquezas**: Foca em distinções sutis que geram confusão
- ✅ **Compatibilidade NotebookLM**: Formatos otimizados para os recursos da ferramenta

## ✨ Funcionalidades

### 6 Modalidades Especializadas

Cada modalidade tem distribuição percentual específica de tipos de cartões:

1. **📚 Conceitual** - Para definições, terminologia e fundamentos teóricos
2. **🎯 Prático** - Procedimentos, métodos e casos práticos
3. **🧠 Analítico** - Comparações, análises críticas e pensamento crítico
4. **⚡ Memorização** - Fatos, datas, dados quantitativos
5. **💻 Interdisciplinar** - Para humanistas aprendendo programação/matemática (com analogias)
6. **📖 Livro Técnico Denso** - Otimizado para materiais extensos (300+ páginas)

### Interface Intuitiva

- Design Material inspirado no Google
- Seleção visual de modalidades
- Campos para tema e foco específico
- Geração instantânea de prompt
- Cópia com um clique
- Contador de caracteres do prompt gerado

## 🎓 Modalidades de Estudo

### 📚 Conceitual
**Ideal para**: Filosofia, Teoria Política, Conceitos Abstratos

**Distribuição**:
- 40% Definições contextualizadas
- 25% Exemplos ilustrativos
- 20% Distinções conceituais
- 15% Aplicações básicas

**Exemplo de uso**: Estudar teorias filosóficas, conceitos de ciências sociais, terminologia acadêmica.

---

### 🎯 Prático
**Ideal para**: Programação, Métodos de Pesquisa, Análise de Dados

**Distribuição**:
- 35% Procedimentos passo-a-passo
- 30% Exemplos práticos
- 20% Erros comuns
- 15% Verificação de resultados

**Exemplo de uso**: Aprender algoritmos, protocolos de laboratório, técnicas estatísticas.

---

### 🧠 Analítico
**Ideal para**: Análise Literária, Teoria Crítica, Epistemologia

**Distribuição**:
- 30% Comparações estruturadas
- 25% Análises críticas
- 25% Critérios de avaliação
- 20% Interpretação contextual

**Exemplo de uso**: Estudar escolas filosóficas, correntes literárias, metodologias de pesquisa.

---

### ⚡ Memorização
**Ideal para**: Datas Históricas, Terminologia Técnica, Fórmulas

**Distribuição**:
- 40% Fatos essenciais
- 20% Datas e cronologia
- 20% Nomes e autores
- 20% Dados quantitativos

**Exemplo de uso**: Memorizar eventos históricos, fórmulas matemáticas, nomenclatura científica.

---

### 💻 Interdisciplinar
**Ideal para**: Algoritmos para humanistas, Lógica Formal, Estatística

**Distribuição**:
- 35% Conceitos-ponte (conexões entre áreas)
- 25% Analogias com humanidades
- 20% Notação e sintaxe
- 20% Aplicações práticas

**Exemplo de uso**: Estudante de filosofia aprendendo programação, historiador usando análise quantitativa, linguista estudando processamento de linguagem natural.

**Diferencial**: Explica conceitos técnicos usando analogias literárias, filosóficas e linguísticas.

---

### 📖 Livro Técnico Denso
**Ideal para**: Manuais Técnicos, Tratados Teóricos, Monografias (300+ páginas)

**Distribuição**:
- 45% Definições auto-suficientes
- 25% Terminologia diferencial
- 20% Conceitos fundamentais aplicados
- 10% Verificação por eliminação

**Exemplo de uso**: Estudar "Introduction to Algorithms" (CLRS), "Operating Systems: Three Easy Pieces", tratados filosóficos extensos.

**Estratégias especiais**:
- Compensação para fragmentação RAG do NotebookLM
- Redundância contextual estratégica
- Citações multi-layer (capítulo + seção + página)
- Foco em qualidade > quantidade (15-25 flashcards premium)

## 🧪 Fundamentos Científicos

### Princípio 1: Contextualização Profunda
Cada flashcard é **auto-suficiente**, incluindo:
- Por que o conceito importa
- Conexões com 2-3 conceitos relacionados
- Hierarquia na estrutura do conhecimento
- Completude para compreensão isolada

**Base científica**: Baseado na teoria de codificação elaborativa (Craik & Lockhart, 1972) e na importância do contexto para consolidação de memória.

---

### Princípio 2: Recuperação Ativa Otimizada
Força **esforço cognitivo** durante recuperação:
- Evita questões sim/não (reconhecimento passivo)
- Múltiplas entradas para mesmo conceito
- Dificuldade graduada (fácil → difícil)
- Esforço desejável (Bjork, 1994)

**Base científica**: O "efeito de teste" demonstra que recuperação ativa resulta em retenção 2x superior a revisão passiva (Roediger & Karpicke, 2006).

---

### Princípio 3: Detecção de Fraquezas
Identifica e foca em **confusões recorrentes**:
- Distinções sutis entre conceitos similares
- Armadilhas conceituais comuns
- Verificação cruzada de ângulos opostos
- Metacognição ("quando usar X vs Y")

**Base científica**: Baseado em pesquisas sobre erros conceituais sistemáticos e a importância de discriminação fina para expertise (Chi et al., 1981).

---

### Princípio 4: Compatibilidade com NotebookLM
Otimizado para os **formatos suportados**:
- 60% Preenchimento com lacuna (cloze deletion)
- 40% Pergunta/Resposta tradicional

**Vantagem**: Cloze deletion é especialmente eficaz para contextualização (formato usado pelo SuperMemo e Anki com sucesso comprovado).

## 🚀 Como Usar

### Passo 1: Configure seu material no NotebookLM
1. Acesse [notebooklm.google.com](https://notebooklm.google.com/)
2. Crie um novo notebook
3. Carregue suas fontes (PDFs, Google Docs, URLs, áudio)
   - Até 50 fontes (gratuito) ou 300 (NotebookLM Pro)
   - Até 500.000 palavras por fonte

### Passo 2: Gere seu prompt
1. Abra o [Gerador de Flashcards](https://claude.ai/artifacts/seu-link-aqui) (ou use localmente)
2. Preencha o **Tema de Estudo** (ex: "Algoritmos de Ordenação")
3. (Opcional) Adicione um **Foco Específico** (ex: "Complexidade computacional")
4. Escolha a **Modalidade** adequada ao seu objetivo
5. Clique em **"Gerar Prompt"**
6. Clique em **"Copiar"** para copiar o prompt completo

### Passo 3: Crie os flashcards no NotebookLM
1. No NotebookLM, vá para a aba **"Flashcards"**
2. Cole o prompt copiado na área de customização
3. Aguarde a geração (1-2 minutos para materiais extensos)
4. Revise os flashcards gerados
5. Salve os que errou para repetição espaçada

### Passo 4: Exporte para seu sistema SRS
**Opção 1 - Uso direto no NotebookLM**:
- Use a interface nativa de flashcards
- Marque cartões salvos para revisão posterior

**Opção 2 - Export para Anki** (requer trabalho manual):
1. Copie os flashcards do NotebookLM
2. Use ferramentas intermediárias (Google Gemini) para converter para CSV
3. Importe no Anki para repetição espaçada automatizada

## 💻 Instalação Local

### Pré-requisitos
- Node.js 16+ e npm/yarn

### Clone e instale
```bash
# Clone o repositório
git clone https://github.com/seu-usuario/notebooklm-flashcard-generator.git

# Entre no diretório
cd notebooklm-flashcard-generator

# Instale dependências
npm install
# ou
yarn install

# Execute em desenvolvimento
npm run dev
# ou
yarn dev
```

Acesse `http://localhost:3000` no navegador.

### Build para produção
```bash
npm run build
# ou
yarn build
```

## 🛠️ Tecnologias

- **React 18** - Biblioteca UI
- **Tailwind CSS** - Estilização utilitária
- **Lucide React** - Ícones modernos
- **Vite** - Build tool (se aplicável)

## 📚 Referências Científicas

Este projeto é fundamentado em décadas de pesquisa sobre aprendizagem e memória:

1. **Ebbinghaus, H.** (1885). *Über das Gedächtnis* - Curva do esquecimento
2. **Bjork, R.A.** (1994). Memory and metamemory considerations in the training of human beings - Dificuldades desejáveis
3. **Roediger, H.L., & Karpicke, J.D.** (2006). Test-enhanced learning - Efeito de teste
4. **Craik, F.I.M., & Lockhart, R.S.** (1972). Levels of processing - Codificação elaborativa
5. **Dempster, F.N.** (1989). Spacing effects and their implications for theory and practice - Meta-análise sobre repetição espaçada

Para lista completa de 79 referências, consulte a documentação do projeto.

## 🤝 Contribuindo

Contribuições são bem-vindas! Por favor:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaModalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona modalidade para Medicina'`)
4. Push para a branch (`git push origin feature/NovaModalidade`)
5. Abra um Pull Request

### Ideias para contribuição
- [ ] Novas modalidades especializadas (Medicina, Direito, Engenharia)
- [ ] Tradução para outros idiomas
- [ ] Export direto para Anki (via plugin/API)
- [ ] Preset de prompts para livros técnicos específicos
- [ ] Sistema de avaliação de qualidade de flashcards

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🙏 Agradecimentos

- **Google NotebookLM** - Pela ferramenta incrível de IA para educação
- **Anki Community** - Pelas décadas de conhecimento sobre SRS
- **Sebastian Leitner** - Pelo Sistema Leitner (1970)
- **Piotr Woźniak** - Criador do SuperMemo e algoritmo SM-2

---

Desenvolvido com 🧠 para estudantes que levam aprendizagem a sério.

**Nota**: Este é um projeto independente, não afiliado ao Google ou NotebookLM.
