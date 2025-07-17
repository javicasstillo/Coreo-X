import { useEffect, useState } from "react"
import emailjs from '@emailjs/browser'


function Coreografia(){

    
    const [hora, setHora] = useState(0)
    const [minuto, setMinuto] = useState(0)
    const [usuarios, setUsuarios] = useState({
        usuario1: "",
        usuario2: "",
        usuario3: "",
        usuario4: "",
        usuario5: "",
        usuario6: "",
        usuario7: "",
    })

    useEffect(() => {
        const intervalo = setInterval(() => {
            const ahora = new Date()
            setHora(ahora.getHours())
            setMinuto(ahora.getMinutes())
        }, 1000)

        return () => clearInterval(intervalo)
    }, [])

    useEffect(()=>{
        condicionLogica()
    }, [hora, minuto])

    const grupo1 = () => {
    setUsuarios({
      usuario1: "Florencia",
      usuario2: "Javier",
      usuario3: "Kevin",
      usuario4: "Luciano",
      usuario5: "Carlos",
      usuario6: "Ludmila",
    });
  };

  const grupo2 = () => {
    setUsuarios({
      usuario1: "Kevin",
      usuario2: "Ludmila",
      usuario3: "Florencia",
      usuario4: "Luciano",
      usuario5: "Carlos",
      usuario6: "Javier",
    });
  };

  const grupo3 = () => {
    setUsuarios({
      usuario1: "Carlos",
      usuario2: "Luciano",
      usuario3: "Javier",
      usuario4: "Florencia",
      usuario5: "Ludmila",
    });
}
   
    const condicionLogica = ()=>{
        if (hora > 13 || (hora === 13 && minuto > 50)) {
            grupo3()
        }  else if(hora >12 || (hora === 12 && minuto > 30)){
            grupo2()
        } else if(hora >11 ||(hora === 11 && minuto >10) ){
            grupo1()
        } else if(hora > 9 || (hora === 9 && minuto > 50)){
            grupo2()
        } else if (hora > 8 || (hora === 8 && minuto > 29)){
            grupo1()
        }
    }

    const enviarCorreo = (e)=>{
        e.preventDefault()

        const parametros = {
            to_email: 'javiercastillo.tuc@gmail.com,mario.basteri@naranjax.com',
            message: 'Mensaje de prueba',
        }

        emailjs.send(
            'service_y237w8l',
            'template_cu8jcw3',
             parametros,
            'JIUVSc3n_dqzZhMU2'
        )

        console.log("correo enviado")

    }


    return <>
        <nav className="py-3 bg-body-tertiary">
            <h3 className="text-center marca fs-1">Coreo X</h3>
        </nav>

        <main>
            <section id="coreo">
                <div className="container justify-content-center">
                    <div className="row gy-3 py-3 justify-content-center">
                        <div className="col-12 col-md-6">
                            <div className="card h-100 align-items-center">
                                <div className="fondo1 w-100 d-flex align-items-center justify-content-center">
                                    <h3 className="fs-1 text-white marca">Derivando</h3>
                                </div>
                                <div className=" d-flex gap-3 my-auto py-3">
                                    <p className="mb-0 p-2  rounded bg-secondary-subtle">{usuarios.usuario1}</p>
                                    <p className="mb-0 p-2  rounded bg-secondary-subtle">{usuarios.usuario2}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="card h-100 align-items-center">
                                <div className="fondo2 w-100 d-flex align-items-center justify-content-center">
                                    <h3 className="fs-1 text-white marca">Atendiendo</h3>
                                </div>
                                <div className=" d-flex gap-3 my-auto py-3">
                                    <p className="mb-0 p-2  rounded bg-warning-subtle">{usuarios.usuario3}</p>
                                    <p className="mb-0 p-2  rounded bg-warning-subtle">{usuarios.usuario4}</p>
                                    <p className="mb-0 p-2  rounded bg-warning-subtle">{usuarios.usuario5}</p>
                                    <p className="mb-0 p-2  rounded bg-warning-subtle">{usuarios.usuario6}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="container text-center py-3">
                    <button className="btn btn-warning text-white" onClick={enviarCorreo}>Correo de prueba</button>
                </div>
            </section>
        </main>

        <footer className="py-3 bg-body-tertiary">
            <p className="mb-3 text-center">&copy; Coreo X. Todos los derechos reservados</p>
            <p className="lead text-center">Desarrollado por: Kevin Panto - Javier Castillo</p>
        </footer>

    </>
        

}

export default Coreografia