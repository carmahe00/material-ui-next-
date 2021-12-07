import React from 'react'
import Head from 'next/head';
import Link from '../src/Link';
import { makeStyles } from '@material-ui/styles'
import { useTheme, Grid, IconButton, Typography, useMediaQuery, Hidden } from '@material-ui/core';

import CallToAction from '../src/ui/CallToAction';

const useStyles = makeStyles(theme => ({
    heading: {
        maxWidth: '40em'
    },
    arrowContainer: {
        marginTop: '0.5em'
    },
    rowContainer: {
        paddingLeft: "5em",
        paddingRight: "5em",
        [theme.breakpoints.down("sm")]: {
            paddingLeft: "1.5em",
            paddingRight: "1.5em"
        }
    },
    paragraphContainer: {
        maxWidth: "30em"
    }
}))

const WebSites = ({ setSelectedIndex, setValue }) => {
    const classes = useStyles()
    const theme = useTheme()
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"))
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"))
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))
    return (
        <Grid container direction="column" >
            <Head>
                <title key="title" >Stunning Custom Design | Jhon Development</title>
                <meta name="description" key="description" content="Completely custom designed and built from scratch to be blazing fas. Optimize code, server-side rendering and perfect responsive design | 99% PageSpeed Score" />
                <meta property="og:title" content="Bringing west coast Technology to the Midwest | Websites" key="og:title" />

                <meta property="org:url" key="org:url" content="jad.com/websites" />

                <link rel="canonical" key="canonical" href="jad.com/websites" />
            </Head>
            <Grid
                item
                container
                direction="row"
                justifyContent={matchesMD ? "center" : undefined}
                className={classes.rowContainer}
                style={{ marginTop: matchesXS ? "0.5em" : "1em" }}
            >
                <Hidden mdDown>
                    <Grid item style={{ marginRight: "1em", marginLeft: "-3.5rem" }} >
                        <IconButton style={{ backgroundColor: "transparent" }} component={Link} href="/mobileapps" onClick={() => setSelectedIndex(2)} >
                            <img src="/assets/backArrow.svg" alt="Back to iOS/Android App Development" />
                        </IconButton>
                    </Grid>
                </Hidden>
                <Grid item container direction="column" className={classes.heading} >
                    <Grid item >
                        <Typography variant="h2" align={matchesMD ? "center" : undefined}>
                            Website Development
                        </Typography>
                    </Grid>
                    <Grid item >
                        <Typography variant="body1" align={matchesMD ? "center" : undefined}>
                            Having a website is a necessity in today’s business world. They
                            give you one central, public location to let people know who you
                            are, what you do, and why you’re the best at it.
                        </Typography>
                        <Typography variant="body1" align={matchesMD ? "center" : undefined}>
                            From simply having your hours posted to having a full fledged
                            online store, making yourself as accessible as possible to users
                            online drives growth and enables you to reach new customers.
                        </Typography>
                    </Grid>
                </Grid>
                <Hidden mdDown>
                    <Grid item className={classes.arrowContainer} >
                        <IconButton style={{ backgroundColor: "transparent" }} component={Link} href="/services" onClick={() => setSelectedIndex(0)} >
                            <img src="/assets/forwardArrow.svg" alt="Forward to Services Page" />
                        </IconButton>
                    </Grid>
                </Hidden>
            </Grid>
            <Grid
                item
                container
                direction={matchesSM ? "column" : "row"}
                alignItems="center"
                className={classes.rowContainer}
                style={{ marginTop: '15em' }}
            >
                <Grid item>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography variant="h4" align={matchesSM ? "center" : undefined} gutterBottom>Analitycs</Typography>
                        </Grid>
                        <Grid item>
                            <img style={{ marginLeft: "-2.75em" }} alt="graph with magnifying glass revealing 1's and 0's" src="/assets/analytics.svg" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.paragraphContainer} >
                    <Typography variant="body1" align={matchesSM ? "center" : undefined} >
                        Knowledge is power, and data is 21st Century gold. Analyzing this
                        data can reveal hidden patterns and trends in your business,
                        empowering you to make smarter decisions with measurable effects.
                    </Typography>
                </Grid>
            </Grid>
            <Grid
                item
                container
                direction={matchesSM ? "column" : "row"}
                alignItems="center"
                className={classes.rowContainer}
                justifyContent="flex-end"
                style={{ marginBottom: '15em', marginTop: '15em' }}
            >
                <Grid item>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography variant="h4" align="center" gutterBottom>E-commerce</Typography>
                        </Grid>
                        <Grid item>
                            <img alt="world outline made of dollar signs" src="/assets/ecommerce.svg" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item style={{ marginLeft: "1em" }}
                    className={classes.paragraphContainer}
                >
                    <Typography
                        align={matchesSM ? "center" : undefined}
                        variant="body1"
                        paragraph
                    >
                        It’s no secret that people like to shop online.
                    </Typography>
                    <Typography
                        align={matchesSM ? "center" : undefined}
                        variant="body1"
                        paragraph
                    >
                        In 2017 over $2.3 trillion was spent in e-commerce, and it’s time
                        for your slice of that pie.
                    </Typography>
                </Grid>
            </Grid>
            <Grid item container direction={matchesSM ? "column" : "row"} alignItems="center" className={classes.rowContainer}>
                <Grid item>
                    <Grid container direction="column" alignItems={matchesSM ? "center" : undefined} >
                        <Grid item>
                            <Typography variant="h4" gutterBottom  >Outreach</Typography>
                        </Grid>
                        <Grid item>
                            <img style={{ marginLeft: "-2.75em" }} alt="megaphone" src="/assets/outreach.svg" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.paragraphContainer} style={{ marginLeft: matchesSM ? 0 : "1em" }} >
                    <Typography variant="body1" align={matchesSM ? "center" : undefined} >
                        Draw people in with a dazzling website. Showing off your products
                        online is a great way to help customers decide what’s right for them
                        before visiting in person.
                    </Typography>
                </Grid>
            </Grid>
            <Grid
                item
                container
                direction={matchesSM ? "column" : "row"}
                alignItems="center"
                className={classes.rowContainer}
                justifyContent="flex-end"
                style={{ marginBottom: '15em', marginTop: '15em' }}
            >
                <Grid item>
                    <Grid item container direction="column">
                        <Grid item>
                            <Typography variant="h4" align="center" gutterBottom >
                                Search Engine
                                <br /> Optimization
                            </Typography>
                        </Grid>
                        <Grid item>
                            <img alt="website standing on winner's podium" src="/assets/seo.svg" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item style={{ marginLeft: matchesSM ? 0 : "1em"  }} className={classes.paragraphContainer} >
                    <Typography
                        align={matchesSM ? "center" : undefined}
                        variant="body1"
                        paragraph
                    >
                        How often have you ever been to the second page of Google results?
                    </Typography>
                    <Typography
                        align={matchesSM ? "center" : undefined}
                        variant="body1"
                        paragraph
                    >
                        If you’re like us, probably never.
                    </Typography>
                    <Typography
                        align={matchesSM ? "center" : undefined}
                        variant="body1"
                        paragraph
                    >
                        Customers don’t go there either, so we make sure your website is
                        designed to end up on top.
                    </Typography>
                </Grid>
            </Grid>
            <Grid item>
                <CallToAction setValue={setValue} />
            </Grid>
        </Grid >
    )
}

export default WebSites