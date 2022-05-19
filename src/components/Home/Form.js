import React from "react";
import "../../style/Form.css";
import Name from "./Name";
import Birthday from "./Birthday";
import Contact from "./Contact";

export default function Form(props) {
	const { data, name, q2, birthday, q3, contact } = props;
	console.log(data);
	console.log("q2:" + q2);
	console.log();
	return (
		<div
			class='container-fluid'
			style={{ "margin-top": 40, "margin-bottom": 80 }}>
			<Name />
			{name ? (
				<div class='d-flex justify-content-end mb-4'>
					<div class='msg_cotainer_send'>{data[0].msg}</div>
				</div>
			) : (
				<></>
			)}
			{q2 ? <Birthday /> : <></>}
			{birthday ? (
				<div class='d-flex justify-content-end mb-4'>
					<div class='msg_cotainer_send'>{data[1].msg}</div>
				</div>
			) : (
				<></>
			)}
			{q3 ? <Contact /> : <></>}
			{contact ? (
				<>
					<div class='d-flex justify-content-end mb-4'>
						<div class='msg_cotainer_send'>
							Si tus datos son correctos por favor pulse el boton verde
						</div>
					</div>
					<div class='d-flex justify-content-end mb-4'>
						<div class='msg_cotainer_send'>{data[2].msg}</div>
					</div>
					<div class='container-fluid '>
						<div class='d-flex justify-content-center'>
							Fecha de nacimiento {data[1].msg}
						</div>

						<div class='d-flex justify-content-center'>{data[2].msg}</div>
						<div class='d-flex justify-content-center'>
							Nombre: {data[0].msg}
						</div>
					</div>
				</>
			) : (
				<></>
			)}
		</div>
	);
}
