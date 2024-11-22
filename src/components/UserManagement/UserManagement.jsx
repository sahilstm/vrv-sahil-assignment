import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../styles/components/userManagement.scss";
import Container from "../Container/Container";
import Button from "../../Uikit/Button/Button";
import Modal from "../Modal/Modal";
import { FaEdit, FaRegEye } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import "../../styles/colors.scss";
import Dropdown from "../../Uikit/Dropdown/Dropdown";
import Input from "../../Uikit/Input/Input";
import warning from "../../assests/warning.png";

const UserManagement = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", role: "Admin", status: "Active" },
    { id: 2, name: "Jane Smith", role: "User", status: "Inactive" },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);
  const [newUser, setNewUser] = useState({ name: "", role: "", status: "" });
  const [editingUserId, setEditingUserId] = useState(null);
  const [isViewMode, setViewMode] = useState(false);
  const [confirmationModal, setConfirmationModal] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const addUser = () => {
    if (newUser.name.trim() && newUser.role && newUser.status) {
      if (editingUserId !== null) {
        setUsers(
          users.map((user) =>
            user.id === editingUserId ? { ...user, ...newUser } : user
          )
        );
        toast.success("User updated successfully!");
      } else {
        setUsers([
          ...users,
          {
            id: users.length + 1,
            name: newUser.name.trim(),
            role: newUser.role,
            status: newUser.status,
          },
        ]);
        toast.success("User added successfully!");
      }

      setNewUser({ name: "", role: "", status: "" });
      setEditingUserId(null);
      setModalOpen(false);
    } else {
      toast.error("Please fill in all fields.");
    }
  };

  const confirmDeleteUser = () => {
    setUsers(users.filter((user) => user.id !== userToDelete.id));
    setConfirmationModal(false);
    setUserToDelete(null);
    toast.success("User deleted successfully!");
  };

  const deleteUser = (user) => {
    setUserToDelete(user);
    setConfirmationModal(true);
  };

  const openEditModal = (user) => {
    setNewUser({ name: user.name, role: user.role, status: user.status });
    setEditingUserId(user.id);
    setViewMode(false);
    setModalOpen(true);
  };

  const openViewModal = (user) => {
    setNewUser({ name: user.name, role: user.role, status: user.status });
    setEditingUserId(null);
    setViewMode(true);
    setModalOpen(true);
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="user-management">
      <Container>
        <div className="flex">
          <h2>User Management</h2>
          <div className="user-search-container">
            <Input
              type="text"
              placeholder="Search users by name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              variant="light"
              searchIcon
            />
            <Button
              text="Add User"
              variant="light"
              onClick={() => {
                setNewUser({ name: "", role: "", status: "" });
                setEditingUserId(null);
                setViewMode(false);
                setModalOpen(true);
              }}
            />
          </div>
        </div>
        {filteredUsers.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Role</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.role}</td>
                  <td>
                    <span
                      className={
                        user.status === "Active" ? "active" : "inactive"
                      }
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="actions">
                    <span onClick={() => openViewModal(user)}>
                      <FaRegEye />
                    </span>
                    <span onClick={() => openEditModal(user)}>
                      <FaEdit />
                    </span>
                    <span
                      style={{ backgroundColor: "#fd2b2b", color: "#ffffff" }}
                      onClick={() => deleteUser(user)}
                    >
                      <MdDeleteOutline />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="no-results">No users found matching your search.</p>
        )}
      </Container>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        title={
          isViewMode ? "View Details" : editingUserId ? "Edit User" : "Add User"
        }
      >
        <div className="modal-form">
          <div className="form-group">
            <label>Name</label>
            <Input
              type="text"
              name="name"
              variant="dark"
              value={newUser.name}
              onChange={handleInputChange}
              placeholder="Enter user name"
              disabled={isViewMode}
            />
          </div>
          <div className="form-group">
            <label>Role</label>
            <Dropdown
              options={[
                { value: "Admin", label: "Admin" },
                { value: "User", label: "User" },
              ]}
              value={newUser.role}
              onChange={(value) => setNewUser({ ...newUser, role: value })}
              placeholder="Select role"
              disabled={isViewMode}
            />
          </div>
          <div className="form-group">
            <label>Status</label>
            <Dropdown
              options={[
                { value: "Active", label: "Active" },
                { value: "Inactive", label: "Inactive" },
              ]}
              value={newUser.status}
              onChange={(value) => setNewUser({ ...newUser, status: value })}
              placeholder="Select status"
              disabled={isViewMode}
            />
          </div>
          {!isViewMode && (
            <div className="modal-actions">
              <Button
                text="Cancel"
                variant="cancel"
                onClick={() => setModalOpen(false)}
              />
              <Button
                text={editingUserId ? "Update" : "Add"}
                variant="dark-light"
                onClick={addUser}
              />
            </div>
          )}
        </div>
      </Modal>
      <Modal
        isOpen={confirmationModal}
        onClose={() => setConfirmationModal(false)}
        title="Confirm Deletion"
      >
        <div className="confirmation-modal">
          <img src={warning} alt="warning" className="warning-icon" />
          <p className="confirmation-message">
            Are you sure you want to delete this user?
          </p>
          <div className="modal-actions">
            <Button
              text="Cancel"
              variant="cancel"
              onClick={() => setConfirmationModal(false)}
            />
            <Button
              text="Delete"
              variant="danger"
              onClick={confirmDeleteUser}
            />
          </div>
        </div>
      </Modal>
      <ToastContainer />
    </div>
  );
};

export default UserManagement;
