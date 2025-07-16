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

    let usuario1 = "florencia" 
    let usuario2 = "javier" 
    let usuario3 = "kevin" 
    let usuario4 = "luciano" 
    let usuario5 = "carlos" 
    let usuario6 = "luciana" 
    let usuario7 = "ludmila" 

    if (hora > 16 || (hora === 16 && minuto > 30)) {
        usuario1 = "ludmila"
        usuario2 = "kevin"
        usuario3 = "kevin" 
        usuario4 = "luciano" 
        usuario5 = "carlos" 
        usuario6 = "luciana" 
        usuario7 = "ludmila" 
    } else if(hora > 8 || (hora === 8 && minuto > 50)){
        usuario1 = "javier"
        usuario2 = "florencia"
        usuario3 = "javier" 
        usuario4 = "luciano" 
        usuario5 = "carlos" 
        usuario6 = "luciana" 
        usuario7 = "florencia" 
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