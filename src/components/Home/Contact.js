import React from "react";
import usuario from "../../fmc.jpg";
import "../../style/Form.css";
import "../../style/MsgContent.css";

export default function Contact() {
	return (
		<div class='d-flex justify-content-start mb-4'>
			<img src={usuario} class='rounded-circle user_img' alt='' />
			<div class='msg_cotainer'>
				<strong>Datos de contacto</strong>
				<input
					class='form-control'
					type='text'
					value='Correo electronico'
					readonly
					style={{ marginTop: 20 }}
				/>
				<input
					class='form-control campos'
					type='text'
					value='Telefono celular'
					readonly
				/>
			</div>
		</div>
	);
}
