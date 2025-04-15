import {Text, StyleSheet, TextInput, View, Button} from "react-native";
import {useState} from "react";

export default function Index() {
  const [inputValue, setInputValue] = useState("");
  const [decimal, setDecimal] = useState("");

  const binToDec = (binary :string): string => {
      for (let i = 0; i <= binary.length - 1; i++) {
          if (binary.charAt(i) !== "0" && binary.charAt(i) !== "1") {
              return "Binary should only contain 1s or 0s. Try again."
          }

      }

      return String(parseInt(binary, 2))
  };

  return (
      <View style={styles.view}>
        <Text style={styles.headerText}>Bin2Dec</Text>
        <View><Text style={styles.decimal}>{decimal}</Text></View>
        <TextInput
            style={styles.input}
            maxLength={8}
            onChangeText={setInputValue}
            placeholder="Enter a binary number up to 8 digits"
        />
        <Button
            title={"Submit"}
            onPress={() => setDecimal(binToDec(inputValue))}
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
