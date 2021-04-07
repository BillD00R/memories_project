import React, { useState } from 'react';
import { Avatar, Paper, Grid, Typography, Container, Button } from '@material-ui/core';
import { GoogleLogin } from 'react-google-login';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './styles';
import Input from './Input.js';
import Icon from './icon';

const Auth = () => {
    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false);
    const [isSignUp, setIsSignUp] = useState(true);

    const handleSubmit = () => {};
    const handleChange = () => {};
    const handleShowPassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };
    const switchMode = () => {
        setIsSignUp((prevIsSignUp) => !prevIsSignUp);
    };

    const Name = isSignUp && (
        <>
            <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
            <Input name="lastName" label="Last Name" handleChange={handleChange} half />
        </>
    );

    const repeatPassword = isSignUp && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" />;

    const signUpText = isSignUp ? 'Sign Up' : 'Sign In';
    return (
        <Container className={classes.main} maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h5">{signUpText}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing="2">
                        {Name}
                        <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
                        {repeatPassword}
                    </Grid>
                    <GoogleLogin
                        clientId="GOOGLE ID"
                        render={(renderProps) => (
                            <Button className={classes.googleButton} color="Primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant="contained">
                                Google Sign In
                            </Button>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy="single_host_origin"
                    />
                    <Button type="submit" color="primary" className={classes.submit} fullWidth variant="contained">
                        {signUpText}
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Button onClick={switchMode}>{isSignUp ? 'Already have an account? Sign In' : 'Don\'t have an account? Sign Up'}</Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    );
};

export default Auth;
