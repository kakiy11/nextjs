import Counter from './Counter';

async function getInfo() {
  return {
    title: 'О проекте',
    description: 'Данные получены на сервере без useEffect.',
  };
}

export default async function AboutPage() {
  const info = await getInfo();

  return (
    <main className="container narrow">
      <p className="eyebrow">SERVER COMPONENT</p>
      <h1>{info.title}</h1>
      <p className="lead">{info.description}</p>
      <p>Эта страница является Server Component по умолчанию. Она получает данные через async/await и подключает отдельный интерактивный Client Component.</p>
      <section className="panel">
        <h2>Счётчик кликов</h2>
        <Counter />
      </section>
    </main>
  );
}
