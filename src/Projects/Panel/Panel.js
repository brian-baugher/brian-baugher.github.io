import style from './Panel.module.css'

export default function Panel({ priority, image, title, description, links }){
    function getClass(){
        switch(priority){
            case 'first': return `${style.first} ${style.panel}`;
            case 'second': return `${style.second} ${style.panel}`;
            case 'third': return `${style.third} ${style.panel}`;
        }
    }

    return (
        <div className={getClass()} style={{ backgroundImage: `url(${image})` }}>
            <p>hello</p>
        </div>
    )
}