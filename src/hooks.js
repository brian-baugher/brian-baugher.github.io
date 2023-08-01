import { useEffect } from "react";

/**
 * 
 * @param {string} type class to toggle on/off
 * @param {Array} refs array of react refs to observe
 */
const useObserver = (type, refs) => {
    useEffect(()=>{
        const observer = new IntersectionObserver((entries)=>{
        entries.forEach((e)=>{
            if (e.isIntersecting) {
                console.log(type)
                console.log(e.target)
                e.target.classList.add(type);
            }
            else {
                e.target.classList.remove(type);
            }
        })
    });


    refs.forEach((e) => observer.observe(e.current));
    })
}

export {useObserver}