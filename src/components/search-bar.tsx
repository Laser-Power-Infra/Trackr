import { TextInput, View } from "react-native";
import { Search } from "lucide-react-native";

import { Colors } from "@/constants/colors";

type SearchBarProps = {
  placeholder?: string;
  className?: string;
};

export default function SearchBar({
  placeholder = "Search clients, companies, or contacts...",
  className = "",
}: SearchBarProps) {
  return (
    <View className={`relative ${className}`}>
      <View className="absolute left-sm top-0 bottom-0 justify-center">
        <Search size={20} color={Colors.outline} />
      </View>
      <TextInput
        className="w-full pl-xl pr-md py-sm border border-outline-variant rounded bg-surface-container-lowest font-body-md text-body-md text-on-surface"
        placeholder={placeholder}
        placeholderTextColor={Colors.onSurfaceVariant}
      />
    </View>
  );
}
