import React, { Component } from 'react';
import Header from './header';
import { StyleSheet, Text, View } from 'react-native';

class Profile extends Component {
    state = {  

    }
    render() { 
        return (  
            <View>
                <Header />
                <Text style={styles.textContainer}> This is my profile page!</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textContainer: {
        margin: 50
    }
})
export default Profile;