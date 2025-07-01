import './app.global.css'
import styles from './App.module.css';
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/14129483?v=4&size=128',
      name: 'Ricardo Off',
      role: 'Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz usando React + Vite.' },
      { type: 'link', content: 'github.com/rramires/react_feed' },
    ],
    publishedAt: new Date('2025-06-30 22:25:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/14129483?v=4&size=128',
      name: 'Ricardo Off',
      role: 'Developer'
    },
    content: [
      { type: 'paragraph', content: 'Mais um !!! 👋' },
      { type: 'paragraph', content: 'Esse é um projeto que fiz usando Typescript + Fastfy + Prisma usando padrões SOLID.' },
      { type: 'link', content: 'https://github.com/rramires/gympass_solid_api' },
    ],
    publishedAt: new Date('2025-06-30 22:35:00'),
  },
];

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
          { 
            posts.map(post => {
            return (
                <Post 
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              )
            })
          }
        </main>
      </div>
    </>
  )
}

export default App