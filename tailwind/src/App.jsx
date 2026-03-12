// import React from "react";

// function App() {
//   const name = "Bramma";
//   const age = 24;
//   const city = "Chennai";

//   const student = {
//     name: "Nayagan",
//     email: "nayagan@gmail.com",
//     phone: "9876543210",
//   };

//   const fruits = ["Apple", "Mango", "Orange", "Banana"];

//   const users = [
//     { id: 1, name: "Raj", age: 28 },
//     { id: 2, name: "Vishwa", age: 22 },
//     { id: 3, name: "Sakthi", age: 24 },
//   ];

//   const people = [
//     { name: "Bramma", skills: ["HTML", "CSS", "JavaScript"] },
//     { name: "Nayagan", skills: ["React", "Node", "MongoDB"] },
//   ];

//   const isLoggedIn = true;

//   const ageIs = 24;

//   const isAdmin = true;

//   const user = {
//     address: {
//       city: "Chennai",
//     },
//   };

//   const username = null;

//   return (
//     <div style={{ padding: "20px" }}>
//       <div className="bg-amber-200">
//         <h2>1. Variable Rendering</h2>
//         <p>Name: {name}</p>
//         <p>Age: {age}</p>
//         <p>City: {city}</p>
//       </div>

//       <div className="bg-blue-200">
//         <h2>2. Object Rendering</h2>
//         <p>Name: {student.name}</p>
//         <p>Email: {student.email}</p>
//         <p>Phone: {student.phone}</p>
//       </div>

//       <div className="bg-green-400">
//         <h2>3. Array Rendering</h2>
//         <ul>
//           {fruits.map((f, i) => (
//             <li key={i}>{f}</li>
//           ))}
//         </ul>
//       </div>

//       <div className="bg-amber-200">
//         <h2>4. Array of Objects</h2>
//         {users.map((e) => (
//           <p key={e.id}>
//             {e.name} : {e.age}
//           </p>
//         ))}
//       </div>

//       <div className="bg-green-400">
//         <h2>6. Conditional Rendering</h2>
//         {isLoggedIn ? <p>Welcome User</p> : <p>Please Login</p>}
//       </div>
//       <div className="bg-amber-200">
//         <h2>7. Ternary Operator</h2>
//         <p>{age >= 18 ? "Adult" : "Minor"}</p>
//       </div>

//       <div className="bg-blue-200">
//         <h2>8. Logical AND</h2>
//         {isAdmin && <p>Admin Dashboard</p>}
//       </div>

//       <div className="bg-green-400">
//         <h2>9. Optional Chaining</h2>
//         <p>City: {user?.address?.city}</p>
//       </div>
//       <div className="bg-amber-200">
//         <h2>10. Nullish Coalescing</h2>
//         <p>{username ?? "Guest User"}</p>
//       </div>
//     </div>
//   );
// }

// export default App;
import { BrowserRouter } from "react-router-dom";
import AppRoute from "./routes/AppRoute";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRoute />
    </BrowserRouter>
  );
}

export default App;
