import { Pressable, Text, View } from "react-native";
import { Bell } from "lucide-react-native";

import { Colors } from "@/constants/colors";

type HeaderProps = {
  name?: string;
  onNotificationPress?: () => void;
};

export default function Header({ name, onNotificationPress }: HeaderProps) {
  const initial = name?.charAt(0)?.toUpperCase() ?? "";

  return (
    <View className="flex-row items-center justify-between bg-surface border-b border-outline-variant px-container-margin py-md">
      <View className="flex-row items-center gap-sm">
        <View className="w-10 h-10 rounded-full bg-surface-container-highest border border-outline-variant items-center justify-center">
          <Text className="font-label-md text-label-md text-on-surface-variant">
            {initial}
          </Text>
        </View>
        <Text className="font-headline-lg text-headline-lg text-primary">
          Trackr
        </Text>
      </View>
      <Pressable
        onPress={onNotificationPress}
        className="p-2 rounded-full active:opacity-70"
        hitSlop={8}
      >
        <Bell size={24} color={Colors.primary} />
      </Pressable>
    </View>
  );
}
