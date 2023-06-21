/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Tab, Box, Container, Tabs } from "@mui/material";
import { Filter } from "../../../components/common/Filter";
import { CardList } from "../../../components/common/CardList";
import { NavBar } from "../../../components/common/NavBar";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import { loadLectures } from "../../../store/actions/LectureActions";

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
    },
    container: {
        p: 0,
        m: 0
    }
}

const LecturePage = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadLectures())
    }, [])

    const lectures = useSelector(state => state.lectureModule.lectures)

    return (
        <Container sx={styles.container}>
            <Filter />
            <CardList items={lectures} />
        </Container>
    );
};

const InstructorPage = () => {
    return (
        <Container sx={styles.container}>
            <Filter />
            <CardList />
        </Container>
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
        <Container sx={{ pb: 10 }}>
            <Box sx={{ py: 2 }}>
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
