import { Box, ButtonBase, CardMedia, Chip, Grid, ListItem, Typography } from "@mui/material"

const styles = {
    item: {
        p: 0
    },
    gridContainer: {
        border: '1px solid #D3D3D3',
        borderRadius: '10px',
        overflow: 'hidden',
        flexWrap: 'unset ',
        mb: 2
    },
    imageContainer: {
        height: '100%',
        width: '100%',
        aspectRatio: '1 / 1',
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    info: {
        px: 1.5,
        py: 1,
        flexDirection: 'column',
        width: '100%'
    }
}

export const CardItem = (props) => {

    const { lecture } = props

    return (
        <ListItem sx={styles.item}>
            <Grid container spacing={0} sx={styles.gridContainer} >
                <Grid item xs={4} style={{ padding: 0 }} >
                    <ButtonBase sx={styles.imageContainer}>
                        <CardMedia component="img" alt="complex" src={lecture.thumbnail} style={styles.image} />
                    </ButtonBase>
                </Grid>
                <Grid item xs={8} sm container sx={styles.info}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{lecture.name}</Typography>
                    <Typography>{lecture.lecturer.name}</Typography>
                    <Box sx={{ mt: 'auto' }}>
                        {lecture.fields.map((field, idx) =>
                            <Chip sx={{ mr: '12px' }} size="small" key={idx} label={field} />
                        )}
                    </Box>
                </Grid>
            </Grid>
        </ListItem>
    )
}