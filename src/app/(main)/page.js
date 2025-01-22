import { DisasterFilter } from "@/components/DisasterFilter";
import { DISASTERS } from "@/constants";

export default function MainPage() {
  return <DisasterFilter disasters={DISASTERS} />;
}
