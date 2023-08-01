import Panel from './Panel/Panel'
import style from './Projects.module.css'
import mathesis from './32021370.PNG';
import hackation from './3202180.PNG';
import portfolio from './bdb08.PNG'
import { useRef } from 'react';
import { useEffect } from 'react';
import '../animate.css'

export default function Projects(){
    const panel1 = useRef()
    const panel2 = useRef()
    const panel3 = useRef()

    useEffect(()=>{
        const observer = new IntersectionObserver((entries)=>{
        entries.forEach((e)=>{
            if (e.isIntersecting) {
                console.log('show')
                console.log(e.target)
                e.target.classList.add('show');
            }
            else {
                e.target.classList.remove('show');
            }
        })
    });

    const panels = [panel1, panel2, panel3];
    panels.forEach((e) => observer.observe(e.current));
    })
    
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