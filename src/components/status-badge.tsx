import { Text, View } from "react-native";

import { StatusColors } from "@/constants/colors";
import type { ClientStatus } from "@/types/client";

const STATUS_LABELS: Record<ClientStatus, string> = {
  visited_today: "Visited Today",
  pending: "Pending Visit",
  scheduled: "Scheduled",
};

type StatusBadgeProps = {
  status: ClientStatus;
  visitTime?: string;
};

export default function StatusBadge({ status, visitTime }: StatusBadgeProps) {
  const { bg, text } = StatusColors[status];
  const label =
    status === "scheduled" && visitTime
      ? `${STATUS_LABELS[status]} - ${visitTime}`
      : STATUS_LABELS[status];

  return (
    <View className="rounded px-2 py-1" style={{ backgroundColor: bg }}>
      <Text className="font-label-sm text-label-sm uppercase" style={{ color: text }}>
        {label}
      </Text>
    </View>
  );
}
