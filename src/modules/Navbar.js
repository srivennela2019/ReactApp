import React, { Component } from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
class Navbar extends Component {
  //render() {
   // return (
  //     <nav className="navbar navbar-default">
  //       <div className="container-fluid">
  //         <div className="navbar-header">
  //           <a className="navbar-brand" href="#">
  //             WebSiteName
  //           </a>
  //         </div>

  //         {this.props.isLoggedIn && (
  //           <ul className="nav navbar-nav">
  //             <li>
  //               <NavLink to="/">Welcome</NavLink>
  //             </li>
  //             <li>
  //               <NavLink to="/users">Users</NavLink>
  //             </li>
  //             <li>
  //               <NavLink to="/create">Create</NavLink>
  //             </li>
  //           </ul>
  //         )}
  //         <ul className="nav navbar-nav navbar-right">
  //           {!this.props.isLoggedIn && (
  //             <li>
  //               <a
  //                 href="#"
  //                 onClick={() => {
  //                   this.props.login(() => {
  //                     this.props.history.push("/users");
  //                   });
  //                 }}
  //               >
  //                 Login
  //               </a>
  //             </li>
  //           )}
  //           {this.props.isLoggedIn && (
  //             <li>
  //               <a href="#" onClick={this.props.logout}>
  //                 Logout
  //               </a>
  //             </li>
  //           )}
  //         </ul>
  //       </div>
  //     </nav>
  //   );
  // }
//}
}
export default Navbar;
