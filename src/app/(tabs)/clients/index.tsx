import { useCallback } from "react";
import { FlatList, Text, View } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import type { ListRenderItemInfo } from "react-native";

import ClientCard from "@/components/client-card";
import Header from "@/components/header";
import SearchBar from "@/components/search-bar";
import { DASHBOARD_USER } from "@/constants/mock-data";
import { CLIENTS } from "@/mock/clients";
import type { Client } from "@/types/client";

const keyExtractor = (item: Client) => item.id;

function ListDivider() {
  return <View className="border-b border-outline-variant" />;
}

export default function ClientsScreen() {
  const router = useRouter();

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<Client>) => (
      <ClientCard
        client={item}
        onPress={() =>
          router.push({ pathname: "/clients/[id]", params: { id: item.id } })
        }
      />
    ),
    [router],
  );

  return (
    <SafeAreaView className="flex-1 bg-surface" edges={["top"]}>
      <Header name={DASHBOARD_USER.name} />

      <View className="px-container-margin pt-lg pb-lg">
        <Text className="font-display text-display text-on-surface">
          Clients
        </Text>
        <Text className="font-body-md text-body-md text-on-surface-variant mt-sm">
          Manage and track your active client visits.
        </Text>
        <SearchBar className="mt-md" />
      </View>

      <FlatList
        className="px-container-margin pb-lg"
        data={CLIENTS}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        ItemSeparatorComponent={ListDivider}
        contentContainerClassName="border border-outline-variant rounded-xl overflow-hidden bg-surface-container-lowest shadow-sm"
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}
