import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import EmergencyButton from "./components/EmergencyButton";
import Tip from "./components/Tip";

const App = () => {

  return (
    <View style={styles.container}>
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
