import React, { useReducer, useRef } from 'react'
import { addJob, deleteJob, setJob } from './action';
import reducer, { initState } from './reducer';

// // 1. init
// const initState = {
//     job: '',
//     jobs: []
// }

// // 2. Action
// const SET_JOB = 'set_job'
// const ADD_JOB ='add_job'
// const DELETE_JOB = 'delete_job'

// const setJob = (payload) => {
//     return {
//         type: SET_JOB,
//         payload
//     }
// }

// const addJob = (payload) => {
//     return {
//         type: ADD_JOB,
//         payload
//     }
// }

// const deleteJob = (payload) => {
//     return {
//         type: DELETE_JOB,
//         payload
//     }
// }


// //3. Redicer
// const reducer = (state, action) => {

//     console.log('Action', action)
//     console.log('Prev state', state)

//     let newState

//     switch (action.type) {
//         case SET_JOB:
//             newState = {
//                 ...state, 
//                 job: action.payload
//             }
//             break
//         case ADD_JOB:
//             newState = {
//                 ...state, 
//                 //job:'',
//                 jobs: [...state.jobs, action.payload]
//             }
//             break
//         case DELETE_JOB:
//             const newJobs = [...state.jobs]
//             newJobs.splice(action.payload, 1)
//             newState = {
//                 ...state, 
//                 jobs: newJobs
//             }
//             break
//         default:
//             throw new Error('Invalid action.')
//     }
//     console.log('New State', newState)
//     return newState
// }

function TodoAppReducer() {

    const [state, dispatch] = useReducer(reducer, initState)

    const {job, jobs} = state;

    const handleSubmit =()=> {
        dispatch(addJob(job))
        dispatch(setJob(''))

        inputRef.current.focus()
    }

    const inputRef =useRef()

    return (
        <div style={{
            padding: '10px 30px'
        }}>
            <h1>Todo</h1>
            <input
                ref={inputRef}
                value={job}
                placeholder='Enter todo...'
                onChange={(e) => {
                    dispatch(setJob(e.target.value))
                }}
            />
            <button
                onClick={handleSubmit}
            >
                Add
            </button>
            <br />
            <ul>
                {jobs?.map((job, idx) => (
                    <li key={idx} style={{display:'flex'}}>
                        <p>{job}</p>
                        <button 
                            onClick={() => dispatch(deleteJob(idx))}
                        >Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoAppReducer