import React from "react";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import {connect} from 'react-redux'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  FormControl,
  TextField,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
  DialogActions,
  Button,
} from "@material-ui/core";

class AuthenticationModal extends React.Component {
  state = {
    showPassword: false,
    //SING UP ? SIGN IN
    email: "",
    password: "",
    passwordConfirm: ""
  };

  handlePasswordChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  handleCloseModal = () =>{
    this.props.dispatch({type: 'authentication/HIDE_MODAL',})
  }

  handleSignUp = () => {
    //TODO IMPLEMENT
  };

  handleLogIn = () => {
    //TODO IMPLEMENT
  };

  render() {
    console.log('AUTH MODAL props', this.props)

    const renderSignUpDialog = (
      <Dialog
        fullScreen={false}
        open={this.props.openModal}
        onClose={this.handleCloseModal}
        // aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle>{"Sign Up"}</DialogTitle>
        <DialogContent>
          <TextField
            variant="outlined"
            fullWidth
            id="email"
            label="Email"
            placeholder="email@domain.com"
            maring="normal"
            required
          />
          <FormControl variant="outlined">
            <InputLabel htmlFor="adornment-password">Password</InputLabel>
            <Input
              disableUnderline
              id="adornment-password"
              type={this.state.showPassword ? "text" : "password"}
              value={this.state.password}
              onChange={this.handlePasswordChange()}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="Toggle password visibility"
                    onClick={this.handleClickShowPassword}
                  >
                    {this.state.showPassword ? (
                      <VisibilityOff />
                    ) : (
                      <Visibility />
                    )}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl variant="outlined">
            <InputLabel htmlFor="adornment-password">Password</InputLabel>
            <Input
              disableUnderline
              id="adornment-password"
              type={this.state.showPassword ? "text" : "password"}
              value={this.state.password}
              onChange={this.handlePasswordChange()}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="Toggle password visibility"
                    onClick={this.handleClickShowPassword}
                  >
                    {this.state.showPassword ? (
                      <VisibilityOff />
                    ) : (
                      <Visibility />
                    )}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleCloseModal}>Cancel</Button>
          <Button
            onClick={this.handleSignUp}
            variant="contained"
            autoFocus
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    );

    const renderLogInDialog = (
      <Dialog
        fullScreen={false}
        open={this.props.openModal}
        onClose={this.handleCloseModal}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{"Log In"}</DialogTitle>
        <DialogContent>
          <TextField
            id="email"
            label="Email"
            placeholder="email@domain.com"
            margin="normal"
            variant="outlined"
          />
          <FormControl variant="outlined">
            <InputLabel htmlFor="adornment-password">Password</InputLabel>
            <Input
              disableUnderline
              id="adornment-password"
              type={this.state.showPassword ? "text" : "password"}
              value={this.state.password}
              onChange={this.handlePasswordChange()}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="Toggle password visibility"
                    onClick={this.handleClickShowPassword}
                  >
                    {this.state.showPassword ? (
                      <VisibilityOff />
                    ) : (
                      <Visibility />
                    )}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleCloseModal}>Cancel</Button>
          <Button onClick={this.handleLogIn} autoFocus>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    );
    return this.props.modalType === "LogIn"
      ? renderLogInDialog
      : renderSignUpDialog;
  }
}

export default connect(state => state.authentication)(AuthenticationModal)