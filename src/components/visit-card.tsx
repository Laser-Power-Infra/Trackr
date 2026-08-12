import { Pressable, Text, View } from "react-native";
import { LogIn, LogOut, MapPin, Timer } from "lucide-react-native";

import { Colors } from "@/constants/colors";
import type { Visit } from "@/types";

type VisitCardProps = {
  visit: Visit;
  isLast?: boolean;
  onPress?: () => void;
};

export default function VisitCard({
  visit,
  isLast = false,
  onPress,
}: VisitCardProps) {
  const Icon = visit.icon;

  return (
    <Pressable
      onPress={onPress}
      className={`flex-row items-start gap-md p-md ${
        isLast ? "" : "border-b border-outline-variant"
      }`}
    >
      <View className="w-10 h-10 rounded-full bg-surface-container items-center justify-center mt-1">
        <Icon size={20} color={Colors.primary} />
      </View>
      <View className="flex-1">
        <View className="flex-row items-start justify-between gap-2">
          <Text className="font-headline-md text-[16px] leading-tight text-on-surface flex-1">
            {visit.clientName}
          </Text>
          <View className="bg-surface-variant rounded px-2 py-1">
            <Text className="font-label-sm text-label-sm text-on-surface-variant">
              {visit.dateLabel}
            </Text>
          </View>
        </View>
        <View className="flex-row items-center gap-1 mt-1">
          <MapPin size={16} color={Colors.onSurfaceVariant} />
          <Text className="font-body-md text-body-md text-on-surface-variant flex-1">
            {visit.address}
          </Text>
        </View>
        <View className="flex-row items-center gap-4 mt-2">
          <View className="flex-row items-center gap-1">
            <LogIn size={14} color={Colors.onSurfaceVariant} />
            <Text className="font-label-md text-label-md text-on-surface-variant">
              {visit.checkIn}
            </Text>
          </View>
          <View className="flex-row items-center gap-1">
            <LogOut size={14} color={Colors.onSurfaceVariant} />
            <Text className="font-label-md text-label-md text-on-surface-variant">
              {visit.checkOut}
            </Text>
          </View>
          <View className="flex-row items-center gap-1 ml-auto">
            <Timer size={14} color={Colors.onSurface} />
            <Text className="font-label-md text-label-md font-medium text-on-surface">
              {visit.duration}
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}
