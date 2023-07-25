import "./index.css";
import Employee from "./components/Employee";
import { useState } from "react";
import {v4 as uuidv4} from 'uuid';

function App() {
  const [role, setRole] = useState("dev");
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Abby",
      role: "Intern",
      img: "https://images.pexels.com/photos/17267141/pexels-photo-17267141/free-photo-of-woman-posing-in-floral-dress.jpeg",
    },
    {
      id: 2,
      name: "Jenna",
      role: "Developer",
      img: "https://images.pexels.com/photos/17533458/pexels-photo-17533458/free-photo-of-woman-posing-near-street-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Jenny",
      role: "Manager",
      img: "https://images.pexels.com/photos/16550169/pexels-photo-16550169/free-photo-of-smiling-woman-on-green-branch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      name: "John",
      role: "Intern",
      img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      name: "Tim",
      role: "Developer",
      img: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      name: "Jerry",
      role: "Manager",
      img: "https://images.pexels.com/photos/936119/pexels-photo-936119.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ]);
  const showEmployees = true;

  return (
    <div className="App">
      {showEmployees ? (
        <>
          <input
            type="text"
            onChange={(e) => {
              console.log(e.target.value);
              setRole(e.target.value);
            }}
          />
          <div className="flex flex-wrap justify-center">
            {employees.map((employee) => {
              return (
                <Employee
                  key = {uuidv4()}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                  alt="stock photo"
                />
              );
            })}
          </div>
        </>
      ) : (
        <p>You cannot see the employees</p>
      )}
    </div>
  );
}

export default App;
