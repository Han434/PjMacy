import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "./_reducer";

export const useThemeSetting = () => {
    const dispatch = useDispatch();
    const mode = useSelector(state => state.theme.mode);
    
    const changeThemeMode = () => {
        dispatch(changeTheme());
        localStorage.setItem("mode", mode);
    }

    return {
        changeThemeMode,
        mode
    }
}

export {default as themeReducer} from "./_reducer";