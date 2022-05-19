import React from "react";
import usuario from "../../fmc.jpg";
import "../../style/Form.css";
import "../../style/MsgContent.css";

export default function Birthday() {
	return (
		<div class='d-flex justify-content-start mb-4'>
			<img src={usuario} class='rounded-circle user_img' alt='' />
			<div class='msg_cotainer'>
				<strong>¿Cual es tu fecha de nacimiento?</strong>
				<input
					class='form-control'
					type='text'
					value='Dia'
					readonly
					style={{ marginTop: 20 }}
				/>
				<input class='form-control campos' type='text' value='Mes' readonly />
				<input class='form-control campos' type='text' value='Año' readonly />
			</div>
		</div>
	);
}
