'use client';
import { useState, useEffect, useCallback } from 'react';


const PALAVRAS = [
  { palavra: 'REACT',          categoria: 'Framework'     },
  { palavra: 'NEXTJS',         categoria: 'Framework'     },
  { palavra: 'JAVASCRIPT',     categoria: 'Linguagem'     },
  { palavra: 'TYPESCRIPT',     categoria: 'Linguagem'     },
  { palavra: 'PYTHON',         categoria: 'Linguagem'     },
  { palavra: 'ALGORITMO',      categoria: 'Conceito'      },
  { palavra: 'COMPILADOR',     categoria: 'Conceito'      },
  { palavra: 'RECURSAO',       categoria: 'Conceito'      },
  { palavra: 'SERVIDOR',       categoria: 'Infraestrutura'},
  { palavra: 'VARIAVEL',       categoria: 'Programação'   },
  { palavra: 'FUNCAO',         categoria: 'Programação'   },
  { palavra: 'OBJETO',         categoria: 'Programação'   },
  { palavra: 'ARRAY',          categoria: 'Estrutura'     },
  { palavra: 'COMPONENTE',     categoria: 'Frontend'      },
  { palavra: 'DEPLOY',         categoria: 'DevOps'        },
  { palavra: 'COMMIT',         categoria: 'Git'           },
  { palavra: 'BRANCH',         categoria: 'Git'           },
  { palavra: 'TERMINAL',       categoria: 'Ferramenta'    },
  { palavra: 'DEBUGGING',      categoria: 'Processo'      },
  { palavra: 'FRAMEWORK',      categoria: 'Conceito'      },
  { palavra: 'BIBLIOTECA',     categoria: 'Conceito'      },
  { palavra: 'PROTOCOLO',      categoria: 'Redes'         },
  { palavra: 'ENDPOINT',       categoria: 'API'           },
  { palavra: 'AUTENTICACAO',   categoria: 'Segurança'     },
  { palavra: 'CRIPTOGRAFIA',   categoria: 'Segurança'     },
  { palavra: 'MEMORIA',        categoria: 'Hardware'      },
  { palavra: 'PROCESSADOR',    categoria: 'Hardware'      },
  { palavra: 'CONTAINER',      categoria: 'DevOps'        },
  { palavra: 'INTERFACE',      categoria: 'Design'        },
  { palavra: 'INTEGRACAO',     categoria: 'DevOps'        },
  { palavra: 'BANCO',          categoria: 'Dados'         },
  { palavra: 'REFATORAR',      categoria: 'Processo'      },
];

const MAX_ERROS = 6;
const ALFABETO = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');


function sortear() {
  return PALAVRAS[Math.floor(Math.random() * PALAVRAS.length)];
}


function BonecoForca({ erros }) {
  
  const boneco = { stroke: '#f85149', strokeWidth: 3, strokeLinecap: 'round' };
 
  const estrutura = { stroke: '#30363d', strokeWidth: 3, strokeLinecap: 'round' };

  return (
    <svg className="forca-svg" viewBox="0 0 100 130" fill="none">
    
      <line x1="10" y1="125" x2="90" y2="125" {...estrutura} />
      <line x1="25" y1="125" x2="25" y2="8"   {...estrutura} />
      <line x1="25" y1="8"   x2="65" y2="8"   {...estrutura} />
      <line x1="65" y1="8"   x2="65" y2="22"  {...estrutura} />

    
      {erros >= 1 && <circle cx="65" cy="30" r="8" stroke="#f85149" strokeWidth="2.5" />}

   
      {erros >= 2 && <line x1="65" y1="38" x2="65" y2="72" {...boneco} />}

  
      {erros >= 3 && <line x1="65" y1="50" x2="48" y2="63" {...boneco} />}

    
      {erros >= 4 && <line x1="65" y1="50" x2="82" y2="63" {...boneco} />}

     
      {erros >= 5 && <line x1="65" y1="72" x2="50" y2="92" {...boneco} />}

      {erros >= 6 && <line x1="65" y1="72" x2="80" y2="92" {...boneco} />}
    </svg>
  );
}


