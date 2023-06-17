import { Box, ButtonBase, Chip, Grid, Paper, Typography } from "@mui/material"
import styled from "@emotion/styled";

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

const styles = {
    container: {
        margin: 'auto',
        maxWidth: 500,
        flexGrow: 1,
        boxShadow: 'none'
    },
    card: {
        border: '1px solid #D3D3D3',
        borderRadius: '10px',
        overflow: 'hidden',
        flexWrap: 'unset ',
        my: 2
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

export const CardList = () => {

    const lectures = [
        {
            _id: 'l101',
            name: 'בריאות וכושר',
            fields: ['כושר', 'בריאות'],
            lecturer: {
                name: "דני סנדרסון"
            },
            thumbnail: 'https://static.wixstatic.com/media/9a28fc_23348421843d471ba7f7732071d66ec5~mv2.jpg/v1/fill/w_381,h_481,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/9a28fc_23348421843d471ba7f7732071d66ec5~mv2.jpg'
        },
        {
            _id: 'l102',
            name: 'סנכרון עצמי',
            fields: ['נפשי', 'קבלה'],
            lecturer: {
                name: "רבקה מיכאלי"
            },
            thumbnail: 'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fHww&w=1000&q=80'
        },
        {
            _id: 'l103',
            name: 'הבנת האחר',
            fields: ['הכלה', 'פילוסופיה'],
            lecturer: {
                name: "רביד פלוטניק"
            },
            thumbnail: 'https://randomwordgenerator.com/img/picture-generator/chair-1840011_640.jpg'
        },
        {
            _id: 'l104',
            name: 'העולם ומעבר לו',
            fields: ['אסטרולוגיה'],
            lecturer: {
                name: "שלום חנוך"
            },
            thumbnail: 'https://images.pexels.com/photos/3844788/pexels-photo-3844788.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
            _id: 'l105',
            name: 'אנחנו חייזרים?',
            fields: ['פילוסופיה', 'מחקר'],
            lecturer: {
                name: "טל פרידמן"
            },
            thumbnail: 'https://cdn.akamai.steamstatic.com/steam/apps/1462570/ss_ac25277f95e6dde71a5ddafd933edbd78f0b409c.1920x1080.jpg?t=1662047426'
        },
        {
            _id: 'l106',
            name: 'ההשפעות של הטכנולוגיה',
            fields: ['טכנולוגיה', 'בריאות'],
            lecturer: {
                name: "ארקדי דוכין"
            },
            thumbnail: 'https://pbs.twimg.com/media/D8Dp0c5WkAAkvME.jpg'
        }
    ]

    return (
        <Paper sx={styles.container}>
            {lectures.map(lecture =>
                <Grid key={lecture._id} container spacing={0} sx={styles.card} >
                    <Grid item xs={4} style={{ padding: 0 }} >
                        <ButtonBase sx={styles.imageContainer}>
                            <Img alt="complex" src={lecture.thumbnail} style={styles.image} />
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
            )}
        </Paper>
    )
}