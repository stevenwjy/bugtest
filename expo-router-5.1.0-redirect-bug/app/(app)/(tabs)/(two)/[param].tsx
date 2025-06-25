import { useLocalSearchParams } from "expo-router";
import { Text } from "react-native";

export default function TabTwoParamScreen() {
  const { param } = useLocalSearchParams<{ param: string }>();
  return (
    <Text style={{ color: "red" }}>
      This is the second tab with param: {param}
    </Text>
  );
}
