import React, { Component, useContext } from "react";
import { UserContext, WebsiteContext } from "./ClassComp";

const ChildComp = () => {
  const userName = useContext(UserContext);
  const WebName = useContext(WebsiteContext);
  return (
    <div>
      <h2>{WebName}</h2>
      <h3>{userName}</h3>
    </div>
  );
};

export default ChildComp;

// class ChildComp extends Component {
//   render() {
//     return (
//       <div>
//         <UserContext.Consumer>
//           {
//           (userName) => {
//             return (
//                 <WebsiteContext.Consumer>
//                     {
//                         (webName)=>{
//                             return (
//                             <>
//                             <h2>{webName}</h2>
//                             <h3>{userName}</h3>
//                             </>
//                             )
//                         }
//                     }
//                 </WebsiteContext.Consumer>
//                   )
//             }
//           }
//         </UserContext.Consumer>
//       </div>
//     );
//   }
// }
// export default ChildComp;
