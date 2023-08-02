import { useEffect } from "react";

/**
 * 
 * @param {string} type class to toggle on/off
 * @param {Array} refs array of react refs to observe
 * @param {boolean} once true if the animation should only play once
 */
const useObserver = (type, refs, once=false) => {
    useEffect(()=>{
        const observer = new IntersectionObserver((entries)=>{
        entries.forEach((e)=>{
            if (e.isIntersecting) {
                console.log(type)
                console.log(e.target)
                e.target.classList.add(type);
            }
            else if(!once){
                e.target.classList.remove(type);
            }
        })
    });


    refs.forEach((e) => observer.observe(e.current));
    })
}

export {useObserver}