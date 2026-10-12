import Link from 'next/link';

const posts: Record<string, { title: string; description: string }> = {
  'nextjs-vvedenie': {
    title: 'Введение в Next.js',
    description: 'Next.js расширяет React инструментами маршрутизации, рендеринга и серверной логики.',
  },
  'react-osnovy': {
    title: 'Основы React',
    description: 'React помогает строить интерфейсы из переиспользуемых компонентов.',
  },
};

export function generateStaticParams() {
  return [{ slug: 'nextjs-vvedenie' }, { slug: 'react-osnovy' }];
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    return (
      <main className="container narrow">
        <h1>Статья не найдена</h1>
        <p>Для адреса <code>/blog/{slug}</code> нет учебной статьи.</p>
        <Link href="/">Вернуться на главную</Link>
      </main>
    );
  }

  return (
    <main className="container narrow">
      <p className="eyebrow">ДИНАМИЧЕСКИЙ МАРШРУТ</p>
      <article className="panel">
        <h1>Статья: {slug}</h1>
        <h2>{post.title}</h2>
        <p>{post.description}</p>
        <p>Параметр <code>slug</code> извлекается из URL с помощью <code>params</code>.</p>
      </article>
      <p><Link href="/">← На главную</Link></p>
    </main>
  );
}
