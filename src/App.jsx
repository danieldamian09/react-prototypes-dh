import {useState} from "react";
// import ListadoMensajes from "./components/LIstadoMensajes";
// import VistaMensaje from "./components/VistaMensaje";
// import { mensajes } from "./data/mensajes";

import "./App.css";
import ListadoMensajes from "./components/ListadoMensajes";
import VistaMensaje from "./components/VistaMensajes";
import {mensajes} from "./data/mensajes";

export default function App() {
	const [mensaje, setMensaje] = useState();

	const seleccionarMensaje = (id) =>
		setMensaje(mensajes.find((m) => m.id === id));

	// NUESTRA APLICACION TIENE DOS COMPONENTES REPRESENTACIONALES,
	// QUE SON ALIMENTADOS POR INFORMACIÓN QUE PUEDE PROVENIR, POR EJEMPPLO,
	// DE UNA API. PARA EVITAR ERRORES INESPERADOS, LO MEJOR ES UTILIZAR
	// PROPTYPES PARA DECLRARAR EL TIPO DE DATOS QUE ESPERA CADA UNO DE
	// DICHOS COMPONENTES. PODEMOS HACER ESTO EN CADA UNO DE LOS ARCHIVOS EN
	// DONDE SE ENCUENTRAN LOS MISMOS.
	return (
		<div className="App">
			<h1>Bandeja de Entrada</h1>
			<div id="bandejaDeEntrada">
				<ListadoMensajes
					mensajes={mensajes}
					seleccionarMensaje={seleccionarMensaje}
				/>
				<VistaMensaje mensaje={mensaje} />
			</div>
		</div>
	);
}
