
const INITIAL_STATE = {
    isSignedIn: null,
    userId: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SIGN_IN':
            // if there is a status specified we return that, if not, we simply change the status the state has
            console.log('ACTION', action);
            return { ...state, isSignedIn: true, userId: action.userId };
        case 'SIGN_OUT':
            return { state, isSignedIn: false, userId: null };
        default:
            return state;
    }
}
