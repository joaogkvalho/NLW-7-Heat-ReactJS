import { VscSignOut } from 'react-icons/vsc'

import styles from './styles.module.scss'

export function SendMessageForm(){
    return(
        <div className={styles.sendMessageFormWrapper}>
            <button className={styles.signOutButton}>
                <VscSignOut />
            </button>

            
        </div>
    )
}