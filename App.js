import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Linking } from 'react-native';
import Logo from "./assets/vivadog_sign.png";
import Reiko from "./assets/reiko.jpg";
import Insta from "./assets/instagram.png";
import Line from "./assets/line.png";
import Ionicons from '@expo/vector-icons/Ionicons';

const App = () => {
  return (
    <View
      style={[styles.container, { flexDirection: 'column' }]}>

      <View style={styles.header}>
        <Text style={styles.headerText}>VIVA! DOG</Text>
        <Image source={Logo} style={styles.image} />
      </View>

      <View style={styles.about}>
        <Text style={styles.text}>Hello,{"\n"}{"\n"}I'm Reiko Houlli, CEO of VIVA! DOG.{"\n"}{"\n"}VIVA! DOG opened in 2003 with the aim to provide quality pet grooming and boarding.</Text>
        <Image source={Reiko} style={styles.profile} />
      </View>

      <View style={styles.contact}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => { Linking.openURL(`tel:0426238115`); }}>
            <Ionicons name="call-outline" style={styles.icon} size={32} />
          </TouchableOpacity>
          <Text style={styles.buttonText}>042-623-8115</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => { Linking.openURL(`tel:08010073207`); }}>
            <Ionicons name="phone-portrait-outline" style={styles.icon} size={32} />
          </TouchableOpacity>
          <Text style={styles.buttonText}>080-1007-3207</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => { Linking.openURL('mailto:houlli82@@htomail.co.uk?subject=Enquiries') }}>
            <Ionicons name="mail-outline" style={styles.icon} size={32} />
          </TouchableOpacity>
          <Text style={styles.buttonText}>vivadog2003@gmail.com</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => { Linking.openURL('https://www.google.com/maps/search/?api=1&query=Viva+Dog+Hachioji') }}>
            <Ionicons name="location-outline" style={styles.icon} size={32} />
          </TouchableOpacity>
          <Text style={styles.buttonText}>〒192-0073, Hachioji-shi, Tokyo</Text>
        </View>
      </View>

      <View style={styles.bottom}>
        <View style={styles.socialContainer}>
          <TouchableOpacity onPress={() => { Linking.openURL('https://www.instagram.com/vivadog_2003/') }}>
            <Image source={Insta} style={styles.social} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { Linking.openURL('https://lin.ee/TcOvmOB') }} >
            <Image source={Line} style={styles.social} />
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Built by Mark Houlli, 2023</Text>
        </View>

      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  header: {
    flex: 0.5,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 12,
    paddingLeft: 12,
    paddingTop: 12,
  },
  headerText: {
    alignSelf: 'flex-end',
    paddingBottom: 4,
    fontSize: 25,
    color: 'black',
  },
  image: {
    height: 40,
    width: 40,
    alignSelf: 'flex-end',
  },
  about: {
    flex: 1.5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 12,
    paddingRight: 12,
    borderBottomColor: 'white',
    borderBottomWidth: 0.3,
  },
  text: {
    flex: 1,
    fontSize: 14,
    color: 'white',
    paddingRight: 8,
  },
  profile: {
    height: 130,
    width: 130,
    borderRadius: 130,
    borderColor: 'white',
    borderWidth: 0.3,
  },
  contact: {
    flex: 3,
    justifyContent: 'space-around',
    paddingLeft: 12,
  },
  buttonContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  button: {
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'red',
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
  },
  buttonText: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 16,
    marginLeft: 12,
  },
  icon: {
    color: 'white',
    alignSelf: 'center',
  },
  bottom: {
    flex: 1,
    backgroundColor: 'white',
  },
  socialContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 12,
    paddingBottom: 12,
  },
  social: {
    height: 50,
    width: 50,
    marginLeft: 12,
    marginRight: 12,
  },
  footer: {
    flex: 0.6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerText: {
    color: 'grey',
  }
});

export default App;
