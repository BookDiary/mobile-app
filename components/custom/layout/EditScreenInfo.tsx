import { Link } from "expo-router";
import * as WebBrowser from "expo-web-browser";
import React from "react";
import { Platform, View, Text } from "react-native";
import { Button, ButtonIcon, ButtonText } from "@/components/ui/button";
import { InfoIcon } from "@/components/ui/icon";
import { useRouter } from "expo-router";
import { Box } from "@/components/ui/box";

export function ExternalLink(props: React.ComponentProps<typeof Link>) {
  return (
    <Link
      {...(Platform.OS === "web" ? { target: "_blank" } : {})}
      {...props}
      onPress={(e) => {
        if (Platform.OS !== "web") {
          e.preventDefault();
          WebBrowser.openBrowserAsync(String(props.href));
        }
      }}
      className="py-4"
    />
  );
}

const MonoText = ({ children }: { children: React.ReactNode }) => (
  <Text className="font-mono">{children}</Text>
);

export default function EditScreenInfo({ path }: { path: string }) {
  const router = useRouter();
  return (
    <View>
      <View className="items-center mx-12">
        <Text className="text-lg leading-6 text-center text-black dark:text-white">
          Open up the code for this screen:
        </Text>
        <View className="rounded-md px-1 my-2 bg-black/5 dark:bg-white/5">
          <MonoText>{path}</MonoText>
        </View>
        <Text className="text-lg leading-6 text-center text-black dark:text-white">
          Change any of the text, save the file, and your app will automatically
          update.
        </Text>
      </View>
      <View className="flex-1 bg-slate-400 my-12">
        <Box className="p-5 w-1/2 mx-auto">
          <Button
            size="xs"
            variant="solid"
            className="bg-sky-500"
            onPress={() => router.push("/modal")}
          >
            <ButtonIcon as={InfoIcon} className="mr-2" />
            <ButtonText>Modal Example</ButtonText>
          </Button>
        </Box>
      </View>
      <View className="mt-4 mx-5 items-center">
        <ExternalLink href="https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet">
          <Text className="text-center text-blue-500">
            Tap here if your app doesn't automatically update after making
            changes
          </Text>
        </ExternalLink>
      </View>
    </View>
  );
}
