import { useState, useContext } from "react";
import styled from "styled-components";
import UserControl from "../components/userControl";
import Modal from "../components/modal";
import CustomButton from "../components/customButton";
import { MyContext } from "../context";
import ModalDetail from "../components/modalDetail";

function UserFetcher() {
  const { users, setUsers } = useContext(MyContext);

  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showDetail, setShowDetail] = useState(false);

  const [inputData, setInputData] = useState({
    name: "",
    username: "",
    email: "",
    street: "",
    city: "",
    zipcode: "",
  });

  const [editingUser, setEditingUser] = useState({});
  const [userDetails, setUserDetails] = useState({});

  const handleStateReset = () => {
    setInputData({
      name: "",
      username: "",
      email: "",
      street: "",
      city: "",
      zipcode: "",
    });
    setUserDetails("");
  };

  const handleShowAdd = () => {
    setShowAdd(!showAdd);
  };

  const handleShowEdit = () => {
    setShowEdit(!showEdit);
  };

  const handleShowDetail = () => {
    setShowDetail(!showDetail);
  };

  const handleAdd = (event) => {
    event.preventDefault();

    const { name, username, email, street, city, zipcode } = inputData;

    if (name && username && email && street && city && zipcode) {
      const obj = {
        name: inputData.name,
        id: Math.floor(Math.random() * 1000),
        address: {
          street: inputData.street,
          zipcode: inputData.zipcode,
          city: inputData.city,
        },
        username: inputData.username,
        email: inputData.email,
      };

      const newUser = [obj, ...users];
      setUsers(newUser);

      handleStateReset();
      setShowAdd(false);
      alert(`User ${inputData.name} added!`);
    }
  };

  // // name targets name of each input
  const handleChange = (e) => {
    // destructuring
    const { name, value } = e.target;

    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  // filter method creates array of all users who pass condition
  // user is the one we click in table, kept are all users
  const handleDelete = (user) => {
    let usersList = [...users];
    const filteredUsers = usersList.filter((kept) => kept.id !== user.id);
    setUsers(filteredUsers);
    alert(`User ${user.name} was deleted!`);
  };

  const handleOpenDetail = (user) => {
    setShowDetail(true);
    setUserDetails(user);
  };

  const handleOpenEdit = (user) => {
    setInputData({
      name: user.name,
      username: user.username,
      email: user.email,
      street: user.address.street,
      city: user.address.city,
      zipcode: user.address.zipcode,
    });

    setShowEdit(true);
    setEditingUser(user);
  };

  const handleEdit = (e) => {
    e.preventDefault();

    let usersList = [...users];
    const index = usersList.indexOf(editingUser);
    usersList[index] = { ...usersList[index] };
    usersList[index].name = inputData.name;
    usersList[index].username = inputData.username;
    usersList[index].email = inputData.email;
    usersList[index].city = inputData.city;
    usersList[index].street = inputData.street;
    usersList[index].zipcode = inputData.zipcode;

    setUsers(usersList);
    setEditingUser({});
    setShowEdit(false);
  };

  return (
    <Wrapper>
      {showAdd && (
        <Modal
          onShow={handleShowAdd}
          setShow={setShowAdd}
          inputData={inputData}
          setInputData={setInputData}
          onChange={handleChange}
          onSubmit={handleAdd}
          onReset={handleStateReset}
        />
      )}
      {showEdit && (
        <Modal
          onShow={handleShowEdit}
          setShow={setShowEdit}
          inputData={inputData}
          setInputData={setInputData}
          onChange={handleChange}
          onSubmit={handleEdit}
          onReset={handleStateReset}
        />
      )}
      {showDetail && (
        <ModalDetail userDetails={userDetails} onShow={handleShowDetail} />
      )}
      <Container>
        <h1>User fetcher with Context</h1>
        <Box>
          <Title>User List:</Title>
          <CustomButton onclick={handleShowAdd}>Add user!</CustomButton>
        </Box>
        <Holder>
          <List>
            {users.map((user) => (
              <User key={user.id}>
                <Username onClick={() => handleOpenDetail(user)}>
                  {user.name}
                </Username>

                <ControlHolder>
                  <UserControl
                    label="Edit"
                    onclick={() => handleOpenEdit(user)}
                  />
                  <UserControl
                    label="Delete"
                    onclick={() => handleDelete(user)}
                  />
                </ControlHolder>
              </User>
            ))}
          </List>
        </Holder>
      </Container>
    </Wrapper>
  );
}

export default UserFetcher;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;
const Container = styled.div`
  background-color: darkgrey;
  height: auto;
  width: 600px;
  border: 2px solid black;
  text-align: center;
`;
const Holder = styled.div`
  background-color: white;
  width: 400px;
  height: auto;
  border: 1px solid black;
  margin: 20px auto;
`;
const Box = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Title = styled.h4``;

const List = styled.ul``;

const Username = styled.span`
  cursor: pointer;
  text-decoration: underline;
`;

const User = styled.li`
  display: flex;
  justify-content: space-between;
  margin-right: 15px;
  margin-bottom: 10px;
`;

const ControlHolder = styled.div`
  display: flex;
`;
