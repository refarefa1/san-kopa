import { useState } from "react";
import { Tab, Box, Container, Typography, Tabs } from "@mui/material";
import { Filter } from "../../../components/common/Filter";
import { CardList } from "../../../components/common/CardList";
import { NavBar } from "../../../components/common/NavBar";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';

const styles = {
    tab: {
        fontSize: 18,
        fontWeight: 700,
        color: 'black',
        '&.Mui-selected': {
            color: 'black'
        }
    },
    tabIndicator: {
        backgroundColor: 'black'
    }
}

const LecturePage = () => {
    return (
        <Container sx={{ padding: 0, margin: 0 }}>
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

export const HomePage = () => {

    const [component, setComponent] = useState(0);

    const navbarItems = [
        { label: 'בית', icon: <HomeOutlinedIcon /> },
        { label: 'הרצאות', icon: <FormatListBulletedOutlinedIcon /> },
        { label: 'מפגשים', icon: <CalendarMonthOutlinedIcon /> },
        { label: 'הודעות', icon: <ChatBubbleOutlineOutlinedIcon /> }
    ]

    const handleComponentChange = (event, newComponent) => {
        setComponent(newComponent);
    };

    const componentToRender = component === 0 ? <LecturePage /> : <InstructorPage />

    return (
        <Container>
            <Box sx={{ my: 2 }}>
                <Tabs value={component} onChange={handleComponentChange} TabIndicatorProps={{ style: styles.tabIndicator }}>
                    <Tab label="הרצאות" sx={styles.tab} />
                    <Tab label="מרצים" sx={styles.tab} />
                </Tabs>
            </Box>
            <Box>
                {componentToRender}
            </Box>
            <NavBar items={navbarItems} />
        </Container>
    );
};
