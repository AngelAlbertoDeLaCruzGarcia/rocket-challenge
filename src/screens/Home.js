import React, { useState } from "react";
import Form from "../components/Home/Form";
import Fotter from "../components/Home/Fotter";
import Header from "../components/Home/Header";
import "../style/Form.css";

export default function Home() {
	const [txtInput, setTxtInput] = useState(0);
	const [data, setData] = useState([]);
	const [name, setName] = useState(false);
	const [q2, setQ2] = useState(false);
	const [birthday, setBirthday] = useState(false);
	const [q3, setQ3] = useState(false);
	const [contact, setContact] = useState(false);
	const nextTxtInput = () => {
		setTxtInput(txtInput + 1);
	};

	const changeName = () => {
		setName(!name);
	};
	const changeQ2 = () => {
		setQ2(!q2);
	};
	const changeBirthday = () => {
		setBirthday(!birthday);
	};
	const changeQ3 = () => {
		setQ3(!q3);
	};
	const changeContact = () => {
		setContact(!contact);
	};

	////console.log("section" + section);
	const addMsg = (msg) => {
		data.push({ msg: msg });
	};
	///console.log(q2);
	return (
		<div class='container-fluid'>
			<Header />
			<Form
				data={data}
				name={name}
				q2={q2}
				birthday={birthday}
				q3={q3}
				contact={contact}
			/>
			<Fotter
				txtInput={txtInput}
				nextTxtInput={nextTxtInput}
				addMsg={addMsg}
				changeName={changeName}
				changeQ2={changeQ2}
				changeBirthday={changeBirthday}
				changeQ3={changeQ3}
				changeContact={changeContact}
			/>
		</div>
	);
}
