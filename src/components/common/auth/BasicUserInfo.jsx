import {
  Box,
  Input,
  Typography,
  Icon,
  FormControl,
  TextField,
  Button,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { CameraIcon } from "../../../svgs/CameraIcon";
import { useFormRegister } from "../../../hooks/useFormRegister";

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
  },
  fileInputContainer: {
    position: "relative",
    height: 130,
    width: 130,
    borderRadius: 30,
    mt: 6,
    mb: 8,
    mx: "auto",
  },
  fileInput: {
    opacity: 0,
    position: "absolute",
    width: "100%",
    height: "100%",
    ".MuiInput-input": {
      height: "100%",
    },
  },
  cameraIconContainer: {
    fontSize: 72,
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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
    flexBasis: "45%",
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

export const BasicUserInfo = (props) => {
  const { handleChange } = props;

  const theme = useTheme();
  const initialFields = { firstName: "", lastName: "", about: "" };
  const [register, setUserInfo, userInfo] = useFormRegister(initialFields);
  const [file, setFile] = useState(null);

  const handleUpload = ({ target }) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(target.files[0]);
    fileReader.onload = (e) => setFile(e.target.result);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    handleChange({ data: { userInfo, file }, newComponent: 3 });
  };

  return (
    <Box sx={styles.container}>
      <Typography sx={styles.title}>עכשיו בשביל להכיר אותך קצת יותר...</Typography>
      <Box sx={{ border: `2px solid ${theme.palette.primary.main}`, ...styles.fileInputContainer }}>
        <Input type="file" sx={styles.fileInput} onChange={handleUpload} />
        <Box sx={styles.cameraIconContainer}>
          <Icon component={CameraIcon} fontSize="inherit" />
        </Box>
      </Box>
      <form onSubmit={handleSubmit} style={styles.form}>
        <Box sx={styles.formWrapper}>
          <TextField
            required
            sx={styles.nameInput}
            label="שם פרטי"
            variant="outlined"
            {...register("firstName")}
          />
          <TextField
            required
            sx={styles.nameInput}
            label="שם משפחה"
            variant="outlined"
            {...register("lastName")}
          />
          <TextField
            sx={styles.textArea}
            multiline
            rows={4}
            label="כמה מילים עליך ועל ההרצאות שלך..."
            variant="outlined"
            {...register("about")}
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
