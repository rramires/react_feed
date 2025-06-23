import './app.global.css'
import styles from './App.module.css';
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post'

function App() {
  return (
    <>
      {/* Header */}
      <Header />
      {/* Content wrapper */}
      <div className={styles.wrapper}>
        {/* Sidebar content - Profile */}
        <Sidebar />
        {/* Main content - Posts */}
        <main>
          <Post />
          <Post />
        </main>
      </div>
    </>
  )
}

export default App