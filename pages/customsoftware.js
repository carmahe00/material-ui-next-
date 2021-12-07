import React from 'react'
import Head from 'next/head';
import Lottie from 'react-lottie'
import Link from '../src/Link';
import { Grid, IconButton, Typography, useMediaQuery, useTheme } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Hidden from '@material-ui/core/Hidden'

import documentsAnimation from "../src/animations/documentsAnimation/data";
import scaleAnimation from "../src/animations/scaleAnimation/data.json";
import automationAnimation from "../src/animations/automationAnimation/data.json";
import uxAnimation from "../src/animations/uxAnimation/data";

import CallToAction from '../src/ui/CallToAction'

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
    itemContainer: {
        maxWidth: "40em"
    }
}))

const CustomSoftware = ({ setSelectedIndex, setValue }) => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"))
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"))

    const documentsOptions = {
        loop: true,
        autoplay: true,
        animationData: documentsAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    const scaleOptions = {
        loop: true,
        autoplay: false,
        animationData: scaleAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    const automationOptions = {
        loop: true,
        autoplay: false,
        animationData: automationAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    const uxOptions = {
        loop: true,
        autoplay: false,
        animationData: uxAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return (
        <Grid container direction="column">
            <Head>
                <title key="title" >Custom Software and Designe freee estimate</title>
                <meta name="description" key="description" content="Cutting-edge custom software development with gorgeous from scratch - let us optimize your bisiness, solving problems instead of creating new ones." />
                <meta property="og:title" content="Bringing west coast Technology to the Midwest | CUstom Software Develoment" key="og:title" />
                <meta property="org:url" key="org:url" content="jad.com/customsoftware" />
                <link rel="canonical" key="canonical" href="jad.com/customsoftware" />
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
                        <IconButton style={{ backgroundColor: "transparent" }} component={Link} href="/services" onClick={() => setSelectedIndex(0)} >
                            <img src="/assets/backArrow.svg" alt="Back to Services Pages" />
                        </IconButton>
                    </Grid>
                </Hidden>
                <Grid item container direction="column" className={classes.heading} >
                    <Grid item >
                        <Typography variant="h1" align={matchesMD ? "center" : undefined}>
                            Custom Software Development
                        </Typography>
                    </Grid>
                    <Grid item >
                        <Typography variant="body1" align={matchesMD ? "center" : undefined}>
                            Whether we’re replacing old software or inventing new solutions,
                            Arc Development is here to help your business tackle technology.
                        </Typography>
                        <Typography variant="body1" align={matchesMD ? "center" : undefined}>
                            Using regular commercial software leaves you with a lot of stuff
                            you don’t need, without some of the stuff you do need, and
                            ultimately controls the way you work. Without using any software
                            at all you risk falling behind competitors and missing out on huge
                            savings from increased efficiency.
                        </Typography>
                        <Typography variant="body1" align={matchesMD ? "center" : undefined}>
                            Our custom solutions are designed from the ground up with your
                            needs, wants, and goals at the core. This collaborative process
                            produces finely tuned software that is much more effective at
                            improving your workflow and reducing costs than generalized
                            options.
                        </Typography>
                        <Typography
                            variant="body1"
                            paragraph
                            align={matchesMD ? "center" : undefined}
                        >
                            We create exactly what you what, exactly how you want it.
                        </Typography>
                    </Grid>
                </Grid>
                <Hidden mdDown>
                    <Grid item className={classes.arrowContainer} >
                        <IconButton style={{ backgroundColor: "transparent" }} component={Link} href="/mobileapps" onClick={() => setSelectedIndex(2)} >
                            <img src="/assets/forwardArrow.svg" alt="Forward to iOS/Android" />
                        </IconButton>
                    </Grid>
                </Hidden>
            </Grid>
            
            <Grid item container direction="row"
                justifyContent="center"
                style={{ marginTop: "15em", marginBottom: "20em" }}
                className={classes.rowContainer}
            >
                <Grid item container direction="column" md alignItems="center"
                    style={{ maxWidth: '40em' }}
                >
                    <Grid item>
                        <Typography variant="h4" >
                            Save Energy
                        </Typography>
                    </Grid>
                    <Grid item>
                        <img src="/assets/bulb.svg" alt='lightbulb' />
                    </Grid>
                </Grid>
                <Grid item container direction="column" md alignItems="center" style={{ maxWidth: '40em', marginTop: matchesMD ? "10em" : 0, marginBottom: matchesSM ? "10em" : 0 }}  >
                    <Grid item>
                        <Typography variant="h4" >
                            Save Time
                        </Typography>
                    </Grid>
                    <Grid item>
                        <img src="/assets/stopwatch.svg" alt="stopwatch" />
                    </Grid>
                </Grid>
                <Grid item container direction="column" md alignItems="center" style={{ maxWidth: '40em' }} >
                    <Grid item>
                        <Typography variant="h4" >
                            Save Money
                        </Typography>
                    </Grid>
                    <Grid item>
                        <img src="/assets/cash.svg" alt="cash" />
                    </Grid>
                </Grid>
            </Grid>

            <Grid
                item container
                alignItems={matchesMD ? "center" : undefined}
                direction={matchesMD ? "column" : "row"}
                justifyContent={matchesMD ? "center" : "space-between"}
                className={classes.rowContainer}
            >
                <Grid
                    item
                    container
                    className={classes.itemContainer}
                    style={{ marginBottom: matchesMD ? "15em" : "0em" }}
                    direction={matchesSM ? "column" : "row"}
                    md
                >
                    <Grid item container direction="column" md>
                        <Grid item>
                            <Typography variant="h4" align={matchesMD ? "center" : undefined} >Digital Documents & Data</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" paragraph align={matchesMD ? "center" : undefined}>
                                Reduce Errors. Reduce Waste. Reduce Costs.
                        </Typography>
                            <Typography variant="body1" paragraph align={matchesMD ? "center" : undefined}>
                                Billions are spent annually on the purchasing, printing, and
                                distribution of paper. On top of the massive environmental
                                impact this has, it causes harm to your bottom line as well.
                        </Typography>
                            <Typography variant="body1" paragraph align={matchesMD ? "center" : undefined}>
                                By utilizing digital forms and documents you can remove these
                                obsolete expenses, accelerate your communication, and help the
                                Earth.
                        </Typography>
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        direction={matchesSM ? "column" : "row"}
                        className={classes.itemContainer}
                    >
                        <Grid item md>
                            <Lottie options={documentsOptions} isStopped={true} style={{ maxHeight: 325, maxWidth: 275, minHeight: 275 }} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid
                    item
                    container
                    className={classes.itemContainer}
                    md
                    direction={matchesSM ? "column" : "row"}>
                    <Grid item md>
                        <Lottie options={scaleOptions} style={{ maxHeight: 260, maxWidth: 280 }} />
                    </Grid>
                    <Grid item container direction="column" md>
                        <Grid item>
                            <Typography variant="h4" align={matchesMD ? "center" : "right"}>Scale</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" align={matchesMD ? "center" : "right"} paragraph>
                                Whether you’re a large brand, just getting started, or taking
                                off right now, our application architecture ensures pain-free
                                growth and reliability.
                            </Typography>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>

            <Grid
                item
                container
                alignItems={matchesMD ? "center" : undefined}
                direction={matchesMD ? "column" : "row"}
                style={{ marginTop: "20em", marginBottom: "20em" }}
                className={classes.rowContainer}
            >
                <Grid item container direction="column" alignItems="center" >
                    <Grid item>
                        <img src="/assets/root.svg" alt="Tree with extending out" height={matchesSM ? "250em" : "450em"} width={matchesSM ? "250em" : "450em"} />
                    </Grid>
                    <Grid item className={classes.itemContainer} >
                        <Typography variant="h4" align="center" gutterBottom>Root-Cause Analysis</Typography>
                        <Typography variant="body1" align="center" paragraph>
                            Many problems are merely symptoms of larger, underlying issues.
                        </Typography>
                        <Typography variant="body1" align="center" paragraph>
                            We can help you thoroughly examine all areas of your business to
                            develop a holistic plan for the most effective implementation of
                            technology.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid
                item
                container
                alignItems={matchesMD ? "center" : undefined}
                direction={matchesMD ? "column" : "row"}
                justifyContent={matchesMD ? "center" : "space-between"} style={{ marginBottom: "20em" }}
                className={classes.rowContainer}
            >
                <Grid
                    item
                    container
                    className={classes.itemContainer}
                    style={{ marginBottom: matchesMD ? "15em" : 0 }}
                    direction={matchesSM ? "column" : "row"}
                    md>
                    <Grid item container direction="column" md>
                        <Grid item>
                            <Typography variant="h4" align={matchesMD ? "center" : undefined}>Automation</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" paragraph align={matchesMD ? "center" : undefined}>
                                Why waste time when you don’t have to?
                        </Typography>
                            <Typography variant="body1" paragraph align={matchesMD ? "center" : undefined}>
                                We can help you identify processes with time or event based
                                actions which can now easily be automated.l.
                        </Typography>
                            <Typography variant="body1" paragraph align={matchesMD ? "center" : undefined}>
                                Increasing efficiency increases profits, leaving you more time
                                to focus on your business, not busywork.
                        </Typography>
                        </Grid>
                    </Grid>
                    <Grid item md>
                        <Lottie options={automationOptions} isStopped={true} style={{ maxHeight: 290, maxWidth: 280 }} />
                    </Grid>
                </Grid>
                <Grid
                    item
                    container
                    className={classes.itemContainer}
                    direction={matchesSM ? "column" : "row"}
                    md
                >
                    <Grid item md>
                        <Lottie options={uxOptions} style={{ maxHeight: 310, maxWidth: 155 }} />
                    </Grid>
                    <Grid item container direction="column" md>
                        <Grid item>
                            <Typography variant="h4" align={matchesMD ? "center" : "right"}>User Experience Design</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" align={matchesMD ? "center" : "right"} paragraph>
                                A good design that isn’t usable isn’t a good design.
                            </Typography>
                            <Typography variant="body1" align={matchesMD ? "center" : "right"} paragraph>
                                So why are so many pieces of software complicated, confusing,
                                and frustrating?
                            </Typography>
                            <Typography variant="body1" align={matchesMD ? "center" : "right"} paragraph>
                                By prioritizing users and the real ways they interact with
                                technology we’re able to develop unique, personable experiences
                                that solve problems rather than create new ones.
                            </Typography>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>
            <Grid item>
                <CallToAction setValue={setValue} />
            </Grid>
        </Grid>
    )
}

export default CustomSoftware