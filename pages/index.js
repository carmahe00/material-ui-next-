import React from 'react'
import Head from 'next/head';
import Lottie from 'react-lottie'
import { Grid, Button, Typography, useMediaQuery, Card, CardContent } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Link from '../src/Link';

import CallToAction from '../src/ui/CallToAction';
import ButtonArrow from '../src/ui/ButtonArrow';

import animationData from '../src/animations/landinganimation/data.json';

const useStyles = makeStyles(theme => ({
    animation: {
        maxWidth: "50em",
        minWidth: "21em",
        marginTop: "2em",
        marginLeft: "10%",
        [theme.breakpoints.down('sm')]: {
            maxWidth: "30em"
        }
    },
    estimateButton: {
        ...theme.typography.estimate,
        backgroundColor: theme.palette.common.orange,
        borderRadius: 50,
        height: 45,
        width: 145,
        marginRight: 40,
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        }
    },
    butonContainer: {
        marginTop: "1em"
    },
    learnButtonHero: {
        ...theme.typography.learnButton,
        fontSize: "0.9em",
        height: 45,
        width: 145
    },
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: "0.7rem",
        height: 35,
        padding: 5,
        [theme.breakpoints.down("sm")]: {
            marginBottom: "2em"
        }
    },
    mainContainer: {
        marginTop: "5em",
        [theme.breakpoints.down("md")]: {
            marginTop: "3em"
        },
        [theme.breakpoints.down("xs")]: {
            marginTop: "2em"
        }
    },
    heroTextContainer: {
        minWidth: "21.em",
        marginLeft: "1em",
        [theme.breakpoints.down('xs')]: {
            marginLeft: 0
        }
    },
    specialText: {
        fontFamily: "Pacifico",
        color: theme.palette.common.orange
    },
    subtitle: {
        marginBottom: "1em"
    },
    icon: {
        marginLeft: "2em",
        [theme.breakpoints.down("xs")]: {
            marginLeft: 0
        }
    },
    servicesContainer: {
        marginTop: "12em",
        [theme.breakpoints.down("sm")]: {
            padding: 25
        }
    },
    revolutionBackground: {
        backgroundImage: `url("/assets/repeatingBackground.svg")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100%",
        width: "100%"
    },
    revolutionCard: {
        position: "absolute",
        boxShadow: theme.shadows[10],
        borderRadius: 15,
        padding: "10em",
        [theme.breakpoints.down("sm")]: {
            paddingTop: "8em",
            paddingBottom: "8em",
            paddingLeft: 0,
            paddingRight: 0,
            borderRadius: 0
        }
    },
    infoBackground: {
        backgroundImage: `url("/assets/infoBackground.svg")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100%",
        width: "100%"
    }
}))

