import styles from './Comment.module.css'
import trashIcon from '../assets/icons/trash.svg';
import thumbsUpIcon from '../assets/icons/thumbs-up.svg';
import { Avatar } from './Avatar'

export function Comment() {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src='https://avatars.githubusercontent.com/u/14129483?s=128&v=4'/>
            <div>
                <div id='comment'>
                    <strong>Ricardo Off</strong>
                    <time title='26 de Junho de 25 às 21:53h' 
                        dateTime='2025-06-26 21:53:43'>
                        Públicado há 1h
                    </time>
                    <p>Muito bom Dev, parabéns!!! 👏👏</p>
                    <button>
                        <img src={trashIcon} alt='Deletar comentário'/>
                    </button>
                </div>
                <footer>
                    <button>
                        <img src={thumbsUpIcon} alt='Deletar comentário'/>
                    </button>
                    Aplaudir
                    <span>33</span>
                </footer>
            </div>
        </div>
    )
}