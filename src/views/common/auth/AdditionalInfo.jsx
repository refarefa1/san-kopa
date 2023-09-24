import { Box, Typography, Button, useTheme } from "@mui/material";
import { useNavigate, useOutletContext } from 'react-router-dom';
import { useFormRegister } from "../../../hooks/useFormRegister";
import { StandardInput } from '../../../components/common/inputs/StandardInput';
import { InputTypes } from "../../../types/inputs";

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
        marginY: 2,
    },
    button: {
        width: "100%",
        fontSize: 18,
        marginTop: "auto",
        marginBottom: 4,
    },
};

export const AdditionalInfo = () => {
    const context = useOutletContext();
    const { authData, handleChange } = context;

    const navigate = useNavigate();

    const theme = useTheme();

    const { name = '', organizationalNum = 0, areaOfOperation = '', description = '' } = authData;

    const initialFields = { name, organizationalNum, areaOfOperation, description };

    const [register, setOrganizationInfo, organizationInfo] = useFormRegister(initialFields);

    const handleSubmit = () => {
        handleChange(organizationInfo);
        navigate('user-info');
    };

    return (
        <Box>
            <Typography sx={styles.title}>קצת על העמותה</Typography>
            <form onSubmit={handleSubmit} style={styles.form}>
                <Box sx={styles.formWrapper}>
                    <StandardInput
                        type={InputTypes.STRING}
                        required
                        sx={styles.nameInput}
                        label="שם העמותה"
                        register={register}
                        id='name'
                    />
                    <StandardInput
                        type={InputTypes.NUMBER}
                        required
                        sx={styles.nameInput}
                        label="מספר אירגון"
                        register={register}
                        id='organizationalNum'
                    />
                    <StandardInput
                        type={InputTypes.STRING}
                        required
                        sx={styles.nameInput}
                        label="תחום עיסוק העמותה"
                        register={register}
                        id='areaOfOperation'
                    />
                    <StandardInput
                        type={InputTypes.STRING}
                        sx={styles.textArea}
                        multiline
                        rows={4}
                        label="כמה מילים על העמותה..."
                        register={register}
                        id='description'
                    />
                </Box>
                <Button
                    type="submit"
                    size="large"
                    variant="contained"
                    disableElevation
                    sx={{
                        height: theme.sizes.inputHeight,
                        ...styles.button,
                    }}
                >
                    המשך
                </Button>
            </form>
        </Box>
    );
};