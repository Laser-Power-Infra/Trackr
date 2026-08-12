import { Pressable, Text, View } from "react-native";
import { ChevronLeft, MapPin, Phone, User } from "lucide-react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import StatusBadge from "@/components/status-badge";
import { Colors } from "@/constants/colors";
import { CLIENTS } from "@/mock/clients";

export default function ClientDetail() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  const client = CLIENTS.find((item) => item.id === id);

  return (
    <SafeAreaView className="flex-1 bg-surface" edges={["top"]}>
      <Pressable
        onPress={() => router.back()}
        className="flex-row items-center gap-sm px-container-margin py-md"
        hitSlop={8}
      >
        <ChevronLeft size={22} color={Colors.primary} />
        <Text className="font-headline-md text-headline-md text-on-surface">
          Client Details
        </Text>
      </Pressable>

      <View className="px-container-margin gap-md py-lg">
        <View className="flex-row items-center gap-sm flex-wrap">
          <Text className="font-display text-display text-on-surface flex-shrink">
            {client?.companyName ?? "Unknown Client"}
          </Text>
          {client ? (
            <StatusBadge status={client.status} visitTime={client.visitTime} />
          ) : null}
        </View>

        <View className="gap-sm bg-surface-container-lowest border border-outline-variant rounded-xl p-md">
          <View className="flex-row items-center gap-xs">
            <MapPin size={18} color={Colors.onSurfaceVariant} />
            <Text className="font-body-md text-body-md text-on-surface-variant flex-1">
              {client?.address ?? "—"}
            </Text>
          </View>
          <View className="flex-row items-center gap-xs">
            <User size={18} color={Colors.onSurfaceVariant} />
            <Text className="font-body-md text-body-md text-on-surface flex-1">
              {client?.contactName ?? "—"}
            </Text>
          </View>
          <View className="flex-row items-center gap-xs">
            <Phone size={18} color={Colors.onSurfaceVariant} />
            <Text className="font-body-md text-body-md text-on-surface flex-1">
              {client?.phone ?? "—"}
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
