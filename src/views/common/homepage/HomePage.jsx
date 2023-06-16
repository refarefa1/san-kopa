import { Tab, Box, Container } from "@mui/material";
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import { Filter } from "../../../components/common/Filter";
import { useState } from "react";
import { CardList } from "../../../components/common/CardList";

const sizes = {
    screenWidth: '100%'
}

const LecturePage = () => {
    return (
        <Container sx={{ width: sizes.screenWidth, padding: 0, margin: 0 }}>
            <Filter />
            <CardList />
        </Container>
    );
};


const InstructorPage = () => {
    return (
        <Box>
            <Typography variant="h2">aa</Typography>
        </Box>
    );
};

const TabPanel = (props) => {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 0 }}>
                    {children}
                </Box>
            )}
        </div>
    );
};

const a11yProps = (index) => {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
};

export const HomePage = () => {

    const [component, setComponent] = useState(0);

    const handleComponentChange = (event, newComponent) => {
        setComponent(newComponent);
    };

    return (
        <Container>
            <Box sx={{ my: '12px' }}>
                <Tabs value={component} onChange={handleComponentChange}>
                    <Tab label="הרצאות" {...a11yProps(0)} />
                    <Tab label="מרצים" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <TabPanel value={component} index={0}>
                <LecturePage />
            </TabPanel>
            <TabPanel value={component} index={1}>
                <InstructorPage />
            </TabPanel>
        </Container>
    );
};
