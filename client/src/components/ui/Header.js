import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Button from "@material-ui/core/es/Button/Button";
import Popper from "@material-ui/core/es/Popper/Popper";
import Grow from "@material-ui/core/es/Grow/Grow";
import Paper from "@material-ui/core/es/Paper/Paper";
import ClickAwayListener from "@material-ui/core/es/ClickAwayListener/ClickAwayListener";
import MenuList from "@material-ui/core/es/MenuList/MenuList";
import Drawer from "@material-ui/core/es/Drawer/Drawer";
import List from "@material-ui/core/es/List/List";
import Divider from "@material-ui/core/es/Divider/Divider";
import ListItemIcon from "@material-ui/core/es/ListItemIcon/ListItemIcon";
import ListItemText from "@material-ui/core/es/ListItemText/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import SaveIcon from "@material-ui/icons/Favorite";
import TripsIcon from "@material-ui/icons/CardTravel";
import RewardIcon from "@material-ui/icons/Loyalty";
import HeaderPreviewMenu from "./HeaderPreviewMenu";
import AuthenticationModal from "./AuthenticationModal";
import { connect } from "react-redux";
import store from "../../redux/store";
import { instance } from "../../Axios";
import SvgIcon from "@material-ui/core/SvgIcon/SvgIcon";
import { path } from "../ui/Logo";
import { withRouter } from "react-router-dom";
import LogOutIcon from "@material-ui/icons/ExitToApp";
import SearchBar from "./SearchBar";
import Grid from "@material-ui/core/Grid/Grid";
import FilterBar from "./FilterBar";
import SignUpIcon from '@material-ui/icons/PersonAdd'
import LogInIcon from '@material-ui/icons/Person'

let buttonStyle = "header_button";

class Header extends React.Component {
  state = {
    tripsMenuAnchorEl: null,
    rewardsMenuAnchorEl: null,
    mobileMoreAnchorEl: null,
    tripsMenu: false,
    rewardsMenu: false,
    mobileDrawer: false
  };

  componentWillMount() {
    if (this.props.variant === "secondary") {
      buttonStyle = "header_button_clear";
    } else buttonStyle = "header_button";

    // Check if the user has a session already
    // console.log("Local Storage", localStorage);
    if (localStorage.getItem("access_token")) {
      let endpoint = "verifytoken";
      let config = {
        headers: { access_token: localStorage.getItem("access_token") }
      };
      instance.post(endpoint, null, config).then(response => {
        console.log("Verification Response", response);
        store.dispatch({
          type: "user/LOG_IN",
          payload: {
            email: localStorage.getItem("username"),
            access_token: localStorage.getItem("access_token"),
            id_token: localStorage.getItem("id_token"),
            refresh_token: localStorage.getItem("refresh_token"),
            username: localStorage.getItem("username")
          }
        });
      });
    }
  }

  toggleDrawer = () => {
    document.getElementById("menu_icon").classList.toggle("change");

    this.setState({
      mobileDrawer: !this.state.mobileDrawer
    });
  };

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
    this.handleTripsMenuClose();
    this.handleRewardsMenuClose();
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  handleTripsMenuOpen = () => {
    this.setState({ tripsMenu: true });
  };

  handleTripsMenuClose = () => {
    this.setState({ tripsMenu: false });
  };

  handleRewardsMenuOpen = () => {
    this.setState({ rewardsMenu: true });
  };

  handleRewardsMenuClose = () => {
    this.setState({ rewardsMenu: false });
  };

  handleAuthDialogOpen = variant => {
    store.dispatch({
      type: "authentication/SHOW_MODAL",
      payload: { openModal: true, modalType: variant }
    });
    console.log(variant);
  };

  handleLogOut = () => {
    let endpoint = "logout";
    let config = {
      headers: { access_token: localStorage.getItem("access_token") }
    };
    instance.post(endpoint, null, config).then(response => {
      store.dispatch({
        type: "user/LOG_OUT"
      });
      console.log("log out Response", response);
    });
    localStorage.clear();
    window.location.reload();
  };

