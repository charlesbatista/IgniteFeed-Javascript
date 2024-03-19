import { Header } from "./components/Header";
import "./global.css";
import styles from "./App.module.css";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

export function App() {
  const posts = [
    {
      id: 1,
      autor: {
        nome: "Charles Batista",
        cargo: "Web Developer",
        avatar_url: "https://github.com/charlesbatista.png",
      },
      conteudo: (
        <>
          <p>Fala pessoal 👋</p>
          <p>
            Finalmente finalizei meu novo site/portfólio. Foi um baita desafio
            criar todo o design e codar na unha, mas consegui 💪🏻
          </p>
          <p>
            Acesse e deixe seu feedback 👉{" "}
            <a
              href="http://devonlane.design.com.br"
              target="_blank"
              rel="noopener noreferrer"
            >
              devonlane.design
            </a>{" "}
          </p>
          <p>
            <a
              href="http://google.com.br/?search=uiux"
              target="_blank"
              rel="noopener noreferrer"
            >
              #uiux
            </a>{" "}
            <a
              href="http://google.com.br/?search=userexperience"
              target="_blank"
              rel="noopener noreferrer"
            >
              #userexperience
            </a>
          </p>
        </>
      ),
      cadastrado_em: new Date("2024-03-18T10:30:00"),
    },
    {
      id: 2,
      autor: {
        nome: "Caique Silva",
        cargo: "Designer",
        avatar_url: "https://github.com/caique.png",
      },
      conteudo: (
        <>
          <p>Olá pessoal! 🎨</p>
          <p>
            Acabei de terminar um novo projeto de design de interface para um
            aplicativo de viagens.
          </p>
          <p>
            Estou muito animada com o resultado e mal posso esperar para
            compartilhar com vocês!
          </p>
          <p>
            <a href="#">#design</a> <a href="#">#ui</a> <a href="#">#viagens</a>
          </p>
        </>
      ),
      cadastrado_em: new Date("2024-03-17T15:45:00"),
    },
    {
      id: 3,
      autor: {
        nome: "Rafael Santos",
        cargo: "Desenvolvedor Full Stack",
        avatar_url: "https://github.com/rafaelfullstack.png",
      },
      conteudo: (
        <>
          <p>E aí galera! 💻</p>
          <p>
            Acabei de implementar uma nova funcionalidade de chat em tempo real
            no meu projeto pessoal.
          </p>
          <p>
            Estou muito empolgado com o resultado e ansioso para ver o que vocês
            acham!
          </p>
          <p>
            <a href="#">#webdev</a> <a href="#">#chat</a>{" "}
            <a href="#">#realtime</a>
          </p>
        </>
      ),
      cadastrado_em: new Date("2024-03-16T20:00:00"),
    },
  ];

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map((post) => (
            <Post key={post.id} autor={post.autor} conteudo={post.conteudo} cadastrado_em={post.cadastrado_em} />
          ))}
        </main>
      </div>
    </>
  );
}
