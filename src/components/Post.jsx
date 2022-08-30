import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://avatars.githubusercontent.com/u/86501569?v=4"
            alt="Foto de Perfil"
          />
          <div className={styles.authorInfo}>
            <strong>Juan Evangelista</strong>
            <span>Web Developerz</span>
          </div>
        </div>

        <time title="30 de Agosto às 09:44h" dateTime="2022-08-30 09:43:42">
          Publicado há uma 1h
        </time>
      </header>
      <div className={styles.content}>
        <p> Fala galeraa 👋 </p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          👉 <a href="#"> jane.design/doctorcare</a>
        </p>
        <p>
          <a href="#">#novoprojeto #nlw #rocketseat</a>{' '}
        </p>
      </div>
    </article>
  )
}
