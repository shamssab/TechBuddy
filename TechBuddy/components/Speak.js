import React from "react";
import { StyleSheet, Text, View, Pressable, Modal } from 'react-native';
import { useState, useEffect } from "react";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Speech from 'expo-speech';

const Speak = ({text}) => {

    const [speaking, setSpeaking] = useState(false);

    const speak = () => {
        console.log('text:', text);
        // Speech.speak(text);

        if(!speaking) {
            console.log('hello', speaking)
            Speech.speak(text);
            setSpeaking(true);
        } else {
            console.log('here...', speaking);
            Speech.pause();
            setSpeaking(false);
        }
        
      };

      const pauseSpeak = () => {
        console.log('paused clicked');
        Speech.pause;
        setSpeaking(false);
      }

    return (
        <View>
             <Pressable style={SpeakStyle.button} onPress={speak}>
                <MaterialCommunityIcons name={speaking ? "pause" : "text-to-speech"} size={40} color="black" />
                <Text>Speech to Text</Text>
             </Pressable>
        </View>
    );
};

const SpeakStyle = {
    button: {
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center'
    }

};

export default Speak;