import Panel from './Panel/Panel'
import style from './Projects.module.css'
import mathesis from './32021370.PNG';
import hackation from './3202180.PNG';
import portfolio from './3202180_2.PNG';
import jsg from './jsg.jpg'
import { useRef } from 'react';
import '../animate.css'
import { useObserver } from '../hooks';

const xTensivTitle = 'xTensiv.io (a Mathesis project)'
const xTensivDescription = "Full featured React web app built to help math learners navigate and study a large libary of mathematics represented in a vast directed graph. "+
"Built as a MVP to pilot the application before seeking investors, deployed to over 100 students in select math classes at UVA. "+
"Features tools to help teachers create content including: markdown/katex math support, auto-save functionality, and graph data upload/download."
const xTensivTechStack = "React | React-router | Recoil | Cytoscape.js | Firebase hosting/auth";
const xTensivLinks = ['https://www.xTensiv.io/', '']

const bitCampTitle = 'Bitcamp Hackathon'
const bitcampDescription = "Full stack web application to aid users in studying built in under 36 hours with team of 3."+
"Features include: a serverless, distrubuted DB for data security/persistance and a friends system with live feed updates." +
"This was my first project in web dev, I had to learn Django from the ground up while building this."
const bitcampTechStack = "Bootstrap HTML | Django | CockroachDB | Auth0"
const bitcampLinks = ["https://devpost.com/software/hoosterrapin" ,"https://github.com/brian-baugher/BitCamp2023"]


const portfolioTitle = 'This Portfolio!'
const portfolioDescription = 'Portfolio built to practice my React development. xTensiv was my first time using React'+
' so this was a good chance to practice what I learned and try new things outside of work.'
const  portfolioTechStack = 'React | CSS | Github Actions/Pages'
const portfolioLinks = ['', 'https://github.com/brian-baugher/brian-baugher']

const jsgTitle = 'Consulting Group Website'
const jsgDescription = 'Work in progress website built for Jefferson Consulting Group, a corporate-backed student run consulting firm at UVA. '+
'Loved this project as my first foray into SvelteKit, added TypeScript to allow for easier future maintenance. ' +
'Built with an emphasis on best practices and mobile compatibility throughout.'
const jsgTechStack = 'SvelteKit | TypeScript | Netlify | GitHub Actions'
const jsgLinks = ['https://storied-concha-d0585a.netlify.app/', 'https://github.com/brian-baugher/jefferson-consulting-group']

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
                        <Panel priority={'second'} image={jsg} links={jsgLinks}
                        title={jsgTitle} description={jsgDescription} tech_stack={jsgTechStack}/></div>
                    <div className={`${style.wrapper2} hidden`} ref={panel3}>
                        <Panel priority={'third'} image={hackation} links={bitcampLinks}
                        title={bitCampTitle} description={bitcampDescription} tech_stack={bitcampTechStack}/></div>
                </div>
            </div>
        </div>
    )
}