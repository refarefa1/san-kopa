import { TextField } from "@mui/material";

export const StringInput = (props) => {
    const { required, sx, label, variant = 'outlined', ...rest } = props;
    return (
        <TextField
            required={required}
            sx={sx}
            label={label}
            variant={variant}
            {...rest}
        />
    );
};