export default function Home() {
  return (
    <main className="container">
      <header className="header">
  <img src="/foto.jpg" alt="Gustavo" className="foto" />

  <h1>Gustavo Costa</h1>
  <p>Desenvolvedor | Ciencia da Computacao</p>
</header>

      <section className="grid">
        <div className="card">
          <h3>Perfil</h3>
          <p>
            Estudante de Ciencia da Computacao apaixonado por tecnologia,
            desenvolvimento de software e resolucao de problemas.
          </p>
          <p>
            Experiencia com desenvolvimento web utilizando React, Next.js e
            logica de programacao com C, Java e Python.
          </p>
        </div>

        <div className="card">
          <h3>Educacao</h3>
          <p>UNICAP - Ciencia da Computacao</p>
          <p>2024 - 2028 | 5 periodo</p>
        </div>

        <div className="card">
          <h3>Experiencia</h3>
          <p>🚀 Projeto de Startup Universitaria (2024)</p>
          <p>💻 Desenvolvimento de sistemas web</p>
          <p>🧠 Resolucao de problemas com algoritmos</p>
        </div>

        <div className="card">
          <h3>Habilidades</h3>
          <ul>
            <li>💻 C, Java, Python, SQL</li>
            <li>🌐 HTML, CSS, JavaScript</li>
            <li>⚛️ React, Next.js</li>
            <li>🛠️ Git e GitHub</li>
          </ul>
        </div>

        <div className="card">
          <h3>Diferenciais</h3>
          <ul>
            <li>Facilidade em aprender novas tecnologias</li>
            <li>Boa logica de programacao</li>
            <li>Proatividade e trabalho em equipe</li>
            <li>Interesse em desenvolvimento full stack</li>
          </ul>
        </div>

        <div className="card">
          <h3>Contato</h3>
          <p>📞 81 99577-3770</p>
          <p>📧 gustavocavalcantimc@gmail.com</p>
          <p>📍 Recife - PE</p>
        </div>
      </section>
    </main>
  );
}