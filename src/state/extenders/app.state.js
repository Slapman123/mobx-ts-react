import {extendObservable} from "mobx";

export const initAppState = (state) => {
    const {helpers} = state;

    extendObservable(state, {
        app:{
            testValue:40,
            inputValue: "aca",
            loggedUser: null
        }
    });
    extendObservable(helpers, {
        app:{
            get testValue() {
                return state.app.testValue;
            },
            get inputValue() {
                return state.app.inputValue;
            },
            get loggedUser() {
                return state.app.loggedUser;
            }
        }
    })
}