export default function LandingPage({ setSelectedIndex, setValue }) {
    const classes = useStyles();
    const theme = useTheme(); // Access default theme
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"))

    const defaultOptions = {
        loop: true,
        autoplay: false,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <>
            <Grid container direction="column" className={classes.mainContainer} >
                <Head>
                    <title key="title" >Custom software, mobile Apps and website | Jhon Development</title>
                    <meta name="description" key="description" content="Pristine software custom-designed from the ground up with cutting-edge optimizations. Use our free estimate calculator to check your project cost!" />
                    <meta property="og:title" content="Bringing west coast Technology to the Midwest | Djhon Development" key="og:title" />
                    
                    <meta property="org:url" content="jad.com" key="org:url" />
                    
                    <link rel="canonical" key="canonical" href="jad.com" />
                </Head>
                <Grid item > {/* Hero Block */}
                    <Grid container justifyContent="flex-end" alignItems="center" direction="row" >
                        <Grid item sm className={classes.heroTextContainer} >
                            <Typography align="center" variant="h1" >Bringing West Coast Technology <br /> to the MidWest </Typography>
                            <Grid container justifyContent="center" className={classes.butonContainer} >
                                <Grid item >
                                    <Button component={Link} href="/estimate" className={classes.estimateButton} variant="contained" onClick={() => setValue(5)} >Free Estimate</Button>
                                </Grid>
                                <Grid item >
                                    <Button component={Link} href="/revolution" variant="outlined" className={classes.learnButtonHero} onClick={() => setValue(2)} >
                                        <span style={{ marginRight: 10 }} >Learn More</span>
                                        <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
                                    </Button>

                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item sm className={classes.animation} >
                            <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item > {/* Custom Software */}
                    <Grid container direction="row" className={classes.servicesContainer} justifyContent={matchesSM ? "center" : undefined} >
                        <Grid item style={{ marginLeft: matchesSM ? 0 : "5em", textAlign: matchesSM ? "center" : undefined }} >
                            <Typography variant="h4" >
                                Custom Software Development
                            </Typography>
                            <Typography variant="subtitle1" className={classes.subtitle} >
                                Save Enegy. Save Time. Save Money.
                            </Typography>
                            <Typography variant="subtitle1" >
                                Complete digital solutions, from investigations to{" "}<span className={classes.specialText} >celebration.</span>
                            </Typography>
                            <Button variant="outlined" className={classes.learnButton} component={Link} href="/customsoftware" onClick={() => { setValue(1); setSelectedIndex(1) }} >
                                <span style={{ marginRight: 10 }}  >Learn More</span>
                                <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
                            </Button>
                        </Grid>
                        <Grid item >
                            <img alt="Custom software icon" src="/assets/customSoftware.svg" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item > {/* iOS/ANdroid Block */}
                    <Grid container direction="row" className={classes.servicesContainer} justifyContent={matchesSM ? "center" : "flex-end"} >
                        <Grid item style={{ textAlign: matchesSM ? "center" : undefined }} >
                            <Typography variant="h4" >
                                iOS/Andoid App Development
                            </Typography>
                            <Typography variant="subtitle1" className={classes.subtitle} >
                                Extend Functionality. Extend Access. Increase Engagement
                            </Typography>
                            <Typography variant="subtitle1" >
                                Integrate your web experience or create standalone app {matchesSM ? null : <br />} with either mobile platform
                            </Typography>
                            <Button variant="outlined" className={classes.learnButton} component={Link} href="/mobileapps" onClick={() => { setValue(1); setSelectedIndex(2) }} >
                                <span style={{ marginRight: 10 }}  >Learn More</span>
                                <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
                            </Button>
                        </Grid>
                        <Grid item style={{ marginRight: matchesSM ? 0 : "5em" }} >
                            <img alt="mobile phone icon" src="/assets/mobileIcon.svg" />
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item > {/* Websites Block */}
                    <Grid container direction="row" className={classes.servicesContainer} justifyContent={matchesSM ? "center" : undefined} >
                        <Grid item style={{ marginLeft: matchesSM ? 0 : "5em", textAlign: matchesSM ? "center" : undefined }} >
                            <Typography variant="h4" >
                                WebSites Development
                            </Typography>
                            <Typography variant="subtitle1" className={classes.subtitle} >
                                Reach More. Discover More. Sell More.
                            </Typography>
                            <Typography variant="subtitle1" >
                                Optimazed for Search Enginges, built for speed.
                            </Typography>
                            <Button variant="outlined" className={classes.learnButton} component={Link} href="/websites" onClick={() => { setValue(1); setSelectedIndex(3) }} >
                                <span style={{ marginRight: 10 }}  >Learn More</span>
                                <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
                            </Button>
                        </Grid>
                        <Grid item >
                            <img alt="Custom software icon" src="/assets/websiteIcon.svg" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item > {/* The Revolution */}
                    <Grid container style={{ height: "100em", marginTop: "12em" }} alignItems="center" justifyContent="center" >
                        <Card className={classes.revolutionCard} >
                            <CardContent>
                                <Grid container direction="column" style={{ textAlign: "center" }} >
                                    <Grid item >
                                        <Typography variant="h3" >
                                            The Revolution
                                    </Typography>
                                    </Grid>
                                    <Grid item >
                                        <Typography variant="subtitle1" >
                                            Visionary insights coupled with cutting-edge technology is a recipe for revolution
                                    </Typography>
                                        <Button variant="outlined" className={classes.learnButtonHero} component={Link} href="/revolution" onClick={() => { setValue(2) }} >
                                            <span style={{ marginRight: 10 }} >Learn More</span>
                                            <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
                                        </Button>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                        <div className={classes.revolutionBackground} />
                    </Grid>
                </Grid>
                <Grid item > {/* Information Block */}
                    <Grid container style={{ height: "80em" }} direction="row" alignItems="center" className={classes.infoBackground} >
                        <Grid item container style={{ textAlign: matchesXS ? "center" : "inherit" }} direction={matchesXS ? "column" : "row"}  >
                            <Grid item sm style={{ marginLeft: matchesXS ? 0 : matchesSM ? "2em" : "5em" }} >
                                <Grid container direction="column" style={{ marginBottom: matchesXS ? "10em" : 0 }} >
                                    <Typography variant="h1" style={{ color: "white" }} >About Us</Typography>
                                    <Typography variant="subtitle2" >Let's get personal.</Typography>
                                    <Grid  >
                                        <Button variant="outlined" style={{ color: "white", borderColor: "white" }} className={classes.learnButton} component={Link} href="/about" onClick={() => { setValue(3) }} >
                                            <span style={{ marginRight: 10 }}  >Learn More</span>
                                            <ButtonArrow width={10} height={10} fill={theme.palette.common.white} />
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item sm style={{ marginRight: matchesXS ? 0 : matchesSM ? "2em" : "5em", textAlign: matchesXS ? "center" : "right" }} >
                                <Grid container direction="column" >
                                    <Typography variant="h1" style={{ color: "white" }} >Contact Us</Typography>
                                    <Typography variant="subtitle2" >Say hello!. <span role="img" aria-label="waving hand" >👋</span> </Typography>
                                    <Grid item >
                                        <Button variant="outlined" style={{ color: "white", borderColor: "white" }} className={classes.learnButton} component={Link} href="/contact" onClick={() => { setValue(4) }} >
                                            <span style={{ marginRight: 10 }}  >Learn More</span>
                                            <ButtonArrow width={10} height={10} fill={theme.palette.common.white} />
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        {/* <div className={classes.infoBackground} ></div> */}
                    </Grid>
                </Grid>
                <Grid item > {/* Call To Action Block */}
                    <CallToAction setValue={setValue} />
                </Grid>
            </Grid>
        </>
    )
}

