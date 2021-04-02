import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {BarCodeScanner} from 'expo-barcode-scanner';
import * as Permissions from 'expo-permissions';

export default class Scanner extends React.Component{

    constructor(){
        super();
        this.state = {
            buttonState: 'normal',
            hasCameraPermission: false,
            scannedData: null,
            scanned: false
        }
    }

    getCameraPermissions = async() =>{
       const {status} = await Permissions.askAsync(Permissions.CAMERA);
       this.setState({
           hasCameraPermission: true,
           buttonState: 'clicked',
       })
    }

    handleBarcodeScanned = async ({ type, data }) => {
          this.setState({
            scanned: true,
            scannedData: data,
            buttonState: "normal",
          })
      };

      render(){
        return(
            <View style = {styles.container}>

            <Text style = {styles.header}>
             Bar Code Scanner
            </Text>

            <Image source = "MrFluffyFace.jpg"/>

            <TouchableOpacity style = {styles.scanButton}
            onPress = {() =>{
                this.getCameraPermissions();
            }}>
                <Text style = {styles.buttonText}>Try to Scan Your QR Code (No promises made)</Text>
            </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue'
    },

    header: {
      fontSize: 40,
      backgroundColor: 'blue',
      textAlign: 'center',
      fontWeight: 'bold' 
    },

    scanButton: {
      alignSelf: 'center',
      backgroundColor: 'lightgreen',
      width: 400,
      height: 50,
      borderRadius: 50,
      marginTop: 50
    },

    buttonText: {
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: 10
    }
})