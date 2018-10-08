import React from "react";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { connect } from "react-redux";
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
  Button
} from "@material-ui/core";
import OutlinedInput from "@material-ui/core/OutlinedInput/OutlinedInput";
import FormHelperText from "@material-ui/core/FormHelperText/FormHelperText";
import validator from "validator";
import axios from "axios";

class AuthenticationModal extends React.Component {
  state = {
    showPassword: false,
    //SING UP ? SIGN IN
    email: "",
    password: "",
    passwordConfirm: "",
    verification: ""
  };

  handlePasswordChange = prop => event => {
    // console.log('PASS', this.state.password)
    this.setState({ [prop]: event.target.value });
  };
  handlePasswordConfirmChange = prop => e => {
    // console.log('CONFPASS', this.state.passwordConfirm)
    this.setState({ [prop]: e.target.value });
  };

  handleEmailChange = e => {
    // console.log("EMAIL", e.target.value);
    this.setState({ email: e.target.value });
  };

  handleVerificationChange = e => {
    this.setState({ verification: e.target.value });
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  handleCloseModal = () => {
    this.props.dispatch({ type: "authentication/HIDE_MODAL" });
  };

  handleVerification = () => {};

  handleSignUp = () => {
    //   let endpoint = 'URL'
    //   let data = {
    //     email: this.state.email,
    //     password: this.state.password
    //   }
    //   axios.post(endpoint, data, ).then((response) =>{
    //     console.log('Response: ',response)
    //     // TODO SAVE THE TOKEN
    //     this.props.dispatch({ type: "user/LOG_IN" });
    //     this.props.dispatch({ type: "authentication/HIDE_MODAL" });
    //   })
    this.props.dispatch({ type: "user/LOG_IN" });
    this.props.dispatch({
      type: "authentication/SHOW_MODAL",
      payload: { openModal: true, modalType: "verification" }
    });
  };

  handleLogIn = () => {
    //   let endpoint = 'URL'
    //   let data = {
    //     email: this.state.email,
    //     password: this.state.password
    //   }
    //   axios.post(endpoint, data, ).then((response) =>{
    //     console.log('Response: ',response)
    //     // TODO SAVE THE TOKEN
    //     this.props.dispatch({ type: "user/LOG_IN" });
    //     this.props.dispatch({ type: "authentication/HIDE_MODAL" });
    //   })
    this.props.dispatch({ type: "user/LOG_IN" });
    this.props.dispatch({ type: "authentication/HIDE_MODAL" });
  };

  render() {
    const renderValidationDialog = (
      <Dialog open={this.props.openModal} onClose={this.handleCloseModal}>
        <form
          onSubmit={e => {
            e.preventDefault();
            this.handleVerification;
          }}
        >
          <DialogTitle>{"Verify Account"}</DialogTitle>
          <DialogContent>
            <TextField
              label='Verification Code'
              placeholder='123456'
              name="verification"
              variant="outlined"
              fullWidth
              id="verification"
              required
              margin="dense"
              helperText={"Enter your verification code"}
              value={this.state.verification}
              onChange={this.handleVerificationChange}
              error={
                this.state.verification === ""
                  ? false
                  : !validator.isLength(this.state.verification, {
                      min: 6,
                      max: 6
                    })
              }
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleCloseModal}>Cancel</Button>
            <Button variant="contained" autoFocus type="submit">
              Submit
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    );

    const renderSignUpDialog = (
      <Dialog open={this.props.openModal} onClose={this.handleCloseModal}>
        <form
          onSubmit={e => {
            e.preventDefault();
            this.handleSignUp();
          }}
        >
          <DialogTitle>{"Sign Up"}</DialogTitle>
          <DialogContent>
            <TextField
              name="email"
              variant="outlined"
              fullWidth
              id="email"
              error={
                this.state.email === ""
                  ? false
                  : !validator.isEmail(this.state.email)
              }
              label="Email"
              placeholder="email@domain.com"
              margin="normal"
              required
              helperText="Enter your email address"
              value={this.state.email}
              onChange={this.handleEmailChange}
            />
            <div>
              <FormControl
                variant="outlined"
                required
                margin="normal"
                fullWidth
              >
                <InputLabel htmlFor="adornment-password">Password</InputLabel>
                <OutlinedInput
                  labelWidth={10}
                  type={this.state.showPassword ? "text" : "password"}
                  value={this.state.password}
                  onChange={this.handlePasswordChange("password")}
                  error={
                    this.state.password === ""
                      ? false
                      : !validator.isLength(this.state.password, { min: 6 })
                  }
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
                <FormHelperText>
                  Enter a password with 6 character minimum
                </FormHelperText>
              </FormControl>
              <FormControl
                variant="outlined"
                required
                margin="normal"
                fullWidth
              >
                <InputLabel htmlFor="adornment-password">Password</InputLabel>
                <OutlinedInput
                  required
                  error={!(this.state.passwordConfirm === this.state.password)}
                  labelWidth={10}
                  value={this.state.passwordConfirm}
                  onChange={this.handlePasswordConfirmChange("passwordConfirm")}
                  type={this.state.showPassword ? "text" : "password"}
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
                <FormHelperText>Confirm your password</FormHelperText>
              </FormControl>
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleCloseModal}>Cancel</Button>
            <Button variant="contained" autoFocus type="submit">
              Submit
            </Button>
          </DialogActions>
        </form>
        {this.props.modalType === "verification"
          ? renderValidationDialog
          : null}
      </Dialog>
    );

    const renderLogInDialog = (
      <Dialog open={this.props.openModal} onClose={this.handleCloseModal}>
        <form
          onSubmit={e => {
            e.preventDefault();
            this.handleLogIn(e.target);
          }}
        >
          <DialogTitle id="responsive-dialog-title">{"Log In"}</DialogTitle>
          <DialogContent>
            <TextField
              fullWidth
              id="email"
              label="Email"
              placeholder="email@domain.com"
              variant="outlined"
              error={
                this.state.email === ""
                  ? false
                  : !validator.isEmail(this.state.email)
              }
              value={this.state.email}
              onChange={this.handleEmailChange}
              margin="normal"
              required
            />
            <FormControl variant="outlined" required fullWidth margin="normal">
              <InputLabel htmlFor="adornment-password">Password</InputLabel>
              <OutlinedInput
                labelWidth={10}
                type={this.state.showPassword ? "text" : "password"}
                value={this.state.password}
                onChange={this.handlePasswordChange("password")}
                error={
                  this.state.password === ""
                    ? false
                    : !validator.isLength(this.state.password, {
                      min: 6,
                    })
                }
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
            <Button variant="contained" autoFocus type="submit">
              Submit
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    );
    return this.props.modalType === "LogIn"
      ? renderLogInDialog
      : renderSignUpDialog;
  }
}

export default connect(state => state.authentication)(AuthenticationModal);
