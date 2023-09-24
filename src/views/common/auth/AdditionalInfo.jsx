import { Box, Input, Typography, FormControl, TextField, Button, useTheme, css } from "@mui/material";
import { useNavigate, useOutletContext } from 'react-router-dom';
import { useFormRegister } from "../../../hooks/useFormRegister";
import { useEffect, useState } from 'react';
import { useEffectUpdate } from '../../../hooks/useEffectUpdate';


const styles = {
    container: {
        width: 1,
        marginX: "auto",
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
    },
    title: {
        fontSize: 20,
        fontWeight: 700,
        marginBlockEnd: "1rem"
    },
    form: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        flexGrow: 1,
    },
    formWrapper: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
    nameInput: {
        flexBasis: "100%",
        marginBlockEnd: "0.5rem"
    },
    textArea: {
        width: "100%",
        my: 2,
    },
    button: {
        width: "100%",
        fontSize: 18,
        mt: "auto",
        mb: 4,
    },
};

export const AdditionalInfo = () => {
    const context = useOutletContext();
    const { authData, handleChange } = context;

    const navigate = useNavigate();

    const theme = useTheme();

    const { name, organizationalNum, areaOfOperation, description } = authData

    const initialFields = (!name && !organizationalNum, !areaOfOperation, !description) ?
        { name: '', organizationalNum: '', areaOfOperation: '', description: '' } :
        { name, organizationalNum, areaOfOperation, description }

    const [register, setOrgInfo, orgInfo] = useFormRegister(initialFields)

    const handleSubmit = () => {
        handleChange({ data: { ...orgInfo, ...authData } })
        navigate('user-info')
    }

    return (
        <Box>
            <Typography sx={styles.title}>קצת על העמותה</Typography>
            <form onSubmit={handleSubmit} style={styles.form}>
                <Box sx={styles.formWrapper}>
                    <TextField
                        required
                        sx={styles.nameInput}
                        label="שם העמותה"
                        variant="outlined"
                        {...register("name")}
                    />
                    <TextField
                        required
                        sx={styles.nameInput}
                        label="מספר אירגון"
                        variant="outlined"
                        {...register("organizationalNum")}
                    />
                    <TextField
                        required
                        sx={styles.nameInput}
                        label="תחום עיסוק העמותה"
                        variant="outlined"
                        {...register("areaOfOperation")}
                    />
                    <TextField
                        sx={styles.textArea}
                        multiline
                        rows={4}
                        label="כמה מילים על העמותה..."
                        variant="outlined"
                        {...register("description")}
                    />
                </Box>
                <Button
                    type="submit"
                    size="large"
                    sx={{
                        height: theme.sizes.inputHeight,
                        ...styles.button,
                    }}
                    variant="contained"
                    disableElevation
                >
                    המשך
                </Button>
            </form>
        </Box>
    );
};