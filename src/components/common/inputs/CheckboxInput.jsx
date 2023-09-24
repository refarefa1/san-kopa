import { Checkbox, FormControlLabel } from "@mui/material";

export const CheckboxInput = (props) => {
    const { label, ...rest } = props;
    return (
        <FormControlLabel
            control={<Checkbox {...rest} />}
            label={label}
        />
    );
};