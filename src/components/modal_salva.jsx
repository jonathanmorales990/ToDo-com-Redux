import React, { Component } from 'react';

import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';

import { salva, onChangeDescricao, onChangeStatus, onChangeResponsaveis  } from '../actions/todo';

class ModalSalva extends Component {

	constructor(props) {

		super(props);

	}

	render() {
		return (
			<div className="light-modal" id="open-modal-novo" role="dialog" aria-labelledby="light-modal-label" aria-hidden="false">

				<div className="light-modal-content animated zoomInRight ">
					<div className="light-modal-header ">
						<h3 className="light-modal-heading">Nova Task</h3>
						<a href="#" className="light-modal-close-icon" aria-label="close">&times;</a>
					</div>

					<div className="light-modal-body">

						<div className="form-container">		
							<textarea value={this.props.todoReducer.descricao} onChange={ this.props.onChangeDescricao } className="form-descricao" type="text" placeholder="Descrição"/>

							<select className="form-select" onChange={this.props.onChangeStatus} value={this.props.todoReducer.status}>
								<option value="pendentes">Pendente</option>
								<option value="emproducao">Em produção</option>
								<option value="resolvido">Resolvido</option>
							</select>
							<select className="form-select" onChange={this.props.onChangeResponsaveis} value={this.props.todoReducer.responsaveisId} >
								<option value="1">Usuário 1</option>
								<option value="2">Usuário 2</option>
								<option value="3">Usuário 3</option>
								<option value="4">Usuário 4</option>
								<option value="5">Usuário 5</option>
								<option value="6">Lisa Helma Davoz</option>
							</select>

							<a href="#" aria-label="close"><button className="cria-taks-button-form" onClick={this.props.salva}> <span className="textButton">Adicionar Task</span> </button></a>

						</div>

					</div>
				</div>

			</div>	
		)
	}
}

const mapStateToProps = state => ({ todoReducer: state.todoReducer });
const mapDispatchToProps = dispatch => bindActionCreators({ salva, onChangeDescricao, onChangeStatus, onChangeResponsaveis  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ModalSalva);