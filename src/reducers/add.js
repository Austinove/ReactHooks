
const initialState = {
    name: "Bryan"
}

export function add (state=initialState, action){
    switch (action.type) {
        case "Add_name":
            return {
                ...state,
                name: action.payload
            };

        default:
            return{
                state
            }
    }
}