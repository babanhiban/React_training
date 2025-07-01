import React from 'react'


const UserCard = ({ name, age }) => {
  return (
    <div>
      <p>Xin chào, mình là {name}, mình {age} tuổi.</p>
    </div>
  );
};

/* or:
const UserCard = (props) => {
  return (
    <div>
        <p>Xin chào , MÌNH LÀ {props.name}, MÌNH {props.age} TUỔI</p>
    </div>
  )
} */


export default UserCard;

