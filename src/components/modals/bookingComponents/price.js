import "../modal.css";
import { BookingComponent } from "./skeleton";

function Price(props) {
  return (
    <BookingComponent title="Price">
      <div className="row">
        <div>total</div>
        <div>here's the total</div>
      </div>
    </BookingComponent>
  );
}

export { Price };
