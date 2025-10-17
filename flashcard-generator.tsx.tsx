import React, { useState } from 'react';
import { Copy, Check, BookOpen, Target, Zap, Brain, Code, BookMarked } from 'lucide-react';

const PromptGenerator = () => {
  const [tema, setTema] = useState('');
  const [foco, setFoco] = useState('');
  const [selectedMode, setSelectedMode] = useState(null);
  const [generatedPrompt, setGeneratedPrompt] = useState('');
  const [showCopySuccess, setShowCopySuccess] = useState(false);

  const modes = {
    conceitual: {
      icon: <BookOpen className="w-5 h-5" />,
      title: "Conceitual",
      description: "Definições, terminologia e fundamentos teóricos",
      color: "from-blue-500 to-blue-600",
      borderColor: "border-blue-500",
      bgColor: "bg-blue-50",
      ideal: "Filosofia, Teoria Política, Conceitos Abstratos",
      percentages: {
        "definições contextualizadas": 40,
        "exemplos ilustrativos": 25,
        "distinções conceituais": 20,
        "aplicações básicas": 15
      }
    },
    pratico: {
      icon: <Target className="w-5 h-5" />,
      title: "Prático",
      description: "Aplicação, procedimentos e casos práticos",
      color: "from-green-500 to-green-600",
      borderColor: "border-green-500",
      bgColor: "bg-green-50",
      ideal: "Programação, Métodos de Pesquisa, Análise de Dados",
      percentages: {
        "procedimentos passo-a-passo": 35,
        "exemplos práticos": 30,
        "erros comuns": 20,
        "verificação de resultados": 15
      }
    },
    analitico: {
      icon: <Brain className="w-5 h-5" />,
      title: "Analítico",
      description: "Comparações, análises e pensamento crítico",
      color: "from-purple-500 to-purple-600",
      borderColor: "border-purple-500",
      bgColor: "bg-purple-50",
      ideal: "Análise Literária, Teoria Crítica, Epistemologia",
      percentages: {
        "comparações estruturadas": 30,
        "análises críticas": 25,
        "critérios de avaliação": 25,
        "interpretação contextual": 20
      }
    },
    memorização: {
      icon: <Zap className="w-5 h-5" />,
      title: "Memorização",
      description: "Fatos, dados e informações diretas",
      color: "from-orange-500 to-orange-600",
      borderColor: "border-orange-500",
      bgColor: "bg-orange-50",
      ideal: "Datas Históricas, Terminologia Técnica, Fórmulas",
      percentages: {
        "fatos essenciais": 40,
        "datas e cronologia": 20,
        "nomes e autores": 20,
        "dados quantitativos": 20
      }
    },
    interdisciplinar: {
      icon: <Code className="w-5 h-5" />,
      title: "Interdisciplinar",
      description: "Para transitar entre humanidades e ciências exatas",
      color: "from-indigo-500 to-indigo-600",
      borderColor: "border-indigo-500",
      bgColor: "bg-indigo-50",
      ideal: "Algoritmos para humanistas, Lógica Formal, Estatística",
      percentages: {
        "conceitos-ponte": 35,
        "analogias com humanidades": 25,
        "notação e sintaxe": 20,
        "aplicações práticas": 20
      }
    },
    livroTecnico: {
      icon: <BookMarked className="w-5 h-5" />,
      title: "Livro Técnico Denso",
      description: "Otimizado para materiais extensos (300+ páginas)",
      color: "from-red-500 to-red-600",
      borderColor: "border-red-500",
      bgColor: "bg-red-50",
      ideal: "Manuais Técnicos, Tratados Teóricos, Monografias",
      percentages: {
        "definições auto-suficientes": 45,
        "terminologia diferencial": 25,
        "conceitos fundamentais aplicados": 20,
        "verificação por eliminação": 10
      }
    }
  };

  const generatePrompt = () => {
    if (!selectedMode || !tema) return;

    const mode = modes[selectedMode];
    
    const prompt = `# GERADOR AVANÇADO DE FLASHCARDS NOTEBOOKLM
## Tema: ${tema}
${foco ? `## Foco Específico: ${foco}` : ''}

---

## MODALIDADE: ${mode.title}
Descrição: ${mode.description}
Ideal para: ${mode.ideal}

---

## FUNDAMENTOS DE REPETIÇÃO ESPAÇADA INTEGRADOS

### Princípio 1: CONTEXTUALIZAÇÃO PROFUNDA
Objetivo: Cada flashcard deve ser auto-suficiente, eliminando necessidade de consultar fonte original durante revisões.

Implementação obrigatória em TODOS os cartões:
- Por que isso importa? Explicar relevância do conceito dentro do campo de estudo
- Conexões conceituais: Relacionar com 2-3 conceitos adjacentes das fontes
- Hierarquia clara: Situar o conceito na estrutura maior do conhecimento
- Completude informacional: Informação suficiente para compreensão isolada

Exemplo (BAD):
FRENTE: O que é recursão?
VERSO: Função que chama a si mesma.

Exemplo (GOOD):
FRENTE: O que é recursão em programação e por que é fundamental?
VERSO: Recursão é quando uma função chama a si mesma para resolver subproblemas menores do mesmo tipo. É fundamental porque: (1) simplifica código para problemas divisíveis (árvores, grafos), (2) espelha definições matemáticas naturais (fatorial, Fibonacci), (3) alternativa à iteração com loops. Relaciona-se com: indução matemática (prova), pilha de chamadas (memória), casos-base (condição de parada). Fonte: Capítulo 4, Seção 4.2 - Recursão e Indução

---

### Princípio 2: RECUPERAÇÃO ATIVA OTIMIZADA
Objetivo: Forçar esforço cognitivo durante recuperação, não apenas reconhecimento passivo.

Estratégias obrigatórias:
- Evitar questões sim/não: Exigir construção de resposta, não reconhecimento
- Múltiplas entradas: Mesmo conceito abordado de 2-3 ângulos diferentes em cartões separados
- Dificuldade graduada: Misturar cartões de reconhecimento (fácil) com aplicação (difícil)
- Esforço desejável: Formular perguntas que exigem raciocínio, não apenas memorização

---

### Princípio 3: DETECÇÃO DE FRAQUEZAS
Objetivo: Identificar e focar em conceitos que geram confusão recorrente.

Implementação:
- Distinções sutis: Focar em diferenças entre termos similares que estudantes confundem
- Erros típicos: Incluir armadilhas conceituais comuns da área
- Verificação cruzada: Cartões que testam mesmo conceito de ângulos opostos
- Metacognição: Incluir cartões sobre quando usar X vs Y

---

### Princípio 4: ESTRUTURA COMPATÍVEL COM NOTEBOOKLM
Objetivo: Maximizar compatibilidade com os dois formatos que NotebookLM suporta.

Formatos permitidos:
1. Pergunta/Resposta tradicional (40% dos cartões)
   - Use para: comparações, aplicações, análises críticas
   - Estrutura: Pergunta direta → Resposta completa + citação

2. Preenchimento com lacuna (60% dos cartões - PRIORITÁRIO)
   - Use para: definições, terminologia, conceitos-chave
   - Estrutura: Sentença com _____ → Preenchimento + contexto

---

## DISTRIBUIÇÃO ESPECÍFICA - MODALIDADE ${mode.title.toUpperCase()}

${Object.entries(mode.percentages).map(([cat, perc]) => `- ${cat}: ${perc}%`).join('\n')}

---

## INSTRUÇÕES FINAIS PARA NOTEBOOKLM

### Comando de Geração:
Gere flashcards seguindo EXATAMENTE a estrutura percentual da modalidade ${mode.title}, usando EXCLUSIVAMENTE informações das fontes carregadas no notebook. Cada flashcard deve incluir citação específica (página/seção).

### Qualidade Obrigatória:
- Frente: Concisa, clara, sem ambiguidade
- Verso: Completo, fundamentado, com citação
- Progressão: Do simples ao complexo dentro da distribuição
- Aplicabilidade: Conhecimento utilizável imediatamente
- Verificabilidade: Citação permite conferência rápida

### Anti-padrões (Evitar):
- Flashcards genéricos sem ancoragem na fonte
- Definições incompletas que exigem consulta ao material
- Perguntas ambíguas com múltiplas interpretações
- Citações vagas (conforme o texto, como mencionado)
- Inferências que vão além do que está explícito nas fontes

---

### PARA O USUÁRIO:

Como usar este prompt:
1. Carregue suas fontes no NotebookLM (PDFs, Google Docs, etc.)
2. Copie este prompt completo
3. Cole na área de chat do NotebookLM
4. Aguarde a geração (pode demorar 1-2 minutos para livros extensos)
5. Revise os flashcards gerados - A IA é boa, mas não perfeita
6. Exporte para seu sistema de repetição espaçada (Anki, Quizlet, etc.)

Dica de ouro: 
Para livros muito densos (500+ páginas), divida em seções menores. Crie um notebook NotebookLM por capítulo e gere flashcards em lotes. Depois, consolide em um deck único no Anki.

Princípio fundamental:
Repetição espaçada funciona porque você revisa exatamente antes de esquecer. Quanto mais difícil recuperar a informação (com esforço), mais forte fica a memória. Flashcards são ferramentas, não fins em si mesmos!

---

Lembre-se: O melhor flashcard é aquele que você compreende profundamente, consegue explicar para outra pessoa e aplica em contextos diversos. Quantidade não é igual a Qualidade.`;

    setGeneratedPrompt(prompt);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedPrompt);
    setShowCopySuccess(true);
    setTimeout(() => setShowCopySuccess(false), 2000);
  };

  const charCount = generatedPrompt.length;
  const isLongPrompt = charCount > 10000;

  return (
    <div className="min-h-screen bg-[#f8f9fa]" style={{ fontFamily: "'Google Sans', 'Product Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          {/* Header */}
          <div style={{ backgroundColor: '#1a73e8', padding: '2rem', color: 'white' }}>
            <h1 style={{ fontSize: '2rem', fontWeight: '600', marginBottom: '0.75rem', color: 'white' }}>
              Gerador de Flashcards para NotebookLM
            </h1>
            <p style={{ fontSize: '1.125rem', color: 'white', opacity: 0.95 }}>
              Crie prompts otimizados para gerar flashcards com <strong>repetição espaçada</strong>
            </p>
          </div>

          {/* Info Banner */}
          <div className="mx-6 sm:mx-8 mt-6 p-4 bg-blue-50 border-l-4 border-[#1a73e8] rounded-r">
            <p className="text-sm text-[#202124] leading-relaxed">
              <strong className="font-semibold text-[#1a73e8]">Novidade:</strong> Modalidade <strong className="font-semibold">Interdisciplinar</strong> para estudantes de humanidades explorando programação, matemática e algoritmos.
            </p>
          </div>

          {/* Form Content */}
          <div className="p-6 sm:p-8 space-y-8">
            {/* Input Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-[#5f6368] mb-2 tracking-wide">
                  Tema de Estudo <span className="text-[#d93025]">*</span>
                </label>
                <input
                  type="text"
                  value={tema}
                  onChange={(e) => setTema(e.target.value)}
                  placeholder="Ex: Algoritmos de ordenação"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a73e8] focus:border-transparent text-[#202124] placeholder-[#5f6368] transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#5f6368] mb-2 tracking-wide">
                  Foco Específico <span className="text-xs text-[#5f6368]">(opcional)</span>
                </label>
                <input
                  type="text"
                  value={foco}
                  onChange={(e) => setFoco(e.target.value)}
                  placeholder="Ex: Big O notation e análise de complexidade"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a73e8] focus:border-transparent text-[#202124] placeholder-[#5f6368] transition-all"
                />
              </div>
            </div>

            {/* Mode Selection */}
            <div>
              <h3 className="text-lg font-medium text-[#202124] mb-4 tracking-tight">
                Escolha a Modalidade de Estudo
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {Object.entries(modes).map(([key, mode]) => (
                  <div
                    key={key}
                    onClick={() => setSelectedMode(key)}
                    className={`relative p-5 border-2 rounded-xl cursor-pointer transition-all duration-200 ${
                      selectedMode === key
                        ? `${mode.borderColor} ${mode.bgColor} shadow-md`
                        : 'border-gray-200 hover:border-gray-300 hover:shadow-sm bg-white'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`p-2.5 rounded-lg text-white bg-gradient-to-br ${mode.color} shadow-sm flex-shrink-0`}>
                        {mode.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-[#202124] mb-1 text-base tracking-tight">
                          {mode.title}
                        </h4>
                        <p className="text-xs text-[#5f6368] mb-2 leading-relaxed">
                          {mode.description}
                        </p>
                        <p className="text-xs text-[#1e8e3e] bg-green-50 px-2 py-1 rounded inline-block mb-2">
                          {mode.ideal}
                        </p>
                        <div className="text-xs text-[#5f6368] space-y-0.5 mt-2">
                          {Object.entries(mode.percentages).map(([cat, perc]) => (
                            <div key={cat} className="flex justify-between gap-2">
                              <span className="truncate">{cat}</span>
                              <span className="font-medium text-[#202124]">{perc}%</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Button */}
            <div className="pt-2">
              <button
                onClick={generatePrompt}
                disabled={!tema || !selectedMode}
                style={{
                  padding: '0.875rem 2rem',
                  backgroundColor: (!tema || !selectedMode) ? '#d1d5db' : '#1a73e8',
                  color: 'white',
                  borderRadius: '0.5rem',
                  fontWeight: '500',
                  fontSize: '1rem',
                  border: 'none',
                  cursor: (!tema || !selectedMode) ? 'not-allowed' : 'pointer',
                  boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  if (tema && selectedMode) {
                    e.currentTarget.style.backgroundColor = '#1557b0';
                    e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (tema && selectedMode) {
                    e.currentTarget.style.backgroundColor = '#1a73e8';
                    e.currentTarget.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
                  }
                }}
              >
                Gerar Prompt
              </button>
            </div>

            {/* Generated Output */}
            {generatedPrompt && (
              <div className="mt-8 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-gray-200">
                  <h3 className="text-lg font-medium text-[#202124] tracking-tight">
                    Prompt Gerado
                  </h3>
                  <div className="flex items-center gap-3">
                    <span className={`text-xs px-3 py-1.5 rounded-full font-medium ${
                      isLongPrompt 
                        ? 'bg-orange-50 text-orange-700 border border-orange-200' 
                        : 'bg-gray-100 text-[#5f6368]'
                    }`}>
                      {charCount.toLocaleString()} caracteres
                    </span>
                    <button
                      onClick={copyToClipboard}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.5rem 1rem',
                        backgroundColor: showCopySuccess ? '#1e8e3e' : '#1a73e8',
                        color: 'white',
                        borderRadius: '0.5rem',
                        fontWeight: '500',
                        fontSize: '0.875rem',
                        border: 'none',
                        cursor: 'pointer',
                        boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                        transition: 'all 0.2s'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = showCopySuccess ? '#188038' : '#1557b0';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = showCopySuccess ? '#1e8e3e' : '#1a73e8';
                      }}
                    >
                      {showCopySuccess ? (
                        <>
                          <Check size={16} />
                          <span>Copiado</span>
                        </>
                      ) : (
                        <>
                          <Copy size={16} />
                          <span>Copiar</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                <div className="bg-[#f8f9fa] rounded-lg border border-gray-200 overflow-hidden">
                  <div className="max-h-[500px] overflow-y-auto p-6">
                    <pre className="text-sm text-[#202124] whitespace-pre-wrap font-mono leading-relaxed">
                      {generatedPrompt}
                    </pre>
                  </div>
                </div>

                <div className="p-4 bg-amber-50 border-l-4 border-amber-400 rounded-r">
                  <p className="text-sm text-[#202124] leading-relaxed">
                    <strong className="font-semibold text-amber-700">Importante:</strong> Este prompt foi otimizado com princípios de <strong className="font-semibold">repetição espaçada</strong> para maximizar retenção de longo prazo. Revise os flashcards gerados e ajuste conforme necessário!
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromptGenerator;