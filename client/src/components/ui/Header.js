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
import HomeIcon from '@material-ui/icons/Home'
import SaveIcon from '@material-ui/icons/Favorite'
import TripsIcon from '@material-ui/icons/CardTravel'
import RewardIcon from '@material-ui/icons/Loyalty'

class PrimarySearchAppBar extends React.Component {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
    savedMenu: false,
    mobileDrawer: false
  };

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
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  handleSavedMenuOpen = () => {
    this.setState({ savedMenu: true });
  };

  handleClose = () => {
    this.setState({ savedMenu: false });
  };

  render() {
    const { anchorEl, mobileMoreAnchorEl } = this.state;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const { open } = this.state;

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
            <RewardIcon/>
          </ListItemIcon>
          <ListItemText
            classes={{ primary: "primary" }}
            inset
            primary="Rewards"
          />
        </MenuItem>
      </MenuList>
    );
    const list = (
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
              <ClickAwayListener onClickAway={this.handleClose}>
                <MenuList>
                  <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                  <MenuItem onClick={this.handleClose}>My account</MenuItem>
                  <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    );

    return (
      <div className="header">
        <AppBar position="absolute" className="appbar">
          <Toolbar>
            <IconButton
              className="menuButton"
              color="inherit"
              aria-label="Open drawer"
              onClick={this.toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
            <div>
              <img
                src={require("../../logo.svg")}
                alt="Webnb"
                style={{ maxHeight: "2rem" }}
                onClick={console.log("Logo Clicked")}
              />
            </div>
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
            <div className="grow" />
            <div className="sectionDesktop">
              <Button
                className="header_button"
                disableRipple
                onClick={this.handleSavedMenuOpen}
              >
                Saved
              </Button>
              {renderSavedMenu}
              <Button className="header_button" disableRipple>
                Trips
              </Button>
              <Button className="header_button" disableRipple>
                Rewards
              </Button>
              <IconButton
                aria-owns={isMenuOpen ? "material-appbar" : null}
                aria-haspopup="true"
                onClick={this.handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
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
            {list}
          </div>
        </Drawer>
        {renderMenu}
        {renderMobileMenu}
      </div>
    );
  }
}

PrimarySearchAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default PrimarySearchAppBar;
