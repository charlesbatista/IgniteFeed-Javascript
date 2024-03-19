import PropTypes from "prop-types";
import styles from "./Post.module.css";
import { ChatCenteredDots } from "@phosphor-icons/react";
import { Comentario } from "./Comentario";
import { Avatar } from "./Avatar";
import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";
import { useState } from "react";

export function Post({ autor, conteudo, cadastrado_em }) {
  const dataFormatada = format(cadastrado_em, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });
  const dataFormatadaTempoPassado = formatDistanceToNow(cadastrado_em, {
    locale: ptBR,
    addSuffix: true,
  });
  const [comentarios, setComentarios] = useState(["Post muito bacana, eim?"]);
  const [novoComentario, setNovoComentario] = useState("");

  function handleComentariosForm() {
    event.preventDefault();
    setComentarios([...comentarios, novoComentario]);
    setNovoComentario("");
  }

  function handleNovoComentario() {
    event.target.setCustomValidity("");
    setNovoComentario(event.target.value);
  }

  function handleNovoComentarioInvalido() {
    event.target.setCustomValidity("Este campo é obrigatório.");
  }

  function deletarComentario(comentarioADeletar) {
    const comentariosSemODeletado = comentarios.filter((comentario) => {
      return comentario != comentarioADeletar;
    });
    setComentarios(comentariosSemODeletado);
  }

  const novoComentarioVazio = novoComentario.length === 0;

  return (
    <article className={styles.post}>
      {/* Cabeçalho do post */}
      <header>
        <div className={styles.autor}>
          <Avatar src={autor.avatar_url} />
          <div className={styles.info}>
            <b>{autor.nome}</b>
            <span>{autor.cargo}</span>
          </div>
        </div>

        <time title={dataFormatada} dateTime={cadastrado_em.toISOString()}>
          {dataFormatadaTempoPassado}
        </time>
      </header>

      <div className={styles.conteudo}>{conteudo}</div>

      {/* Formulário para novos comentários */}
      <form onSubmit={handleComentariosForm} className={styles.comentariosForm}>
        <b>Deixe seu feedback</b>
        <textarea
          name="comentario"
          placeholder="Deixe um comentário..."
          value={novoComentario}
          onChange={handleNovoComentario}
          required
          onInvalid={handleNovoComentarioInvalido}
        ></textarea>

        <footer>
          <button type="submit" disabled={novoComentarioVazio}>
            <ChatCenteredDots size={20} /> Publicar
          </button>
        </footer>
      </form>

      {/* Lista com os comentários do post */}
      <div className="listaComentarios">
        {comentarios.map((comentario) => (
          <Comentario
            key={comentario}
            conteudo={comentario}
            onDeletarComentario={deletarComentario}
          />
        ))}
      </div>
    </article>
  );
}

Post.propTypes = {
  autor: PropTypes.shape({
    nome: PropTypes.string.isRequired,
    cargo: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
  }).isRequired,
  conteudo: PropTypes.node.isRequired,
  cadastrado_em: PropTypes.instanceOf(Date).isRequired,
};
