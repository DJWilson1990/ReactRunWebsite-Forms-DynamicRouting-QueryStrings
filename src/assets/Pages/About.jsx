import { Link, Outlet, useParams, useSearchParams } from "react-router-dom";
import DistanceCards from "../Components/DistanceCards/DistanceCards";
import { RunCards } from "../../RunCards";
import SortForm from "../Components/SortForm";

export default function About() {
  const [searchParams] = useSearchParams();
  const sort = searchParams.get("sort");

  return (
    <div>
      <h1>Providing personalised coaching for your goals!</h1>
      <p>View the examples below of how our training programmes run</p>
      {/* sort:{sort} */}
      <SortForm />
      <div className="distances-container">
        {RunCards.map((items) => (
          <DistanceCards
            key={items.id}
            imgLink={items.imgLink}
            itemName={items.itemName}
            itemDuration={items.itemDuration}
            itemCost={items.itemCost}
          />
        ))}
      </div>
    </div>
  );
}
