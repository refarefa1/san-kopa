import { Box } from "@mui/material"
import { useEffect, useState } from "react"
import { ProgressBar } from '../../../components/common/ProgressBar'
import { BasicUserInfo } from '../../../components/common/auth/BasicUserInfo'
import { Terms } from '../../../components/common/auth/Terms'
import { Message } from "../../../components/common/Message"

const styles = {
    signupInfoContainer: {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
    }
}


export const SignupInfo = () => {

    const [component, setComponent] = useState(1)

    const handleChange = ({ data, newComponent }) => {
        console.log(data);
        setComponent(newComponent)
    }

    const getComponentToRender = () => {
        switch (component) {
            case 1: return <BasicUserInfo handleChange={handleChange} />
            case 2: return <Terms handleChange={handleChange} />
            case 3: return <Message />
            default: return <BasicUserInfo handleChange={handleChange} />
        }
    }

    const componentToRender = getComponentToRender()

    const getProgress = () => {
        return component * 33.33
    }



    return (
        <Box sx={styles.signupInfoContainer}>
            <ProgressBar progress={getProgress()} />
            {componentToRender}
        </Box>
    )
}