import gitLogo from 'C:/Users/jemil/Desktop/projects/ayso/src/assets/github.svg';
import linkedInLogo from 'C:/Users/jemil/Desktop/projects/ayso/src/assets/linkedin-svgrepo-com.svg'
import './media.css';

const Media = () => {
    return (
        <div>
            <a href="">
                <img src={gitLogo} className="media-logo"/> 
            </a>
            <a href="">
                <img src={linkedInLogo} className="media-logo"/> 
            </a>
        </div>

    )
}

export default Media;