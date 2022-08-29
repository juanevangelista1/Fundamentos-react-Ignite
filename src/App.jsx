import { SideBar } from './components/Sidebar'
import { useState } from 'react'
import { Header } from './components/Header'
import './global.css'
import styles from './App.module.css'

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <SideBar />
        <main>
          <h5>POSTS</h5>
        </main>
      </div>
    </>
  )
}

export default App
