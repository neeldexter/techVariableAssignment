import React, { useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from './commonOrder.module.css';



import { Card, CardContent, Typography, Grid, TextField, CardMedia, CardActionArea, CardActions, makeStyles } from '@material-ui/core';




const TopCard = (props) => {
    { console.log("common", props.commonState) }
    const [state, setState] = useState(false);

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1300 },
            items: 4
        },
        mediumDesktop: {
            breakpoint: { max: 1300, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };


    const useStyles = makeStyles({
        root: {
            maxWidth: 310,
            // maxWidth: 295,
        },
        media: {
            // height: 140,
            height: 130,
        },
    });
    const classes = useStyles();

    const handleOrder = () => {
        // alert("Work in Progress")
        console.log("okkk")
    }
    return (
        <div className={styles.topCardContainer}>

            <h5 className={styles.header}>MOST FREQUENTLY ORDERED</h5>

            <Carousel responsive={responsive}>
                {props.commonState.map(data => {

                    { console.log("Hello", data.image) }
                    return (
                        <Card className={classes.root} key={data.id}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    // image={`doc${data.id}`}
                                    image={data.image}
                                    // src={doc}
                                    title="Contemplative Reptile"

                                />
                                <CardContent>
                                    <p className={styles.cartItem}>
                                        {data.hotel}
                                    </p>
                                    <p className={styles.city}>{data.city}</p>
                                    <p className={styles.reorder} onClick={() => setState(true)}>RE-ORDER</p>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    )
                })}
            </Carousel>
            {state ? <p className={styles.errorMsg}>Work in progress... will be updated soon...</p> : null}
        </div>
    )
}

export default TopCard;