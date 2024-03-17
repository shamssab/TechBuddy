import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import EmergencyButton from "./components/EmergencyButton";
import Tip from "./components/Tip";
import Speak from "./components/Speak";

const App = () => {

  return (
    <View style={styles.container}>
      <Speak text={"hello this page is reading aloud with a very long text so that I can test the pausing"}/>
      <Tip style={{float: "right"}}/>
      <EmergencyButton />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // display: "flex"
  },
});

export default App;
