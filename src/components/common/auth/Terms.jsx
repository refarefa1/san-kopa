import { Box, Button, Typography, useTheme } from "@mui/material"

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        width: '90%',
        marginX: 'auto',
    },
    button: {
        mt: 'auto',
        mb: 4
    },
    terms:{
        lineHeight:1.4
    }
}


export const Terms = (props) => {
    const { handleChange } = props

    const theme = useTheme()

    const text = `תנאי השימוש שלהלן חלים על השימוש באתרי האינטרנט ובאפליקציות, המופעלות ומנוהלות על ידי ידיעות אחרונות בע"מ ו/או ידיעות תקשורת בע"מ ו/או מנטה מגזין (שותפות) ו/או ידיעות שורות בע"מ ו/או ראש 1-שבועון (שותפות) ו/או לוח ידיעות אחרונות בע"מ, מרחוב נח מוזס 1, ראשון לציון (להלן בהתאמה: "ידיעות אחרונות", "ידיעות אינטרנט" וביחד: "ידיעות").    תנאי שימוש אלה חלים ביחס לאתרים וליישומים המפורטים להלן:    אתר ynet המופעל על ידי ידיעות אינטרנט באתר האינטרנט ובאפליקציה המותאמת (אפליקציית Ynet) (להלן ביחד: "האתר");    אתר ויישום הפרימיום של +ynet (להלן: +ynet);    ואולם בכל סתירה בין הוראת תנאי שימוש אלה והוראות תנאי השימוש המפורסמים בזירת +ynet יגבר האמור בתנאי השימוש האחרונים המיועדים לשירות +ynet.`

    return (
        <Box sx={styles.container}>
            <Typography variant="h5">
                תנאי השימוש
            </Typography>
            <Typography
                sx={{
                    ...styles.terms
                }}>
                {text}
            </Typography>

            <Button
                sx={{
                    height: theme.sizes.inputHeight,
                    ...styles.button
                }}
                type="submit"
                variant="contained"
                disableElevation>
                המשך
            </Button>
        </Box>
    )
}