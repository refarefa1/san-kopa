import { Box, Button, Typography, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate, useOutletContext } from "react-router-dom";

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        width: '90%',
        marginX: 'auto',
    },
    button: {
        marginTop: 'auto',
        marginBottom: 4
    },
    terms: {
        lineHeight: 1.4
    }
};


export const Terms = () => {
    const context = useOutletContext();
    const { handleChange, authData } = context;

    const navigate = useNavigate();
    const theme = useTheme();
    const { t } = useTranslation();

    const onChange = () => {
        handleChange({ isLogin: true });
        const { userType } = authData;
        navigate(`/signup/${userType}/success`);
    };

    return (
        <Box sx={styles.container}>
            <Typography variant="h5">
                {t('Terms:terms')}
            </Typography>
            <Typography sx={styles.terms}>
                {t('Terms:description')}
            </Typography>
            <Button
                onClick={onChange}
                sx={{ height: theme.sizes.inputHeight, ...styles.button }}
                type="submit"
                variant="contained"
                disableElevation
            >
                {t('System:continue')}
            </Button>
        </Box>
    );
};