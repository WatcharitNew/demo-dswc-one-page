import { DisasterFilter } from "@/components/DisasterFilter";
import { DISASTERS } from "@/constants";

export default function Home() {
  return <DisasterFilter disasters={DISASTERS} />;
}
