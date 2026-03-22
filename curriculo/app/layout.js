import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <nav className="nav">
          <a href="/" className="nav-logo">gc.dev</a>
          <div className="nav-links">
            <a href="/">Currículo</a>
            <a href="/forca">Jogo da Forca</a>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}