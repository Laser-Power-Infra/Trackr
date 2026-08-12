export type ClientStatus = "visited_today" | "pending" | "scheduled";

export type Client = {
  id: string;
  companyName: string;
  address: string;
  contactName: string;
  phone: string;
  status: ClientStatus;
  visitTime?: string;
};
