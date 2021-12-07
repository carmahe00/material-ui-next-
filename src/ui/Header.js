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
        height: "6.9em",
        textTransform: "none",
        [theme.breakpoints.down("md")]: {
            height: "5.9em"
        },
        [theme.breakpoints.down("xs")]: {
            height: "4.9em"
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
    logoContainer: {
        padding: 0,
        "&:hover": {
            backgroundColor: "transparent"
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
    const matches = useMediaQuery(theme.breakpoints.down('md'));
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
                            style={{textDecoration: "none"}}
                        >
                            <svg className={classes.logo} id="Layer_1" 
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 139">
                                    <style>
                                        {`.st0{fill:none}.st1{fill:#fff}.st2{font-family:Raleway; font-weight: 300;}.st6{fill:none;stroke:#000;stroke-width:3;stroke-miterlimit:10}`}</style><path d="M448.07-1l-9.62 17.24-8.36 14.96L369.93 139H-1V-1z" /><path className="st0" d="M-1 139h479.92v.01H-1z" /><text transform="translate(261.994 65.233)" className="st1 st2" fontSize="57">Arc</text><text transform="translate(17.692 112.015)" className="st1 st2" fontSize="54">Development</text><path className="st0" d="M382.44 116.43l47.65-85.23 8.36-14.96M369.83 139l-.01.01L362 153" /><path d="M438.76 15.76l-56.42 100.91c-12.52-10.83-20.45-26.82-20.45-44.67 0-32.58 26.42-59 59-59 6.23 0 12.24.97 17.87 2.76z" fill="#0b72b9" /><path d="M479.89 72c0 32.58-26.42 59-59 59-14.73 0-28.21-5.4-38.55-14.33l56.42-100.91c23.85 7.57 41.13 29.89 41.13 56.24z" /><g id="Group_186" transform="translate(30.153 11.413)"><g id="Group_185"><g id="Words"><path id="Path_59" className="st1" d="M405.05 14.4l-.09 80.38-7.67-.01.06-52.25-29.4 52.21-7.94-.01 45.04-80.32z" /></g></g></g><path className="st0" d="M457-17l-8.93 16-9.62 17.24-8.36 14.96L369.93 139l-.01.01L361 155" /></svg>

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
