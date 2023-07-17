import { Button, useTheme } from "@mui/material"
import { Box } from "@mui/system"
import { useNavigate } from "react-router"
// import { Logo } from "../../svgs/Logo"

const styles = {
    header: {
        display: 'flex',
        alignItems: 'center',
        position: 'sticky',
        top: 0,
    },
    loginBtn: {
        borderRadius: 4,
        px: 2,
        py: 1
    }
}

export const AppHeader = () => {

    const theme = useTheme()
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/login')
    }

    return (
        <Box
            sx={{
                px: theme.layout.padding,
                height: theme.sizes.headerHeight,
                bgcolor: theme.palette.primary.main,
                zIndex: theme.sizes.headerZIndex,
                ...styles.header
            }}
        >
            <Button
                sx={{
                    color: theme.palette.secondary.main,
                    borderColor: theme.palette.secondary.main,
                    ...styles.loginBtn
                }}
                onClick={handleClick}
                variant="outlined">
                כניסה
            </Button>
        </Box>

    )
}