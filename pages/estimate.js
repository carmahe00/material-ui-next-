import React, { useState } from "react";
import axios from 'axios';
import { cloneDeep } from 'lodash';
import Lottie from 'react-lottie';
import Head from 'next/head';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Grid, Typography, Button, IconButton, Dialog, DialogContent, TextField, useMediaQuery, Hidden, Snackbar, CircularProgress } from '@material-ui/core';
import { Formik } from 'formik';
import * as yup from 'yup';

import estimateAnimation from "../src/animations/estimateAnimation/data.json";

const useStyles = makeStyles(theme => ({
    icon: {
        width: "12em",
        height: "10em"
    },
    estimateButton: {
        ...theme.typography.estimate,
        borderRadius: 50,
        backgroundColor: theme.palette.common.orange,
        height: 50,
        width: 225,
        fontSize: "1.25rem",
        marginTop: "5em",
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        }
    },
    message: {
        border: `2px solid ${theme.palette.common.blue}`,
        marginTop: "3em",
        marginBottom: "2em",
        borderRadius: 5
    },
    specialText: {
        fontFamily: "Raleway",
        fontWeight: 700,
        fontSize: "1.5rem",
        color: theme.palette.common.orange
    }
}));

const defaultQuestions = [
    {
        id: 1,
        title: "Which service are you interested in?",
        active: true,
        options: [
            {
                id: 1,
                title: "Custom Software Development",
                subtitle: null,
                icon: "/assets/software.svg",
                iconAlt: "three floating screens",
                selected: false,
                cost: 0
            },
            {
                id: 2,
                title: "iOS/Android App Development",
                subtitle: null,
                icon: "/assets/mobile.svg",
                iconAlt: "outlines of phones and tablets",
                selected: false,
                cost: 0
            },
            {
                id: 3,
                title: "Website Development",
                subtitle: null,
                icon: "/assets/website.svg",
                iconAlt: "computer outline",
                selected: false,
                cost: 0
            }
        ]
    }
];

const softwareQuestions = [
    { ...defaultQuestions[0], active: false },
    {
        id: 2,
        title: "Which platforms do you need supported?",
        subtitle: "Select all that apply.",
        options: [
            {
                id: 1,
                title: "Web Application",
                subtitle: null,
                icon: "/assets/website.svg",
                iconAlt: "computer outline",
                selected: false,
                cost: 100
            },
            {
                id: 2,
                title: "iOS Application",
                subtitle: null,
                icon: "/assets/iphone.svg",
                iconAlt: "outline of iphone",
                selected: false,
                cost: 100
            },
            {
                id: 3,
                title: "Android Application",
                subtitle: null,
                icon: "/assets/android.svg",
                iconAlt: "outlines of android phone",
                selected: false,
                cost: 100
            }
        ],
        active: true
    },
    {
        id: 3,
        title: "Which features do you expect to use?",
        subtitle: "Select all that apply.",
        options: [
            {
                id: 1,
                title: "Photo/Video",
                subtitle: null,
                icon: "/assets/camera.svg",
                iconAlt: "camera outline",
                selected: false,
                cost: 25
            },
            {
                id: 2,
                title: "GPS",
                subtitle: null,
                icon: "/assets/gps.svg",
                iconAlt: "gps pin",
                selected: false,
                cost: 25
            },
            {
                id: 3,
                title: "File Transfer",
                subtitle: null,
                icon: "/assets/upload.svg",
                iconAlt: "outline of cloud with arrow pointing up",
                selected: false,
                cost: 25
            }
        ],
        active: false
    },
    {
        id: 4,
        title: "Which features do you expect to use?",
        subtitle: "Select all that apply.",
        options: [
            {
                id: 1,
                title: "Users/Authentication",
                subtitle: null,
                icon: "/assets/users.svg",
                iconAlt: "outline of a person with a plus sign",
                selected: false,
                cost: 25
            },
            {
                id: 2,
                title: "Biometrics",
                subtitle: null,
                icon: "/assets/biometrics.svg",
                iconAlt: "fingerprint",
                selected: false,
                cost: 25
            },
            {
                id: 3,
                title: "Push Notifications",
                subtitle: null,
                icon: "/assets/bell.svg",
                iconAlt: "outline of a bell",
                selected: false,
                cost: 25
            }
        ],
        active: false
    },
    {
        id: 5,
        title: "What type of custom features do you expect to need?",
        subtitle: "Select one.",
        options: [
            {
                id: 1,
                title: "Low Complexity",
                subtitle: "(Informational)",
                icon: "/assets/info.svg",
                iconAlt: "'i' inside a circle",
                selected: false,
                cost: 25
            },
            {
                id: 2,
                title: "Medium Complexity",
                subtitle: "(Interactive, Customizable, Realtime)",
                icon: "/assets/customized.svg",
                iconAlt: "two toggle switches",
                selected: false,
                cost: 50
            },
            {
                id: 3,
                title: "High Complexity",
                subtitle: "(Data Modeling and Computation)",
                icon: "/assets/data.svg",
                iconAlt: "outline of line graph",
                selected: false,
                cost: 100
            }
        ],
        active: false
    },
    {
        id: 6,
        title: "How many users do you expect?",
        subtitle: "Select one.",
        options: [
            {
                id: 1,
                title: "0-10",
                subtitle: null,
                icon: "/assets/person.svg",
                iconAlt: "person outline",
                selected: false,
                cost: 1
            },
            {
                id: 2,
                title: "10-100",
                subtitle: null,
                icon: "/assets/persons.svg",
                iconAlt: "outline of two people",
                selected: false,
                cost: 1.25
            },
            {
                id: 3,
                title: "100+",
                subtitle: null,
                icon: "/assets/people.svg",
                iconAlt: "outline of three people",
                selected: false,
                cost: 1.5
            }
        ],
        active: false
    }
];


