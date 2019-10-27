export const state = ()=>{
    return {
        city:"999",
        enterTime:"",
        leftTime:""
    }
}

export const mutations = {
    getCityID(state, data){
        state.city = data
    },
    getenterTime(state, data){
        state.enterTime = data
    },
    getleftTime(state, data){
        state.leftTime = data
    }
}