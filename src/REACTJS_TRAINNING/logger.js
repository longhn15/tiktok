
export default function logger(reducer) {

    return (prevState, action) => {

        console.group(action.type)
        console.log('Prev_State: ', prevState)

        console.log('Action: ', action)

        const newState = reducer(prevState, action)

        console.log('Next_State: ', newState)

        console.groupEnd()
        return newState
    }
}