const websiteQuestions = [
    { ...defaultQuestions[0], active: false },
    {
        id: 2,
        title: "Which type of website are you wanting?",
        subtitle: "Select one.",
        options: [
            {
                id: 1,
                title: "Basic",
                subtitle: "(Informational)",
                icon: "/assets/info.svg",
                iconAlt: "person outline",
                selected: false,
                cost: 1000
            },
            {
                id: 2,
                title: "Interactive",
                subtitle: "(Users, API's, Messaging)",
                icon: "/assets/customized.svg",
                iconAlt: "outline of two people",
                selected: false,
                cost: 2000
            },
            {
                id: 3,
                title: "E-Commerce",
                subtitle: "(Sales)",
                icon: "/assets/globe.svg",
                iconAlt: "outline of three people",
                selected: false,
                cost: 2500
            }
        ],
        active: true
    }
];


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

export default () => {
    const classes = useStyles();
    const theme = useTheme();
    const [questions, setQuestions] = useState(defaultQuestions);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [total, setTotal] = useState(0);
    const [service, setService] = useState([]);
    const [platforms, setPlatforms] = useState([]);
    const [features, setFeatures] = useState([]);
    const [customFeatures, setCustomFeatures] = useState("");
    const [users, setUsers] = useState("");
    const [category, setCategory] = useState("");

    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState({ open: false, message: "", backgroundColor: "" });

    const defaultOptions = {
        loop: true,
        autoplay: false,
        animationData: estimateAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const nextQuestion = () => {
        const newQuestions = cloneDeep(questions);

        const currentlyActive = newQuestions.filter(question => question.active);
        const activeIndex = currentlyActive[0].id - 1;
        const nextIndex = activeIndex + 1;

        newQuestions[activeIndex] = { ...currentlyActive[0], active: false };
        newQuestions[nextIndex] = { ...newQuestions[nextIndex], active: true };

        setQuestions(newQuestions);
    };

    const previousQuestion = () => {
        const newQuestions = cloneDeep(questions);

        const currentlyActive = newQuestions.filter(question => question.active);
        const activeIndex = currentlyActive[0].id - 1;
        const nextIndex = activeIndex - 1;

        newQuestions[activeIndex] = { ...currentlyActive[0], active: false };
        newQuestions[nextIndex] = { ...newQuestions[nextIndex], active: true };

        setQuestions(newQuestions);
    };
    const navigationPreviousDisabled = () => {
        const currentlyActive = questions.filter(question => question.active);
        if (currentlyActive[0].id === 1)
            return true;
        else
            return false
    }

    const navigationNextDisabled = () => {
        const currentlyActive = questions.filter(question => question.active);
        if (currentlyActive[0].id === questions[questions.length - 1].id)
            return true;
        else
            return false
    }

    /**
     * método para cambiar el estado
     * @param id identificador de la opciones
     */
    const handleSelect = (id) => {
        const newQuestions = cloneDeep(questions);
        const currentlyActive = newQuestions.filter(question => question.active);
        const activeIndex = currentlyActive[0].id - 1;

        const newSelected = newQuestions[activeIndex].options[id - 1];
        const previosSelected = currentlyActive[0].options.filter(option => option.selected);

        switch (currentlyActive[0].subtitle) {
            case 'Select One':
                if (previosSelected[0])
                    previosSelected[0].selected = !previosSelected[0].selected;

                break;

            default:
                newSelected.selected = !newSelected.selected;
                break;
        }

        switch (newSelected.title) {
            case "Custom Software Development":
                setQuestions(softwareQuestions);
                setService(newSelected.title);
                setPlatforms([]);
                setFeatures([]);
                setCustomFeatures("");
                setCategory("");
                setUsers("");
                break;
            case 'iOS/Android App Development':
                setQuestions(softwareQuestions);
                setService(newSelected.title);
                setCustomFeatures("");
                setCategory("");
                setUsers("");
                break;
            case 'Website Development':
                setQuestions(websiteQuestions);
                setService(newSelected.title);
                setCustomFeatures("");
                setCategory("");
                setUsers("");
                break;
            default:
                setQuestions(newQuestions)
        }
    }

    const getTotal = () => {
        let cost = 0;
        const selections = questions
            .map(question => question.options.filter(option => option.selected))
            .filter(question => question.length > 0);

        selections.map(options => options.map(option => cost += option.cost));
        if (questions.length > 2) {
            const userCost = questions.filter(question => question.title === "How many users do you expect?")
                .map(question => question.options.filter(option => option.selected))[0][0].cost;

            cost -= userCost
            cost *= userCost
        }
        setTotal(cost)
        console.log(cost);
    }

    const getPlatforms = () => {
        let newPlatforms = [];
        if (questions.length > 2) {
            questions
                .filter(question => question.title === "Which platforms do you need supported?")
                .map(question => question.options.filter(option => option.selected))[0].map(option => newPlatforms.push(option.title))
            setPlatforms(newPlatforms);
        }
    }

    const getFeatures = () => {
        let newFeatures = [];
        if (questions.length > 2) {
            questions
                .filter(question => question.title === "Which features do you expect to use?")
                .map(question => question.options.filter(option => option.selected))
                .map(option => option.map(newFeture => newFeatures.push(newFeture.title)));
            setFeatures(newFeatures);
        }
    }

    const getCustomFeatures = () => {
        if (questions.length > 2) {
            const newCustomFeatures = questions
                .filter(
                    question =>
                        question.title ===
                        "What type of custom features do you expect to need?"
                )
                .map(question =>
                    question.options.filter(option => option.selected)
                )[0][0].title;

            setCustomFeatures(newCustomFeatures);
        }
    };

    const getCategory = () => {
        if (questions.length === 2) {
            const newCategory = questions.filter(question => question.title === "Which type of website are you wanting?")[0]
                .options.filter(option => option.selected)[0].title;
            setCategory(newCategory)
        }
    }

    const softwareSelections = (
        <Grid container direction="column">
            <Grid
                item
                container
                alignItems="center"
                style={{ marginBottom: "1.25em" }}
            >
                <Grid item xs={2}>
                    <img src="/assets/check.svg" alt="checkmark" />
                </Grid>
                <Grid item xs={10}>
                    <Typography variant="body1">
                        {`You want ${service} `}
                        {platforms.length > 0
                            ? `for ${
                            //if only web application is selected...
                            platforms.indexOf("Web Application") > -1 &&
                                platforms.length === 1
                                ? //then finish sentence here
                                "a Web Application."
                                : //otherwise, if web application and another platform is selected...
                                platforms.indexOf("Web Application") > -1 &&
                                    platforms.length === 2
                                    ? //then finish the sentence here
                                    `a Web Application and an ${platforms[1]}.`
                                    : //otherwise, if only one platform is selected which isn't web application...
                                    platforms.length === 1
                                        ? //then finish the sentence here
                                        `an ${platforms[0]}`
                                        : //otherwise, if other two options are selected...
                                        platforms.length === 2
                                            ? //then finish the sentence here
                                            "an iOS Application and an Android Application."
                                            : //otherwise if all three are selected...
                                            platforms.length === 3
                                                ? //then finish the sentence here
                                                "a Web Application, an iOS Application, and an Android Application."
                                                : null
                            }`
                            : null}
                    </Typography>
                </Grid>
            </Grid>
            <Grid
                item
                container
                alignItems="center"
                style={{ marginBottom: "1.25em" }}
            >
                <Grid item xs={2}>
                    <img src="/assets/check.svg" alt="checkmark" />
                </Grid>
                <Grid item xs={10}>
                    <Typography variant="body1">
                        {"with "}
                        {/* if we have features... */}
                        {features.length > 0
                            ? //...and there's only 1...
                            features.length === 1
                                ? //then end the sentence here
                                `${features[0]}.`
                                : //otherwise, if there are two features...
                                features.length === 2
                                    ? //...then end the sentence here
                                    `${features[0]} and ${features[1]}.`
                                    : //otherwise, if there are three or more features...
                                    features
                                        //filter out the very last feature...
                                        .filter((feature, index) => index !== features.length - 1)
                                        //and for those features return their name...
                                        .map((feature, index) => (
                                            <span key={index}>{`${feature}, `}</span>
                                        ))
                            : null}
                        {features.length > 0 &&
                            features.length !== 1 &&
                            features.length !== 2
                            ? //...and then finally add the last feature with 'and' in front of it
                            ` and ${features[features.length - 1]}.`
                            : null}
                    </Typography>
                </Grid>
            </Grid>
            <Grid item container alignItems="center">
                <Grid item xs={2}>
                    <img src="/assets/check.svg" alt="checkmark" />
                </Grid>
                <Grid item xs={10}>
                    <Typography variant="body1">
                        {`The custom features will be of ${customFeatures.toLowerCase()}, and the project will be used by about ${users} users.`}
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );

    const websiteSelection = (
        <Grid container direction="column" style={{ marginTop: "14em" }}>
            <Grid container item alignContent="center" >
                <Grid item xs={2} >
                    <img src="/assets/check.svg" alt="checkmarker" />
                </Grid>
                <Grid item xs={10} >
                    <Typography variant="body1" >
                        You want {category === "Basic" ? "a Basic Website" : `an ${category} Website`}
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    )

    const sendEstimate = async (props) => {
        setLoading(true);
        try {
            const { data } = await axios.get("https://us-central1-material-ui-ff8f1.cloudfunctions.net/sendMail", {
                params: {
                    name: props.name,
                    email: props.email,
                    phone: props.phone,
                    message: props.message,
                    total: total,
                    category: category,
                    service: service,
                    platforms: platforms,
                    features: features,
                    customFeatures: customFeatures,
                    users: users
                }
            });
            props.resetForm();
            setAlert({ open: true, message: data, backgroundColor: "#4BB543" });
            setDialogOpen(false);
        } catch (error) {
            console.log(error);
            setAlert({ open: true, message: "Something went wrong, please try again!", backgroundColor: "#FF3232" });
        }
        setLoading(false);
    }

    const estimateDisabled = () => {
        let disabled = true;
        const emptySelections = questions
            .map(question => question.options.filter(option => option.selected)).filter(question => question.length === 0)
        if (questions.length === 2) {
            if (emptySelections.length === 1) {
                disabled = false;
            }
        }
        else if (questions.length === 1)
            disabled = true;
        else if (emptySelections.length < 3 && questions[questions.length - 1].options.filter(option => option.selected).length > 0)
            disabled = false;
        return disabled;
    }

    return (
        <Grid container direction="row" >
            <Head>
                <title key="title" >Free custom software | Jhon Development</title>
                <meta name="description" key="description" content="Use our free online estimate calculator to instantly check the cost of your custom software, movile app, or website design project!!." />
                <meta property="og:title" content="Bringing west coast Technology to the Midwest | Free Estimate" key="og:title" />

                <meta property="org:url" key="org:url" content="jad.com/estimate" />

                <link rel="canonical" key="canonical" href="jad.com/estimate" />
            </Head>
            <Grid item container direction="column" lg alignItems={matchesMD ? "center" : undefined}>
                <Grid item style={{ marginTop: "2em", marginLeft: matchesMD ? "0em" : "5em" }} >
                    <Typography variant="h2" align={matchesMD ? "center" : undefined}>Estimate</Typography>
                </Grid>
                <Grid item style={{ marginRight: matchesMD ? 0 : "10em", maxWidth: "50em", marginTop: "7.5em" }} >
                    <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
                </Grid>
            </Grid>
            <Grid item container direction="column" alignItems="center" lg style={{ marginRight: matchesMD ? 0 : "2em", marginBottom: "25em" }} >
                {questions.filter(question => question.active).map((question, index) => (
                    <Grid item key={index}>
                        <Grid item>
                            <Typography variant="h2" align="center"
                                style={{
                                    fontWeight: "500",
                                    fontSize: "2.25rem",
                                    marginTop: "2.5em",
                                    lineHeight: 1.5,
                                    marginLeft: matchesSM ? "1em" : 0,
                                    marginRight: matchesSM ? "1em" : 0
                                }}
                            >
                                {question.title}
                            </Typography>
                            <Typography variant="body1" align="center" style={{ marginBottom: "2.5em" }} gutterBottom >
                                {question.subtitle} {/* Extra spacing */}
                            </Typography>
                        </Grid>
                        <Grid item container>
                            {
                                question.options.map((option, ind) => (
                                    <Grid item
                                        container
                                        direction="column"
                                        md
                                        key={ind}
                                        component={Button}
                                        style={{
                                            display: "grid",
                                            borderRadius: 0,
                                            textTransform: "none",
                                            backgroundColor: option.selected ? theme.palette.common.orange : null,
                                            marginBottom: matchesSM ? "1.5em" : 0
                                        }}
                                        onClick={() => handleSelect(option.id)}
                                    >
                                        <Grid item style={{ maxWidth: "12em" }}  >
                                            <Typography variant="h6" align="center" style={{ marginBottom: "1em" }}  >
                                                {option.title}
                                            </Typography>
                                            <Typography variant="caption" align="center" >
                                                {option.subtitle}
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <img src={option.icon} alt={option.iconAlt} className={classes.icon} />
                                        </Grid>
                                    </Grid>
                                ))
                            }
                        </Grid>

                    </Grid>
                ))}
                <Grid item container justifyContent="space-between" style={{ width: "18em", marginTop: "3em" }} >
                    <Grid item>
                        <IconButton onClick={previousQuestion} disabled={navigationPreviousDisabled()}>
                            <img src={navigationPreviousDisabled() ? "/assets/backArrowDisabled.svg" : "/assets/backArrow.svg"} alt="Previous question" />
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton onClick={nextQuestion} disabled={navigationNextDisabled()}>
                            <img src={navigationNextDisabled() ? "/assets/forwardArrowDisabled.svg" : "/assets/forwardArrow.svg"} alt="Next Question" />
                        </IconButton>
                    </Grid>
                </Grid>
                <Grid item>
                    <Button variant="contained" className={classes.estimateButton}
                        disabled={estimateDisabled()}
                        onClick={() => {
                            setDialogOpen(true);
                            getTotal();
                            getPlatforms();
                            getFeatures();
                            getCustomFeatures();
                            getCategory();
                        }}>;
                        Get Estimate
                    </Button>
                </Grid>
            </Grid>
            <Dialog
                open={dialogOpen}
                onClose={() => setDialogOpen(false)}
                fullWidth
                maxWidth="lg"
                fullScreen={matchesSM}
                style={{ zIndex: 1302 }}
            >
                <Grid container justifyContent="center">
                    <Grid item style={{ marginTop: "1em", marginBottom: "1em" }}>
                        <Typography variant="h2" align="center">Estimate</Typography>
                    </Grid>
                </Grid>
                <DialogContent>
                    <Grid container justifyContent="space-around" direction={matchesSM ? "column" : "row"} alignItems={matchesSM ? "center" : undefined} >
                        <Grid item container direction="column" md={7} style={{ maxWidth: "20em" }} >
                            <Formik
                                validationSchema={validationSchema}
                                initialValues={{
                                    name: '',
                                    email: '',
                                    phone: '',
                                    message: ''
                                }}
                                onSubmit={(values) => {
                                    console.log(values)
                                    sendEstimate(values)
                                }}
                            >
                                {
                                    props => (
                                        <>
                                            <form onSubmit={props.handleSubmit} >
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
                                                        placeholder="Tell us more about your project :)"
                                                        value={props.values.message}
                                                        onChange={props.handleChange}
                                                        error={props.touched.message && Boolean(props.errors.message)}
                                                        helperText={props.touched.message && props.errors.message}
                                                    />
                                                </Grid>
                                                <Grid item>
                                                    <Typography variant="body1" align={matchesSM ? "center" : undefined} style={{ lineHeight: 1.25 }} >We can create this digital solution for an estimated
                                                        <span className={classes.specialText} >${total.toFixed(2)}</span> </Typography>
                                                    <Typography variant="body1" align={matchesSM ? "center" : undefined}>Fill out your name, phone, number, and email, place your request and we'll get back to you with details moving forward and a final price.</Typography>
                                                </Grid>
                                                <Grid item container direction="column" style={{ maxWidth: "30em" }} alignItems={matchesSM ? "center" : undefined}>
                                                    <Hidden smDown >
                                                        <Grid item >
                                                            {questions.length > 2 ? softwareSelections : websiteSelection}
                                                        </Grid>

                                                    </Hidden>
                                                    <Grid item>
                                                        <Button disabled={!props.isValid} variant="contained" className={classes.estimateButton} type="submit" >
                                                            {loading ? <CircularProgress /> :
                                                                <>
                                                                </>
                                                            }
                                                            Place request
                                                            <img
                                                                src="/assets/send.svg"
                                                                alt="Paper Airplane"
                                                                style={{ marginLeft: "0.5em" }}
                                                            />
                                                        </Button>
                                                    </Grid>
                                                    <Hidden mdUp>
                                                        <Grid item>
                                                            <Button
                                                                style={{ fontWeight: 300 }}
                                                                color="primary"
                                                                onClick={() => setDialogOpen(false)}
                                                            >
                                                                Cancel
                                                            </Button>
                                                        </Grid>
                                                    </Hidden>
                                                </Grid>
                                            </form>
                                        </>
                                    )
                                }
                            </Formik>
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
        </Grid>
    )
}
