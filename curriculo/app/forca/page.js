'use client';
import { useState, useEffect } from 'react';

const palavras = [
  'REACT','NEXT','JAVASCRIPT','PROGRAMACAO','COMPUTADOR','ALGORITMO',
  'DESENVOLVIMENTO','CODIGO','SOFTWARE','HARDWARE',
  'INTERNET','SERVIDOR','CLIENTE','BANCO','DADOS','FUNCAO',
  'VARIAVEL','OBJETO','ARRAY','STRING',
  'PYTHON','JAVA','NODE','HTML','CSS','API','GITHUB','LINUX','WINDOWS','DEBUG'
];

export default function Forca() {''
  const [palavra, setPalavra] = useState('');
  const [letrasCorretas, setLetrasCorretas] = useState([]);
  const [letrasErradas, setLetrasErradas] = useState([]);
  const [tentativas, setTentativas] = useState(6);

  useEffect(() => {
    iniciarJogo();
  }, []);

  function iniciarJogo() {
    const nova = palavras[Math.floor(Math.random() * palavras.length)];
    setPalavra(nova);
    setLetrasCorretas([]);
    setLetrasErradas([]);
    setTentativas(6);
  }

  function tentar(letra) {
    if (letrasCorretas.includes(letra) || letrasErradas.includes(letra)) return;

    if (palavra.includes(letra)) {
      setLetrasCorretas(prev => [...prev, letra]);
    } else {
      setLetrasErradas(prev => [...prev, letra]);
      setTentativas(prev => prev - 1);
    }
  }

  const exibicao = palavra
    ? palavra.split('').map(l => (letrasCorretas.includes(l) ? l : '_')).join(' ')
    : '';

  const venceu = palavra && palavra.split('').every(l => letrasCorretas.includes(l));
  const perdeu = tentativas === 0;

  const alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const partes = 6 - tentativas;

  return (
    <main className="container center">
      <h1>Jogo da Forca</h1>

      <div className="forca">
        <div className="poste"></div>
        <div className="trave"></div>
        <div className="corda"></div>

        {partes > 0 && <div className="cabeca"></div>}
        {partes > 1 && <div className="corpo"></div>}
        {partes > 2 && <div className="braco esquerdo"></div>}
        {partes > 3 && <div className="braco direito"></div>}
        {partes > 4 && <div className="perna esquerda"></div>}
        {partes > 5 && <div className="perna direita"></div>}
      </div>

      <h2 className="palavra">{exibicao}</h2>
      <p>Tentativas: {tentativas}</p>

      <div className="teclado">
        {alfabeto.map(l => (
          <button
            key={l}
            onClick={() => tentar(l)}
            disabled={
              letrasCorretas.includes(l) ||
              letrasErradas.includes(l) ||
              venceu ||
              perdeu
            }
          >
            {l}
          </button>
        ))}
      </div>

      <p className="erradas">Erradas: {letrasErradas.join(', ')}</p>

      {venceu && <h2 className="win">Voce venceu! Palavra: {palavra}</h2>}
      {perdeu && <h2 className="lose">Voce perdeu! Palavra: {palavra}</h2>}

      <button onClick={iniciarJogo}>Reiniciar</button>
    </main>
  );
}