import * as types from '../action/ActionType';

const initialState = {
    headerClasses: false
};

const reduser = (state = initialState, action) => {
    switch (action.type) {
        case types.HEADER_CLASSES:
            return {
                ...state,
                headerClasses: action.value
            };
            break;
        default:
            return {
                ...state
            }
    }
};

export default reduser;