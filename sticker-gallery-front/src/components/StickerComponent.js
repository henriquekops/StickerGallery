import React from 'react';
import { Card, CardMedia } from '@mui/material';
import getSticker from '../firebase/Storage'

const styles = {
    card: {
        maxWidth: "200px",
        margin: "auto"
    },
    media: {
        heigth: "100%",
        width: "100%"
    }
}

class StickerComponent extends React.Component {
    render() {
        return <Card sx={styles.card}>
            <CardMedia 
                sx={styles.media}
                component="img"
                src={getSticker("nut.jpg")} //{require ("../static/images/cards/nut.jpg")}
                alt="nut"
            />
        </Card>
    }
}

export default StickerComponent