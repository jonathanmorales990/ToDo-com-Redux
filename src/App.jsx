import React, { Component } from 'react';

import Perfil from './components/perfil.jsx';
import List from './components/list.jsx';
import ModalSalva from './components/modal_salva.jsx';
import ModalEdit from './components/modal_edit.jsx';

import { Provider } from 'react-redux';
import store from './store';

import './css/form.scss';
import './css/App.scss';
import './css/modal.css';
import './css/animate.css';

import img01 from './img/01.jpg';
import img02 from './img/02.jpg';
import img03 from './img/03.jpg';
import img04 from './img/03.jpg';
import img05 from './img/04.jpg';
import img06 from './img/05.jpg';



class App extends Component {

	constructor(props) {

		super(props);

		this.state = {
			descricao:'',
			status:'pendentes',
			responsaveisId:1,
			editandoIndex:null,
			todos:[],
			responsaveis: [
				{

				id:1,
				nome:'Usuário 1',
				url:img02

				},
				{

				id:2,
				nome:'Usuário 2',
				url:img03

				},{

				id:3,
				nome:'Usuário 3',
				url:img04

				},{

				id:4,
				nome:'Usuário 4',
				url:img05

				},{

				id:5,
				nome:'Usuário 5',	
				url:img06

				},{
				id:6,
				nome:'Lisa Helma Davoz', 
				url:img01

				}
			]

		}


	}

	onChangeDescricao = (event) => {

		this.setState({descricao: event.target.value});

	}

	onChangeStatus = (event) => {

		this.setState({status: event.target.value});

	}

	onChangeResponsaveis = (event) => {

		this.setState({responsaveisId: event.target.value});

	}

	salva = (event) => {

		let todo = {};
		todo.descricao = this.state.descricao;
		todo.status = this.state.status;
		todo.responsavel = this.state.responsaveis.find(responsaveis => responsaveis.id === parseInt(this.state.responsaveisId, 10));

		this.setState({ todos: [...this.state.todos, todo], descricao:'' });

	}
	editarOpenModal = (todos, index) => {

		this.setState({ descricao:todos.descricao, status:todos.status, responsaveisId:todos.responsavel.id, editandoIndex:index });

	}	

	excluir = (index) => {

		this.setState({ todos: this.state.todos.filter((_, i) => i !== index) });

	}

	editar = () => {

		let todo = {};

		todo.descricao = this.state.descricao;
		todo.status = this.state.status;
		todo.responsavel = this.state.responsaveis.find(responsaveis => responsaveis.id === parseInt(this.state.responsaveisId, 10));

		let newTodos = this.state.todos.slice();
		newTodos[this.state.editandoIndex] = todo;
		this.setState({todos: newTodos, descricao:'' }); 

	}

	render() {
		return (
			<Provider store={store}>
				<div className="container-principal">

					{/*MODAL Nova Task INICIO*/}
					<ModalSalva/>
					{/*MODAL FIM*/}

					{/*MODAL edit Task INICIO*/}
					<ModalEdit/>
					{/*MODAL edit task FIM*/}

					<Perfil/>

					<List/>


				</div>
			</Provider>
		);
	}
}

export default App;