export default function Forca() {
  const [entrada, setEntrada]         = useState(sortear);
  const [certas, setCertas]           = useState([]);  
  const [erradas, setErradas]         = useState([]);  

  const { palavra, categoria } = entrada;
  const erros       = erradas.length;
  const tentativas  = MAX_ERROS - erros;

  const venceu = palavra.split('').every(letra => certas.includes(letra));
  const perdeu = erros >= MAX_ERROS;
  const jogoAcabou = venceu || perdeu;


  const tentar = useCallback((letra) => {
    if (jogoAcabou) return;
    if (certas.includes(letra) || erradas.includes(letra)) return;

    if (palavra.includes(letra)) {
      setCertas(prev => [...prev, letra]);
    } else {
      setErradas(prev => [...prev, letra]);
    }
  }, [jogoAcabou, certas, erradas, palavra]);


  useEffect(() => {
    function aoApertarTecla(e) {
      const letra = e.key.toUpperCase();
      if (ALFABETO.includes(letra)) tentar(letra);
    }
    window.addEventListener('keydown', aoApertarTecla);
    return () => window.removeEventListener('keydown', aoApertarTecla);
  }, [tentar]);


  function reiniciar() {
    let nova = sortear();
    while (nova.palavra === palavra) nova = sortear();
    setEntrada(nova);
    setCertas([]);
    setErradas([]);
  }

  return (
    <main className="forca-pagina">
      <h1>🎮 Jogo da Forca</h1>
      <p className="subtitulo">Vocabulário de tecnologia</p>

      <div className="jogo-area">

  
        <div className="painel-esquerdo">
          <BonecoForca erros={erros} />

          <div className="tentativas-info">
            <span className="tentativas-numero">{tentativas}</span>
            tentativas restantes
          </div>

          <div style={{ width: '100%' }}>
            <p className="erradas-titulo">Letras erradas</p>
            <div className="erradas-lista">
              {erradas.length === 0
                ? <span style={{ fontSize: '0.75rem', color: 'var(--texto-muted)' }}>—</span>
                : erradas.map(l => <span key={l} className="chip-errado">{l}</span>)
              }
            </div>
          </div>

          <div style={{ width: '100%' }}>
            <p className="corretas-titulo">Letras certas</p>
            <div className="corretas-lista">
              {certas.length === 0
                ? <span style={{ fontSize: '0.75rem', color: 'var(--texto-muted)' }}>—</span>
                : certas.map(l => <span key={l} className="chip-certo">{l}</span>)
              }
            </div>
          </div>
        </div>

        <div className="painel-direito">

          {/* Categoria */}
          <span className="categoria-badge">📂 {categoria}</span>

     
          <div className="palavra-display">
            {palavra.split('').map((letra, i) => (
              <div key={i} className="letra-slot">
                <span className="letra-char">
                  
                  {certas.includes(letra)
                    ? letra
                    : perdeu
                      ? <span style={{ color: 'var(--vermelho)' }}>{letra}</span>
                      : ''}
                </span>
                <div className="letra-linha" />
              </div>
            ))}
          </div>

          {venceu && (
            <div className="mensagem vitoria">
              <h2>🎉 Você venceu!</h2>
              <p>A palavra era: <strong>{palavra}</strong></p>
              <button className="btn-reiniciar" onClick={reiniciar}>
                Jogar novamente
              </button>
            </div>
          )}

          {perdeu && (
            <div className="mensagem derrota">
              <h2>💀 Você perdeu!</h2>
              <p>A palavra era: <strong>{palavra}</strong></p>
              <button className="btn-reiniciar" onClick={reiniciar}>
                Tentar novamente
              </button>
            </div>
          )}

        
          {!jogoAcabou && (
            <div className="teclado">
              {ALFABETO.map(letra => {
                const certa  = certas.includes(letra);
                const errada = erradas.includes(letra);

                return (
                  <button
                    key={letra}
                    className={`tecla ${certa ? 'certa' : ''} ${errada ? 'errada' : ''}`}
                    onClick={() => tentar(letra)}
                    disabled={certa || errada}
                  >
                    {letra}
                  </button>
                );
              })}
            </div>
          )}

          
          {!jogoAcabou && (
            <div style={{ textAlign: 'center' }}>
              <button className="btn-reiniciar" onClick={reiniciar}>
                ↺ Nova palavra
              </button>
            </div>
          )}

        </div>
      </div>
    </main>
  );
}