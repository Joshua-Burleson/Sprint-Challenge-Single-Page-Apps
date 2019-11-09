import React, { useState } from "react";
import {Form, Field, withFormik} from 'formik';

const  SearchForm = props => {
 
  return (
    <Form>
      <Field type="input" name="search" placeholder="Search" />
      <button type="submit">Submit</button>
    </Form>
  );
}

const FormikSearch = withFormik({
  mapPropsToValues({search}){
    return {search : search || ''}
  },
  handleSubmit(values, FormikBag){
    FormikBag.props.findChar(values.search);
    values.search = '';
  }
})(SearchForm);


export default FormikSearch;