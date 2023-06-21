import { List } from "@mui/material"
import { CardItem } from "./CardItem"
import { SkeletonItems } from './SkeletonItems'


const styles = {
    list: {
        maxWidth: 500,
        p: 0,
        flexGrow: 1,
        boxShadow: 'none'
    }
}

export const CardList = (props) => {

    const { items } = props

    if (!items || !items.length) return <SkeletonItems />
    return (
        <List sx={styles.list}>
            {items.map(item => <CardItem key={item._id} item={item} />)}
        </List>
    )
}