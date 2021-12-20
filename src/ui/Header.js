import ReactGA from 'react-ga';
import React, { useState, useEffect, useMemo } from 'react'
import { AppBar, Toolbar, useScrollTrigger, Tabs, Tab, Button, Menu, MenuItem, useMediaQuery, SwipeableDrawer, IconButton, List, ListItem, ListItemText, Hidden } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Link from '../Link';
import { useTheme } from '@material-ui/core/styles';
import { Menu as MenuIcon } from '@material-ui/icons';


function ElevationScroll(props) {
    const { children } = props;

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0

    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

/**
 * @param theme contiene todas las propiedades del tema
 */
const useStyles = makeStyles(theme => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "2em",
        [theme.breakpoints.down("md")]: {
            marginBottom: "1em",
        },
        [theme.breakpoints.down("xs")]: {
            marginBottom: "0.25em",
        }
    },
    logo: {
        height: "8em",
        [theme.breakpoints.down("md")]: {
          height: "7em"
        },
        [theme.breakpoints.down("xs")]: {
          height: "5.5em"
        }
      },
    logoContainer: {
        padding: 0,
        "&:hover": {
            backgroundColor: "transparent"
        }
    },
    tabContainer: {
        marginLeft: 'auto'
    },
    tab: {
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: "25px"
    },
    button: {
        ...theme.typography.estimate,
        borderRadius: "50px",
        marginLeft: "50px",
        marginRight: "25px",
        height: "45px",
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        }
    },

    menu: {
        backgroundColor: theme.palette.common.blue,
        color: "white",
        borderRadius: "0px"
    },
    drawerIcon: {
        height: "40px",
        width: "40px"
    },
    menuItem: {
        ...theme.typography.tab,
        opacity: 0.7,
        "&:hover": {
            opacity: 1
        }
    },
    drawerIconContainer: {
        marginLeft: "auto",
        "&:hover": {
            backgroundColor: "transparent"
        }
    },
    drawer: {
        backgroundColor: theme.palette.common.blue
    },
    drawerItem: {
        ...theme.typography.tab,
        opacity: 0.7,
        color: 'white'
    },
    drawerItemEstimate: {
        backgroundColor: theme.palette.common.orange
    },
    drawerItemSelected: {
        opacity: 1
    },
    appbar: {
        zIndex: theme.zIndex.modal + 1
    }
}))



