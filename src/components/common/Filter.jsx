import { useState } from "react";
import { Box, Stack, Autocomplete, TextField, Checkbox } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { useTranslation } from "react-i18next";

const styles = {
    topicSelectInput: {
        borderRadius: 3
    },
    locationSelectContainer: {
        position: 'relative',
        width: '100%'
    },
    locationSelect: {
        marginY: 2,
        width: '100%',
        "& .MuiOutlinedInput-root": {
            paddingLeft: "28px",
            paddingY: 0
        },
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            border: "none"
        },
        '& .MuiChip-deleteIcon': {
            display: 'none',
        },
        '& .MuiAutocomplete-input': {
            display: 'none',
        },

    },
    locationSelectCheckbox: {
        marginRight: 8
    },
    locationIcon: {
        position: 'absolute',
        left: 0,
        top: '50%',
        transform: 'translateY(-50%)',
        color: 'gray'
    }
};

const LocationSelect = (props) => {
    const { locations, selectedLocations, onLocationSelect } = props;
    const [isOpen, setIsOpen] = useState(false);

    const handleToggleOpen = () => {
        setIsOpen(prevIsOpen => !prevIsOpen);
    };

    const renderLocationOption = (props, option, { selected }) => (
        <li {...props}>
            <Checkbox
                icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                value={option}
                checkedIcon={<CheckBoxIcon fontSize="small" />}
                style={styles.locationSelectCheckbox}
                checked={selected || selectedLocations.includes(option)}
            />
            {option}
        </li>
    );

    const renderLocationInput = (params) => (
        <Box onClick={handleToggleOpen}>
            <TextField
                {...params}
                InputProps={{
                    ...params.InputProps,
                    endAdornment: (
                        <>
                            {params.InputProps.endAdornment}
                            <KeyboardArrowDownIcon />
                        </>
                    ),
                }}
            />
        </Box>
    );

    return (
        <Box sx={styles.locationSelectContainer}>
            <PlaceOutlinedIcon sx={styles.locationIcon} onClick={handleToggleOpen} />
            <Autocomplete
                sx={styles.locationSelect}
                open={isOpen}
                onOpen={handleToggleOpen}
                onClose={handleToggleOpen}
                multiple
                freeSolo
                disableCloseOnSelect
                disableClearable
                onChange={onLocationSelect}
                value={selectedLocations}
                options={locations}
                getOptionLabel={(option) => option}
                renderOption={renderLocationOption}
                renderInput={renderLocationInput}
            />
        </Box>
    );
};

const TopicSelect = (props) => {
    const { topics, selectedTopic, handleTopicSelect } = props;

    const { t } = useTranslation();

    const renderAutocompleteInput = (params) => (
        <TextField
            placeholder={t('Filter:callToAction')}
            {...params}
            InputProps={{
                sx: { ...styles.topicSelectInput },
                ...params.InputProps,
                type: 'search',
                startAdornment: (<><SearchIcon />{params.InputProps.startAdornment}</>),
            }}
        />
    );

    return (
        <Stack spacing={2} sx={{ width: '100%' }}>
            <Autocomplete
                freeSolo
                disableClearable
                value={selectedTopic}
                onChange={handleTopicSelect}
                options={topics}
                renderInput={renderAutocompleteInput}
            />
        </Stack>
    );
};

export const Filter = () => {
    const topics = ['אומנות', 'יצירתיות', 'העצמה', 'מוטיבציה', 'בריאות', 'כישורי חיים'];
    const locations = ['מרכז הארץ', 'צפון הארץ', 'דרום הארץ'];

    const [selectedLocations, setSelectedLocations] = useState(['מרכז הארץ']);
    const [selectedTopic, setSelectedTopic] = useState('');

    const handleLocationSelect = (event, selectedOptions) => {
        setSelectedLocations(selectedOptions);
    };

    const handleTopicSelect = (event, selectedOption) => {
        setSelectedTopic(selectedOption);
    };

    return (
        <Box sx={{ marginBottom: 2 }}>
            <TopicSelect topics={topics} selectedTopic={selectedTopic} handleTopicSelect={handleTopicSelect} />
            <LocationSelect locations={locations} selectedLocations={selectedLocations} onLocationSelect={handleLocationSelect} />
        </Box>
    );
};
