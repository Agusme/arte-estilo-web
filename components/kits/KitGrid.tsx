import { groupKits, individualKits } from "./data";
import KitCard from "./KitCard";

export default function KitGrid() {
  return (
    <div className="mx-auto grid max-w-5xl items-stretch gap-4 md:grid-cols-2 xl:grid-cols-[minmax(0,0.8fr)_minmax(0,0.8fr)_minmax(0,1.4fr)]">
      {individualKits.map((kit) => <KitCard key={kit.id} kit={kit} />)}
      {groupKits.map((kit) => <KitCard key={kit.id} kit={kit} featured />)}
    </div>
  );
}