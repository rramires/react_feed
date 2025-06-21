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
          <Post 
            author="Tom"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum voluptatum tempore nostrum eius. Incidunt atque blanditiis temporibus, voluptate labore doloremque sapiente rerum doloribus autem alias accusamus perspiciatis porro, fugiat odio."
          />
          <Post 
            author="Dick"
            content="Optio nulla vel aspernatur quos reprehenderit porro maxime, earum alias quis vero error iste repellat at suscipit, obcaecati autem veritatis, repellendus beatae."
          />
          <Post 
            author="Harry"
            content="Facilis vero unde incidunt aliquam laboriosam iste beatae harum placeat, aut voluptas numquam voluptatem totam sint pariatur reprehenderit dolor aspernatur. Eum et perferendis nam asperiores assumenda necessitatibus hic, eaque reiciendis quod quidem modi doloribus natus, ut illo tempore aliquid. Nesciunt quasi illum neque architecto!"
          />
        </main>
      </div>
    </>
  )
}

export default App