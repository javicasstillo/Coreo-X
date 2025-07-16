import { useEffect, useState } from "react"

function Coreografia(){

    
    const [hora, setHora] = useState(0)
    const [minuto, setMinuto] = useState(0)

    useEffect(() => {
        const intervalo = setInterval(() => {
            const ahora = new Date()
            setHora(ahora.getHours())
            setMinuto(ahora.getMinutes())
        }, 1000)

        return () => clearInterval(intervalo)
    }, [])

    let usuario1 = "Florencia" 
    let usuario2 = "Javier" 
    let usuario3 = "Kevin" 
    let usuario4 = "Luciano" 
    let usuario5 = "Carlos" 
    let usuario6 = "Luciana" 
    let usuario7 = "Ludmila" 

    if (hora > 13 || (hora === 13 && minuto > 50)) {
        usuario1 = "Carlos"
        usuario2 = "Luciano"
        usuario3 = "Kevin" 
        usuario4 = "Javier" 
        usuario5 = "Florencia" 
        usuario6 = "Luciana" 
        usuario7 = "Ludmila" 
    }  else if(hora >12 || (hora === 12 && minuto > 30)){
        usuario1 = "Kevin" 
        usuario2 = "Ludmila" 
        usuario3 = "Kevin" 
        usuario4 = "Luciano" 
        usuario5 = "Carlos" 
        usuario6 = "Luciana" 
        usuario7 = "Ludmila"
    } else if(hora >11 ||(hora === 11 && minuto >10) ){
        usuario1 = "Florencia" 
        usuario2 = "Javier" 
        usuario3 = "Kevin" 
        usuario4 = "Luciano" 
        usuario5 = "Carlos" 
        usuario6 = "Luciana" 
        usuario7 = "Ludmila"
    } else if(hora > 9 || (hora === 9 && minuto > 50)){
        usuario1 = "Kevin" 
        usuario2 = "Ludmila" 
        usuario3 = "Kevin" 
        usuario4 = "Luciano" 
        usuario5 = "Carlos" 
        usuario6 = "Luciana" 
        usuario7 = "Ludmila"
    } else if (hora < 9 || (hora === 9 && minuto < 50)){
        usuario1 = "Florencia" 
        usuario2 = "Javier" 
        usuario3 = "Kevin" 
        usuario4 = "Luciano" 
        usuario5 = "Carlos" 
        usuario6 = "Luciana" 
        usuario7 = "Ludmila"
    }

    return <>
        <nav className="py-3 bg-body-tertiary">
            <h3 className="text-center marca">Coreo X</h3>
        </nav>

        <main>
            <section id="coreo">
                <div className="container">
                    <div className="row py-3 justify-content-center">
                        <div className="col-12 col-md-6">
                            <div className="card h-100 align-items-center">
                                <div className="fondo1 w-100 d-flex align-items-center justify-content-center">
                                    <h3 className="fs-1 text-white">Derivando</h3>
                                </div>
                                <ul className="list-group py-3">
                                    <li className="list-group-item">{usuario1}</li>
                                    <li className="list-group-item">{usuario2}</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="card h-100 align-items-center">
                                <div className="fondo2 w-100 d-flex align-items-center justify-content-center">
                                    <h3 className="fs-1 text-white">Atendiendo</h3>
                                </div>
                                <ul className="list-group py-3">
                                    <li className="list-group-item">{usuario3}</li>
                                    <li className="list-group-item">{usuario4}</li>
                                    <li className="list-group-item">{usuario5}</li>
                                    <li className="list-group-item">{usuario6}</li>
                                    <li className="list-group-item">{usuario7}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
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