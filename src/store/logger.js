import Reducer from "./Reducer"

const logger = (Reducer) => {
    return (prevState, action) => {
        console.group(action.type)

        console.log('prevState :', prevState)

        console.log('action: ', action)

        const nextState = Reducer(prevState, action)

        console.log('nextState: ', nextState)

        console.groupEnd()

        return nextState
    }
}

export default logger