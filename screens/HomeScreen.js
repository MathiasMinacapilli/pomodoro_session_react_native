import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { MonoText } from '../components/StyledText';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.getStartedContainer}>
          <Text style={styles.getStartedText}>Welcome to the Pomodoro Session App</Text>
        </View>

        <View style={styles.welcomeContainer}>
          <Image
            source={require('../assets/images/books.png')
            }
            style={styles.welcomeImage}
          />
        </View>

        <View>
          <Text style={styles.appDescription}>With this app you will increase the efficacy and efficiency of your study and feel that you are studying more than with a traditional method.</Text>
        </View>

        <View style={styles.counterWrapper}>
          <Text style={styles.counterText}>25:00</Text>
        </View>

        <View style={styles.buttonGroupWrapper}>
          <Button
            onPress={onPressStart}
            title="Start"
            color="#841584"
            accessibilityLabel="Start the timer" />
          <Button
            onPress={onPressStart}
            title="Pause"
            color="#841584"
            accessibilityLabel="Pause the timer" />
          <Button
            onPress={onPressStart}
            title="Stop"
            color="#841584"
            accessibilityLabel="Stop the timer" />
        </View>
      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

function onPressStart() {
  return null;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  appDescription: {
    textAlign: 'center',
  },
  counterWrapper: {},
  counterText: {
    color: '#b58941',
    fontSize: 100,
    textAlign: 'center',
  },
  buttonGroupWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
  }
});
