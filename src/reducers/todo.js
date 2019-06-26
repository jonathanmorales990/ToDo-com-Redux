import img01 from '../img/01.jpg';
import img02 from '../img/02.jpg';
import img03 from '../img/03.jpg';
import img04 from '../img/03.jpg';
import img05 from '../img/04.jpg';
import img06 from '../img/05.jpg';

const INITIAL_STATE = { 
	todos: [], 
	descricao: '', 
	status: 'pendentes', 
	responsaveisId:1, 
	editandoIndex:null, 
	responsaveis: [{

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

			}] 

}


export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
    	case 'EDITAR_OPEN_MODAL':
		return { ...state, descricao:action.payload.todos.descricao, status:action.payload.todos.status, responsaveisId:action.payload.todos.responsavel.id, editandoIndex:action.payload.index }		
    	case 'EXCLUI_TODO':
    		return { ...state, todos: state.todos.filter((_, i) => i !== action.payload) }
    	case 'EDITAR_TODO':
            	return { ...state, todos: action.payload }
        case 'SALVA_TODO':
            	return { ...state, todos: [...state.todos, action.payload] }
        case 'ON_CHANGE_DESCRICAO':
        	return { ...state, descricao: action.payload }
        case 'ON_CHANGE_STATUS':
        	return { ...state, status: action.payload }
        case 'ON_CHANGE_RESPONSAVEIS':
        	return { ...state, responsaveisId: action.payload }
        default:
           	return state
    }
}
