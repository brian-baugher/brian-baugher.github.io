import style from './Panel.module.css'

export default function Panel({ priority, image, title, description, links }){
    function getClass(){
        switch(priority){
            case 'first': return style.first;
            case 'second': return style.second;
            case 'third': return style.third;
        }
    }

    return (
        <div className={getClass()}>
            
        </div>
    )
}