# Authentication App

The **Authentication App** is a simple application that facilitates user registration and login through multiple providers:

- **Facebook**
- **Google**
- **LinkedIn**
- **GitHub**

Moreover, users can log in using their **email** and **password**. They can also **change** their **avatar** (by uploading a new one or providing a URL) and **password**.

This is a full-stack application. The frontend is developed using **React** and the backend using **Nest.js**. Therefore, I have created two separate repositories:

- [Frontend Repository](https://github.com/xyashino/Authentication-FE.git)
- [Backend Repository](https://github.com/xyashino/Authentication-BE.git)

## You can find a live demo here: [DEMO](https://authentication.yashino.live/)

```
email: test@gmail.com
password: 12345678
```

The app is deployed on **[MyDevil.net](https://www.mydevil.net/)**.

## Authentication App - Frontend

![TYPESCRIPT](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![REACT](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![REACT-ROUTER](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![TAILWIND](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![VITE](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

### This is a simple frontend application that contains:

- Dynamic forms built by only **React**, using **custom hooks**.
- A **drag & drop** feature for **file** uploading.
- A custom modal, built with the **HTML dialog** element.
- Communication with the backend using **Axios**.
- Compact, concise components, as I try to make the components as small as possible

## App Visualization:

### Login Using Providers

    Facebook

<div align="center">
    <img src="demo/facebook.gif" alt="Facebook"/>
</div>

    Google

<div align="center">
    <img src="demo/google.gif" alt="Google"/>
</div>

    LinkedIn

<div align="center">
    <img src="demo/linkedin.gif" alt="LinkedIn"/>
</div>

    GitHub

<div align="center">
    <img src="demo/github.gif" alt="GitHub"/>
</div>

### Change Avatar

<div align="center">
    <img src="demo/avatar.gif" alt="Avatar"/>
</div>

## How to Run This App Locally

1. Clone the repository:

```
git clone https://github.com/xyashino/Authentication-FE.git
```

2. Install dependencies:

```
yarn
```

3. Run the application:

```
yarn dev
```

## CONFIGURATION

This app requires a `.env` file if the backend server isn't running at the default local domain (http://localhost:3000). For example, if the server is running on http://localhost:3001, then you need to create a .env file in the **root** directory:

```.dotenv
    VITE_BE_URL = http://localhost:3001
```

In the `tsconfig.json` file, there is an important alias `@backendTypes`. If you've installed the backend in a directory other than the default, you'll need to change this alias to point to your backend directory. To avoid this issue, you can install the backend in the same directory as the frontend.

```json
"paths": {
    ...
    "@backendTypes": ["../authentication-be/src/types/"]
}
```
