import style from './Panel.module.css'

export default function Panel({ priority, image, title, description, links, tech_stack, hidden=false }){
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
                <h1>{title}</h1>
                <p>{description}</p>
                <p>{tech_stack}</p>
            </div>
            <div className={`${style.column_container} ${style.link_container}`}>
                <div className={style.links}>
                    {hidden?
                    <>
                        <a href={links[0]} target='_blank'>Live Site</a>
                        <a>Private project, contact for code samples / login</a>
                    </>
                    :
                    <>
                        <a href={links[0]} target='_blank'>demo</a>
                        <a href={links[1]} target='_blank'>code</a>
                    </>
                    }
                    
                </div>
            </div>
        </div>
    )
}