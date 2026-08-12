import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Building2, LogIn, LogOut, Plus } from "lucide-react-native";

import Header from "@/components/header";
import QuickActionCard from "@/components/quick-action-card";
import SectionHeader from "@/components/section-header";
import StatusCard from "@/components/status-card";
import VisitCard from "@/components/visit-card";
import { Colors } from "@/constants/colors";
import { DASHBOARD_USER, VISITS } from "@/constants/mock-data";
import { useGreeting } from "@/hooks/use-greeting";

export default function Dashboard() {
  const { greeting, dateLabel } = useGreeting();

  return (
    <SafeAreaView className="flex-1 bg-surface" edges={["top"]}>
      <Header name={DASHBOARD_USER.name} />

      <ScrollView
        className="flex-1"
        contentContainerClassName="px-container-margin py-lg gap-lg"
        showsVerticalScrollIndicator={false}
      >
        <View>
          <Text className="font-display text-display text-on-surface">
            {greeting}, {DASHBOARD_USER.name}
          </Text>
          <Text className="font-body-lg text-body-lg text-on-surface-variant mt-1">
            {dateLabel}
          </Text>
        </View>

        <StatusCard label="Current Status" value="Not Checked In" />

        <View className="flex-row flex-wrap gap-md">
          <QuickActionCard
            variant="primary"
            icon={LogIn}
            label="Check In"
            className="w-full md:flex-1"
          />
          <QuickActionCard
            icon={LogOut}
            label="Check Out"
            iconColor={Colors.onSurfaceVariant}
            disabled
            className="flex-1"
          />
          <QuickActionCard
            icon={Building2}
            label={"Add Client\nVisit"}
            className="flex-1"
          />
        </View>

        <View>
          <SectionHeader title="Recent Visits" actionLabel="View All" />
          <View className="border border-outline-variant rounded-xl overflow-hidden bg-surface-container-lowest">
            {VISITS.map((visit, index) => (
              <VisitCard
                key={visit.id}
                visit={visit}
                isLast={index === VISITS.length - 1}
              />
            ))}
          </View>
        </View>
      </ScrollView>

      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Add Visit"
        className="absolute bottom-4 right-4 w-14 h-14 rounded-xl bg-primary-container items-center justify-center boxShadow-lg active:scale-95"
      >
        <Plus size={28} color={Colors.white} />
      </Pressable>
    </SafeAreaView>
  );
}
