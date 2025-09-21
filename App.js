import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import FavoritesScreen from "./screens/FavoriatesScreen";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import Ionicons from "@expo/vector-icons/Ionicons";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#f494bcff" }, // 헤더 배경색
        headerTintColor: "#fff", // 헤더 글자/아이콘 색
        drawerContentStyle: { backgroundColor: "#ffe4f2" }, // 드로어 배경색
        drawerInactiveTintColor: "#333", // 비활성 상태 아이템 색
        drawerActiveTintColor: "#f494bc", // 활성 상태 아이템 텍스트 색
        drawerActiveBackgroundColor: "#ffffff", // 활성 상태 배경색
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light-content" />

      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#fb6060ff" },
            headerTintColor: "#f7f2f2ff",
          }}
        >
          <Stack.Screen
            name="drawerScreen"
            component={DrawerNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="overview" component={MealsOverviewScreen} />
          <Stack.Screen name="detail" component={MealDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 10,
//   },
// });
