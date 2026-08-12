import { Pressable, Text, View } from "react-native";
import type { LucideIcon } from "lucide-react-native";

import { Colors } from "@/constants/colors";

type QuickActionCardProps = {
  icon: LucideIcon;
  label: string;
  variant?: "primary" | "outline";
  iconColor?: string;
  disabled?: boolean;
  className?: string;
  onPress?: () => void;
};

export default function QuickActionCard({
  icon: Icon,
  label,
  variant = "outline",
  iconColor,
  disabled = false,
  className = "",
  onPress,
}: QuickActionCardProps) {
  const isPrimary = variant === "primary";
  const resolvedIconColor =
    iconColor ?? (isPrimary ? Colors.onPrimary : Colors.primary);

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      className={`h-32 rounded-xl p-md flex-col items-start justify-between boxShadow-sm active:scale-95 ${
        isPrimary ? "bg-primary-container" : "bg-surface-container-lowest border border-outline-variant"
      } ${disabled ? "opacity-50" : ""} ${className}`}
    >
      <View
        className={`w-10 h-10 rounded-full items-center justify-center ${
          isPrimary ? "bg-white/20" : "bg-surface-container"
        }`}
      >
        <Icon size={20} color={resolvedIconColor} />
      </View>
      <Text
        className={`font-headline-md text-headline-md leading-tight ${
          isPrimary ? "text-white" : "text-on-surface"
        }`}
      >
        {label}
      </Text>
    </Pressable>
  );
}
