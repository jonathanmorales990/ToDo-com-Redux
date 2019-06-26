import store from '../store'

export function salva() {
	const state = store.getState().todoReducer;

	let todo = {};
	todo.descricao = state.descricao;
	todo.status = state.status;
	todo.responsavel = state.responsaveis.find(responsaveis => responsaveis.id === parseInt(state.responsaveisId, 10));	

	return { type: 'SALVA_TODO', payload: todo }
}

export function editar(){
	const state = store.getState().todoReducer;

	let todo = {};
	todo.descricao = state.descricao;
	todo.status = state.status;
	todo.responsavel = state.responsaveis.find(responsaveis => responsaveis.id === parseInt(state.responsaveisId, 10));

	let newTodos = state.todos.slice();
	newTodos[state.editandoIndex] = todo;

	return { type: 'EDITAR_TODO', payload: newTodos };
}

export function excluir(index){
	return { type: 'EXCLUI_TODO', payload: index }
} 

export function editarOpenModal(todos, index){
	return { type: 'EDITAR_OPEN_MODAL', payload: {todos, index } }
}

export function onChangeDescricao(e) {
	return { type: 'ON_CHANGE_DESCRICAO', payload:e.target.value }
}

export function onChangeStatus(e) {
	return { type: 'ON_CHANGE_STATUS', payload:e.target.value }
}

export function onChangeResponsaveis(e) {
	return { type: 'ON_CHANGE_RESPONSAVEIS', payload:e.target.value }
}

