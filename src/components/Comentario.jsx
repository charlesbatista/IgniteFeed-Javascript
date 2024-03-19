import PropTypes from "prop-types";
import { ThumbsUp, Trash } from "@phosphor-icons/react";
import styles from "./Comentario.module.css";
import { Avatar } from "./Avatar";
import { useState } from "react";

export function Comentario({ conteudo, onDeletarComentario }) {

  const [likes, setLikes] = useState(0)

  function handleDeletarComentario() {
    onDeletarComentario(conteudo);
  }

  function handleCurtirComentario() {
    setLikes((likes) => {
      return likes + 1;
    });
  }

  return (
    <div className={styles.comentario}>
      <Avatar src="https://github.com/charlesbatista.png" semBordas />
      <div className={styles.caixa}>
        <div className={styles.wrapper}>
          <header>
            <div className={styles.info}>
              <b>Charles Batista</b>
              <time
                title="11 de maio às 08:13h"
                dateTime="2022-05-11 08:13:00"
                className={styles.datahora}
              >
                Cerca de 2h atrás
              </time>
            </div>

            <button type="button" onClick={handleDeletarComentario} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <div className={styles.conteudo}>
            <p>{conteudo}</p>
          </div>
        </div>

        <footer>
          <button type="button" onClick={handleCurtirComentario}>
            <ThumbsUp size={18} /> Curtir <span>{likes} likes</span>
          </button>
        </footer>
      </div>
    </div>
  );
}

Comentario.propTypes = {
  conteudo: PropTypes.string.isRequired,
  onDeletarComentario: PropTypes.func.isRequired
};
