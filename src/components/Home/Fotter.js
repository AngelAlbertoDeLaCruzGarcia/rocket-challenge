import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AddUserApi } from "../../api/User";

export default function Fotter(props) {
	const {
		txtInput,
		nextTxtInput,
		addMsg,
		changeName,
		changeQ2,
		changeBirthday,
		changeQ3,
		changeContact,
	} = props;
	const formik = useFormik({
		initialValues: valInicial(),
		validationSchema: Yup.object(validationSchema()),
		onSubmit: async (formData) => {
			try {
				addMsg(`${formik.values.email} ${formik.values.telefono}`);
				formData.birthday =
					formData.day + "-" + formData.month + "-" + formData.year;
				delete formData.day;
				delete formData.month;
				delete formData.year;
				console.log(formData);
				const response = await AddUserApi(formData);
				console.log(response);
			} catch (error) {
				console.log(error);
			}
		},
	});
	const detNext = () => {
		if ((txtInput === 0) & formik.errors.firstName) {
		} else if ((txtInput === 1) & formik.errors.secondName) {
		} else if ((txtInput === 2) & formik.errors.firstLastname) {
		} else if ((txtInput === 3) & formik.errors.secondLastname) {
		} else if ((txtInput === 4) & formik.errors.day) {
		} else if ((txtInput === 5) & formik.errors.month) {
		} else if ((txtInput === 6) & formik.errors.year) {
		} else if ((txtInput === 7) & formik.errors.email) {
		} else if ((txtInput === 8) & formik.errors.telefono) {
		} else {
			if (txtInput === 3) {
				addMsg(
					`${formik.values.firstName} ${formik.values.secondName} ${formik.values.firstLastname} ${formik.values.secondLastname}`
				);
				changeName();
				changeQ2();
			} else if (txtInput === 6) {
				addMsg(
					`${formik.values.day}-${formik.values.month}-${formik.values.year}`
				);
				changeBirthday();
				changeQ3();
			} else if (txtInput === 8) {
				addMsg(
					`Correo: ${formik.values.email} Telefono: ${formik.values.telefono}`
				);
				changeContact();
			}
			nextTxtInput();
		}
	};
	return (
		<nav class='navbar fixed-bottom bg-ligth'>
			<div class='container-fluid'>
				<form
					class='d-flex container-fluid form-floating'
					onSubmit={formik.handleSubmit}>
					{txtInput === 0 ? (
						<>
							<input
								className={
									formik.errors.firstName
										? "form-control is-invalid"
										: "form-control"
								}
								id='floatingInput'
								name='firstName'
								type='text'
								placeholder='Primer nombre'
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.firstName}
							/>
							<label for='floatingInput'>Primer nombre</label>
						</>
					) : txtInput === 1 ? (
						<>
							<input
								className={
									formik.errors.secondName
										? "form-control is-invalid"
										: "form-control"
								}
								id='floatingInput'
								name='secondName'
								type='text'
								placeholder='Segundo nombre'
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.secondName}
							/>
							<label for='floatingInput'>Segundo nombre</label>
						</>
					) : txtInput === 2 ? (
						<>
							<input
								className={
									formik.errors.firstLastname
										? "form-control is-invalid"
										: "form-control"
								}
								id='floatingInput'
								name='firstLastname'
								type='text'
								placeholder='Primer apellido'
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.firstLastname}
							/>
							<label for='floatingInput'>Primer apellido</label>
						</>
					) : txtInput === 3 ? (
						<>
							<input
								className={
									formik.errors.secondLastname
										? "form-control is-invalid"
										: "form-control"
								}
								id='floatingInput'
								name='secondLastname'
								type='text'
								placeholder='Segundo apellido'
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.secondLastname}
							/>
							<label for='floatingInput'>Segundo apellido</label>
						</>
					) : txtInput === 4 ? (
						<>
							<input
								className={
									formik.errors.day ? "form-control is-invalid" : "form-control"
								}
								id='floatingInput'
								name='day'
								type='text'
								placeholder='Dia'
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.day}
							/>
							<label for='floatingInput'>Dia</label>
						</>
					) : txtInput === 5 ? (
						<>
							<input
								className={
									formik.errors.month
										? "form-control is-invalid"
										: "form-control"
								}
								id='floatingInput'
								name='month'
								type='text'
								placeholder='Mes'
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.month}
							/>
							<label for='floatingInput'>Mes</label>
						</>
					) : txtInput === 6 ? (
						<>
							<input
								className={
									formik.errors.year
										? "form-control is-invalid"
										: "form-control"
								}
								id='floatingInput'
								name='year'
								type='text'
								placeholder='Año'
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.year}
							/>
							<label for='floatingInput'>Año</label>
						</>
					) : txtInput === 7 ? (
						<>
							<input
								className={
									formik.errors.email
										? "form-control is-invalid"
										: "form-control"
								}
								id='floatingInput'
								name='email'
								type='text'
								placeholder='Email'
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.email}
							/>
							<label for='floatingInput'>Email</label>
						</>
					) : (
						<>
							<input
								className={
									formik.errors.telefono
										? "form-control is-invalid"
										: "form-control"
								}
								id='floatingInput'
								name='telefono'
								type='text'
								placeholder='Telefono'
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.telefono}
							/>
							<label for='floatingInput'>Telefono</label>
						</>
					)}
					{txtInput < 10 ? (
						<button class='btn btn-success' onClick={detNext}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='16'
								height='16'
								fill='currentColor'
								class='bi bi-arrow-right-circle'
								viewBox='0 0 16 16'>
								<path
									fill-rule='evenodd'
									d='M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z'
								/>
							</svg>
						</button>
					) : (
						<button class='btn btn-success' type='submit'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='16'
								height='16'
								fill='currentColor'
								class='bi bi-send'
								viewBox='0 0 16 16'>
								<path d='M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z' />
							</svg>
						</button>
					)}
				</form>
			</div>
		</nav>
	);
}
function valInicial() {
	return {
		firstName: "",
		secondName: "",
		firstLastname: "",
		secondLastname: "",
		day: "",
		month: "",
		year: "",
		email: "",
		telefono: "",
	};
}
function validationSchema() {
	return {
		firstName: Yup.string().required(true),
		secondName: Yup.string(),
		firstLastname: Yup.string().required(true),
		secondLastname: Yup.string().required(true),
		day: Yup.number().integer().min(1, true).max(31, true).required(true),
		month: Yup.number().integer().min(1, true).max(12, true).required(true),
		year: Yup.number().integer().min(1900, true).max(2022, true).required(true),
		email: Yup.string().email(true).required(true),
		telefono: Yup.number().integer().required(true),
	};
}
