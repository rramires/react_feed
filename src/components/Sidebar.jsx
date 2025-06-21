import styles from './Sidebar.module.css';
import profileTop from '../assets/profile-top.jpg';
import pencilIcon from '../assets/icons/pencil-line.svg';
//import pencilIconHover from '../assets/icons/pencil-line-hover.svg';

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
                    <img id='avatar' src={pencilIcon} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}