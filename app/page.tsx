import Link from 'next/link';

const posts = [
  { slug: 'nextjs-vvedenie', title: 'Введение в Next.js' },
  { slug: 'react-osnovy', title: 'Основы React' },
];

export default function HomePage() {
  return (
    <main className="container">
      <section className="hero">
        <p className="eyebrow">ПРАКТИЧЕСКАЯ РАБОТА № 1.2</p>
        <h1>Мой первый проект на Next.js</h1>
        <p className="lead">Знакомство с App Router, серверными и клиентскими компонентами, динамическими страницами и API.</p>
        <Link className="primary-link" href="/about">Перейти к странице «О проекте»</Link>
      </section>
      <section className="section">
        <h2>Статьи блога</h2>
        <div className="card-grid">
          {posts.map((post) => (
            <article className="card" key={post.slug}>
              <h3>{post.title}</h3>
              <p>Пример динамического маршрута: <code>/blog/{post.slug}</code></p>
              <Link href={`/blog/${post.slug}`}>Читать статью →</Link>
            </article>
          ))}
        </div>
      </section>
      <section className="section api-note">
        <h2>Проверка API</h2>
        <p>API-маршрут возвращает JSON с сообщением от сервера.</p>
        <Link href="/api/hello">Открыть /api/hello →</Link>
      </section>
    </main>
  );
}
