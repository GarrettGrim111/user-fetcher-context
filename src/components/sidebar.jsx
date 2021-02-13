import React, { useContext } from "react";
import { MyContext } from "../context";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Sidebar() {
  const { users } = useContext(MyContext);

  return (
    <Wrapper>
      <Holder>
        <Subtitle>Other users:</Subtitle>
        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <Link to={`/${user.username}`}>{user.name}</Link>
            </User>
          ))}
        </ul>
      </Holder>
    </Wrapper>
  );
}

export default Sidebar;

const Wrapper = styled.div``;
const Subtitle = styled.h3``;
const Holder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const User = styled.li`
  margin-bottom: 10px;
  cursor: pointer;
`;
