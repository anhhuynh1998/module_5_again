import React, { useReducer, useRef } from 'react'
// init state
const initState = {
    job: '',
    jobs: []
};

// action
const SET_JOB = 'set_job';
const ADD_JOB = 'add_job';
const DELETE_JOB = 'delete_job';

const setJob = (payload) => {
    return {
        type: SET_JOB,
        payload
    }
}

const addJob = (payload) => {
    return {
        type: ADD_JOB,
        payload
    }
}
const deleteJob = (payload) => {
    return {
        type: DELETE_JOB,
        payload
    }
}
// reducer 
const reducer = (state, action) => {
    switch (action.type) {
        case SET_JOB:
            return {
                ...state,
                job: action.payload
            };
        case ADD_JOB:
            return {
                ...state,
                jobs: [...state.jobs, action.payload]
            }
        case DELETE_JOB:
            const newJob = [...state.jobs]
            newJob.splice(action.payload, 1)
            return {
                ...state,
                jobs: newJob
            }
        default:
            throw new Error('Invalid action.', action.type)
    }
}
// dispatch
const TodoApp = () => {
    const [state, dispatch] = useReducer(reducer, initState)
    const { job, jobs } = state

    const inputRef = useRef()

    const handleSubmit = () => {
        dispatch(addJob(job))
        dispatch(setJob(''))

        inputRef.current.focus()
    }
    return (
        <div style={{ padding: '0 20px' }}>
            <h3>TodoApp</h3>
            <input
                ref={inputRef}
                value={job}
                placeholder=' enter todo'
                onChange={e => {
                    dispatch(setJob(e.target.value))
                }}
            />
            <button onClick={handleSubmit}>
                Add
            </button>
            <ul>
                {jobs.map((job, index) => (
                    <li key={index}>{job}
                        <button onClick={() => dispatch(deleteJob(index))}>
                            Delete
                        </button>
                    </li>
                ))}

            </ul>
        </div>
    )
}

export default TodoApp