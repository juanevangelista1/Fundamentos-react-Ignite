import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment() {
  return (
    <div className={styles.comment}>
      <img
        className={styles.avatar}
        src="https://avatars.githubusercontent.com/u/86501569?v=4"
        alt="Foto de Perfil"
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Juan Evangelista</strong>
              <time
                title="30 de Agosto às 09:44h"
                dateTime="2022-08-30 09:43:42"
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Botão de deletar">
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom, parabéns!</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>30</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
