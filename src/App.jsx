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

class App extends Component {

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
