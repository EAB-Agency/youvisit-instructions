import React from "react";
// import "./App.css";
// import { gql, useQuery } from "@apollo/client";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import Instruction from "./components/Instructions";

const App = () => {
  const { search } = useLocation();
  const { id } = queryString.parse(search);
  console.log("institutionID", id);

  return (
    <>
      <div className="App">
        <Instruction institutionID={id} />
      </div>
    </>
  );
};

export default App;

// export const query = gql`
//   query Institution($institutionID: String!) {
//     institutions(instID: $institutionID) {
//       locations {
//         loc_id
//         name
//         experience_type
//         cover_photo {
//           thumb
//           full
//         }
//         stops {
//           stopid
//           title
//           panoramas {
//             smallurl
//             thumburl
//           }
//         }
//       }
//       name
//       inst_id
//     }
//   }
// `;
