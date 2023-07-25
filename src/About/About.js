import style from './About.module.css'

export default function About(){
    return(
        <div className={style.About}>
            <div className={style.top}>
                <div className={style.left}>
                    <div className={style.top}></div>
                    <div className={style.bottom}></div>
                </div>
                <div className={style.right}></div>
            </div>
            <div className={`${style.bottom} ${style.skills}`}></div>
        </div>
    )
}