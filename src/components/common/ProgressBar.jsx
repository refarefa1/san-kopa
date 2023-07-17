import { Box, LinearProgress } from "@mui/material"

const styles = {
    container: {
        width: '90%',
        marginX: 'auto',
        mb: 3
    },
    ProgressBar: {
        height: 12,
        borderRadius: 5,
    }
}

export const ProgressBar = (props) => {
    const { progress } = props
    return (
        <Box sx={styles.container}>
            <LinearProgress variant="determinate" value={progress} sx={styles.ProgressBar} color="inherit" />
        </Box>
    )
}