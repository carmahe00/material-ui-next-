import React from 'react'
import Head from 'next/head';
import Link from '../src/Link';
import Lottie from 'react-lottie'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { Typography, useMediaQuery, Hidden, Grid, IconButton } from '@material-ui/core'


import integrationAnimation from '../src/animations/integrationAnimation/data.json';
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
    }
}))

const MobileApps = ({ setSelectedIndex, setValue }) => {
    const classes = useStyles()
    const theme = useTheme()
    const matchesMD = useMediaQuery(theme.breakpoints.down('md'))
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))
    const matchesXS = useMediaQuery(theme.breakpoints.down('xs'))

    const defaultOptions = {
        loop: true,
        autoplay: false,
        animationData: integrationAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <Grid container direction="column">
            <Head>
                <title key="title" >iOS/Android App Defsign and Development | Jhon Development</title>
                <meta name="description" key="description" content="Mobile Apps Made Easy | Our cutting-edge mobile app development process lets us build beatifully designed, carefully crafted apps for both iOS and Android." />
                <meta property="og:title" content="Bringing west coast Technology to the Midwest | iOS/Android Mobile App Developmetn" key="og:title" />
                <meta property="org:url" content="jad.com/mobileapps" key="org:url" />
                <link rel="canonical" key="canonical" href="jad.com/mobileapps" />
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
                        <IconButton
                            style={{ backgroundColor: "transparent" }}
                            component={Link}
                            href="/customsoftware"
                            onClick={() => setSelectedIndex(1)}
                        >
                            <img src="/assets/backArrow.svg" alt="Back to Custom Software Pages" />
                        </IconButton>
                    </Grid>
                </Hidden>
                <Grid item container direction="column" className={classes.heading} >
                    <Grid item >
                        <Typography variant="h1" align={matchesMD ? "center" : undefined}>
                            iOS/Android App Development
                        </Typography>
                    </Grid>
                    <Grid item >
                        <Typography variant="body1" align={matchesMD ? "center" : undefined}>
                            Mobile apps allow you to take your tools on the go.
                        </Typography>
                        <Typography variant="body1" align={matchesMD ? "center" : undefined}>
                            Whether you want an app for your customers, employees, or
                            yourself, we can build cross-platform native solutions for any
                            part of your business process. This opens you up to a whole new
                            world of possibilities by taking advantage of phone features like
                            the camera, GPS, push notifications, and more.
                        </Typography>
                        <Typography variant="body1" align={matchesMD ? "center" : undefined}>
                            Convenience. Connection.
                        </Typography>

                    </Grid>
                </Grid>
                <Hidden mdDown>
                    <Grid item className={classes.arrowContainer} >
                        <IconButton
                            style={{ backgroundColor: "transparent" }}
                            component={Link}
                            href="/websites"
                            onClick={() => setSelectedIndex(3)} >
                            <img src="/assets/forwardArrow.svg" alt="Web site development pages" />
                        </IconButton>
                    </Grid>
                </Hidden>
            </Grid>
            <Grid item
                container
                direction={matchesSM ? "column" : "row"}
                style={{ marginTop: "15em", marginBottom: "15em" }}
                className={classes.rowContainer}
            >
                <Grid item container direction="column" md>
                    <Grid item>
                        <Typography variant="h4" align={matchesSM ? "center" : undefined} gutterBottom>Integration</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" paragraph align={matchesSM ? "center" : undefined} >
                            Our technology enables an innate interconnection between web and
                            mobile applications, putting everything you need right in one
                            convenient place.
                        </Typography>
                        <Typography variant="body1" paragraph align={matchesSM ? "center" : undefined}>
                            This allows you to extend your reach, reinvent interactions, and
                            develop a stronger relationship with your users than ever before.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item md>
                    <Lottie options={defaultOptions} isStopped={true} style={{ maxWidth: matchesMD ? "15em" : "20em", height: matchesMD ? "20em" : undefined }} />
                </Grid>
                <Grid item container direction="column" md>
                    <Grid item>
                        <Typography variant="h4" gutterBottom align={matchesSM ? "center" : undefined}>Simutanous Platform</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" paragraph align={matchesSM ? "center" : undefined}>
                            Our cutting-edge development process allows us to create apps for
                            iPhone, Android, and tablets — all at the same time.
                        </Typography>
                        <Typography variant="body1" paragraph align={matchesSM ? "center" : undefined}>
                            This significantly reduces costs and creates a more unified brand
                            experience across all devices.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid
                item
                container
                direction={matchesMD ? "column" : "row"}
                style={{ marginBottom: "15em", display: matchesMD ? "grid" : undefined }}
                className={classes.rowContainer}
            >
                <Grid item container direction="column" alignItems="center" md >
                    <Grid item>
                        <Typography variant="h4" gutterBottom align="center" >Extend Functionality</Typography>
                    </Grid>
                    <Grid item>
                        <img src="/assets/swissKnife.svg" alt="Swiss army knife" />
                    </Grid>
                </Grid>
                <Grid item container direction="column" alignItems="center" md style={{ marginTop: matchesMD ? "10em" : 0, marginBottom: matchesMD ? "10em" : 0 }}>
                    <Grid item>
                        <Typography variant="h4" gutterBottom align="center" >Extend Acess</Typography>
                    </Grid>
                    <Grid item>
                        <img src="/assets/extendAccess.svg" alt="tear-one-off sign" style={{ maxWidth: matchesXS ? "20em" : "28em" }} />
                    </Grid>
                </Grid>
                <Grid item container direction="column" alignItems="center" md>
                    <Grid item>
                        <Typography variant="h4" gutterBottom align="center" >Increase Engagement</Typography>
                    </Grid>
                    <Grid item>
                        <img src="/assets/increaseEngagement.svg" alt="app with notification" />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <CallToAction setValue={setValue} />
            </Grid>
        </Grid>
    )
}

export default MobileApps