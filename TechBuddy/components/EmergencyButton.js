import React from "react";
import { Button, Linking, Platform } from "react-native";

const EmergencyButton = () => {
  const handleEmergencyCall = () => {
    let phoneNumber = "911";

    if (Platform.OS === "android") {
      phoneNumber = `tel:${phoneNumber}`;
    } else {
      phoneNumber = `telprompt:${phoneNumber}`;
    }
    Linking.openURL(phoneNumber);
  };

  return <Button title="Emergency" onPress={handleEmergencyCall} />;
};

export default EmergencyButton;
