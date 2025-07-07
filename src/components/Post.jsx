import styles from './Post.module.css'
import { Comment } from './Comment'
import { Avatar } from './Avatar'

import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR';

export function Post({ author, publishedAt, content }) {

    /* 
    // Javascript native lib
    const dateFormat = new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: 'long',
        hour: '2-digit',
        minute: '2-digit',
    }).format(publishedAt) 
    */

    const dateFormat = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", { locale: ptBR })
    const dateRelativeToNow = formatDistanceToNow(publishedAt, { locale: ptBR, addSuffix: true })

    return (
        <article className={styles.post}>
            <header>
                <Avatar src={author.avatarUrl}/>
                <div>
                    <strong>{author.name}</strong>
                    <span>{author.role}</span>
                </div>
                <time title={dateFormat} 
                    dateTime={publishedAt.toISOString()}>
                    Publicado {dateRelativeToNow}
                </time>
            </header>

            <div id='content'>
                {content.map((line, index) => {
                    switch(line.type) {
                        case 'paragraph' : 
                            return (
                                <p key={index}>{line.content}</p>
                            )
                        case 'link' : 
                            return ( 
                                <p key={index}>
                                    <a href={line.content} target='_blank'>{line.content}</a>
                                </p>
                            )
                    }
                })}
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