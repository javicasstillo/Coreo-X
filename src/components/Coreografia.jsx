import { useEffect, useState } from "react";
import emailjs from '@emailjs/browser';
import { db, ref, get, set, onValue } from '../firebase';

function Coreografia(){

    const [hora, setHora] = useState(0);
    const [minuto, setMinuto] = useState(0);
    const [dia, setDia] = useState("")
    const [usuarios, setUsuarios] = useState({
        usuario1: "",
        usuario2: "",
        usuario3: "",
        usuario4: "",
        usuario5: "",
        usuario6: "",   
    });
    const [mostrarCarlos, setMostrarCarlos] = useState(false);
    const [mensaje, setMensaje] = useState("Voy a Cajas");

    useEffect(() => {
        const ahora = new Date();
        setHora(ahora.getHours());
        setMinuto(ahora.getMinutes());
        setDia(ahora.getDay());

        const intervalo = setInterval(() => {
            const ahora = new Date();
            setHora(ahora.getHours());
            setMinuto(ahora.getMinutes());
        }, 1000);

        return () => clearInterval(intervalo);
    }, []);

    useEffect(() => {
        condicionLogica();
    }, [hora, minuto, dia]);

    // Listener para sincronizar mostrarCarlos con Firebase en tiempo real
    useEffect(() => {
        const estadoRef = ref(db, 'carlosEnCajas');
        const unsubscribe = onValue(estadoRef, (snapshot) => {
            const estado = snapshot.val();
            if (estado !== null) {
                setMostrarCarlos(estado);
                setMensaje(estado ? "Voy a atender" : "Voy a cajas");
            }
        });

        return () => unsubscribe();
    }, []);

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
          usuario6: "",
        });
    };

    const condicionLogica = async () => {
        let nuevoGrupo = "";

        if (hora > 13 || (hora === 13 && minuto > 50)) {
            nuevoGrupo = "grupo3";
            grupo3();
        } else if(hora >12 || (hora === 12 && minuto > 30)){
            if (dia === 1 || dia === 3 || dia === 5){
                nuevoGrupo = "grupo1";
                grupo1();
            } else if (dia === 2 || dia === 4 ){
                nuevoGrupo = "grupo2";
                grupo2();
            }
        } else if(hora >11 ||(hora === 11 && minuto >10) ){
            if (dia === 1 || dia === 3 || dia === 5){
                nuevoGrupo = "grupo1";
                grupo1();
            } else if (dia === 2 || dia === 4 ){
                nuevoGrupo = "grupo2";
                grupo2();
            }
        } else if(hora > 9 || (hora === 9 && minuto > 50)){
            if (dia === 1 || dia === 3 || dia === 5){
                nuevoGrupo = "grupo1";
                grupo1();
            } else if (dia === 2 || dia === 4 ){
                nuevoGrupo = "grupo2";
                grupo2();
            }
        } else if (hora > 8 || (hora === 8 && minuto > 30)){
            if (dia === 1 || dia === 3 || dia === 5){
                nuevoGrupo = "grupo1";
                grupo1();
            } else if (dia === 2 || dia === 4 ){
                nuevoGrupo = "grupo2";
                grupo2();
            }
            
        }

        if (nuevoGrupo) {
            const grupoRef = ref(db, 'grupoActual');
            const snapshot = await get(grupoRef);
            const grupoGuardado = snapshot.exists() ? snapshot.val() : "";

            if (nuevoGrupo !== grupoGuardado) {
                enviarCorreo();
                await set(grupoRef, nuevoGrupo); // actualiza grupo en Firebase
            }
        }
    };

    const enviarCorreo = () => {
        const parametros = {
            to_email: 'javier.castillo@naranjax.com',
            cc: 'mario.basteri@naranjax.com,florencia.brega@naranjax.com,ludmila.diaz@naranjax.com,carlos.sacon@naranjax.com,kevin.panto@naranjax.com'
        };

        emailjs.send(
            'service_y237w8l',
            'template_cu8jcw3',
            parametros,
            'JIUVSc3n_dqzZhMU2'
        );

        console.log("correo enviado");
    };

    // Actualiza estado en Firebase y local al hacer click
    const avisarCajasCarlos = async () => {
        const nuevoEstado = !mostrarCarlos;
        setMostrarCarlos(nuevoEstado);
        setMensaje(nuevoEstado ? "Voy a atender" : "Voy a cajas");

        const estadoRef = ref(db, 'carlosEnCajas');
        await set(estadoRef, nuevoEstado);
    };

    return (
        <>
            <nav className="py-3 bg-body-tertiary">
                <h3 className="text-center marca fs-1">Coreo X</h3>
            </nav>

            <main>
                <section id="coreo">
                    <div className="container justify-content-center">
                        <div className="row gy-3 py-3 justify-content-center">

                            <div className="col-12 col-md-4">
                                <div className="card h-100 align-items-center">
                                    <div className="fondo1 w-100 d-flex align-items-center justify-content-center">
                                        <h3 className="fs-1 text-white marca">Derivando</h3>
                                    </div>
                                    <div className=" d-flex gap-3 my-auto py-3">
                                        
                                        {!(usuarios.usuario1 === "Carlos" && mostrarCarlos) && (
                                            <p className="mb-0 p-2 rounded bg-secondary-subtle">{usuarios.usuario1}</p>
                                        )}
                                       
                                        {!(usuarios.usuario2 === "Carlos" && mostrarCarlos) && (
                                            <p className="mb-0 p-2 rounded bg-secondary-subtle">{usuarios.usuario2}</p>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-4">
                                <div className="card h-100 align-items-center">
                                    <div className="fondo2 w-100 d-flex align-items-center justify-content-center">
                                        <h3 className="fs-1 text-white marca">Atendiendo</h3>
                                    </div>
                                    <div className=" d-flex gap-3 my-auto py-3">
                                        
                                        {!(usuarios.usuario3 === "Carlos" && mostrarCarlos) && (
                                            <p className="mb-0 p-2 rounded bg-warning-subtle">{usuarios.usuario3}</p>
                                        )}
                                        
                                        {!(usuarios.usuario4 === "Carlos" && mostrarCarlos) && (
                                            <p className="mb-0 p-2 rounded bg-warning-subtle">{usuarios.usuario4}</p>
                                        )}
                                        
                                        {!(usuarios.usuario5 === "Carlos" && mostrarCarlos) && (
                                            <p className="mb-0 p-2 rounded bg-warning-subtle">{usuarios.usuario5}</p>
                                        )}
                                        
                                        {!(usuarios.usuario6 === "Carlos" && mostrarCarlos) && (
                                            <p className="mb-0 p-2 rounded bg-warning-subtle">{usuarios.usuario6}</p>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {mostrarCarlos && (
                                <div className="col-12 col-md-4">
                                    <div className="card h-100 align-items-center">
                                        <div className="fondo3 w-100 d-flex align-items-center justify-content-center">
                                            <h3 className="fs-1 text-white marca">En Cajas</h3>
                                        </div>
                                        <div className=" d-flex gap-3 my-auto py-3">
                                            <p className="mb-0 p-2 rounded bg-warning-subtle">Carlos</p>
                                        </div>
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>
                </section>

                <section id="botones">
                    <div className="container py-3 d-flex justify-content-center gap-3 text-center">
                        <div className="card p-3">
                            <p>Carlos</p>
                            <button className="btn btn-primary" onClick={avisarCajasCarlos}>{mensaje}</button>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="py-3 bg-body-tertiary">
                <p className="mb-3 text-center">&copy; Coreo X. Todos los derechos reservados</p>
                <p className="lead text-center">Desarrollado por: Kevin Panto - Javier Castillo</p>
            </footer>
        </>
    );
}

export default Coreografia;
