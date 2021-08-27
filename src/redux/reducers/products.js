import initialState from './initialState';

export default function products(state = initialState.products, action) {
  switch(action.type){
    case 'RESTOCK':
      return ;
    case 'SELL':
      const prod_id = state[state.findIndex(product => product.id === action.id)] 
      if(prod_id){
        return state.map()
      }
      break;
     default:
       return state;
  }
}