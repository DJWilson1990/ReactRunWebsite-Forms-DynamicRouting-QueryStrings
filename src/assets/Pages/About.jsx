import { Link, Outlet, useParams, useSearchParams } from "react-router-dom";
import DistanceCards from "../Components/DistanceCards/DistanceCards";
import { RunCards } from "../../RunCards";
import SortForm from "../Components/SortForm";

export default function About() {
  const [searchParams] = useSearchParams();
  const sort = searchParams.get("sort");

  const copy = [...RunCards];

  if (sort === "asc") {
    //sort ascending
    copy.sort(handleSort);
  } else if (sort === "desc") {
    //sort descending
    copy.sort(handleSort).reverse();
  }

  function handleSort(a, b) {
    if (a.totalCost < b.totalCost) return -1;
    if (a.totalCost > b.totalCost) return 1;
    return 0;
  }

  return (
    <div>
      <h1>Providing personalised coaching for your goals!</h1>
      <p>View the examples below of how our training programmes run</p>
      {/* sort:{sort} */}
      <SortForm />
      <div className="distances-container">
        {copy.map((items) => (
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