const Header = ({ value, setValue, selectedIndex, setSelectedIndex }) => {


    const menuOptions = useMemo(() => [
        { name: "Services", link: "/services", activeIndex: 1, selectedIndex: 0 },
        { name: "Custom Software Development", link: "/customsoftware", activeIndex: 1, selectedIndex: 1 },
        { name: "iOS/Android app Development", link: "/mobileapps", activeIndex: 1, selectedIndex: 2 },
        { name: "Web Site Development", link: "/websites", activeIndex: 1, selectedIndex: 3 },
    ], [])

    const routes = useMemo(() => [
        { name: "Home", link: "/", activeIndex: 0 },
        { name: "Services", link: "/services", activeIndex: 1, ariaOwns: "simple-menu", ariaPopup: "true", mouseOver: event => handleClick(event) },
        { name: "The Revolution", link: "/revolution", activeIndex: 2 },
        { name: "About Us", link: "/about", activeIndex: 3 },
        { name: "Contact Us", link: "/contact", activeIndex: 4 }
    ], [])

    const classes = useStyles()
    const theme = useTheme() // Access default theme
    const [previousURL, setpreviousURL] = useState("")
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const [openDrawer, setOpenDrawer] = useState(false)


    const [anchorEl, setAnchorEl] = useState(null)
    const [openMenu, setOpenMenu] = useState(false)

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    const handleClick = e => {
        setAnchorEl(e.currentTarget)
        setOpenMenu(true)
    }

    const handleClose = e => {
        setAnchorEl(null)
        setOpenMenu(false)
    }

    const handleMenuItemClick = (e, i) => {
        setAnchorEl(null)
        setOpenMenu(false)
        setSelectedIndex(i)

        setValue(1)
        handleClose()
    }

    useEffect(() => {
        
        [...menuOptions, ...routes].forEach(route => {
            switch (window.location.pathname) {
                case `${route.link}`:
                    if (value !== route.activeIndex) {
                        setValue(route.activeIndex)
                        if (route.selectedIndex && route.selectedIndex !== selectedIndex)
                            setSelectedIndex(route.selectedIndex)
                    }
                    break;
                case '/estimate':
                    if (value !== 5)
                        setValue(5)
                    break
                default:
                    break;
            }
        })


    }, [selectedIndex, value, routes, menuOptions, setSelectedIndex, setValue])

    

    //Menu for mobile
    const drawer = (
        <>
            <SwipeableDrawer disableBackdropTransition={!iOS}
                disableDiscovery={iOS}
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
                onOpen={() => setOpenDrawer(true)}
                classes={{ paper: classes.drawer }}
            >
                <div className={classes.toolbarMargin} />
                <List disablePadding >
                    {routes.map((route, index) => (
                        <ListItem
                            key={index}
                            divider
                            button
                            component={Link}
                            href={route.link}
                            selected={value === route.activeIndex}
                            onClick={() => { setOpenDrawer(false); setValue(route.activeIndex) }}
                            classes={{ selected: classes.drawerItemSelected }}
                        >
                            <ListItemText disableTypography classes={{ root: classes.drawerItem }} >{route.name}</ListItemText>
                        </ListItem>
                    ))}

                    <ListItem
                        onClick={() => { setOpenDrawer(false); setValue(5) }}
                        divider
                        button
                        component={Link}
                        href="/contact"
                        classes={{ root: classes.drawerItemEstimate, selected: classes.drawerItemSelected }}
                        selected={value === 5}
                    >
                        <ListItemText classes={{ root: classes.drawerItem }} disableTypography  >Free Estimate</ListItemText>
                    </ListItem>
                </List>
            </SwipeableDrawer>
            <IconButton onClick={() => setOpenDrawer(!openDrawer)} disableRipple className={classes.drawerIconContainer} >
                <MenuIcon className={classes.drawerIcon} />
            </IconButton>
        </>
    )

    // Menu for desktop
    const tabs = (
        <>
            <Tabs classes={{ root: classes.tabContainer }} value={value} onChange={handleChange} indicatorColor="secondary" >
                {
                    routes.map((route, index) => (
                        <Tab
                            key={`${route}${index}`}
                            classes={{ root: classes.tab }}
                            component={Link}
                            href={route.link}
                            label={route.name}
                            aria-owns={route.ariaOwns}
                            aria-haspopup={route.ariaPopup}
                            onMouseOver={route.mouseOver}
                        />
                    ))
                }
            </Tabs>
            <Button component={Link} onClick={() => setValue(5)} href="/estimate" variant="contained" color="secondary" className={classes.button} >
                Free Estimate
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                open={openMenu}
                onClose={handleClose}
                MenuListProps={{ onMouseLeave: handleClose }}
                classes={{ paper: classes.menu }}
                elevation={0}
                keepMounted
                style={{ zIndex: 1302 }}
            >
                {
                    menuOptions.map((option, i) => (
                        <MenuItem
                            key={i}
                            onClick={(event) => handleMenuItemClick(event, i)}
                            component={Link}
                            href={option.link}
                            classes={{ root: classes.menuItem }}
                            selected={i === selectedIndex && value === 1}
                        >
                            {option.name}
                        </MenuItem>
                    ))
                }
            </Menu>

        </>
    )

    return (
        <>
            <ElevationScroll>

                <AppBar position="fixed" className={classes.appbar} >
                    <Toolbar disableGutters >
                        <Button component={Link} href="/"
                            className={classes.logoContainer}
                            onClick={() => setValue(0)} disableRipple
                            style={{ textDecoration: "none" }}
                        >
                            <img src="/assets/logo.svg" alt="company logo" className={classes.logo} />
                        </Button>
                        <Hidden mdDown>
                            {tabs}
                        </Hidden>
                        <Hidden lgUp>
                            {drawer}
                        </Hidden>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin} /> {/* Contiene la altura para mostrar el contenido debajo del Bar */}
        </>
    )
}

export default Header
