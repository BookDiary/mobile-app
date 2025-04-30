import { Link, Tabs } from "expo-router";
import { useContext } from "react";
import { ColorModeContext } from "../_layout";
import FontAwesome from "@expo/vector-icons/FontAwesome";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={25} {...props} />;
}

export default function TabLayout() {
  const { colorMode } = useContext(ColorModeContext) as {
    colorMode: keyof typeof themeColors;
  };

  // Define theme colors based on colorMode
  const themeColors = {
    light: {
      text: "text-black",
      fill: "bg-white",
    },
    dark: {
      text: "text-white",
      fill: "bg-black",
    },
  };

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: colorMode === "dark" ? "#000" : "#fff",
          borderTopWidth: 1,
          paddingTop: 10,
          height: 70,
          borderTopColor: "#ccc",
        },
        tabBarActiveTintColor: colorMode === "dark" ? "#fff" : "#000",
        tabBarInactiveTintColor: colorMode === "dark" ? "#888" : "#666",
        tabBarLabelStyle: {
          fontSize: 12,
          marginTop: 0,
        },
        tabBarIconStyle: {
          marginBottom: 5, // 아이콘과 텍스트 간격 조정
        },
        tabBarLabelPosition: "below-icon", // 아이콘 아래에 텍스트 배치
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Tab One",
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: "Tab Two",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="user-circle" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
