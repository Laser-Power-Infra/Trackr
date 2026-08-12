import type { Client } from "@/types/client";

export const CLIENTS: Client[] = [
  {
    id: "acme",
    companyName: "Acme Corporation",
    address: "123 Tech Blvd, Suite 400",
    contactName: "Jane Doe",
    phone: "(555) 123-4567",
    status: "visited_today",
  },
  {
    id: "globex",
    companyName: "Globex Inc.",
    address: "456 Innovation Way, Bldg B",
    contactName: "John Smith",
    phone: "(555) 987-6543",
    status: "pending",
  },
  {
    id: "initech",
    companyName: "Initech",
    address: "789 Corporate Dr",
    contactName: "Peter Gibbons",
    phone: "(555) 321-0987",
    status: "scheduled",
    visitTime: "2:00 PM",
  },
  {
    id: "umbrella",
    companyName: "Umbrella Logistics",
    address: "321 Harbor Freight Ln",
    contactName: "Mia Zhang",
    phone: "(555) 555-0123",
    status: "visited_today",
  },
  {
    id: "hooli",
    companyName: "Hooli Dynamics",
    address: "654 Silicon Ave, Floor 9",
    contactName: "Gavin Belson",
    phone: "(555) 867-5309",
    status: "pending",
  },
];
