import { Ticket } from "./data";
import { fakedata } from "./faker";

export async function retrieveOpenTickets(
  src: string,
  dst: string,
  date: Date
): Promise<Ticket[]> {
  return fakedata;
}
