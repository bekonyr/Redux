const inistialState = {
    money: 0,
}


export const Reducer = (state  = inistialState, action ) =>{
    switch(action.type){
        case "ADD_MONEY":
            return {...state, money: state.money + 1    };
        case "TAKE_MONEY":
            return {...state , money: state.money === 0 ? state.money  : state.money - 1};
            default:
                return state;
    }
}