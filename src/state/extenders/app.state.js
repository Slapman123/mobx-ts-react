import {extendObservable} from "mobx";

export const initAppState = (state) => {
    const {helpers} = state;

    extendObservable(state, {
        app:{
            testValue:40,
            inputValue: "aca",
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
        }
    })
}