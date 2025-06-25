import { Stack } from "expo-router";

export default function OneLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="[param]" />
    </Stack>
  );
}
