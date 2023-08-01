import image from '../resources/uva_lawn_under_stars.jpg'
import style from './Welcome.module.css'

export default function Welcome(){
    return(
        <div className={style.Welcome}>
            {/*<img src={image} className={style.image}/>*/}
            <div className={style.text}>
                <p>Hey, I'm <strong style={{fontWeight:'bolder', fontSize:'5vmin'}}>Brian</strong></p>
                <p>Student, Developer, Forever Curious</p>
            </div>
        </div>
    )
}