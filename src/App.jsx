import React from "react";
import Hello from "./Hello.jsx";
import UserCard from "./UserCard.jsx";
import Counter from "./Counter.jsx";
import GreetingForm from "./GreetingForm.jsx";

function App() {
  return (
    <div>
      <h1>Trang React cơ bản</h1>
      <Hello name="Bro 1" />
      <Hello name="Bro 2" />
      <UserCard name="Thuận" age={22}/>
      <Counter/>
      <GreetingForm/>
    </div>
    

  );
}

export default App;
