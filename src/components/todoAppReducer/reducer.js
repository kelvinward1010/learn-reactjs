import { ADD_JOB, DELETE_JOB, SET_JOB } from "./constants"

// 1. init
export const initState = {
    job: '',
    jobs: []
}
const reducer = (state, action) => {

    // console.log('Action', action)
    // console.log('Prev state', state)

    // let newState

    switch (action.type) {
        case SET_JOB:
            return {
                ...state, 
                job: action.payload
            }
            // break
        case ADD_JOB:
            return {
                ...state, 
                //job:'',
                jobs: [...state.jobs, action.payload]
            }
            //break
        case DELETE_JOB:
            const newJobs = [...state.jobs]
            newJobs.splice(action.payload, 1)
            return {
                ...state, 
                jobs: newJobs
            }
            //break
        default:
            throw new Error('Invalid action.')
    }
    // console.log('New State', newState)
    // return newState
}

export default reducer