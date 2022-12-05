import react from "react";
import { render } from "react-dom";
import { createRoot } from "react-dom/client";

// const Main = () => {
//   return (
//     <div>
//       <h1>Hello World!</h1>
//     </div>
//   );
// };

createRoot(document.querySelector("#root")).render(<Main />);
