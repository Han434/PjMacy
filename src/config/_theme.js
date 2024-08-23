import { createTheme, responsiveFontSizes, StyledEngineProvider, ThemeProvider } from "@mui/material"
import { useThemeSetting } from "../features"
import React from "react";

const CustomThemeProvider = ({children}) => {
    const {mode} = useThemeSetting();
    const theme = React.useMemo(() => {
        const main = createTheme({
            breakpoints: {
                keys: ["xs", "sm" , "md" , "lg", "xl"],
                values: {
                    xs: 0,     // Extra small devices (phones)
                    sm: 600,   // Small devices (tablets)
                    md: 960,   // Medium devices (small laptops)
                    lg: 1280,  // Large devices (desktops)
                    xl: 1920   // Extra large devices (large desktops)
                }
            }
        })

        return main;
    }, [mode]);

    const responsiveFontTheme = responsiveFontSizes(theme);

    return (
        <StyledEngineProvider>
            <ThemeProvider theme={responsiveFontTheme}>
                {children}
            </ThemeProvider>
        </StyledEngineProvider>
    )

}


export default CustomThemeProvider