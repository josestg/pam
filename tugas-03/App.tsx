import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HeaderIcon } from "./components/headers";

import { BrowserScreen, SearchScreen } from "./screens";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{
            headerLeft: () => {
              return (
                <HeaderIcon
                  icon={require("./assets/menu.png")}
                  onPress={() => {}}
                />
              );
            },
            headerRight: () => {
              return (
                <HeaderIcon
                  icon={require("./assets/profile.png")}
                  onPress={() => {}}
                />
              );
            },
          }}
        />
        <Stack.Screen name="Browser" component={BrowserScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
