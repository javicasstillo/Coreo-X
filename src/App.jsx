import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Coreografia from './components/Coreografia'
import Despertador from './components/Despertador';

import { useEffect, useState } from "react";

function App() {
    const [mostrarDespertador, setMostrarDespertador] = useState(true);

    useEffect(() => {
        const ahora = new Date();
        const hora = ahora.getHours();
        const minutos = ahora.getMinutes();
        
        const esAntesDe830 = hora < 8 || (hora === 8 && minutos < 30);

        setMostrarDespertador(esAntesDe830);
    }, []);

    return (
        <div>
            {mostrarDespertador ? <Despertador /> : <Coreografia />}
        </div>
    );
}

export default App;
