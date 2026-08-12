import { Text, View } from "react-native";
import { Clock, MinusCircle } from "lucide-react-native";

import { Colors } from "@/constants/colors";

type StatusCardProps = {
  label: string;
  value: string;
};

export default function StatusCard({ label, value }: StatusCardProps) {
  return (
    <View className="relative flex-row items-center justify-between bg-surface-container-lowest border border-outline-variant rounded-xl p-md boxShadow-sm overflow-hidden">
      <View className="absolute left-0 top-0 bottom-0 w-1 bg-outline" />
      <View className="flex-1">
        <Text className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-1">
          {label}
        </Text>
        <View className="flex-row items-center gap-2">
          <MinusCircle size={20} color={Colors.outline} fill={Colors.outline} />
          <Text className="font-headline-md text-headline-md text-on-surface">
            {value}
          </Text>
        </View>
      </View>
      <View className="w-12 h-12 bg-surface-container rounded-full items-center justify-center">
        <Clock size={24} color={Colors.onSurfaceVariant} />
      </View>
    </View>
  );
}
