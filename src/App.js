import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import UserFetcher from "./pages/user-fetcher";
import UserPage from "./pages/user-page";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MyContext } from "./context";

function App() {
  const [users, setUsers] = useState([]);

  const apiEndPoint = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    axios
      .get(apiEndPoint)
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Wrapper>
      <Router>
        <Switch>
          <MyContext.Provider value={{ users, setUsers }}>
            <Route path="/" component={UserFetcher} exact />
            <Route path="/:username" component={UserPage} />
         
          </MyContext.Provider>
        </Switch>
      </Router>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
