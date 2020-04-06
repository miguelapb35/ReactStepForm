import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }
  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title='Enter Personal Details' />
          <TextField 
            hintText='Enter your Occupation'
            floatingLabelText='Occupation'
            onChange={handleChange('occupation')}
            defaultValue={values.occupation}
            style={styles.button}
          />
          <br />
          <TextField 
            hintText='Enter your City'
            floatingLabelText='City'
            onChange={handleChange('city')}
            defaultValue={values.city}
            style={styles.button}
          />
          <br />
          <TextField 
            hintText='Enter your Bio'
            floatingLabelText='Bio'
            onChange={handleChange('bio')}
            defaultValue={values.bio}
            style={styles.button}
          />
          <br />
          <RaisedButton
            label='Continue'
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
          <RaisedButton
            label='Back'
            primary={false}
            style={styles.button}
            onClick={this.back}
          />
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}

const styles = {
  button: {
    margin: 20
  }
}

export default FormPersonalDetails
