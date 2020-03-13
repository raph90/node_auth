import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import * as actions from "actions";
import { compose } from "redux";

class Signup extends Component {
  onSubmit = formProps => {
    this.props.signup(formProps, () => {
      this.props.history.push('/feature');
    });
    
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div>
          <label htmlFor="email">Email</label>
          <Field
            autoComplete="off"
            name="email"
            component="input"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <Field
            autoComplete="off"
            name="password"
            component="input"
            type="password"
          />
        </div>
        <div>
          {this.props.errorMessage}
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}
const mapStateToProps = state => {
  return {
    errorMessage: state.auth.errorMessage
  };
};

export default compose(
  connect(mapStateToProps, actions),
  reduxForm({ form: "signup" })
)(Signup);
