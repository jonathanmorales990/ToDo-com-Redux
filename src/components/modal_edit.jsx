


import React, { Component } from 'react';


class ModalSalva extends Component {

	constructor(props) {

		super(props);

	}

	render() {
		return (
			<div className="light-modal" id="open-modal-edit" role="dialog" aria-labelledby="light-modal-label" aria-hidden="false">

				<div className="light-modal-content animated zoomInRight ">
					<div className="light-modal-header ">
						<h3 className="light-modal-heading">Edit Task</h3>
						<a href="#" className="light-modal-close-icon" aria-label="close">&times;</a>
					</div>

					<div className="light-modal-body">

						<div className="form-container">		
							<textarea value={this.props.descricao} onChange={this.props.onChangeDescricao} className="form-descricao" type="text" placeholder="Descrição"/>

							<select className="form-select" onChange={this.props.onChangeStatus} value={this.props.status}>
								<option value="pendentes">Pendente</option>
								<option value="emproducao">Em produção</option>
								<option value="resolvido">Resolvido</option>
							</select>
							<select className="form-select" onChange={this.props.onChangeResponsaveis} value={this.props.responsaveisId} >
								<option value="1">Usuário 1</option>
								<option value="2">Usuário 2</option>
								<option value="3">Usuário 3</option>
								<option value="4">Usuário 4</option>
								<option value="5">Usuário 5</option>
								<option value="6">Lisa Helma Davoz</option>
							</select>

							<a href="#" aria-label="close"><button className="cria-taks-button-form" onClick={this.props.editar}> <span className="textButton">Editar Task</span> </button></a>

						</div>

					</div>
				</div>

			</div>
		)
	}
}

export default ModalSalva;