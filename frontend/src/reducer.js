
const reducer = ( action, state) => {
    switch (action.type) {
        case 'GET_SUCESS':
            return {
              ...state,
                data: action.payload
            }
        default:
    }

    return state;
}

export default reducer