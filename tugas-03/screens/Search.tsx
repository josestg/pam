import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { IconInput } from "../components/inputs";
import { SolidButton } from "../components/buttons";
import { NavigationProp } from "@react-navigation/native";

export interface SearchScreenProps {
  navigation: NavigationProp<any, any>;
}

export const SearchScreen: React.FC<SearchScreenProps> = ({ navigation }) => {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");

  const handleSearch = () => {
    navigation.navigate("Browser", {
      source,
      destination,
      date,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.backgroundContainer} />
      <Text style={styles.header}>Hiling.id</Text>
      <View style={styles.formContainer}>
        <IconInput
          value={source}
          label="Lokasi Keberangkantan"
          icon={require("../assets/takeoff.png")}
          placeholder="Pilih lokasi keberangkatan"
          onChangeText={setSource}
        />

        <IconInput
          value={destination}
          label="Lokasi Tujuan"
          icon={require("../assets/landing.png")}
          placeholder="Pilih lokasi tujuan"
          onChangeText={setDestination}
        />
        <IconInput
          value={date}
          label="Tanggal"
          icon={require("../assets/calendar.png")}
          placeholder="Tanggal Keberangkatan"
          onChangeText={setDate}
        />

        <SolidButton title="Cari" onPress={() => handleSearch()} />
      </View>

      <View style={styles.footer}>
        <Text
          style={{
            fontSize: 12,
            color: "#1A202C",
            fontWeight: "600",
          }}
        >
          Copyright Jose Alfredo Sitanggang-14116125
        </Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    alignItems: "center",
  },

  header: {
    marginTop: 32,
    padding: 16,
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
  },

  footer: {
    flex: 1,
    position: "absolute",
    bottom: 8,
    padding: 18,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },

  backgroundContainer: {
    display: "flex",
    flex: 1,
    backgroundColor: "#1A202C",
    width: "100%",
    position: "absolute",
    top: 0,
    right: 0,
    height: "50%",
    borderBottomEndRadius: 28,
    borderBottomLeftRadius: 28,
  },

  formContainer: {
    marginTop: 32,
    display: "flex",
    backgroundColor: "#fff",
    padding: 24,
    borderRadius: 24,
    shadowColor: "#1A202C",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 8,
  },

  formLabel: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
});
