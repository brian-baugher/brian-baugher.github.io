import style from './Navbar.module.css'
import logo from '../resources/bdb_adobe_express.svg'
import { InfoIcon, BriefcaseIcon, GraduationCapIcon, GitMergeIcon } from 'lucide-react'

export default function Navbar(){
    return(
        <div className={style.navbar}>
            <div className={style.left}>
                {/*<img src={logo} alt='Logo' className={style.logo}/>*/}
                <p className={style.logo}>Brian Baugher</p>
            </div>
            <div className={style.right}>
                <InfoIcon strokeWidth={1.5} size={25}/>
                <BriefcaseIcon strokeWidth={1.5} size={25}/>
                <GraduationCapIcon strokeWidth={1.5} size={25}/>
                <GitMergeIcon strokeWidth={1.5} size={25}/>
            </div>
        </div>
    )
}