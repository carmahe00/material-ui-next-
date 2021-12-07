import React from 'react'
import Link from '../Link';
import { Grid, Hidden } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.common.blue,
        width: "100%",
        zIndex: 1302,
        position: "relative"
    },
    adornment: {
        width: "25em",
        verticalAlign: "bottom",
        [theme.breakpoints.down("md")]: {
            width: "21em"
        },
        [theme.breakpoints.down("xs")]: {
            width: "15em"
        }
    },
    mainContainer: {
        position: "absolute"
    },
    link: {
        color: "white",
        fontFamily: "Arial",
        fontSize: "0.75",
        fontWeight: "bold",
        textDecoration: "none"
    },
    gridItem: {
        margin: "3em"
    },
    icon: {
        height: "4em",
        width: "4em",
        [theme.breakpoints.down("xs")]: {
            height: "2.5em",
            width: "2.5em"
        },
    },
    socialContainer: {
        position: "absolute",
        marginTop: "-5em",
        right: "1.4em",
        [theme.breakpoints.down("xs")]: {
            right: "0.6em",
        }
    }
}))

export default function Footer({ setValue, setSelectedIndex }) {
    const classes = useStyles()
    return (
        <footer className={classes.footer} >
            <Hidden mdDown >
                <Grid container justifyContent="center" className={classes.mainContainer} >
                    <Grid item className={classes.gridItem} >
                        <Grid container direction="column" spacing={2} style={{ margin: 0 }}>
                            <Grid item href="/" className={classes.link} onClick={() => setValue(0)} >
                                Home
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem} >
                        <Grid container direction="column" spacing={2} style={{ margin: 0 }}>
                            <Grid item href="/services" className={classes.link} onClick={() => { setValue(1); setSelectedIndex(0) }} >
                                Services
                        </Grid>
                            <Grid item href="/customsoftware" className={classes.link} onClick={() => { setValue(1); setSelectedIndex(1) }} >
                                Custom Software Development
                        </Grid>
                            <Grid item href="/mobileapps" className={classes.link} onClick={() => { setValue(1); setSelectedIndex(2) }} >
                                iOS/Adnroid Development
                        </Grid>
                            <Grid item href="/websites" className={classes.link} onClick={() => { setValue(1); setSelectedIndex(3) }} >
                                Web Site Development
                        </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem} >
                        <Grid container direction="column" spacing={2} style={{ margin: 0 }}>
                            <Grid item href="/revolution" className={classes.link} onClick={() => setValue(2)} >
                                The revolution
                        </Grid>
                            <Grid item href="/revolution" className={classes.link} onClick={() => setValue(2)} >
                                Vision
                        </Grid>
                            <Grid item href="/revolution" className={classes.link} onClick={() => setValue(2)} >
                                Technology
                        </Grid>
                            <Grid item href="/revolution" className={classes.link} onClick={() => setValue(2)} >
                                Process
                        </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem} >
                        <Grid container direction="column" spacing={2} style={{ margin: 0 }}>
                            <Grid item href="/about" className={classes.link} onClick={() => setValue(3)} >
                                About Us
                        </Grid>
                            <Grid item href="/about" className={classes.link} onClick={() => setValue(3)} >
                                History
                        </Grid>
                            <Grid item href="/about" className={classes.link} onClick={() => setValue(3)} >
                                Team
                        </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction="column" spacing={2} style={{ margin: 0 }}>
                            <Grid href="/contact" item className={classes.link} onClick={() => setValue(4)} >
                                Contact Us
                        </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Hidden>
            <img alt="black decorative slash" src="/assets/footerAdornment.svg" className={classes.adornment} />
            <Grid container justifyContent="flex-end" spacing={2} className={classes.socialContainer} >
                <Grid item component={"a"} href="http://www.facebook.com" rel="noopener noreferrer" target="_blank" >
                    <img alt="facebook" src="/assets/facebook.svg" className={classes.icon} />
                </Grid>
                <Grid item component={"a"} href="http://www.twitter.com" rel="noopener noreferrer" target="_blank" >
                    <img alt="twitter" src="/assets/twitter.svg" className={classes.icon} />
                </Grid>
                <Grid item component={"a"} href="http://www.instagram.com" rel="noopener noreferrer" target="_blank" >
                    <img alt="instagram" src="/assets/instagram.svg" className={classes.icon} />
                </Grid>
            </Grid>
        </footer>)
}
