import React from 'react'
import Head from 'next/head';
import Link from '../src/Link';
import { Button, Grid, Typography, useMediaQuery } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'

import ButtonArrow from '../src/ui/ButtonArrow';

const useStyles = makeStyles(theme => ({
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
        marginTop: "10em",
        [theme.breakpoints.down("sm")]: {
            padding: 25
        }
    },
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: "0.7rem",
        height: 35,
        padding: 5,
        [theme.breakpoints.down("sm")]: {
            marginBottom: "2em"
        }
    }
}))

const Services = ({ setValue, setSelectedIndex }) => {
    const classes = useStyles()
    const theme = useTheme()
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))

    return (
        <Grid container direction="column" >
            <Head>
                <title key="title" >Top Custom Software Development Services | Jhon Development</title>
                <meta name="description" key="description" content="Cutting-edge software, mobile app, and website developtment with sleek custom designs - get a free online estimate instanly!" />
                <meta property="og:title" content="Bringing west coast Technology to the Midwest | Services" key="og:title" />

                <meta property="org:url" key="org:url" content="jad.com/services" />

                <link rel="canonical" key="canonical" href="jad.com/services" />
            </Head>
            <Grid item style={{ marginLeft: matchesSM ? 0 : "5em", marginTop: matchesSM ? "1em" : "2em" }} >
                <Typography variant="h1" align={matchesSM ? "center" : undefined} gutterBottom  > Services </Typography>
            </Grid>
            <Grid item > {/* iOS/ANdroid Block */}
                <Grid container direction="row" className={classes.servicesContainer} justifyContent={matchesSM ? "center" : "flex-end"} style={{ marginTop: matchesSM ? "1em" : "5em" }} >
                    <Grid item style={{ textAlign: matchesSM ? "center" : undefined, width: matchesSM ? undefined : "35em" }} >
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
                        <img alt="mobile phone icon" src="/assets/mobileIcon.svg" width="250em" />
                    </Grid>
                </Grid>
            </Grid>

            <Grid item > {/* Custom Software */}
                <Grid container direction="row" className={classes.servicesContainer} justifyContent={matchesSM ? "center" : "flex-start"} >
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

            <Grid item > {/* Websites Block */}
                <Grid container
                    direction="row"
                    className={classes.servicesContainer}
                    justifyContent={matchesSM ? "center" : "flex-end"}
                    style={{ marginBottom: "10em" }}
                >
                    <Grid item style={{ textAlign: matchesSM ? "center" : undefined, width: matchesSM ? undefined : "35em" }} >
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
                    <Grid item style={{ marginRight: matchesSM ? 0 : "5em" }} >
                        <img alt="Custom software icon" src="/assets/websiteIcon.svg" width="250em" />
                    </Grid>
                </Grid>
            </Grid>

        </Grid>
    )
}

export default Services;