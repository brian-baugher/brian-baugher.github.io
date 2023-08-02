import Panel from './Panel/Panel'
import style from './Projects.module.css'
import mathesis from './32021370.PNG';
import hackation from './3202180.PNG';
import portfolio from './3202180_2.PNG';
import { useRef } from 'react';
import '../animate.css'
import { useObserver } from '../hooks';

let xTensivTitle = 'xTensiv.io (a Mathesis project)'
let xTensivDescription = "Full featured React web app built to help math learners navigate and study a large libary of mathematics represented in a vast directed graph. "+
"Built as a MVP to pilot the application before seeking investors, deployed to over 100 students in select math classes at UVA. "+
"Features tools to help teachers create content including: markdown/katex math support, auto-save functionality, and graph data upload/download."
let xTensivTechStack = "React | react-router | recoil | cytoscape.js | firebase hosting/auth";
let xTensivLinks = ['https://www.xTensiv.io/', '']

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
                    <div className={`hidden`} ref={panel1}><Panel priority={'first'} image={mathesis}
                    title={xTensivTitle} description={xTensivDescription} tech_stack={xTensivTechStack} 
                    hidden links={xTensivLinks}/></div>
                </div>
                <div className={style.bottom}>
                    <div className={`${style.wrapper1} hidden`} ref={panel2}>
                        <Panel priority={'second'} image={hackation} links={[2,2]}/></div>
                    <div className={`${style.wrapper2} hidden`} ref={panel3}>
                        <Panel priority={'third'} image={portfolio} links={[2,2]}/></div>
                </div>
            </div>
        </div>
    )
}