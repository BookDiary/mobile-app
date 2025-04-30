import React from "react";
import { Text, View } from "react-native";
import EditScreenInfo from "@/components/custom/layout/EditScreenInfo";

export default function TabTwoScreen() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-lg font-bold">Tab Two</Text>
      <View className="my-8 h-px w-4/5 bg-gray-300 dark:bg-gray-700" />

      <EditScreenInfo path="app/(tabs)/two.tsx" />
    </View>
  );
}
