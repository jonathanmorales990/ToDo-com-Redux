import React, { Component } from 'react';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';

import { excluir, editarOpenModal } from '../actions/todo';

class List extends Component {

	render() {
		return (

			<div className ="container-todo-principal">


				<div className="container-todo">

					<div>
						<span className="circle-pendentes"></span>
						<p className = "titulo-todo">Pendente</p>
						</div>  
					<div> 

					<ul className="todo-lists-top-titulos">

					<li className="todo-lists-top-empty"></li>
					<li className="todo-lists-top-descricao">Descrição</li>
					<li className="todo-lists-top-resposavel">Responsável</li>
					<li className="todo-lists-top-status">Status</li>

					</ul>

					</div>

					<div className="todo-lists-containers">
					{
						this.props.todoReducer.todos.length ? ( this.props.todoReducer.todos.map((todos, i) => { return  todos.status === 'pendentes' ? (  	
						<ul className="todo-lists" key={i}>
							<li className="todo-lists-icon"><i className="icon-drag"></i></li>
								<a href="#open-modal-edit"  onClick={this.props.editarOpenModal.bind(this, todos, i)}><li className="todo-lists-descricao">{todos.descricao}</li></a>
							<li className="todo-lists-responsavel"> 
								<img src={todos.responsavel.url} className="perfil-foto-mini"/> 
								{todos.responsavel.nome === 'Lisa Helma Davoz' ? (<strong> {todos.responsavel.nome} </strong>) : (todos.responsavel.nome) }
							</li>
							<li className="todo-lists-status"><span className="circle-pendente-mini"></span>Pendente</li>
							<li className="todo-lists-trash"><div onClick={ this.props.excluir.bind(this, i) }><i className="icon-trash floatdir"/></div></li>
						</ul> ) : null		
						})) : null
					}
					</div>
				</div>

				<div className="container-todo">

					<div>

						<span className="circle-emproducao"></span>
						<p className = "titulo-todo">Em produção</p>

					</div>

					<div> 

						<ul className="todo-lists-top-titulos">

							<li className="todo-lists-top-empty"></li>
							<li className="todo-lists-top-descricao">Descrição</li>
							<li className="todo-lists-top-resposavel">Responsável</li>
							<li className="todo-lists-top-status">Status</li>

						</ul>

					</div>

					<div className="todo-lists-containers">
						{

						this.props.todoReducer.todos.length ? ( this.props.todoReducer.todos.map((todos, i) => {

						return  todos.status === 'emproducao' ? (  		
						<ul className="todo-lists" key={i}>
							<li className="todo-lists-icon"><i className="icon-drag"></i></li>
								<a href="#open-modal-edit"  onClick={this.props.editarOpenModal.bind(this,todos,i)}><li className="todo-lists-descricao">{todos.descricao}</li></a>
							<li className="todo-lists-responsavel"> 
								<img src={todos.responsavel.url} className="perfil-foto-mini"/> 
								{todos.responsavel.nome === 'Lisa Helma Davoz' ? (<strong> {todos.responsavel.nome} </strong>) : (todos.responsavel.nome) }
							</li>
							<li className="todo-lists-status"><span className="circle-emproducao-mini"></span>Em produção</li>
							<li className="todo-lists-trash" onClick={this.props.excluir.bind(this,i)}><i className="icon-trash floatdir"/></li>
						</ul>
						) : null
						})) : null
						}
					</div>

				</div>

				<div className="container-todo">
					<div>
						<span className="circle-resolvido"></span>
						<p className= "titulo-todo">Resolvido</p>
					</div>
					<div> 

						<ul className="todo-lists-top-titulos">

							<li className="todo-lists-top-empty"></li>
							<li className="todo-lists-top-descricao">Descrição</li>
							<li className="todo-lists-top-resposavel">Responsável</li>
							<li className="todo-lists-top-status">Status</li>

						</ul>

					</div>

					<div className="todo-lists-containers">
						{

						this.props.todoReducer.todos.length ? ( this.props.todoReducer.todos.map((todos, i) => {

						return  todos.status === 'resolvido' ? (  	
						<ul className="todo-lists" key={i}>
							<li className="todo-lists-icon"><i className="icon-drag"></i></li>
								<a href="#open-modal-edit" onClick={this.props.editarOpenModal.bind(this,todos,i)}><li className="todo-lists-descricao">{todos.descricao}</li></a>
							<li className="todo-lists-responsavel"> 
								<img src={todos.responsavel.url} className="perfil-foto-mini"/>
								{todos.responsavel.nome === 'Lisa Helma Davoz' ? (<strong> {todos.responsavel.nome} </strong>) : (todos.responsavel.nome) }
							</li>
							<li className="todo-lists-status"><span className="circle-resolvido-mini"></span>Resolvido</li>
							<li className="todo-lists-trash"><div onClick={this.props.excluir.bind(this,i)}><i className="icon-trash floatdir"/></div></li>
						</ul>
						) : null

						})) : null
						}
					</div>
				</div>

			</div>
		);
	}
}
const mapStateToProps = state => ({ todoReducer: state.todoReducer });
const mapDispatchToProps = dispatch => bindActionCreators({ excluir, editarOpenModal }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(List);