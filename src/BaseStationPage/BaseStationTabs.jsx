import React from 'react';
import {Field, Form, Formik} from "formik";
import {UsersValidate} from "../Users/UsersValidate";
import {AntInput} from "../utils/CreateAntField";
import SaveIcon from "@material-ui/icons/Save";
import {compose} from "redux";
import {connect} from "react-redux";
import withLocalization from "../_hoc/withLocalization";
import Button from "@material-ui/core/Button";
import {Wrapper} from "./BaseStationStyles";


function BaseStationTabs({text}) {
	return (
		<Wrapper>
			<h4 className='mb2'> Остновная информация</h4>

			<Formik
				enableReinitialize
				initialValues={{
					name: "",
					login: "",
					password: "",
					email: "",
					role: "",
					note: "",
					selectOptions: ["Mark", "Bob", "Anthony"]
				}}
				validationSchema={UsersValidate}
				onSubmit={values => {
					console.log(values);
				}}
			>
				{({values, errors, handleChange, handleSubmit}) => (

					<Form onSubmit={handleSubmit}>

						<div className="clearfix flex flex-wrap">
							<div className="clearfix col md-col-2 sm-col-6 flex">
								<div className="col md-col-4 sm-col-12 ">
									<span> {text("IP адрес")}</span>
								</div>
								<div className="col md-col-8 sm-col-12 mb1">
									<Field
										name="email"
										type="email"
										component={AntInput}
										value={values.email}
										placeholder={text("Email")}
									/>
								</div>
							</div>
							<div className="clearfix md-col-6 sm-col-12 flex">
								<div className="col md-col-2 sm-col-12 ">
									<span> {text("Координаты")}</span>
								</div>
								<div className="col md-col-5 sm-col-12 mb1">
									<Field
										name="email"
										type="email"
										component={AntInput}
										value={values.email}
										placeholder={text("Email")}
									/>
								</div>
								<div className="col md-col-5 sm-col-12 mb1 flex">
									<Field
										name="email"
										type="email"
										component={AntInput}
										value={values.email}
										placeholder={text("Email")}
									/>
								</div>
							</div>

							<div className="clearfix md-col-4 sm-col-6">
								<div className="col md-col-3 sm-col-12 ">
									<span> {text("Высота, м")}</span>
								</div>
								<div className="col md-col-9 sm-col-12 mb1">
									<Field
										name="email"
										type="email"
										component={AntInput}
										value={values.email}
										placeholder={text("Email")}
									/>
								</div>
							</div>
						</div>


						<div className="clearfix mt2">
							<div className="col md-col-3 sm-col-12 ">
								<span> {text("Организация канала связи")}</span>
							</div>
							<div className="col md-col-3 sm-col-12 mb1">
								<Field
									name="email"
									type="email"
									component={AntInput}
									value={values.email}
									placeholder={text("Email")}
								/>
							</div>
							<div className="col md-col-6 sm-col-12 ">
								<Field
									name="email"
									type="email"
									component={AntInput}
									value={values.email}
									placeholder={text("Email")}
								/>
							</div>
						</div>


						<h4 className='mb2 flex'> Модель оборудования</h4>


						<div className="clearfix mt2">
							<div className="col md-col-4 sm-col-12 ">
								<span> {text("Email")}</span>
							</div>
							<div className="col md-col-8 sm-col-12 mb1">
								<Field
									name="email"
									type="email"
									component={AntInput}
									value={values.email}
									placeholder={text("Email")}
								/>
							</div>
						</div>

						<div className="clearfix mt2">
							<div className="col md-col-4 sm-col-12 ">
								<span> {text("Логин")}</span>
							</div>
							<div className="col md-col-8 sm-col-12 mb1">
								<Field
									component={AntInput}
									name="login"
									type="login"
									value={values.login}
									placeholder={text("Логин")}
								/>
							</div>
						</div>

						<div className="clearfix mt2">
							<div className="col md-col-4 sm-col-12 ">
								<span> {text("Пароль")}</span>
							</div>
							<div className="col md-col-8 sm-col-12 mb1">
								<Field
									name="password"
									type="password"
									component={AntInput}
									value={values.password}
									placeholder={text("Пароль")}
								/>
							</div>
						</div>


						<div className="clearfix mt2">
							<div className="col md-col-4 sm-col-12 ">
								<span> {text("Роль")}</span>
							</div>
							<div className="col md-col-8 sm-col-12 mb1">
								<Field
									component={AntInput}
									name="note"
									value={values.note}
									type="text"
									placeholder={text("Примечание")}
								/>
							</div>
						</div>

						<div className="submit-container mt2">
							<Button
								type="submit"
								variant="contained"
								color="primary"
								className="submitButton "
							>
								<SaveIcon className='mr1'/>
								{text("Сохранить")}
							</Button>

						</div>
					</Form>
				)}
			</Formik>


		</Wrapper>
	)
}

export default compose(
	connect(null, null),
	withLocalization
)(BaseStationTabs);
