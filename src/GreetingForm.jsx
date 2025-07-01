import React, { useState } from "react";

const GreetingForm = () => {
  const [name, setName] = useState(""); // lưu tên người dùng
  const [greeting, setGreeting] = useState(""); // lưu câu chào

  const handleSubmit = (e) => {
    e.preventDefault(); // ngăn reload trang
    setGreeting(`Xin chào, ${name}!`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nhập tên của bạn..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Chào!</button>
      </form>

      {greeting && <h2>{greeting}</h2>}
    </div>
  );
};

export default GreetingForm;
