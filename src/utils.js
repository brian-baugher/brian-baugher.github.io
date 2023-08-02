export function scrollTo(ref){
    let vh = window.innerHeight;
    let fiveVH = .05*vh;
    window.scrollTo({
      top: ref.current.offsetTop - fiveVH,
      behavior: 'smooth',
    });
  };