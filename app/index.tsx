import { Text, StyleSheet, TextInput, View, StatusBar } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Index() {

  return (
    <View style={styles.view}>
      <Text style={styles.headerText}>Bin2Dec</Text>
      <View><Text style={styles.decimal}>0</Text></View>
      <TextInput
        style={styles.input}
        placeholder="Enter a binary number"
      />
    </View>
  )
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: "80%",
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  headerText: {
    fontSize: 80,
    margin:40
  },
  view: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center"
  },
  decimal: {
    fontSize: 40,
    margin: 40
  }
});
