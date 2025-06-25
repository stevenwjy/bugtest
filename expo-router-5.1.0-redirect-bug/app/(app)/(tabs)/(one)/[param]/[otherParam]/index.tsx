import { useLocalSearchParams } from "expo-router";
import { Text } from "react-native";

export default function TabOneParamScreen() {
  const { param, otherParam } = useLocalSearchParams<{
    param: string;
    otherParam: string;
  }>();
  return (
    <Text style={{ color: "red" }}>
      This is the first tab with param: {param}, and otherParam: {otherParam}
    </Text>
  );
}
