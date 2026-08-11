import { Stack } from "expo-router";

export default function ClientsLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Clients",
        }}
      />

      <Stack.Screen
        name="[id]"
        options={{
          title: "Client Details",
        }}
      />
    </Stack>
  );
}