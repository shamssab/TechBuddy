import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import EmergencyButton from "./components/EmergencyButton";

const App = () => {
  return (
    <View style={styles.container}>
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
  },
});

export default App;
