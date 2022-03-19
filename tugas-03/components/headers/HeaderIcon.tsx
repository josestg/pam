import React from "react";
import {
  StyleSheet,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
  GestureResponderEvent,
} from "react-native";

interface HeaderIcon {
  icon: ImageSourcePropType;
  onPress: (event: GestureResponderEvent) => void;
}

export const HeaderIcon: React.FC<HeaderIcon> = (props) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image style={styles.icon} source={props.icon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 18,
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 8,
  },
});
