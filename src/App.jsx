import { SideBar } from './components/Sidebar'
import { Header } from './components/Header'
import { Post } from './components/Post'
import './global.css'
import styles from './App.module.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/86501569?v=4',
      name: 'Juan Evangelista',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa π ' },

      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. Γ um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto Γ© DoctorCare π'
      },

      { type: 'link', content: 'π jane.design/doctorcare' }
    ],
    publishedAt: new Date('2022-08-31 18:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/mirandajunior10.png',
      name: 'JΓΊnior Miranda',
      role: 'Senior Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa π ' },

      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. Γ um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto Γ© DoctorCare π'
      },

      { type: 'link', content: 'π jane.design/doctorcare' }
    ],
    publishedAt: new Date('2022-08-28 20:00:00')
  }
]

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <SideBar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}

export default App
