import style from './About.module.css'
import { LinkedinIcon, GithubIcon } from 'lucide-react'

export default function About(){
    return(
        <div className={style.About}>
            <div className={style.top}>
                <div className={style.left}>
                    <div className={`${style.top} ${style.column}`}>
                        <p><strong>Email:</strong> bdb7hq@virginia.edu</p>
                        <p><strong>Phone:</strong> (540)-940-9807</p>
                    </div>
                    <div className={`${style.bottom} ${style.logos}`}>
                        <LinkedinIcon strokeWidth={1.5} size={60}/>
                        <GithubIcon strokeWidth={1.5} size={60}/>
                    </div>
                </div>
                <div className={style.right}>
                    <div><strong>About Me</strong></div>
                    <p> I am a third-year student at UVA studying Computer Science. Currently excited about web development, cloud technologies, and artificial intelligence.
                        <br/>
                        Open to work opportunies, particularly for Summer 2024.
                        <br/>
                        <br/>
                        When I'm not at a computer I enjoy being outdoors. Recently I've been grilling lots.
                        I think some good food can solve just about any problem, well, maybe not seg faults.</p>                </div>
            </div>
            <div className={`${style.bottom} ${style.skills}`}>
                <p>Skills:</p>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" />

            </div>
        </div>
    )
}