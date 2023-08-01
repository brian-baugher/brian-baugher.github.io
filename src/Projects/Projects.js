import Panel from './Panel/Panel'
import style from './Projects.module.css'
import mathesis from './32021370.PNG';
import hackation from './3202180.PNG';
import portfolio from './bdb08.PNG'
import { useRef } from 'react';
import '../animate.css'
import { useObserver } from '../hooks';

export default function Projects(){
    const panel1 = useRef()
    const panel2 = useRef()
    const panel3 = useRef()

    const panels = [panel1, panel2, panel3];
    useObserver('show', panels)
    
    return(
        <div className={style.projects}>
            <strong className={style.title}>Projects</strong>
            <div className={style.panels}>
                <div className={style.top}>
                    <div className={`hidden`} ref={panel1}><Panel priority={'first'} image={mathesis}/></div>
                </div>
                <div className={style.bottom}>
                    <div className={`${style.wrapper1} hidden`} ref={panel2}><Panel priority={'second'} image={hackation}/></div>
                    <div className={`${style.wrapper2} hidden`} ref={panel3}><Panel priority={'third'} image={portfolio}/></div>
                </div>
            </div>
        </div>
    )
}