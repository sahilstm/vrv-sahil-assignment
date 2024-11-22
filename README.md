Role-Based Access Control (RBAC) Dashboard
This project is a Role-Based Access Control (RBAC) dashboard designed using React, SCSS, and React Router DOM. It allows users to manage users and roles efficiently, with a modern black and blue theme. The application supports CRUD (Create, Read, Update, Delete) operations for users and roles.

Features
User Management:

Add new users via a modal.
Update user details such as name, status, and role.
Delete users directly from the table.
Display user details in a table format.
Role Management:

Add new roles via a modal.
Assign or update permissions for roles.
Delete roles from the list.
Display role details in a table format.
Theming:

A clean black and blue theme for enhanced user experience.
UI/UX:

Uses React Toastify for displaying success and error messages.
Modals for adding users and roles.
Routing:

Navigation between User Management and Role Management sections using React Router DOM.
Technologies Used
React: For building the UI.
SCSS: For styling with a black and blue theme.
React Router DOM: For routing between pages.
React Toastify: For displaying toast notifications.

Screenshots

1. User Management Table
   Displays all users with options to add, edit, and delete.
2. Role Management Table
   Lists roles with permissions and allows adding/updating roles via modals.
3. Modal for Adding Users/Roles
   A modal opens for adding details, ensuring a clean and interactive interface.
4. Notifications
   Success or error messages are displayed using React Toastify.
   Folder Structure
   src/
   |** assets/
   | ├── glow/
   | ├── logo/
   | ├── svg/
   | ├── profile.png
   | └── warning.png
   |
   |** components/
   | ├── Container/
   | │ ├── Container.jsx
   | │ └── Container.scss
   | ├── Header/
   | │ └── Header.jsx
   | └── Modal/
   | └── Modal.jsx
   |
   |** pages/
   | ├── Home.jsx
   | ├── RoleManagement.jsx
   | └── UserManagement.jsx
   |
   |** styles/
   | ├── components/
   | │ ├── header.scss
   | │ └── modal.scss
   | ├── pages/
   | │ ├── home.scss
   | │ ├── roleManagement.scss
   | │ └── userManagement.scss
   | ├── button.scss
   | ├── colors.scss
   | ├── dropdown.scss
   | ├── input.scss
   | ├── main.scss
   | └── multiSelectDropdown.scss
   |
   |** UIKit/
   | ├── Button/
   | │ └── Button.jsx
   | ├── Dropdown/
   | │ └── Dropdown.jsx
   | ├── Input/
   | │ └── Input.jsx
   | └── MultiSelectDropdown/
   | └── MultiSelectDropdown.jsx
   |
   |** App.jsx
   |** App.scss
   |** index.js
   |** .gitignore
   |** package.json
   |** package-lock.json
   |** README.md

Future Enhancements
Add search and filtering capabilities.
Enhance the UI for mobile responsiveness.
Author
Developed by Sahil Kumar, showcasing skills in React, SCSS, and modern UI/UX design principles.
