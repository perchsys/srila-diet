
import { useState } from "react";
import Axios from "axios";
import '../styles/Wats.css'
function Wats() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState(0);
  const [role, setRole] = useState("");

  const [editingUserId, setEditingUserId] = useState(null);
  const [editedUserData, setEditedUserData] = useState({
    username: "",
    password: "",
    role: "",
  });

  const [newrole, setNewrole] = useState(0);

  const [usersList, setUsersList] = useState([]);

  const addUsers = () => {
    Axios.post("http://localhost:3031/create", {
      username: username,
      password: password,
      role: role,

    }).then(() => {
      setUsersList([
        ...usersList,
        {
          username: username,
          password: password,
          role: role,
        },
      ]);
    });
  };

  const getUsers = () => {
    Axios.get("http://localhost:3031/users").then((response) => {
      setUsersList(response.data);
    });
  };

  const updateUsersrole = (id, updatedUserData) => {
    // Send a PUT request to update the user data on the server
    Axios.put(`http://localhost:3031/update/${id}`, updatedUserData)
      .then((response) => {
        // Update the local state with the updated data
        setUsersList(
          usersList.map((val) =>
            val.id === id ? { ...val, ...updatedUserData } : val
          )
        );
      })
      .catch((error) => {
        console.error('Update failed:', error);
      });
  };

  const deleteUsers = (id) => {
    Axios.delete(`http://localhost:3031/delete/${id}`).then((response) => {
      setUsersList(
        usersList.filter((val) => {
          return val.id != id;
        })
      );
    });
  };

  return (
    <div className="App">
      <h3><center>ADD USERS DATA HERE</center></h3>
      <div className="information">
        <label>Name:</label>
        <input
          type="text"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <label>Password:</label>
        <input
          type="text"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <label htmlFor="userRole">User Role:</label>
        <select
          className="input"
          type="text"
          id="role"
          name="role"
          onChange={(event) => {
            setRole(event.target.value);
          }}
          required
        >
          <option value="">Select User Type...</option>
          <option value="admin">Admin</option>
          <option value="diabetes">Diabetes</option>
          <option value="hypertension">Hypertension</option>
          <option value="obesity">Obesity</option>
          <option value="pcos">PCOS</option>
          <option value="pregnancy">Pregnant</option>
        </select>


        <button onClick={addUsers}>Add New User</button>
      </div>
      <div className="employees">
        <button onClick={getUsers}>Fetch Users data</button>
        <table className="user-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Password</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {usersList.map((val, key) => (
              <tr key={key}>
                <td>
                  {val.id === editingUserId ? ( // Check if the user is being edited
                    <input
                      type="text"
                      value={editedUserData.username}
                      onChange={(e) => {
                        const updatedUsername = e.target.value;
                        setEditedUserData({ ...editedUserData, username: updatedUsername });
                      }}
                    />
                  ) : (
                    val.username
                  )}
                </td>
                <td>
                  {val.id === editingUserId ? ( // Check if the user is being edited
                    <input
                      type="password"
                      value={editedUserData.password}
                      onChange={(e) => {
                        const updatedPassword = e.target.value;
                        setEditedUserData({ ...editedUserData, password: updatedPassword });
                      }}
                    />
                  ) : (
                    val.password
                  )}
                </td>
                <td>
                  {val.id === editingUserId ? ( // Check if the user is being edited
                    <input
                      type="text"
                      value={editedUserData.role}
                      onChange={(e) => {
                        const updatedRole = e.target.value;
                        setEditedUserData({ ...editedUserData, role: updatedRole });
                      }}
                    />
                  ) : (
                    val.role
                  )}
                </td>
                <td>
                  {val.id === editingUserId ? (
                    <button
                      onClick={() => {
                        updateUsersrole(val.id, editedUserData);
                        setEditingUserId(null); // Reset editing state
                      }}
                    >
                      Save
                    </button>
                  ) : (
                    <button onClick={() => setEditingUserId(val.id)}>Edit</button>
                  )}
                  <button  style={{ backgroundColor: 'red', color: 'white' }} onClick={() => deleteUsers(val.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Wats;