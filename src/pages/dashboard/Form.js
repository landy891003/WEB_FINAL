import React, { Component } from "react";
import { withFormik, Form, Field } from "formik";

const form_id = "form_id";
class MaintenanceForm extends Component {
  editOnClick = event => {
    event.preventDefault();
    const data = !this.props.status.edit;
    this.props.setStatus({
      edit: data
    });
  };

  cancelOnClick = event => {
    event.preventDefault();
    this.props.resetForm();
    this.props.setStatus({
      edit: false
    });
  };

  _renderAction() {
    return (
      <React.Fragment>
        <div className="form-statusbar">
          {this?.props?.status?.edit ? (
            <React.Fragment>
              <button
                className="btn btn-primary btn-sm"
                type="submit"
                form={form_id}
              >
                Save
              </button>
              <button
                className="btn btn-danger btn-sm"
                onClick={this.cancelOnClick}
                style={{ marginLeft: "8px" }}
              >
                Cancel
              </button>
            </React.Fragment>
          ) : (
            <button
              className="btn btn-primary btn-sm"
              onClick={this.editOnClick}
            >
              Edit
            </button>
          )}
        </div>
      </React.Fragment>
    );
  }

  _renderFormView = () => {
    return (
      <React.Fragment>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">姓名</label>
          <div className="col-sm-10">
            <label type="text" name="name" className="form-control">
              {this?.props?.fields?.name}
            </label>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">信箱</label>
          <div className="col-sm-10">
            <label type="text" name="brand_name" className="form-control">
              {this?.props?.fields?.email}
            </label>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">國家</label>
          <div className="col-sm-10">
            <label type="text" name="device_type" className="form-control">
              {this?.props?.fields?.country}
            </label>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">自我介紹</label>
          <div className="col-sm-10">
            <label type="text" name="device_type" className="form-control">
              {this?.props?.fields?.intro}
            </label>
          </div>
        </div>
      </React.Fragment>
    );
  };

  _renderFormInput = () => {
    return (
      <React.Fragment>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">姓名</label>
          <div className="col-sm-10">
            <Field
              type="text"
              name="name"
              className="form-control"
              placeholder="Name"
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">信箱</label>
          <div className="col-sm-10">
            <Field
              type="text"
              name="email"
              className="form-control"
              placeholder="Email"
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">國家</label>
          <div className="col-sm-10">
            <Field
              type="text"
              name="country"
              className="form-control"
              placeholder="Country"
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">自我介紹</label>
          <div className="col-sm-10">
            <Field
              type="text"
              name="intro"
              className="form-control"
              placeholder="Introduction"
            />
          </div>
        </div>
      </React.Fragment>
    );
  };

  render() {
    return (
      <React.Fragment>
        <Form id={form_id}>
          {this?.props?.status?.edit
            ? this._renderFormInput()
            : this._renderFormView()}
        </Form>
        {this._renderAction()}

        {/*<h4>Current value</h4>
        <div>
          <pre>
            <code>{JSON.stringify(this.props.fields, null, 2)}</code>
          </pre>
        </div>
        */}
      </React.Fragment>
    );
  }
}

const UserForm = withFormik({
  mapPropsToStatus: props => {
    return {
      edit: props.edit || false
    };
  },
  mapPropsToValues: props => {
    return {
      name: props.fields.name,
      email: props.fields.email,
      country: props.fields.country,
      intro: props.fields.intro,
    };
  },
  enableReinitialize: true,
  handleSubmit: (values, { props, ...actions }) => {
    props.updateFields(values);
    actions.setStatus({
      edit: false
    });
  }
})(MaintenanceForm);

export default UserForm;
