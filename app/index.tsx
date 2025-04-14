import {Text, StyleSheet, TextInput, View, Button,} from "react-native";
import {useState} from "react";

export default function Index() {
  const [inputValue, setInputValue] = useState("");
  const binToDec = (binary :string): number => {
    return parseInt(binary, 10);
  };

  return (
      <View style={styles.view}>
        <Text style={styles.headerText}>Bin2Dec</Text>
        <View><Text style={styles.decimal}>0</Text></View>
        <TextInput
            style={styles.input}
            maxLength={8}
            placeholder="Enter a binary number up to 8 digits"
        />
        <Button
            title={"Submit"}
            onPress={binToDec("10")}
        />
      </View>
  );
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
