import style from './Navbar.module.css'
import logo from '../resources/bdb_adobe_express.svg'
import { InfoIcon, BriefcaseIcon, GraduationCapIcon, GitMergeIcon } from 'lucide-react'
import { scrollTo } from '../utils'
import resume from '../resources/resume.pdf'

export default function Navbar({welcomeScreen, aboutMe, projects}){
    return(
        <div className={style.navbar}>
            <div className={style.left}>
                {/*<img src={logo} alt='Logo' className={style.logo}/>*/}
                <p className={style.logo} onClick={() => scrollTo(welcomeScreen)}>Brian Baugher</p>
            </div>
            <div className={style.right}>
                <a className={style.resume} href={resume} download="BrianBaugherResume.pdf"><strong>Resume</strong></a>
                <InfoIcon onClick={() => scrollTo(aboutMe)} strokeWidth={1.5} size={25}/>
                <GitMergeIcon onClick={() => scrollTo(projects)} strokeWidth={1.5} size={25}/>
            </div>
        </div>
    )
}