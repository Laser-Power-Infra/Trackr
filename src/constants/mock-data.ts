import { Building2, Store } from "lucide-react-native";

import type { Visit } from "@/types";

export const DASHBOARD_USER = {
  name: "Asmita",
};

export const VISITS: Visit[] = [
  {
    id: "v1",
    clientName: "Acme Corp HQ",
    address: "123 Business Rd, Tech District",
    dateLabel: "YESTERDAY",
    checkIn: "09:00 AM",
    checkOut: "11:30 AM",
    duration: "2h 30m",
    icon: Building2,
  },
  {
    id: "v2",
    clientName: "Global Industries Ltd",
    address: "456 Industrial Pkwy",
    dateLabel: "OCT 24",
    checkIn: "02:15 PM",
    checkOut: "03:45 PM",
    duration: "1h 30m",
    icon: Store,
  },
];
