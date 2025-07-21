import { useEffect, useState } from "react"

function Despertador(){

    const [hoy, setHoy] = useState("")
    const [derivacion, setDerivacion] = useState("")

    useEffect(()=>{
        traerFecha()
    }, [])

    const traerFecha =()=>{
        const fecha = new Date()
        const day = fecha.getDay()
        if (day === 0){
            setHoy("Domingo")
        } else if (day === 1){
            setHoy("Lunes")
            setDerivacion("Florencia y Javier")
        } else if (day === 2){
            setHoy("Martes")
            setDerivacion("Kevin y Ludmila")
        } else if (day === 3){
            setHoy("Miercoles")
            setDerivacion("Florencia y Javier")
        } else if (day === 4){
            setHoy("Jueves")
            setDerivacion("Kevin y Ludmila")
        } else if (day === 5){
            setHoy("Viernes")
            setDerivacion("Florencia y Javier")
        } else if (day === 6){
            setHoy("Sabado")
        }
        
    }

    return <div>
       <nav className="py-3 bg-body-tertiary">
                <h3 className="text-center marca fs-1">Coreo X</h3>
                
        </nav>

        <main>
            <div className="container py-3">
                <h3 className="text-center marca mb-3">Hoy es {hoy} 😊</h3>
                <p className="text-center">Arrancan derivando {derivacion}.</p>
            </div>
        </main>

        <footer className="py-3 bg-body-tertiary">
                <p className="mb-3 text-center">&copy; Coreo X.</p>
                <p className="mb-0 lead text-center">Desarrollado por: Kevin Panto - Javier Castillo</p>
        </footer>
    </div>
}

export default Despertador