import Panel from './Panel/Panel'
import style from './Projects.module.css'

export default function Projects(){
    return(
        <div className={style.projects}>
            <strong>Projects</strong>
            <div className={style.panels}>
                <div className={style.top}>
                    <Panel priority={'first'}/>
                </div>
                <div className={style.bottom}>
                    <Panel priority={'second'}/>
                    <Panel priority={'third'}/>
                </div>
            </div>
        </div>
    )
}