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
  InputAdornment,
  IconButton,
  DialogActions,
  Button,
  CircularProgress
} from "@material-ui/core";
import OutlinedInput from "@material-ui/core/OutlinedInput/OutlinedInput";
import FormHelperText from "@material-ui/core/FormHelperText/FormHelperText";
import validator from "validator";
import { instance } from "../../Axios";
import store from "../../redux/store";

const minPasswordLength = 6;

class AuthenticationModal extends React.Component {
  state = {
    showPassword: false,
    //SING UP ? SIGN IN
    email: "",
    password: "",
    passwordConfirm: "",
    verification: "",
    submitButton: false,
    verifySubmitButton: false,
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

  handleVerification = () => {
    let self = this;
    this.setState({ verifySubmitButton: true });
    let endpoint = "confirmsignup";
    let data = {
      email: this.state.email,
      code: this.state.verification
    };
    instance
      .post(endpoint, data)
      .then(response => {
        console.log("Verification", response);
        this.verifyToken();
      })
      .catch(function(error) {
        self.setState({ verifySubmitButton: false });
        alert(error);
      });
  };

  verifyToken = () =>{
    const endpoint = "verifytoken"
    let config = {
      headers: { 'Access-Control-Allow-Origin': '*',access_token: localStorage.getItem("access_token") }
    };
    instance.post(endpoint, null ,config).then(response => {
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
    })
  }

  handleSignUp = () => {
    let self = this;
    this.setState({ submitButton: true });
    let endpoint = "signup";
    let data = {
      email: this.state.email,
      password: this.state.password
    };
    instance
      .post(endpoint, data)
      .then(response => {
        this.props.dispatch({
          type: "authentication/SHOW_MODAL",
          payload: { openModal: true, modalType: "verification" }
        });
      })
      .catch(function(error) {
        self.setState({ submitButton: false });
        alert(error);
      });
  };

  handleLogIn = () => {
    let self = this;
    this.setState({ submitButton: true });
    let endpoint = "login";
    let data = {
      email: this.state.email,
      password: this.state.password
    };
    instance
      .post(endpoint, data)
      .then(response => {
        console.log("Log In Response: ", response);
        this.setState({ submitButton: false });
        this.props.dispatch({ type: "authentication/HIDE_MODAL" });
        this.props.dispatch({
          type: "user/LOG_IN",
          payload: {
            email: this.state.email,
            access_token: response.data.access_token,
            id_token: response.data.id_token,
            refresh_token: response.data.refresh_token,
            username: response.data.username,
          }
        });
        localStorage.setItem('access_token', response.data.access_token);
        localStorage.setItem('id_token', response.data.id_token);
        localStorage.setItem('refresh_token', response.data.refresh_token);
        localStorage.setItem('username', response.data.username)
      })
      .catch(function(error) {
        self.setState({ submitButton: false });
        alert(error);
      });
  };

  render() {
    const renderValidationDialog = (
      <Dialog open={this.props.openModal} onClose={this.handleCloseModal}>
        <form
          onSubmit={e => {
            e.preventDefault();
            this.handleVerification();
          }}
        >
          <DialogTitle>{"Verify Account"}</DialogTitle>
          <DialogContent>
            <h4>Enter the 6 digit verification code sent to your email</h4>
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
            <TextField
              label="Verification Code"
              placeholder="123456"
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
            <div className="circular_progress_wrapper">
              <Button
                variant="contained"
                autoFocus
                type="submit"
                disabled={this.state.verifySubmitButton}
              >
                Submit
              </Button>
              {this.state.verifySubmitButton && (
                <CircularProgress size={24} className="circular_progress" />
              )}
            </div>
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
                      : !validator.isLength(this.state.password, {
                          min: minPasswordLength
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
                <FormHelperText>
                  Enter a password with 8 character minimum
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
            <Button
              onClick={() => {
                this.props.dispatch({
                  type: "authentication/SHOW_MODAL",
                  payload: { openModal: true, modalType: "verification" }
                });
              }}
              variant="outlined"
            >
              Verify Account
            </Button>
            <Button onClick={this.handleCloseModal}>Cancel</Button>
            <div className="circular_progress_wrapper">
              <Button
                variant="contained"
                autoFocus
                type="submit"
                disabled={this.state.submitButton}
              >
                Submit
              </Button>
              {this.state.submitButton && (
                <CircularProgress size={24} className="circular_progress" />
              )}
            </div>
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
                        min: minPasswordLength
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
            <div className="circular_progress_wrapper">
              <Button
                variant="contained"
                autoFocus
                type="submit"
                disabled={this.state.submitButton}
              >
                Submit
              </Button>
              {this.state.submitButton && (
                <CircularProgress size={24} className="circular_progress" />
              )}
            </div>
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
