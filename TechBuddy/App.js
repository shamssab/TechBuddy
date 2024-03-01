import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import EmergencyButton from "./components/EmergencyButton";
import NavigationBar from "./components/NavigationBar";

const App = () => {
  const handleHomePress = () => {
    console.log("Home Button Pressed");
  };

  const handleButton2Press = () => {
    console.log("Button 2 pressed");
  };

  const handleButton3Press = () => {
    console.log("Button 3 pressed");
  };

  return (
    <View style={styles.container}>
      <EmergencyButton />
      <NavigationBar>
        onHomePress={handleHomePress}
        onButton2Press={handleButton2Press}
        onButton3Press={handleButton3Press}
      </NavigationBar>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
