import { Box, Grid, Skeleton } from "@mui/material"

const SKELETON_HEIGHT = '114px'

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        gap: 2
    },
    skeletonContainer: {
        height: SKELETON_HEIGHT,
        width: '100%',
        display: 'flex'
    },
    imageSkeletonContainer: {
        height: '100%'
    },
    imageSkeleton: {
        transform: 'unset',
        height: '100%',
        width: '100%'
    },
    infoSkeletonContainer: {
        paddingLeft: 2,
        display: 'flex',
        flexDirection: 'column'
    },

}

export const SkeletonItems = () => {
    return (
        <Box sx={styles.container}>
            {[...Array(10)].map((_, idx) =>
                <Grid container sx={styles.skeletonContainer} key={idx} >
                    <Grid xs={4} item sx={styles.imageSkeletonContainer}>
                        <Skeleton sx={styles.imageSkeleton} />
                    </Grid>
                    <Grid xs={8} item sx={styles.infoSkeletonContainer}>
                        <Skeleton variant="text" sx={{ width: '80%', height: 48, marginTop: -1 }} />
                        <Skeleton variant="text" sx={{ width: '60%', height: 24, marginTop: -1 }} />
                    </Grid>
                </Grid>
            )}
        </Box>
    )
}