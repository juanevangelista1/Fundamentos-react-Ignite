import { SideBar } from './components/Sidebar'
import { useState } from 'react'
import { Header } from './components/Header'
import { Post } from './components/Post'
import './global.css'
import styles from './App.module.css'

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <SideBar />
        <main>
          <Post />
        </main>
      </div>
    </>
  )
}

export default App
