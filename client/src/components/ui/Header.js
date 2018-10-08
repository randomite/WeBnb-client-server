import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
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
import SavedMenu from "./HeaderPreviewMenu";
import AuthenticationModal from './AuthenticationModal'
import store from '../../redux/store'

let buttonStyle = "header_button";

class Header extends React.Component {
  state = {
    savedMenuAnchorEl: null,
    tripsMenuAnchorEl: null,
    rewardsMenuAnchorEl: null,
    mobileMoreAnchorEl: null,
    savedMenu: false,
    tripsMenu: false,
    rewardsMenu: false,
    mobileDrawer: false,
    loggedIn: true,
  };

  componentWillMount() {
    if (this.props.variant === "secondary") {
      buttonStyle = "header_button_clear";
    } else buttonStyle = "header_button";
  }

  toggleDrawer = () => {
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
    this.handleSavedMenuClose();
    this.handleTripsMenuClose();
    this.handleRewardsMenuClose();
  };


  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  handleSavedMenuOpen = () => {
    this.setState({ savedMenu: true });
  };

  handleSavedMenuClose = () => {
    this.setState({ savedMenu: false });
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

  handleAuthDialogOpen = (variant) => {
    store.dispatch({type: 'authentication/SHOW_MODAL', payload: {openModal: true, modalType: variant}})
    console.log(variant);
  };
  handleAuthDialogClose = () => {
    console.log("this should close");
    this.setState({ authenticationDialog: false, });
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
      </MenuList>
    );

    const navigationList = (
      <MenuList>
        <MenuItem className="menuItem">
          <ListItemIcon className="icon">
            <SaveIcon />
          </ListItemIcon>
          <ListItemText
            classes={{ primary: "primary" }}
            inset
            primary="Saved"
          />
        </MenuItem>
        <MenuItem className="menuItem">
          <ListItemIcon className="icon">
            <TripsIcon />
          </ListItemIcon>
          <ListItemText
            classes={{ primary: "primary" }}
            inset
            primary="Trips"
          />
        </MenuItem>
        <MenuItem className="menuItem">
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
          <MenuItem className="menuItem">
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

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleClose}>Profile</MenuItem>
        <MenuItem onClick={this.handleClose}>My account</MenuItem>
      </Menu>
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

    const renderSavedMenu = (
      <Popper
        open={this.state.savedMenu}
        anchorEl={this.state.savedMenuAnchorEl}
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
                <SavedMenu />
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
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
                <SavedMenu />
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
                <SavedMenu />
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
          buttonRef={node => {
            this.state.savedMenuAnchorEl = node;
          }}
          disableRipple
          onClick={this.handleSavedMenuOpen}
        >
          Saved
        </Button>
        {renderSavedMenu}
        <Button
          className={buttonStyle}
          disableRipple
          onClick={this.handleTripsMenuOpen}
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
          onClick={this.handleProfileMenuOpen}
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
      </div>
    );

    const renderLogInHeader = (
      <div className="sectionDesktop">
        {renderSavedMenu}
        <Button
          className={buttonStyle}
          disableRipple
          onClick={()=>this.handleAuthDialogOpen('SignUp')}
        >
          Sign Up
        </Button>
        <Button
          className={buttonStyle}
          disableRipple
          onClick={()=>this.handleAuthDialogOpen('LogIn')}
        >
          Log In
        </Button>
      </div>
    );

    const renderSearch = (
      <div className="search">
        <div className="searchIcon">
          <SearchIcon />
        </div>
        <Input
          placeholder="Search…"
          disableUnderline
          classes={{
            root: "inputRoot",
            input: "inputInput"
          }}
        />
      </div>
    );
    const renderNoSearch = null;

    const renderMobileMenuButton = (
      <IconButton
        className="menuButton"
        color="inherit"
        aria-label="Open drawer"
        onClick={this.toggleDrawer}
      >
        <MenuIcon />
      </IconButton>
    );

    const noUserMobileMenuList = (
      <div className="list">
        <MenuList>
          <MenuItem className="menuItem">
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
              onClick={()=>this.handleAuthDialogOpen('SignUp') }
            >
              <ListItemText
                classes={{ primary: "primary" }}
                inset
                primary="Sign Up"
              />
            </MenuItem>
            <MenuItem className="menuItem" onClick={()=>this.handleAuthDialogOpen('LogIn')}>
              <ListItemText
                classes={{ primary: "primary" }}
                inset
                primary="Log in"
                on
              />
            </MenuItem>
          </MenuList>
        </List>
      </div>
    );

    return (
      <div className="header">
        <AppBar
          position="absolute"
          className="appbar"
          color={this.props.variant}
        >
          <Toolbar>
            {renderMobileMenuButton}
            <div>
              <img
                src={require("../../logo.svg")}
                alt="Webnb"
                style={{ maxHeight: "2rem" }}
                onClick={console.log("Logo Clicked")}
              />
            </div>
            {this.props.variant === "secondary" ? renderNoSearch : renderSearch}
            <div className="grow" />
            {this.state.loggedIn ? renderDesktopUserHeader : renderLogInHeader}
          </Toolbar>
        </AppBar>
        <Drawer
          classes={{
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
            {this.state.loggedIn ? mobileMenuList : noUserMobileMenuList}
          </div>
        </Drawer>
        {renderMenu}
        {renderMobileMenu}
        <AuthenticationModal/>
      </div>
    );
  }
}

Header.propTypes = {
  variant: PropTypes.string
};

export default Header;
