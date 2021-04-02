import React, { useState, useEffect } from "react";

import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import memories from './images/memories.png';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles';
import { getPosts } from "./actions/posts";



const App = () => {
    const [currentId, setCurrentId] = useState(0);
    const classes = useStyles();
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    return (
        <div>
            <Container maxWidth="lg">
                
                <Grow in>
                    <Container>
                        <Grid container justify="space-between" align="items" spacing={3}>
                            <Grid item xs = {12} sm={7}>
                                <Posts setCurrentId={setCurrentId} />
                            </Grid>
                            <Grid item xs = {12} sm={4}>
                                <Form currentId={currentId} setCurrentId={setCurrentId} />
                            </Grid>
                        </Grid>
                    </Container>
                </Grow>
            </Container>   
        </div>
    );
}

export default App;