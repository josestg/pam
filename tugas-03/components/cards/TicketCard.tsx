import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Ticket } from "../../data/data";

interface TicketCardProps {
  ticket: Ticket;
}

export const TicketCard: React.FC<TicketCardProps> = ({ ticket }) => {
  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: ticket.currency,
  });

  return (
    <View style={styles.card}>
      <View>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
          }}
        >
          ({ticket.src}) - ({ticket.dst})
        </Text>
      </View>
      <View style={{ marginVertical: 16 }}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
          }}
        >
          {formatter.format(ticket.minPrice)}
        </Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image
            style={styles.icon}
            source={require("../../assets/airport.png")}
          />
          <Text
            style={{
              fontWeight: "bold",
            }}
          >
            {ticket.provider}
          </Text>
        </View>
        <Text>({ticket.date.toLocaleDateString()})</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },

  card: {
    width: "100%",
    marginTop: 32,
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: 18,
    borderRadius: 16,
    shadowColor: "#1A202C",
    height: 140,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 8,
  },
});
