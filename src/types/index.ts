import type { LucideIcon } from "lucide-react-native";

export type Visit = {
  id: string;
  clientName: string;
  address: string;
  dateLabel: string;
  checkIn: string;
  checkOut: string;
  duration: string;
  icon: LucideIcon;
};
