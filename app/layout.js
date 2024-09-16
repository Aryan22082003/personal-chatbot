import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>AI Portfolio</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}