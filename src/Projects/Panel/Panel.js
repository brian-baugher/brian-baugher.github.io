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
            <div className={style.column_container}>
                <h1>Title</h1>
                <p>Ut tempor est nulla adipisicing occaecat ipsum nostrud exercitation nulla proident consectetur dolore quis irure.</p>
                <p>tech stack</p>
            </div>
            <div className={`${style.column_container} ${style.link_container}`}>
                <div className={style.links}>
                    <a>demo</a>
                    <a>code</a>
                </div>
            </div>
        </div>
    )
}