import { useRef } from 'react'
import style from './About.module.css'
import { LinkedinIcon, GithubIcon } from 'lucide-react'
import { useObserver } from '../hooks';

export default function About(){
    const skills1 = useRef();
    const skills2 = useRef();
    const skills3 = useRef();
    const skills4 = useRef();
    const skills5 = useRef();
    const skills6 = useRef();
    const skills7 = useRef();
    const skills8 = useRef();

    const about = useRef();
    const contact = useRef();
    const social = useRef();

    useObserver('show', [skills1, skills2, skills3, skills4, skills5, skills6, skills7, skills8])
    useObserver('show-basic', [about, contact, social])

    return(
        <div className={style.About}>
            <div className={style.top}>
                <div className={style.left}>
                    <div ref={contact} className={`${style.top} ${style.column} hidden-basic`}>
                        <p><strong>Email:</strong> bdb7hq@virginia.edu</p>
                        <p><strong>Phone:</strong> (540)-940-9807</p>
                    </div>
                    <div ref={social} className={`${style.bottom} ${style.logos} hidden-basic`}>
                        <a style={{textDecoration: 'none', color: 'white'}} href='https://www.linkedin.com/in/brian-baugher/' target='_blank'><LinkedinIcon strokeWidth={1.5} size={60}/></a>
                        <a style={{textDecoration: 'none', color: 'white'}} href='https://github.com/brian-baugher' target='_blank'><GithubIcon strokeWidth={1.5} size={60}/></a>
                    </div>
                </div>
                <div ref={about} className={`${style.right} hidden-basic`}>
                    <div><strong>About Me</strong></div>
                    <p> I am a fourth-year student at UVA studying Computer Science. Currently excited about web development, cloud technologies, and artificial intelligence.
                        <br/> <br/>
                        Open to work opportunies, starting after graduation in May 2025.
                        <br/>
                        <br/>
                        When I'm not at a computer I enjoy being outdoors. Recently I've been grilling lots.
                        I think some good food can solve just about any problem, well, maybe not seg faults.</p>               
                </div>
            </div>
            <div className={`${style.bottom} ${style.skills}`}>
                <p>Skills:</p>
                <img className={`${style.skill} hidden`} ref={skills1} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                <img className={`${style.skill} hidden`} ref={skills2} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                <img className={`${style.skill} hidden`} ref={skills3} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />
                <img className={`${style.skill} hidden`} ref={skills4} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
                <img className={`${style.skill} hidden`} ref={skills5} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" />
                <img className={`${style.skill} hidden`} ref={skills6} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
                <img className={`${style.skill} hidden`} ref={skills7} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" />
                <img className={`${style.skill} hidden`} ref={skills8} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" />

            </div>
        </div>
    )
}
