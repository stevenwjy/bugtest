import { Stack } from "expo-router";

export default function OneParamLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="[otherParam]" />
    </Stack>
  );
}
