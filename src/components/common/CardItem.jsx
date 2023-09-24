import { Box, ButtonBase, CardMedia, Chip, Grid, ListItem, Typography } from "@mui/material"

const styles = {
    item: {
        padding: 0
    },
    gridContainer: {
        border: '1px solid #D3D3D3',
        borderRadius: '10px',
        overflow: 'hidden',
        flexWrap: 'unset ',
        marginBottom: 2
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
        paddingY: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'space-between',
        width: '100%'
    }
}

export const CardItem = (props) => {

    const { item } = props

    return (
        <ListItem sx={styles.item}>
            <Grid container spacing={0} sx={styles.gridContainer} >
                <Grid item xs={4} style={{ padding: 0 }} >
                    <ButtonBase sx={styles.imageContainer}>
                        <CardMedia component="img" alt="complex" src={item.thumbnail} style={styles.image} />
                    </ButtonBase>
                </Grid>
                <Grid item xs={8} sm sx={styles.info}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{item.name}</Typography>
                    <Typography>{item.lecturer.name}</Typography>
                    <Box sx={{ marginTop: 'auto' }}>
                        {item.fields.map((field, idx) =>
                            <Chip sx={{ mr: '12px' }} size="small" key={idx} label={field} />
                        )}
                    </Box>
                </Grid>
            </Grid>
        </ListItem>
    )
}