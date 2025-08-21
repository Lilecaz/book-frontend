<div id="top">

<!-- HEADER STYLE: CLASSIC -->
<div align="center">


# BOOK-FRONTEND

<em></em>

<!-- BADGES -->

<img src="https://img.shields.io/github/last-commit/Lilecaz/book-frontend?style=default&logo=git&logoColor=white&color=0080ff" alt="last-commit">
<img src="https://img.shields.io/github/languages/top/Lilecaz/book-frontend?style=default&color=0080ff" alt="repo-top-language">
<img src="https://img.shields.io/github/languages/count/Lilecaz/book-frontend?style=default&color=0080ff" alt="repo-language-count">

<!-- default option, no dependency badges. -->


<!-- default option, no dependency badges. -->

</div>
<br>

---

## Table of Contents

- [BOOK-FRONTEND](#book-frontend)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Features](#features)
  - [Project Structure](#project-structure)
    - [Project Index](#project-index)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Testing](#testing)

---

## Overview



---

## Features

- **Personal library management**: Add, edit, and delete books in your collection.
- **Instant search**: Quickly find a book with the dynamic search bar.
- **Secure authentication**: Sign up and log in with session management via token.
- **User dashboard**: View and manage your books from a centralized interface.
- **Availability status**: Indicate whether a book is available or borrowed.
- **Modern and responsive UI**: Clean design, mobile and desktop compatible thanks to Tailwind CSS.
- **Notifications and alerts**: Receive confirmation or error messages for important actions.
- **API error handling**: Automatic redirection to the login page if the session expires.
- **Reusable UI components**: Custom components for forms, buttons, alerts, and more.
- **Dark mode support**: Light/dark theme for improved visual comfort.
- **Modular code organization**: Clear separation between logic, components, utilities, and configuration.

---

## Project Structure

```sh
└── book-frontend/
    ├── README.md
    ├── components.json
    ├── eslint.config.mjs
    ├── next.config.ts
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.mjs
    ├── public
    │   ├── file.svg
    │   ├── globe.svg
    │   ├── next.svg
    │   ├── vercel.svg
    │   └── window.svg
    ├── src
    │   ├── app
    │   ├── components
    │   ├── context
    │   ├── lib
    │   └── utils
    └── tsconfig.json
```

### Project Index

<details open>
    <summary><b><code>BOOK-FRONTEND/</code></b></summary>
    <!-- __root__ Submodule -->
    <details>
        <summary><b>__root__</b></summary>
        <blockquote>
            <div class='directory-path' style='padding: 8px 0; color: #666;'>
                <code><b>⦿ __root__</b></code>
            <table style='width: 100%; border-collapse: collapse;'>
            <thead>
                <tr style='background-color: #f8f9fa;'>
                    <th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
                    <th style='text-align: left; padding: 8px;'>Summary</th>
                </tr>
            </thead>
                <tr style='border-bottom: 1px solid #eee;'>
                    <td style='padding: 8px;'><b><a href='https://github.com/Lilecaz/book-frontend/blob/master/postcss.config.mjs'>postcss.config.mjs</a></b></td>
                    <td style='padding: 8px;'>- PostCSS configuration integrates Tailwind CSS into the project<br>- It establishes the build process for styling, enabling the use of Tailwinds utility-first approach<br>- This ensures consistent styling across the application, streamlining the development workflow and simplifying the management of CSS<br>- The configuration facilitates the application of Tailwinds pre-defined styles.</td>
                </tr>
                <tr style='border-bottom: 1px solid #eee;'>
                    <td style='padding: 8px;'><b><a href='https://github.com/Lilecaz/book-frontend/blob/master/package-lock.json'>package-lock.json</a></b></td>
                    <td style='padding: 8px;'>- The <code>package-lock.json</code> file specifies the exact versions of all JavaScript packages used by the <code>book-frontend</code> application<br>- This ensures consistent builds and prevents dependency conflicts across different development environments<br>- Its a crucial part of the projects build process, defining the project's dependency tree and its versions.</td>
                </tr>
                <tr style='border-bottom: 1px solid #eee;'>
                    <td style='padding: 8px;'><b><a href='https://github.com/Lilecaz/book-frontend/blob/master/package.json'>package.json</a></b></td>
                    <td style='padding: 8px;'>- Package.json<code> manages the </code>book-frontend` projects dependencies and scripts<br>- It defines build, development, and linting processes using Next.js, along with frontend libraries like React, Tailwind CSS, and Lucide for UI components and styling<br>- Axios facilitates API interactions<br>- The configuration streamlines the projects lifecycle and dependency management.</td>
                </tr>
                <tr style='border-bottom: 1px solid #eee;'>
                    <td style='padding: 8px;'><b><a href='https://github.com/Lilecaz/book-frontend/blob/master/components.json'>components.json</a></b></td>
                    <td style='padding: 8px;'>- Components.json` configures the UI framework for a Next.js application<br>- It specifies styling preferences (New York style), React Server Components usage, Tailwind CSS integration with custom configurations, and crucial alias definitions for components, utilities, and hooks, streamlining project organization and improving developer experience<br>- Lucide is designated as the icon library.</td>
                </tr>
                <tr style='border-bottom: 1px solid #eee;'>
                    <td style='padding: 8px;'><b><a href='https://github.com/Lilecaz/book-frontend/blob/master/tsconfig.json'>tsconfig.json</a></b></td>
                    <td style='padding: 8px;'>- Tsconfig.json<code> configures the TypeScript compiler for the Next.js project<br>- It specifies language features, module handling, and path aliases, ensuring consistent code compilation across the application<br>- The configuration supports JSX, enables strict type checking, and utilizes Next.js plugins for optimal build performance and integration with the projects source code located in the </code>src` directory.</td>
                </tr>
                <tr style='border-bottom: 1px solid #eee;'>
                    <td style='padding: 8px;'><b><a href='https://github.com/Lilecaz/book-frontend/blob/master/eslint.config.mjs'>eslint.config.mjs</a></b></td>
                    <td style='padding: 8px;'>- The <code>eslint.config.mjs</code> file configures ESLint for the project<br>- It leverages the <code>@eslint/eslintrc</code> library to extend the base configuration with Next.js and TypeScript rules, ensuring consistent code style and quality across the entire application<br>- This promotes maintainability and reduces errors by enforcing coding best practices.</td>
                </tr>
                <tr style='border-bottom: 1px solid #eee;'>
                    <td style='padding: 8px;'><b><a href='https://github.com/Lilecaz/book-frontend/blob/master/next.config.ts'>next.config.ts</a></b></td>
                    <td style='padding: 8px;'>- The <code>next.config.ts</code> file configures the Next.js framework for the project<br>- It currently provides a default configuration, implying a basic setup with no custom configurations defined<br>- This file acts as a central point for customizing build processes, asset optimization, and other Next.js-specific behaviors, allowing for tailoring the application to specific needs as the project evolves.</td>
                </tr>
            </table>
        </blockquote>
    </details>
    <!-- src Submodule -->
    <details>
        <summary><b>src</b></summary>
        <blockquote>
            <div class='directory-path' style='padding: 8px 0; color: #666;'>
                <code><b>⦿ src</b></code>
            <!-- context Submodule -->
            <details>
                <summary><b>context</b></summary>
                <blockquote>
                    <div class='directory-path' style='padding: 8px 0; color: #666;'>
                        <code><b>⦿ src.context</b></code>
                    <table style='width: 100%; border-collapse: collapse;'>
                    <thead>
                        <tr style='background-color: #f8f9fa;'>
                            <th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
                            <th style='text-align: left; padding: 8px;'>Summary</th>
                        </tr>
                    </thead>
                        <tr style='border-bottom: 1px solid #eee;'>
                            <td style='padding: 8px;'><b><a href='https://github.com/Lilecaz/book-frontend/blob/master/src/context/AuthContext.tsx'>AuthContext.tsx</a></b></td>
                            <td style='padding: 8px;'>- AuthContext.tsx` provides authentication context for the React application<br>- It manages user login and logout states, persisting the authentication token in local storage<br>- The context facilitates access to authentication status throughout the application, enabling features like protected routes and user-specific content<br>- Login redirects to the dashboard; logout redirects to the login page.</td>
                        </tr>
                    </table>
                </blockquote>
            </details>
            <!-- app Submodule -->
            <details>
                <summary><b>app</b></summary>
                <blockquote>
                    <div class='directory-path' style='padding: 8px 0; color: #666;'>
                        <code><b>⦿ src.app</b></code>
                    <table style='width: 100%; border-collapse: collapse;'>
                    <thead>
                        <tr style='background-color: #f8f9fa;'>
                            <th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
                            <th style='text-align: left; padding: 8px;'>Summary</th>
                        </tr>
                    </thead>
                        <tr style='border-bottom: 1px solid #eee;'>
                            <td style='padding: 8px;'><b><a href='https://github.com/Lilecaz/book-frontend/blob/master/src/app/layout.tsx'>layout.tsx</a></b></td>
                            <td style='padding: 8px;'>- RootLayout defines the base HTML structure for the BookAPI application<br>- It sets the page language to French, incorporates Googles Inter font, and provides metadata including the applications title and description, BookAPI-Gérez votre bibliothèque and Une API moderne pour organiser et gérer votre collection de livres, respectively<br>- The component renders child components within this structure, establishing the foundational layout for all application pages.</td>
                        </tr>
                        <tr style='border-bottom: 1px solid #eee;'>
                            <td style='padding: 8px;'><b><a href='https://github.com/Lilecaz/book-frontend/blob/master/src/app/page.tsx'>page.tsx</a></b></td>
                            <td style='padding: 8px;'>- The <code>page.tsx</code> file renders the main landing page for the BookAPI application<br>- It displays a header with navigation links, a hero section showcasing the APIs features, and a call to action encouraging user registration<br>- The page utilizes reusable UI components for a consistent design, promoting a user-friendly experience and guiding visitors towards account creation or login.</td>
                        </tr>
                        <tr style='border-bottom: 1px solid #eee;'>
                            <td style='padding: 8px;'><b><a href='https://github.com/Lilecaz/book-frontend/blob/master/src/app/globals.css'>globals.css</a></b></td>
                            <td style='padding: 8px;'>- The <code>globals.css</code> file centralizes styling for the application<br>- It integrates Tailwind CSS and its animation library, defining a custom dark mode variant<br>- The file establishes a comprehensive theme system using CSS variables, controlling colors, fonts, and radii for various UI elements, ensuring consistent visual appearance across the application in both light and dark modes<br>- This promotes maintainability and design consistency.</td>
                        </tr>
                    </table>
                    <!-- dashboard Submodule -->
                    <details>
                        <summary><b>dashboard</b></summary>
                        <blockquote>
                            <div class='directory-path' style='padding: 8px 0; color: #666;'>
                                <code><b>⦿ src.app.dashboard</b></code>
                            <table style='width: 100%; border-collapse: collapse;'>
                            <thead>
                                <tr style='background-color: #f8f9fa;'>
                                    <th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
                                    <th style='text-align: left; padding: 8px;'>Summary</th>
                                </tr>
                            </thead>
                                <tr style='border-bottom: 1px solid #eee;'>
                                    <td style='padding: 8px;'><b><a href='https://github.com/Lilecaz/book-frontend/blob/master/src/app/dashboard/loading.tsx'>loading.tsx</a></b></td>
                                    <td style='padding: 8px;'>- The <code>loading.tsx</code> component currently provides a placeholder within the applications dashboard<br>- Its purpose, within the broader application architecture, is to represent a loading state, although it currently renders nothing<br>- Future development will likely populate this component with visual indicators to improve user experience during asynchronous operations.</td>
                                </tr>
                                <tr style='border-bottom: 1px solid #eee;'>
                                    <td style='padding: 8px;'><b><a href='https://github.com/Lilecaz/book-frontend/blob/master/src/app/dashboard/page.tsx'>page.tsx</a></b></td>
                                    <td style='padding: 8px;'>- The <code>page.tsx</code> component renders a user dashboard displaying a book library<br>- It fetches book data, allowing users to search, add new books, and view their availability status<br>- Authentication is handled via a locally stored token, redirecting unauthenticated users to the login page<br>- The dashboard provides a user-friendly interface for managing a personal book collection.</td>
                                </tr>
                            </table>
                        </blockquote>
                    </details>
                    <!-- register Submodule -->
                    <details>
                        <summary><b>register</b></summary>
                        <blockquote>
                            <div class='directory-path' style='padding: 8px 0; color: #666;'>
                                <code><b>⦿ src.app.register</b></code>
                            <table style='width: 100%; border-collapse: collapse;'>
                            <thead>
                                <tr style='background-color: #f8f9fa;'>
                                    <th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
                                    <th style='text-align: left; padding: 8px;'>Summary</th>
                                </tr>
                            </thead>
                                <tr style='border-bottom: 1px solid #eee;'>
                                    <td style='padding: 8px;'><b><a href='https://github.com/Lilecaz/book-frontend/blob/master/src/app/register/page.tsx'>page.tsx</a></b></td>
                                    <td style='padding: 8px;'>- The <code>page.tsx</code> file implements the registration page for new users<br>- It provides a form for users to create an account by entering required details<br>- Upon successful registration, users are redirected to the login page or dashboard<br>- The component handles form validation, error display, and integrates with the authentication API.</td>
                                </tr>
                            </table>
                        </blockquote>
                    </details>                <!-- login Submodule -->
                    <details>
                        <summary><b>login</b></summary>
                        <blockquote>
                            <div class='directory-path' style='padding: 8px 0; color: #666;'>
                                <code><b>⦿ src.app.login</b></code>
                            <table style='width: 100%; border-collapse: collapse;'>
                            <thead>
                                <tr style='background-color: #f8f9fa;'>
                                    <th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
                                    <th style='text-align: left; padding: 8px;'>Summary</th>
                                </tr>
                            </thead>
                                <tr style='border-bottom: 1px solid #eee;'>
                                    <td style='padding: 8px;'><b><a href='https://github.com/Lilecaz/book-frontend/blob/master/src/app/login/page.tsx'>page.tsx</a></b></td>
                                    <td style='padding: 8px;'>- The <code>page.tsx</code> file implements the login page for the application.<br>- It provides a form for users to enter their credentials and authenticate.<br>- Upon successful login, the user is redirected to the dashboard.<br>- The component handles form validation, error display, and integrates with the authentication API.</td>
                                </tr>
                            </table>
                        </blockquote>                </details>
                </blockquote>
            </details>
            <!-- utils Submodule -->
            <details>
                <summary><b>utils</b></summary>
                <blockquote>
                    <div class='directory-path' style='padding: 8px 0; color: #666;'>
                        <code><b>⦿ src.utils</b></code>
                    <table style='width: 100%; border-collapse: collapse;'>
                    <thead>
                        <tr style='background-color: #f8f9fa;'>
                            <th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
                            <th style='text-align: left; padding: 8px;'>Summary</th>
                        </tr>
                    </thead>
                        <tr style='border-bottom: 1px solid #eee;'>
                            <td style='padding: 8px;'><b><a href='https://github.com/Lilecaz/book-frontend/blob/master/src/utils/auth.ts'>auth.ts</a></b></td>
                            <td style='padding: 8px;'>- Auth.ts` provides authentication utilities for the application<br>- It manages user login, session handling, and potentially authorization checks, integrating with the broader applications user management system<br>- These utilities streamline authentication processes across different parts of the application, ensuring consistent and secure access control<br>- Its role is crucial for maintaining application security and user privacy.</td>
                        </tr>
                    </table>
                </blockquote>
            </details>
            <!-- lib Submodule -->
            <details>
                <summary><b>lib</b></summary>
                <blockquote>
                    <div class='directory-path' style='padding: 8px 0; color: #666;'>
                        <code><b>⦿ src.lib</b></code>
                    <table style='width: 100%; border-collapse: collapse;'>
                    <thead>
                        <tr style='background-color: #f8f9fa;'>
                            <th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
                            <th style='text-align: left; padding: 8px;'>Summary</th>
                        </tr>
                    </thead>
                        <tr style='border-bottom: 1px solid #eee;'>
                            <td style='padding: 8px;'><b><a href='https://github.com/Lilecaz/book-frontend/blob/master/src/lib/utils.ts'>utils.ts</a></b></td>
                            <td style='padding: 8px;'>- The <code>utils.ts</code> module provides a utility function, <code>cn</code>, for efficiently merging and managing Tailwind CSS class names<br>- It streamlines the process of combining class names from various sources, enhancing code readability and maintainability within the broader application<br>- This function simplifies class name manipulation, improving developer workflow and reducing potential errors.</td>
                        </tr>
                        <tr style='border-bottom: 1px solid #eee;'>
                            <td style='padding: 8px;'><b><a href='https://github.com/Lilecaz/book-frontend/blob/master/src/lib/api.ts'>api.ts</a></b></td>
                            <td style='padding: 8px;'>- Localhost:3000`<br>- It automatically includes authentication tokens from local storage and handles authentication errors, redirecting to the login page upon 401 responses<br>- This ensures consistent API interaction throughout the application, simplifying network requests and managing authentication.</td>
                        </tr>
                    </table>
                </blockquote>
            </details>
            <!-- components Submodule -->
            <details>
                <summary><b>components</b></summary>
                <blockquote>
                    <div class='directory-path' style='padding: 8px 0; color: #666;'>
                        <code><b>⦿ src.components</b></code>
                    <!-- ui Submodule -->
                    <details>
                        <summary><b>ui</b></summary>
                        <blockquote>
                            <div class='directory-path' style='padding: 8px 0; color: #666;'>
                                <code><b>⦿ src.components.ui</b></code>
                            <table style='width: 100%; border-collapse: collapse;'>
                            <thead>
                                <tr style='background-color: #f8f9fa;'>
                                    <th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
                                    <th style='text-align: left; padding: 8px;'>Summary</th>
                                </tr>
                            </thead>
                                <tr style='border-bottom: 1px solid #eee;'>
                                    <td style='padding: 8px;'><b><a href='https://github.com/Lilecaz/book-frontend/blob/master/src/components/ui/card.tsx'>card.tsx</a></b></td>
                                    <td style='padding: 8px;'>- Provides a Card UI component for displaying grouped content with consistent styling and optional header, body, and footer sections.</td>
                                </tr>
                                <tr style='border-bottom: 1px solid #eee;'>
                                    <td style='padding: 8px;'><b><a href='https://github.com/Lilecaz/book-frontend/blob/master/src/components/ui/label.tsx'>label.tsx</a></b></td>
                                    <td style='padding: 8px;'>- Defines a Label component for form fields, ensuring accessible and consistent labeling across the application.</td>
                                </tr>
                                <tr style='border-bottom: 1px solid #eee;'>
                                    <td style='padding: 8px;'><b><a href='https://github.com/Lilecaz/book-frontend/blob/master/src/components/ui/alert.tsx'>alert.tsx</a></b></td>
                                    <td style='padding: 8px;'>- Implements an Alert component to display important messages, warnings, or notifications to users in a visually distinct style.</td>
                                </tr>
                                <tr style='border-bottom: 1px solid #eee;'>
                                    <td style='padding: 8px;'><b><a href='https://github.com/Lilecaz/book-frontend/blob/master/src/components/ui/dialog.tsx'>dialog.tsx</a></b></td>
                                    <td style='padding: 8px;'>- Contains a Dialog component for modal dialogs, supporting overlays and interactive content for confirmations or forms.</td>
                                </tr>
                                <tr style='border-bottom: 1px solid #eee;'>
                                    <td style='padding: 8px;'><b><a href='https://github.com/Lilecaz/book-frontend/blob/master/src/components/ui/badge.tsx'>badge.tsx</a></b></td>
                                    <td style='padding: 8px;'>- Offers a Badge component for displaying small status indicators, labels, or counts with customizable appearance.</td>
                                </tr>
                                <tr style='border-bottom: 1px solid #eee;'>
                                    <td style='padding: 8px;'><b><a href='https://github.com/Lilecaz/book-frontend/blob/master/src/components/ui/button.tsx'>button.tsx</a></b></td>
                                    <td style='padding: 8px;'>- Provides a Button component with various styles and states for user interactions such as submitting forms or triggering actions.</td>
                                </tr>
                                <tr style='border-bottom: 1px solid #eee;'>
                                    <td style='padding: 8px;'><b><a href='https://github.com/Lilecaz/book-frontend/blob/master/src/components/ui/input.tsx'>input.tsx</a></b></td>
                                    <td style='padding: 8px;'>- Defines an Input component for text fields, supporting accessibility, validation, and consistent styling in forms.</td>
                                </tr>
                            </table>
                        </blockquote>                </details>
                </blockquote>
            </details>
        </blockquote>
    </details>
</details>

---

## Getting Started

### Prerequisites

This project requires the following dependencies:

- **Programming Language:** TypeScript
- **Package Manager:** Npm

### Installation

Build book-frontend from the source and intsall dependencies:

1. **Clone the repository:**

    ```sh
    git clone https://github.com/Lilecaz/book-frontend
    ```

2. **Navigate to the project directory:**

    ```sh
    cd book-frontend
    ```

3. **Install the dependencies:**


    **Using [npm](https://www.npmjs.com/):**

    ```sh
    npm install
    ```

### Usage

Run the project with:

**Using [npm](https://www.npmjs.com/):**
```sh
npm start
```

### Testing

Book-frontend uses the {__test_framework__} test framework. Run the test suite with:

**Using [npm](https://www.npmjs.com/):**
```sh
npm test
```

---



<div align="right">

[![][back-to-top]](#top)

</div>


[back-to-top]: https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square


---
