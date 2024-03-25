import { useTranslation } from "react-i18next"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Thankyou = () => {
const {t} = useTranslation("global")
const navigate = useNavigate()

useEffect(() => {
    // Lógica para mostrar el componente durante 3 segundos
    const timer = setTimeout(() => {
      // Redirigir a otra ruta después de 3 segundos
      navigate('/');
    }, 3000);

    // Limpieza del temporizador si el componente se desmonta antes de que se complete el temporizador
    return () => clearTimeout(timer);
  }, [navigate]);

    return(
        <section className="h-screen w-[100vw]">
            <div className="text-center w-full mx-auto flex justify-center h-[100vh] items-center max-w-[30%] text-pink-800 font-semibold poppins-regular gap-4 text-2xl">
            <p>{t("contact.message_thanks")}</p>
            </div>
        </section>
    )
}

export default Thankyou