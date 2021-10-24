import React, { Component } from 'react';
import { Button } from 'react-native';
import openMap from 'react-native-open-maps';


export default class Maps_Re extends Component {



  _goToYosemite() {
    openMap({  start: "Taipei" });
  }

  render() {
    return (
      <Button
        color={'#bdc3c7'}
        onPress={this._goToYosemite}
        title="Click To Open Maps 🗺" />
      
    );
  }
}