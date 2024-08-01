const initState = {
    isLoading: false,
}

export type LoadingState = {
    isLoading: boolean
}

export const loadingReducer = (state: LoadingState = initState, action: LoadingActionType): LoadingState => { // fix any
    switch (action.type) {
        // пишет студент  // need to fix

        case "CHANGE_LOADING": {
            const {isLoading} = action
            return {...state, isLoading}
        }

        default:
            return state
    }
}

type LoadingActionType = ReturnType<typeof loadingAC>

export const loadingAC = (isLoading: boolean) => ({
    type: 'CHANGE_LOADING',
    isLoading,
}) as const
