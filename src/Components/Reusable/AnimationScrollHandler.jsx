import { useEffect } from "react";

const AnimationScrollHandler = ({children, component, setIsVisible}) => {

    useEffect(() => {
        const handleScroll = () => {
            const aboutSection = document.getElementById(`${component}`);
            if (!aboutSection) return;
            const rect = aboutSection.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            
            // Verificar si el elemento está cerca de la parte superior de la ventana
            const isNearTop = rect.top <= windowHeight;
          
            if (isNearTop) {
              // Esperar un poco antes de activar la animación
              setTimeout(() => {
                setIsVisible(true);
              }, 100);
            }
          };
          
          window.addEventListener('scroll', handleScroll);
          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
      }, [component]);

    return(
        <>
            {children}
        </>
    )
}

export default AnimationScrollHandler