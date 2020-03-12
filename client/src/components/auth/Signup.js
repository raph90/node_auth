import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import * as actions from "actions";
import { compose } from "redux";

class Signup extends Component {
  onSubmit = formProps => {
    this.props.signup(formProps);
    // console.log(this.props.signup);
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
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default compose(
  connect(null, actions),
  reduxForm({ form: "signup" })
)(Signup);
