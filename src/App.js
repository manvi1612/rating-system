import { useState } from "react";
import StarRating from "./components/StarRating";
import Dialog from "./components/Dialog";

function App() {
  const [dialog, setDialog] = useState(false);
     function open() {
      setDialog(true);
    }
    function close() {
      setDialog(false);
    }

  return (
     <div className="container">
      <h1>Star Rating</h1>
      <StarRating />
      <button onClick={() => setDialog(true)}>Open Dialog</button>
      {dialog && (
        <dialog close={() => setDialog(false)} />
        )}
    </div>
  );
}

export default App;
