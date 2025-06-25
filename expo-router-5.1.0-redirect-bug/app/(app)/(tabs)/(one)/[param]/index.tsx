import { useLocalSearchParams } from "expo-router";
import { Text } from "react-native";

export default function TabOneParamScreen() {
  const { param } = useLocalSearchParams<{ param: string }>();
  return (
    <Text style={{ color: "red" }}>
      This is the first tab with param: {param}
    </Text>
  );
}
