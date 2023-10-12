import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { Provider } from "react-redux";
import store from "./Store/store";
import { UserProvider } from "./Context/UserContext";
import il8n from "./il8n";
import { LanguageProvider } from "./Context/LanguageContext";
const App = () => {
  return (
    <LanguageProvider>
      <Provider store={store}>
        <UserProvider>
          <RouterProvider router={router} />
        </UserProvider>
      </Provider>
    </LanguageProvider>
  );
};

export default App;
