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
        setScrollData: action('setScrollData',(data)=>{
            state.app.scrollData = data
        }),
        setLoading: action("setLoading",(data)=>{
            state.app.loading = data
        }),
        setError: action("setError",(data,er)=>{
            state.app.error = data
            state.app.errormessage = er
        }),
        setMobileMenu: action("setMobileMenu",(data)=>{
            state.app.mobilemenu = data
        }),
        setLocalization: action('setLocalization',(data)=>{
            state.app.localization = data
        }),
        setUtils: action('setUtils',(data)=>{
            state.app.utils = data
        }),
        resetUserData: action('resetUserData',()=>{
            state.app.formA = {
                username: null,
                mail: null,
                src: null,
                token: null,
            }
        }),
        setUserData: action('setUserData',(name,mail,src,token)=>{
            state.app.formA = {
                username: name,
                mail: mail,
                src: src,
                token: token,
            }
        })
    }
}