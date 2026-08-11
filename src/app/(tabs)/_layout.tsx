import { Tabs } from "expo-router";
// import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#2563EB",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Dashboard",
        //   tabBarIcon: ({ color, size }) => (
        //     <Ionicons name="home" size={size} color={color} />
        //   ),
        }}
      />

      <Tabs.Screen
        name="clients"
        options={{
          title: "Clients",
        //   tabBarIcon: ({ color, size }) => (
        //     <Ionicons name="people" size={size} color={color} />
        //   ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
        //   tabBarIcon: ({ color, size }) => (
        //     <Ionicons name="person" size={size} color={color} />
        //   ),
        }}
      />
    </Tabs>
  );
}