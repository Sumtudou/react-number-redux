const initState = 0

export default (state = initState, action) => {
    switch (action.type) {
        case 'INCREASE':
            //state += 1
            return state + 1
        case 'DECREASE':
            //state -= 1
            return state - 1
        default:
            return state;
    }

}