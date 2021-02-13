import React, { useContext, useState, useEffect } from "react";
import { MyContext } from "../context";
import styled from "styled-components";
import Sidebar from "../components/sidebar";

import { Link, useParams } from "react-router-dom";

function UserPage() {
  const [user, setUser] = useState(null);

  const { users } = useContext(MyContext);
  const { username } = useParams();

  useEffect(() => {
    const userIdentificator = users.find((user) => user.username === username);
    if (userIdentificator) setUser(userIdentificator);
  }, [username, users]);

  if (user) {
    return (
      <Wrapper>
        {user && (
          <>
            <Holder>
              <Title>(User)´s Detail</Title>
              <Link to="/">
                <Text>Take me back</Text>
              </Link>
            </Holder>

            <Container>
              <Column>
                <Holder>
                  <Subtitle>Name:</Subtitle>
                  <Text> {user.name} </Text>
                </Holder>
                <Holder>
                  <Subtitle>Username:</Subtitle>
                  <Text>{user.username}</Text>
                </Holder>
                <Holder>
                  <Subtitle>Email:</Subtitle>
                  <Text>{user.email}</Text>
                </Holder>
                <Holder>
                  <Subtitle>Street:</Subtitle>
                  <Text>{user.address.street}</Text>
                </Holder>
                <Holder>
                  <Subtitle>City:</Subtitle>
                  <Text>{user.address.city}</Text>
                </Holder>
                <Holder>
                  <Subtitle>Zipcode:</Subtitle>
                  <Text>{user.address.zipcode}</Text>
                </Holder>
              </Column>

              <Holder>
                <Sidebar />
              </Holder>
            </Container>
          </>
        )}
      </Wrapper>
    );
  }

  return <h1>loading..</h1>;
}

export default UserPage;

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Holder = styled.div`
  margin-left: 20px;
`;

const Text = styled.span``;

const Subtitle = styled.h3``;

const Title = styled.h1``;
