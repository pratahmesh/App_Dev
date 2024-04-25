# React Native App 

## 🚀 Project Overview

Welcome to an exciting React Native app that showcases features like data fetching, a fully functional login endpoint, and a sleek UI/UX experience. This project is organized into two main folders: `backend` and `navigation`. The `backend` folder hosts `app.js` for the Node.js server and `db.js` for the MongoDB connection string. Meanwhile, the `navigation` folder contains the thrilling React Native codebase.

## 🌟 Features

- **Data Fetching**: Effortlessly retrieve and display data.
- **Login Endpoint**: Seamlessly integrate user authentication using MERN.
- **Sleek UI/UX**: Elevate the user experience with a modern and intuitive interface.
- **Firebase**: Used firebase as login endpoint. 
- **llm model**: Integrated Api based chat System.

```plaintext
App_Dev/
│
├── backend/
│   ├── app.js
│   └── db.js
│
├── navigation/
│   ├── App.tsx
│   ├── index.js
│   ├── package-lock.json
│   ├── package.json
│   └── src/
│       ├── navigators/
│       │   └──TabNavigator.tsx
│       └──screens/
│          ├── CartScreen.tsx
│          ├── DetailsScreen.tsx
│          ├── Favourites.tsx
│          ├── HomeScreen.tsx
│          ├── OrderHistoryScreen.tsx
│          ├── PaymentScreen.tsx
│          ├── Main.tsx
│          └── mini/
│              ├── buy.tsx
│              ├── Recent.jsx
│              └── wishlist.tsx
└── navi/
    ├── smooth navigation clone of twitter
```


## Prerequisites

Before unleashing the power of this app, ensure you have the following:

## 🚀 React Native App Setup

1. 🚀 Head over to the `navigation` folder:
    ```bash
    cd navigation
    ```

2. 🌐 Install dependencies:
    ```bash
    npm install
    ```

3. 🚀 Launch the React Native Metro bundler:
    ```bash
    npx react-native start
    ```

4. 🚀 Propel the app onto your device:
    ```bash
    npx react-native run-android  # For Android
    # or
    npx react-native run-ios      # For iOS
    ```

## 💾 Database Connection

1. 🚀 Open MongoDB Compass and connect to your MongoDB server.

2. 🔒 **Critical Step:** Update the MongoDB connection string in `backend/db.js` with your credentials. This is your app's lifeline to the database!


## 🔧 Backend Setup

1. 🚀 Dive into the `backend` folder:
    ```bash
    cd backend
    ```

2. 🌐 Install dependencies:
    ```bash
    npm install
    ```

3. 🔥 Ignite the Node.js server:
    ```bash
    node app.js
    ```





## 📝 Additional Notes

- 🌐 Ensure your mobile device and development machine share the same network for flawless app installation.

- 🧰 Confirm you have the required SDKs and build tools for your chosen mobile platform.

Embark on this coding adventure and feel free to enhance the app to your heart's content! If you encounter any challenges, consult the documentation or reach out for assistance.

Happy coding! 🚀
