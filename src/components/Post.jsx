import styles from './Post.module.css'
import { Comment } from './Comment'
import { Avatar } from './Avatar'

export function Post(props) {

    console.log('props: ', props)

    return (
        <article className={styles.post}>
            <header>
                <Avatar src='https://avatars.githubusercontent.com/u/14129483?s=128&v=4'/>
                <div>
                    <strong>Ricardo Off</strong>
                    <span>Developer</span>
                </div>
                <time title='26 de Junho de 25 às 21:53h' 
                    dateTime='2025-06-26 21:53:43'>
                    Públicado há 1h
                </time>
            </header>

            <div id='content'>
                <p>
                    Fala galeraa 👋 
                </p>
                <p>  
                    Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz usando React + Vite. 
                </p> 
                <p>
                    O nome do projeto é React Feed 🚀
                </p>
                <p>
                    <span>👉</span>
                    <a href="#">#novoprojeto</a>
                    <a href="#">#react+vite</a>
                </p>
            </div>

            <form id='feedback' action="#">
                <strong>Deixe seu feedback</strong>
                <textarea placeholder='Deixe um comentário'></textarea>
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div id='comments'>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}