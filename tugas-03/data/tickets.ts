import { Ticket } from "./data";
import { fakedata } from "./faker";

export async function retrieveOpenTickets(
  src: string,
  dst: string,
  date: Date
): Promise<Ticket[]> {
  return fakedata
    .filter(
      (item) => item.date.toLocaleDateString() == date.toLocaleDateString()
    )
    .filter((item) => item.dst.toLowerCase() == dst.toLowerCase())
    .filter((item) => item.src.toLowerCase() === src.toLowerCase());
}
