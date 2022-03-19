import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { TicketCard } from "../components/cards/TicketCard";
import { Ticket } from "../data/data";
import { retrieveOpenTickets } from "../data/tickets";

export const BrowserScreen: React.FC = () => {
  const [tickets, setTickets] = useState<Ticket[]>([]);

  useEffect(() => {
    retrieveOpenTickets("", "", new Date())
      .then((data) => setTickets(data))
      .catch(console.log);
  }, []);

  const handleChooseTicket = (ticket: Ticket) => {
    alert(ticket.id);
  };

  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{
            paddingHorizontal: 24,
            width: "100%",
          }}
          data={tickets}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() => handleChooseTicket(item)}>
                <TicketCard ticket={item} />
              </TouchableOpacity>
            );
          }}
        />
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

  listContainer: {
    display: "flex",
    width: "100%",
    flex: 10,
  },

  footer: {
    flex: 1,
    bottom: 16,
    padding: 18,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
});
