import './globals.css';
export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <nav className="nav">
          <a href="/">Curriculo</a>
          <a href="/forca">Jogo da Forca</a>
        </nav>
        {children}
      </body>
    </html>
  );
}