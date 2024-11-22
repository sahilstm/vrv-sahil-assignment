import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../styles/components/roleManagement.scss";
import Container from "../Container/Container";
import Button from "../../Uikit/Button/Button";
import MultiSelectDropdown from "../../Uikit/MultiSelectDropdown/MultiSelectDropdown";
import Modal from "../Modal/Modal";
import Input from "../../Uikit/Input/Input";

const RoleManagement = () => {
  const [roles, setRoles] = useState([
    { id: 1, roleName: "Admin", permissions: ["Read", "Write", "Delete"] },
    { id: 2, roleName: "User", permissions: ["Read"] },
  ]);

  const [isModalOpen, setModalOpen] = useState(false);
  const [newRole, setNewRole] = useState({ roleName: "", permissions: [] });
  const [searchQuery, setSearchQuery] = useState("");

  const permissionsOptions = ["Read", "Write", "Delete"];

  const addRole = () => {
    if (newRole.roleName && newRole.permissions.length > 0) {
      setRoles([
        ...roles,
        {
          id: roles.length + 1,
          ...newRole,
        },
      ]);
      toast.success("Role added successfully!");
      setNewRole({ roleName: "", permissions: [] });
      setModalOpen(false);
    } else {
      toast.error("Please fill in all fields.");
    }
  };

  const filteredRoles = roles.filter((role) =>
    role.roleName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="role-management">
      <Container>
        <div className="flex">
          <h2>Role Management</h2>
          <div className="user-search-container">
            <Input
              type="text"
              placeholder="Search roles by name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              variant="light"
              searchIcon
            />
            <Button
              text="Add Role"
              variant="light"
              onClick={() => setModalOpen(true)}
            />
          </div>
        </div>
        {filteredRoles.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Role Name</th>
                <th>Permissions</th>
              </tr>
            </thead>
            <tbody>
              {filteredRoles.map((role) => (
                <tr key={role.id}>
                  <td>{role.id}</td>
                  <td>{role.roleName}</td>
                  <td>{role.permissions.join(", ")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="no-results">No roles found matching your search.</p>
        )}

        <Modal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          title="Add Role"
        >
          <div className="modal-form">
            <div className="form-group">
              <label>Role Name</label>
              <Input
                type="text"
                variant="dark"
                value={newRole.roleName}
                onChange={(e) =>
                  setNewRole({ ...newRole, roleName: e.target.value })
                }
                placeholder="Enter role name"
              />
            </div>
            <div className="form-group">
              <label>Permissions</label>
              <MultiSelectDropdown
                options={permissionsOptions}
                selectedOptions={newRole.permissions}
                onChange={(selected) =>
                  setNewRole({ ...newRole, permissions: selected })
                }
                placeholder="Select permissions"
              />
            </div>
            <div className="modal-actions">
              <Button
                text="Cancel"
                variant="cancel"
                onClick={() => setModalOpen(false)}
              />
              <Button text="Add Role" variant="dark-light" onClick={addRole} />
            </div>
          </div>
        </Modal>
      </Container>
      <ToastContainer />
    </div>
  );
};

export default RoleManagement;