  render() {
    const { anchorEl, mobileMoreAnchorEl } = this.state;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const accountList = (
      <MenuList>
        <MenuItem className="menuItem">
          <ListItemIcon className="Icon">
            <AccountCircle />
          </ListItemIcon>
          <ListItemText
            classes={{ primary: "primary" }}
            inset
            primary="Account Settings"
          />
        </MenuItem>
        <MenuItem className="menuItem" onClick={this.handleLogOut}>
          <ListItemIcon className="Icon">
            <LogOutIcon />
          </ListItemIcon>
          <ListItemText inset primary="Log Out" />
        </MenuItem>
      </MenuList>
    );

    const navigationList = (
      <MenuList>
        <MenuItem className="menuItem" onClick={()=>{
          this.props.history.push('/bookings')
        }}>
          <ListItemIcon className="icon">
            <TripsIcon />
          </ListItemIcon>
          <ListItemText
            classes={{ primary: "primary" }}
            inset
            primary="Trips"
          />
        </MenuItem>
        <MenuItem className="menuItem" onClick={()=>{
          this.props.history.push('/rewards')
        }}>
          <ListItemIcon className="Icon">
            <RewardIcon />
          </ListItemIcon>
          <ListItemText
            classes={{ primary: "primary" }}
            inset
            primary="Rewards"
          />
        </MenuItem>
      </MenuList>
    );

    const mobileMenuList = (
      <div className="list">
        <MenuList>
          <MenuItem className="menuItem" onClick={()=>{
            this.props.history.push('/')
          }}>
            <ListItemIcon className="icon">
              <HomeIcon />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: "primary" }}
              inset
              primary="Home"
            />
          </MenuItem>
        </MenuList>
        <Divider />
        <List>{navigationList}</List>
        <Divider />
        <List>{accountList}</List>
      </div>
    );

    const renderProfileMenu = (
      <Popper
        open={isMenuOpen}
        anchorEl={this.anchorEl}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            id="menu-list-grow"
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom"
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={this.handleMenuClose}>
                <MenuList>
                  <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                  <MenuItem onClick={this.handleClose}>My account</MenuItem>
                  <MenuItem onClick={this.handleLogOut} className="log_out">
                    Logout
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    );

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMobileMenuOpen}
        onClose={this.handleMobileMenuClose}
      >
        <MenuItem onClick={this.handleProfileMenuOpen}>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      </Menu>
    );

    const renderTripsMenu = (
      <Popper
        open={this.state.tripsMenu}
        anchorEl={this.state.tripsMenuAnchorEl}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            id="menu-list-grow"
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom"
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={this.handleMenuClose}>
                <HeaderPreviewMenu />
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    );

    const renderRewardsMenu = (
      <Popper
        open={this.state.rewardsMenu}
        anchorEl={this.state.rewardsMenuAnchorEl}
        transition
        disablePortalSavedM
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            id="menu-list-grow"
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom"
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={this.handleMenuClose}>
                <HeaderPreviewMenu content="rewards" />
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    );

    const renderDesktopUserHeader = (
      <div className="sectionDesktop">
        <Button
          className={buttonStyle}
          disableRipple
          onClick={()=>this.props.history.push('bookings')}
          buttonRef={node => {
            this.state.tripsMenuAnchorEl = node;
          }}
        >
          Trips
        </Button>
        {renderTripsMenu}
        <Button
          className={buttonStyle}
          disableRipple
          onClick={this.handleRewardsMenuOpen}
          buttonRef={node => {
            this.state.rewardsMenuAnchorEl = node;
          }}
        >
          Rewards
        </Button>
        {renderRewardsMenu}
        <IconButton
          aria-owns={isMenuOpen ? "material-appbar" : null}
          aria-haspopup="true"
          buttonRef={node => {
            this.anchorEl = node;
          }}
          onClick={this.handleProfileMenuOpen}
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
      </div>
    );

    const renderLogInHeader = (
      <div className="sectionDesktop">
        <Button
          className={buttonStyle}
          disableRipple
          onClick={() => this.handleAuthDialogOpen("SignUp")}
        >
          Sign Up
        </Button>
        <Button
          className={buttonStyle}
          disableRipple
          onClick={() => this.handleAuthDialogOpen("LogIn")}
        >
          Log In
        </Button>
      </div>
    );

    const renderSearch = (
      <div className="search">
        <SearchBar />
      </div>
    );
    const renderNoSearch = null;

    const renderMobileMenuButton = (
      <IconButton
        className="menuButton"
        color={this.props.variant === "secondary"
          ? "primary"
          : "secondary"}
        aria-label="Open drawer"
        style={{ padding: 0 }}
        onClick={this.toggleDrawer}
      >
        <div id="menu_icon" className="menu_icon">
          <svg viewBox="0 0 18 18" height={10} fill={this.props.variant === "secondary"
            ? "white"
            : "black"}>
            <path d="m16.29 4.3a1 1 0 1 1 1.41 1.42l-8 8a1 1 0 0 1 -1.41 0l-8-8a1 1 0 1 1 1.41-1.42l7.29 7.29z" />
          </svg>
        </div>
      </IconButton>
    );

    const noUserMobileMenuList = (
      <div className="list">
        <MenuList>
          <MenuItem className="menuItem" onClick={()=>{
            this.props.history.push('/')
          }}>
            <ListItemIcon className="icon">
              <HomeIcon />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: "primary" }}
              inset
              primary="Home"
            />
          </MenuItem>
        </MenuList>
        <Divider />
        <List>
          <MenuList>
            <MenuItem
              className="menuItem"
              onClick={() => this.handleAuthDialogOpen("SignUp")}
            ><ListItemIcon className="icon">
              <SignUpIcon/>
            </ListItemIcon>
              <ListItemText
                classes={{ primary: "primary" }}
                inset
                primary="Sign Up"
              />
            </MenuItem>
            <MenuItem
              className="menuItem"
              onClick={() => this.handleAuthDialogOpen("LogIn")}
            ><ListItemIcon className="icon">
              <LogInIcon/>
            </ListItemIcon>
              <ListItemText
                classes={{ primary: "primary" }}
                inset
                primary="Log in"
              />
            </MenuItem>
          </MenuList>
        </List>
      </div>
    );

    return (
      <div className="header">
        <AppBar position="fixed" className="appbar" color={this.props.variant}>
          <Toolbar>
            <Grid
              style={window.location.pathname === '/' ? {marginTop:'10px'} : {}}
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Grid
                xs={3}
                container
                sm={1}
                direction="row"
                justify="space-between"
                alignItems="center"
              >
                <Grid item>{renderMobileMenuButton}</Grid>
                <Grid item>
                  <SvgIcon
                    className="logo"
                    viewBox="0 0 355.5 281.42"
                    fontSize="large"
                    onClick={()=> {window.innerWidth > 600 ?
                      this.props.history.push(''): this.toggleDrawer}}
                    color={
                      this.props.variant === "secondary"
                        ? "primary"
                        : "secondary"
                    }
                  >
                    {path}
                  </SvgIcon>
                </Grid>
              </Grid>
              <Grid item xs={9} sm={7}>
                {this.props.variant === "secondary"
                  ? renderNoSearch
                  : renderSearch}
              </Grid>
              <Grid item sm={4}>
                {this.props.isLoggedIn
                  ? renderDesktopUserHeader
                  : renderLogInHeader}
              </Grid>
              {window.innerWidth < 600 && window.location.pathname==='/search' ? (
                <Grid xs={12}>
                  <FilterBar />
                </Grid>
              ) : null}
            </Grid>
          </Toolbar>
        </AppBar>
        <Drawer
          classes={window.location.pathname === '/search' ? {
            paper: "drawer_mobile_search"
          } : {
            paper: "drawer_mobile"
          }}
          anchor="top"
          open={this.state.mobileDrawer}
          onClose={this.toggleDrawer}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer}
            onKeyDown={this.toggleDrawer}
          >
            {this.props.isLoggedIn ? mobileMenuList : noUserMobileMenuList}
          </div>
        </Drawer>
        {renderProfileMenu}
        {renderMobileMenu}
        <AuthenticationModal />
      </div>
    );
  }
}

Header.propTypes = {
  variant: PropTypes.string
};

export default connect(state => state.user)(withRouter(Header));
