import { Box, Input, Typography, Icon, Button, useTheme } from '@mui/material';
import { useState, useRef } from 'react';
import { CameraIcon } from '../../../svgs/CameraIcon';
import { useFormRegister } from '../../../hooks/useFormRegister';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { StandardInput } from '../../../components/common/inputs/StandardInput';

const styles = {
  container: {
    width: 1,
    marginX: 'auto',
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    fontSize: 20,
    fontWeight: 700,
  },
  fileInputContainer: {
    position: 'relative',
    height: 130,
    width: 130,
    borderRadius: 30,
    marginTop: 6,
    marginBottom: 8,
    marginX: 'auto',
    overflow: 'hidden'
  },
  fileInput: {
    opacity: 0,
    position: 'absolute',
    width: '100%',
    height: '100%',
    '.MuiInput-input': {
      height: '100%',
    },
  },
  cameraIconContainer: {
    fontSize: 72,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    flexGrow: 1,
  },
  formWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  nameInput: {
    flexBasis: '45%',
  },
  textArea: {
    width: '100%',
    marginY: 2,
  },
  button: {
    width: '100%',
    fontSize: 18,
    marginTop: 'auto',
    marginBottom: 4,
  },
  image: {
    height: '100%',
    width: '100%',
    objectFit: 'cover',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    pointerEvents: 'none'
  }
};

export const BasicUserInfo = () => {
  const context = useOutletContext();
  const { handleChange, authData } = context;

  const navigate = useNavigate();
  const theme = useTheme();

  const [register, setUserInfo, userInfo] = useFormRegister(authData);
  const [file, setFile] = useState(null);

  const imageRef = useRef();

  const handleUpload = ({ target }) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(target.files[0]);
    fileReader.onload = (e) => {
      setFile(e.target.result);
      imageRef.current.src = e.target.result;
    };
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    handleChange({ ...userInfo, avatar: file });
    const { userType } = authData;
    navigate(`/signup/${userType}/terms`);
  };

  return (
    <Box sx={styles.container}>
      <Typography sx={styles.title}>עכשיו בשביל להכיר אותך קצת יותר...</Typography>
      <Box sx={{ border: `2px solid ${theme.palette.primary.main}`, ...styles.fileInputContainer }}>
        <Input type='file' sx={styles.fileInput} onChange={handleUpload} />
        <Box sx={styles.cameraIconContainer}>
          <Icon component={CameraIcon} fontSize='inherit' />
        </Box>
        <img style={styles.image} ref={imageRef} src='' alt='' />
      </Box>
      <form onSubmit={handleSubmit} style={styles.form}>
        <Box sx={styles.formWrapper}>
          <StandardInput
            type='string'
            required
            sx={styles.nameInput}
            label='שם פרטי'
            register={register}
            id='firstName'
          />
          <StandardInput
            type='string'
            required
            sx={styles.nameInput}
            label='שם משפחה'
            register={register}
            id='lastName'
          />
          <StandardInput
            type='string'
            sx={styles.textArea}
            multiline
            rows={4}
            label='כמה מילים עליך ועל ההרצאות שלך...'
            register={register}
            id='about'
          />
        </Box>
        <Button
          type='submit'
          size='large'
          sx={{
            height: theme.sizes.inputHeight,
            ...styles.button,
          }}
          variant='contained'
          disableElevation
        >
          המשך
        </Button>
      </form>
    </Box>
  );
};
