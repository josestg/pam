import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { IconInput } from "../components/inputs";
import { SolidButton } from "../components/buttons";

export const SearchPage: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <IconInput
          label="Lokasi Keberangkantan"
          icon={require("../assets/takeoff.png")}
          placeholder="Pilih lokasi keberangkatan"
        />

        <IconInput
          label="Lokasi Tujuan"
          icon={require("../assets/landing.png")}
          placeholder="Pilih lokasi tujuan"
        />
        <IconInput
          label="Tanggal"
          icon={require("../assets/calendar.png")}
          placeholder="Tanggal Keberangkatan"
        />

        <SolidButton title="Cari" onPress={() => {}} />
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
    justifyContent: "center",
  },

  formContainer: {
    display: "flex",
    backgroundColor: "#fff",
    padding: 24,
    borderRadius: 24,
  },

  formLabel: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
});
