function Projects() {
  const projetos = [
    {
      nome: "Portfólio",
      descricao: "Meu primeiro site pessoal",
      link: "https://karl0305.github.io/portfolio-karla/"
    },
  ];

  return (
    <section>
      <h2>Projetos</h2>

      {projetos.map((p, i) => (
        <div className="card" key={i}>
          <h3>{p.nome}</h3>
          <p>{p.descricao}</p>

          <a href={p.link} target="_blank" rel="noreferrer">
  <button>Ver Projeto</button>
</a>
        </div>
      ))}
    </section>
  );
}

export default Projects;