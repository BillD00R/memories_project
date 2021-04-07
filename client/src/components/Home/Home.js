import React from 'react';
import {Grow, Grid, Container} from '@material-ui/core';
import {useDispatch} from 'react-redux';
import {useState, useEffect} from 'react';

import Posts from '../Posts/Posts';
import Form from '../Form/Form';
import {getPosts} from '../../actions/posts';

const Home = () => {
    const [currentId, setCurrentId] = useState(0);
    // const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    return (
        <Grow in>
            <Container>
                <Grid container justify="space-between" align="items" spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <Posts setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    );
};

export default Home;
