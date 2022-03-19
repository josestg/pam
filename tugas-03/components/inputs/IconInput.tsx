import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  ImageSourcePropType,
  Text,
} from "react-native";

interface IconInputProps {
  icon: ImageSourcePropType;
  placeholder: string;
  label: string;
  value: string;
  onChangeText: (text: string) => void;
}

export const IconInput: React.FC<IconInputProps> = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.label}</Text>
      <View style={styles.formContainer}>
        <Image style={styles.icon} source={props.icon} />
        <TextInput
          value={props.value}
          style={styles.textInput}
          editable={true}
          maxLength={40}
          placeholder={props.placeholder}
          onChangeText={props.onChangeText}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 18,
  },
  formContainer: {
    display: "flex",
    flexDirection: "row",
    padding: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    width: 300,
    borderRadius: 8,
    shadowColor: "#333",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  icon: {
    width: 38,
    height: 38,
    marginRight: 8,
  },
  textInput: {
    borderColor: "#000",
    padding: 8,
    flex: 1,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 12,
  },
});
