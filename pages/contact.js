import React, { useState } from 'react';
import * as yup from 'yup';
import Head from 'next/head';
import Link from '../src/Link';
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { Grid, Typography, useMediaQuery, TextField, Button, Dialog, DialogContent, CircularProgress, Snackbar } from '@material-ui/core'

import ButtonArrow from '../src/ui/ButtonArrow';

import { Formik } from 'formik';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: "0.7rem",
        height: 35,
        padding: 5,
        [theme.breakpoints.down("sm")]: {
            marginBottom: "2em"
        }
    },
    background: {
        backgroundImage: `url("/assets/background.jpg")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "60em",
        [theme.breakpoints.down('md')]: {
            backgroundImage: `url("/assets/mobileBackground.jpg")`
        }
    },
    estimateButton: {
        ...theme.typography.estimate,
        borderRadius: 50,
        height: 80,
        width: 205,
        backgroundColor: theme.palette.common.orange,
        fontSize: "1.5rem",
        marginRight: "5em",
        marginLeft: "2em",
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        },
        [theme.breakpoints.down("md")]: {
            marginLeft: 0,
            marginRight: 0
        },
        [theme.breakpoints.down("sm")]: {
            height: 40,
            width: 255
        }
    },
    message: {
        border: `2px solid ${theme.palette.common.blue}`,
        marginTop: "5em",
        borderRadius: 5
    },
    senButton: {
        ...theme.typography.estimate,
        borderRadius: 50,
        height: 45,
        width: 245,
        fontSize: "1rem",
        backgroundColor: theme.palette.common.orange,
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        }
    },
    buttom: {
        textDecoration: "none",
        color: "inherit"
    }
}))

const validationSchema = yup.object({
    email: yup.string().email().required(),
    name: yup
        .string()
        .required(),
    phone: yup
        .string()
        .required(),
    message: yup
        .string()
        .required()
})

const Contact = ({ setSelectedIndex, setValue }) => {
    const theme = useTheme();
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState({ open: false, message: "", backgroundColor: "" });

    const handleClose = () => {
        setOpen(false);
    };

    const onConfirm = async (props) => {
        setLoading(true);
        try {
            const { data } = await axios.get("https://us-central1-material-ui-ff8f1.cloudfunctions.net/sendMail", {
                params: {
                    name: props.values.name,
                    email: props.values.email,
                    phone: props.values.phone,
                    message: props.values.message
                }
            });
            console.log(data);
            setOpen(false);
            props.resetForm();
            setAlert({ open: true, message: "Message sent successfully", backgroundColor: "#4BB543" });
        } catch (error) {
            console.log(error);
            setAlert({ open: true, message: "Something went wrong, please try again!", backgroundColor: "#FF3232" });
        }
        setLoading(false);
    }

    const buttonContents = (
        <>
            Send Message <img src="/assets/send.svg" alt="send messages" style={{ marginLeft: "1em" }} />
        </>
    )

    return (
        <Grid container direction="row" >
            <Head>
                <title key="title" >Contact us | Jhon Development</title>
                <meta name="description" key="description" content="Let us guide you custom software sesign and development process. Send us a message with any of your idea or question to get started!." />
                <meta property="og:title" 
                    content="Bringing west coast Technology to the Midwest | Contact Us" key="og:title" 
                />
                <meta property="org:url" key="org:url" content="jad.com/contact" />
                <link rel="canonical" key="canonical" href="https://jad.com/contact" />
            </Head>
            <Grid
                item
                container
                direction="column"
                alignItems="center"
                justifyContent="center"
                lg={4}
                xl={3}
            >
                <Grid item>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography variant="h1" style={{ lineHeight: 1 }} >Contact Us</Typography>
                            <Typography variant="body1" style={{ color: theme.palette.common.blue }}>We're waiting.</Typography>
                        </Grid>

                        <Grid item container style={{ marginTop: "2em" }}>
                            <Grid item>
                                <img src="/assets/phone.svg" alt="phone" style={{ marginRight: '0.5em' }} />
                            </Grid>
                            <Grid item>
                                <Typography variant="body1" style={{ color: theme.palette.common.blue, fontSize: "1rem" }} >
                                    <a href="tel:+573182611800" className={classes.buttom} >(57) 3182611800</a>
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item container style={{ maxWidth: "20em", marginBottom: "2em" }} >
                            <Grid item>
                                <img src="/assets/email.svg" alt="envelope" style={{ marginRight: '0.5em', verticalAlign: "bottom" }} />
                            </Grid>
                            <Grid item>
                                <Typography variant="body1" style={{ color: theme.palette.common.blue, fontSize: "1rem" }} >
                                    <a href="mailto:juanpabloardilama97@gmail.com" className={classes.buttom} >juanpabloardilama97@gmail.com</a>
                                </Typography>
                            </Grid>
                        </Grid>
                        <Formik
                            validationSchema={validationSchema}
                            initialValues={{
                                name: '',
                                email: '',
                                phone: '',
                                message: ''
                            }}
                            onSubmit={(detalle) => {
                                console.log(detalle)
                                setOpen(true)
                            }}
                        >
                            {
                                props => (
                                    <>
                                        <form onSubmit={props.handleSubmit} >
                                            <Grid item container direction="column" style={{ maxWidth: "20em" }} >

                                                <Grid item>
                                                    <TextField
                                                        fullWidth
                                                        id="name"
                                                        label="Name"
                                                        value={props.values.name} onChange={props.handleChange}
                                                        error={props.touched.name && Boolean(props.errors.name)}
                                                        helperText={props.touched.name && props.errors.name}
                                                    />
                                                </Grid>
                                                <Grid item>
                                                    <TextField
                                                        fullWidth
                                                        id="email"
                                                        label="Email"
                                                        value={props.values.email} onChange={props.handleChange}
                                                        error={props.touched.email && Boolean(props.errors.email)}
                                                        helperText={props.touched.email && props.errors.email}
                                                    />
                                                </Grid>
                                                <Grid item>
                                                    <TextField fullWidth
                                                        id="phone"
                                                        label="Phone"
                                                        value={props.values.phone} onChange={props.handleChange}
                                                        error={props.touched.phone && Boolean(props.errors.phone)}
                                                        helperText={props.touched.phone && props.errors.phone}
                                                    />
                                                </Grid>

                                                <Grid item >
                                                    <TextField
                                                        id="message"
                                                        InputProps={{ disableUnderline: true }}
                                                        className={classes.message}
                                                        multiline
                                                        fullWidth
                                                        placeholder="Tell us more about your project :)"
                                                        rows={5}
                                                        value={props.values.message}
                                                        onChange={props.handleChange}
                                                        error={props.touched.message && Boolean(props.errors.message)}
                                                        helperText={props.touched.message && props.errors.message}
                                                    />
                                                </Grid>
                                                <Grid item container justifyContent="center" style={{ marginTop: "2em" }} >
                                                    <Button
                                                        variant="contained"
                                                        className={classes.senButton}
                                                        disabled={!props.isValid}
                                                        type="submit"
                                                        onClick={() => setOpen(true)}
                                                    >
                                                        {buttonContents}
                                                    </Button>
                                                </Grid>
                                            </Grid>
                                        </form>
                                        <Dialog
                                            style={{ zIndex: 1302 }}
                                            open={open}
                                            onClose={handleClose}
                                            fullScreen={matchesSM}
                                            PaperProps={{
                                                style: {
                                                    paddingTop: matchesXS ? "1em" : "5em",
                                                    paddingBottom: matchesXS ? "1em" : "5em",
                                                    paddingLeft: matchesXS ? 0 : matchesSM ? "5em" : matchesMD ? "15em" : "25em",
                                                    paddingRight: matchesXS ? 0 : matchesSM ? "5em" : matchesMD ? "15em" : "25em"
                                                }
                                            }}
                                        >
                                            <DialogContent>

                                                <Grid item>
                                                    <Typography variant="h4" align="center" gutterBottom >Confirm Message</Typography>
                                                </Grid>

                                                <Grid item>
                                                    <TextField
                                                        fullWidth
                                                        id="name"
                                                        label="Name"
                                                        value={props.values.name} onChange={props.handleChange}
                                                        error={props.touched.name && Boolean(props.errors.name)}
                                                        helperText={props.touched.name && props.errors.name}
                                                    />
                                                </Grid>
                                                <Grid item>
                                                    <TextField
                                                        fullWidth
                                                        id="email"
                                                        label="Email"
                                                        value={props.values.email} onChange={props.handleChange}
                                                        error={props.touched.email && Boolean(props.errors.email)}
                                                        helperText={props.touched.email && props.errors.email}
                                                    />
                                                </Grid>
                                                <Grid item>
                                                    <TextField fullWidth
                                                        id="phone"
                                                        label="Phone"
                                                        value={props.values.phone} onChange={props.handleChange}
                                                        error={props.touched.phone && Boolean(props.errors.phone)}
                                                        helperText={props.touched.phone && props.errors.phone}
                                                    />
                                                </Grid>

                                                <Grid item >
                                                    <TextField
                                                        id="message"
                                                        InputProps={{ disableUnderline: true }}
                                                        className={classes.message}
                                                        multiline
                                                        fullWidth
                                                        rows={5}
                                                        value={props.values.message}
                                                        onChange={props.handleChange}
                                                        error={props.touched.message && Boolean(props.errors.message)}
                                                        helperText={props.touched.message && props.errors.message}
                                                    />
                                                </Grid>


                                                <Grid item container direction={matchesSM ? "column" : "row"} style={{ marginTop: "2em" }} alignItems="center">
                                                    <Grid item>
                                                        <Button style={{ fontWeight: 300 }} color="primary" onClick={handleClose} >Cancel</Button>
                                                    </Grid>
                                                    <Grid item>
                                                        <Button
                                                            variant="contained"
                                                            className={classes.senButton}

                                                            type="submit"
                                                            onClick={() => onConfirm(props)}
                                                        >
                                                            {loading ? <CircularProgress size={30} /> : buttonContents}
                                                        </Button>
                                                    </Grid>
                                                </Grid>
                                            </DialogContent>
                                        </Dialog>
                                        <Snackbar
                                            open={alert.open}
                                            message={alert.message}
                                            ContentProps={{ style: { backgroundColor: alert.backgroundColor } }}
                                            anchorOrigin={{ vertical: "top", horizontal: "center" }}
                                            onClose={() => setAlert({ ...alert, open: false })}
                                            autoHideDuration={4000}
                                        />
                                    </>
                                )
                            }
                        </Formik>
                    </Grid>
                </Grid>
            </Grid>

            <Grid
                item
                container
                className={classes.background}
                alignItems="center"
                lg={8} xl={9}
                direction={matchesMD ? "column" : "row"}
                justifyContent={matchesMD ? "center" : undefined}
            >
                <Grid item style={{ marginLeft: matchesMD ? 0 : "3em", textAlign: matchesMD ? "center" : "inherit" }} >
                    <Grid container direction="column" >,
                        <Grid item >
                            <Typography variant="h1" align={matchesMD ? "center" : undefined} >
                                Simple Software. <br />Revolutionary Result.
                            </Typography>
                            <Typography variant="subtitle2" style={{ fontSize: "1.5rem" }} align={matchesMD ? "center" : undefined} >
                                Take advantage of the 21st century.
                            </Typography>
                            <Grid container justifyContent={matchesMD ? "center" : undefined} item >
                                <Button variant="outlined" className={classes.learnButton} component={Link} href="/revolution" onClick={() => setValue(2)} >
                                    <span style={{ marginRight: 5 }}  >Learn More</span>
                                    <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item >
                    <Button variant="contained" className={classes.estimateButton} component={Link} href="/estimate" onClick={() => setValue(5)} >Free Estimate</Button>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Contact