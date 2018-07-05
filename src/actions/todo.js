import store from '../store'

export function salva() {

	const state = store.getState().todoReducer;

	let todo = {};
	todo.descricao = state.descricao;
	todo.status = state.status;
	todo.responsavel = state.responsaveis.find(responsaveis => responsaveis.id === parseInt(state.responsaveisId, 10));	

	return { type: 'SALVA_TODO', payload: todo }

}

export function excluir(index){

	const state = store.getState().todoReducer;
	let filtered = state.todos.filter((_, i) => i !== index);
	console.log(filtered);
	return { type: 'SALVA_TODO', payload: filtered }

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