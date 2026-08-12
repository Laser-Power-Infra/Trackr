import { Pressable, Text, View } from "react-native";
import { ChevronRight, MapPin } from "lucide-react-native";

import StatusBadge from "@/components/status-badge";
import { Colors } from "@/constants/colors";
import type { Client } from "@/types/client";

type ClientCardProps = {
  client: Client;
  onPress?: () => void;
};

export default function ClientCard({ client, onPress }: ClientCardProps) {
  return (
    <Pressable
      onPress={onPress}
      className="flex-col gap-xs bg-surface-container-lowest p-md active:bg-surface-container-low"
    >
      <View className="flex-row items-center gap-sm flex-wrap">
        <Text className="font-headline-md text-headline-md text-on-surface flex-shrink">
          {client.companyName}
        </Text>
        <StatusBadge status={client.status} visitTime={client.visitTime} />
      </View>

      <View className="flex-row items-center gap-xs mt-xs">
        <MapPin size={16} color={Colors.onSurfaceVariant} />
        <Text className="font-body-md text-body-md text-on-surface-variant flex-1">
          {client.address}
        </Text>
      </View>

      <View className="flex-row items-center justify-between gap-lg mt-md">
        <View className="flex-col">
          <Text className="font-label-md text-label-md text-on-surface-variant">
            Contact
          </Text>
          <Text className="font-body-md text-body-md text-on-surface font-medium">
            {client.contactName}
          </Text>
          <Text className="font-body-md text-body-md text-on-surface-variant">
            {client.phone}
          </Text>
        </View>
        <View className="w-8 h-8 rounded-full items-center justify-center">
          <ChevronRight size={20} color={Colors.outline} />
        </View>
      </View>
    </Pressable>
  );
}
