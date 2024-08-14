import {homeWorkReducer} from "../../hw08/bll/homeWorkReducer";

const initState = {
    themeId: 1,
}

export type InitialStateType = typeof initState

export const themeReducer = (state: InitialStateType = initState, action: ActionsType): InitialStateType => { // fix any
    switch (action.type) {
        // дописать

        case "SET_THEME_ID": {
            return {...state, themeId: action.id}
        }

        default:
            return state
    }
}

export const changeThemeId = (id: number) => ({ type: 'SET_THEME_ID', id }) // fix any

type ActionsType = ReturnType<typeof changeThemeId>
