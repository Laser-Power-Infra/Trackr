import { Pressable, Text, View } from "react-native";

type SectionHeaderProps = {
  title: string;
  actionLabel?: string;
  onActionPress?: () => void;
};

export default function SectionHeader({
  title,
  actionLabel,
  onActionPress,
}: SectionHeaderProps) {
  return (
    <View className="flex-row items-center justify-between mb-md">
      <Text className="font-headline-md text-headline-md text-on-surface">
        {title}
      </Text>
      {actionLabel ? (
        <Pressable onPress={onActionPress} className="active:opacity-70">
          <Text className="font-label-md text-label-md text-primary font-medium">
            {actionLabel}
          </Text>
        </Pressable>
      ) : null}
    </View>
  );
}
