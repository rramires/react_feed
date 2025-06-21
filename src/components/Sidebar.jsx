import styles from './Sidebar.module.css';
import profileTop from '../assets/profile-top.jpg';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>

            <img id='top' src={profileTop} />

            <div id='profile'>
                <img id='avatar' src="https://avatars.githubusercontent.com/u/14129483?s=128&v=4" />

                <strong>Ricardo Off</strong>
                <span>Developer</span>
            </div>

            <footer>
                <a href="#">   
                    <span>Editar seu perfil</span>
                </a>
            </footer>
        </aside>
    )
}