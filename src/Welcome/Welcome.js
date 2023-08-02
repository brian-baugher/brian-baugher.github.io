import { useRef } from 'react'
import image from '../resources/uva_lawn_under_stars.jpg'
import style from './Welcome.module.css'
import { useObserver } from '../hooks'

export default function Welcome(){
    const square = useRef()
    useObserver('show-square', [square], true)

    return(
        <div className={style.Welcome}>
            {/*<img src={image} className={style.image}/>*/}
            <div ref={square} className={`${style.text} hidden-square`}>
                <p>Hey, I'm <strong style={{fontWeight:'bolder', fontSize:'5vmin'}}>Brian</strong></p>
                <p>Student, Developer, Forever Curious</p>
            </div>
        </div>
    )
}