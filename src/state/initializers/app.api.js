import {action} from "mobx";

export const initAppAPI = (state) => {
    const {actions} = state;
    actions.app ={
        increaseTest: action("incrise",()=>{
            state.app.testValue += 1;
        }),
        decreaseTest: action("incrise",()=>{
            state.app.testValue -= 1;
        }),
        handleChange: action("handleChange", (e) => {
            state.app[e.target.name] = e.target.value;
        }),
        handleToken: action('handleToken', (token)=>{
            state.app.loggedUser = token;
        })
    }
}