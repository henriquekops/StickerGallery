import React from 'react';
import { Card, CardMedia, CardActions } from '@mui/material';

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
                image={require ("../static/images/cards/nut.jpg")}
                alt="nuts"
            />
        </Card>
    }
}

export default StickerComponent