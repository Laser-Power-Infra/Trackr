import { Pressable, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { LayoutDashboard, User, Users } from "lucide-react-native";
import type { LucideIcon } from "lucide-react-native";

import { Colors } from "@/constants/colors";
import { Spacing } from "@/constants/spacing";

const TAB_META: Record<string, { label: string; icon: LucideIcon }> = {
  index: { label: "Dashboard", icon: LayoutDashboard },
  clients: { label: "Clients", icon: Users },
  profile: { label: "Profile", icon: User },
};

const FALLBACK_TAB = { label: "Dashboard", icon: LayoutDashboard };

type BottomTabBarProps = {
  state: { index: number; routes: { key: string; name: string }[] };
  navigation: { navigate: (name: string, params?: object) => void };
};

export default function BottomTabBar({ state, navigation }: BottomTabBarProps) {
  const insets = useSafeAreaInsets();

  return (
    <View
      className="flex-row items-center justify-around bg-surface px-md"
      style={{
        paddingTop: Spacing.sm,
        paddingBottom: insets.bottom + Spacing.sm,
        shadowColor: "#000000",
        shadowOpacity: 0.05,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: -2 },
        elevation: 10,
      }}
    >
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const meta = TAB_META[route.name] ?? FALLBACK_TAB;
        const Icon = meta.icon;
        const color = isFocused
          ? Colors.onSecondaryContainer
          : Colors.onSurfaceVariant;

        return (
          <Pressable
            key={route.key}
            onPress={() => navigation.navigate(route.name)}
            accessibilityRole="tab"
            accessibilityState={{ selected: isFocused }}
            className={`items-center justify-center rounded-full ${
              isFocused ? "bg-secondary-container px-5 py-1" : "p-2"
            }`}
            style={{ minWidth: 72 }}
          >
            <Icon size={22} color={color} />
            <Text
              className={`font-label-md text-label-md mt-1 ${
                isFocused
                  ? "text-on-secondary-container"
                  : "text-on-surface-variant"
              }`}
            >
              {meta.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}
