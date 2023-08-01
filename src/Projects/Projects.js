import Panel from './Panel/Panel'
import style from './Projects.module.css'
import mathesis from './32021370.PNG';
import hackation from './3202180.PNG';
import portfolio from './bdb08.PNG'

export default function Projects(){
    return(
        <div className={style.projects}>
            <strong>Projects</strong>
            <div className={style.panels}>
                <div className={style.top}>
                    <Panel priority={'first'} image={mathesis}/>
                </div>
                <div className={style.bottom}>
                    <Panel priority={'second'} image={hackation}/>
                    <Panel priority={'third'} image={portfolio}/>
                </div>
            </div>
        </div>
    )
}