import { githubLogo, linkedinLogo } from '@/assets/logos';
import './media.css';

const Media = () => {
    return (
        <div className='media-logo-wrapper'>
            <a href="https://github.com/Juane003/ayso.git" className='git-logo' target="_blank">
                <img src={githubLogo} className="media-logo" /> 
            </a>
            <a href="https://www.linkedin.com/in/juan-emilio-rivero-05b308237" target="_blank">
                <img src={linkedinLogo} className="media-logo"/> 
            </a>
        </div>

    )
}

export default Media;