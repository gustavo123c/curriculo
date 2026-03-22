export default function Home() {
  return (
    <main className="container">


      <section className="hero">
         <img src="/foto.jpg" alt="Gustavo" className="hero-foto" />

        <div className="hero-texto">
          <h1>Olá, eu sou <span>Gustavo Costa</span></h1>
          <p>
            Estudante de Ciência da Computação na UNICAP.
            Apaixonado por tecnologia e desenvolvimento web.
          </p>
          <a href="/forca" className="hero-btn">Ver meu projeto →</a>
        </div>
      </section>

      {/* Habilidades */}
      <p className="secao-titulo">Habilidades</p>
      <div className="grid">

        <div className="card">
          <div className="card-icone">💻</div>
          <h3>Linguagens</h3>
          <div className="tags">
            <span className="tag">C</span>
            <span className="tag">Java</span>
            <span className="tag">Python</span>
            <span className="tag">SQL</span>
          </div>
        </div>

        <div className="card">
          <div className="card-icone">🌐</div>
          <h3>Frontend</h3>
          <div className="tags">
            <span className="tag">HTML</span>
            <span className="tag">CSS</span>
            <span className="tag">JavaScript</span>
            <span className="tag">React</span>
            <span className="tag">Next.js</span>
          </div>
        </div>

        <div className="card">
          <div className="card-icone">🛠️</div>
          <h3>Ferramentas</h3>
          <div className="tags">
            <span className="tag">Git</span>
            <span className="tag">GitHub</span>
            <span className="tag">VS Code</span>
            <span className="tag">Linux</span>
          </div>
        </div>

      </div>

     
      <p className="secao-titulo">Formação & Experiência</p>
      <div className="grid">

        <div className="card">
          <div className="card-icone">🎓</div>
          <h3>Educação</h3>
          <ul>
            <li>UNICAP — Ciência da Computação</li>
            <li>2024 – 2028 · 5º período</li>
          </ul>
        </div>

        <div className="card">
          <div className="card-icone">🚀</div>
          <h3>Experiência</h3>
          <ul>
            <li>Startup Universitária (2024)</li>
            <li>Desenvolvimento de sistemas web</li>
            <li>Resolução de problemas com algoritmos</li>
          </ul>
        </div>

        <div className="card">
          <div className="card-icone">⭐</div>
          <h3>Diferenciais</h3>
          <ul>
            <li>Aprende novas tecnologias rápido</li>
            <li>Boa lógica de programação</li>
            <li>Proativo e trabalha bem em equipe</li>
          </ul>
        </div>

      </div>

      <p className="secao-titulo">Contato</p>
      <ul className="contato-lista">
        <li>📞 (81) 99577-3770</li>
        <li>📧 gustavocavalcantimc@gmail.com</li>
        <li>📍 Recife — Pernambuco</li>
      </ul>

    </main>
  );
}