import React from 'react'
import { Grid, Typography, Button, useMediaQuery } from '@material-ui/core'
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Link from '../Link';
import ButtonArrow from './ButtonArrow'

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
        backgroundAttachment: "fixed",//Imagen queda estatica
        height: "60em",
        width: "100%",
        [theme.breakpoints.down("md")]: {
            backgroundImage: `url("/assets/mobileBackground.jpg")`,
            backgroundAttachment: "inherit"
        },
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
        [theme.breakpoints.down("sm")]:{
            marginLeft:0,
            marginRight: 0
        }
    }
}))

function CallToAction({setValue}) {
    const classes = useStyles()
    const theme = useTheme()
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))

    return (

        <Grid container alignItems="center" className={classes.background} justifyContent={matchesSM ? "center" : "space-between"} direction={matchesSM ? "column" : "row"} >
            <Grid item style={{ marginLeft: matchesSM ? 0: "5em", textAlign: matchesSM ? "center" : "inherit" }} >
                <Grid container direction="column" >
                    <Grid item >
                        <Typography variant="h1"  >
                            Simple Software. <br />Revolutionary Result.
                        </Typography>
                        <Typography variant="subtitle2" style={{ fontSize: "1.5rem" }} >
                            Take advantage of the 21st century.
                        </Typography>
                        <Grid container justifyContent={matchesSM ? "center" : undefined} item >
                            <Button variant="outlined" className={classes.learnButton} component={Link} href="/revolution" onClick={()=> setValue(2)} >
                                <span style={{ marginRight: 5 }}  >Learn More</span>
                                <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item >
                <Button variant="contained" className={classes.estimateButton} component={Link} href="/estimate" onClick={()=> setValue(5)} >Free Estimate</Button>
            </Grid>

        </Grid>

    )
}

export default CallToAction


