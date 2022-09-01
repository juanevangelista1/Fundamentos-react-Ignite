﻿import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import { useState } from 'react'
import styles from './Comment.module.css'

export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0)
  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleLikeComment() {
    setLikeCount(state => {
      return state + 1
    })
  }

  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
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

            <button onClick={handleDeleteComment} title="Botão de deletar">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
