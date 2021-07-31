import {extendObservable} from "mobx";

export const initAppState = (state) => {
    const {helpers} = state;

    extendObservable(state, {
        app:{
            testValue:40,
            inputValue: "aca",
            scrollData: 0,
            loading: false,
            error: false,
            errormessage: "",
            mobilemenu: false,
            localization: "sr-Latn",
            utils:[],
            formA:{
                username: window.localStorage.getItem('username'),
                mail: window.localStorage.getItem('mail'),
                src: window.localStorage.getItem('src'),
                token: window.localStorage.getItem('jwt'),
            }
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
            get scrollData(){
                return state.app.scrollData;
            },
            get loading(){
                return state.app.loading;
            },
            get error(){
                return state.app.error;
            },
            get mobilemenu(){
                return state.app.mobilemenu;
            },
            get localization(){
                return state.app.localization;
            },
            get utils(){
                return state.app.utils;
            },
            get formA(){
                return state.app.formA;
            },
            get errormessage(){
                return state.app.errormessage;
            }
        }
    })
}