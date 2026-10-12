import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'Мой первый проект на Next.js',
  description: 'Учебный проект: маршрутизация, Server и Client Components, API.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>
        <header className="site-header">
          <Link className="brand" href="/">Next.js Практика</Link>
          <nav aria-label="Основная навигация">
            <Link href="/">Главная</Link>
            <Link href="/about">О проекте</Link>
          </nav>
        </header>
        {children}
        <footer className="site-footer">Учебный проект по основам Next.js</footer>
      </body>
    </html>
  );
}
