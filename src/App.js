import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import "./App.css";
import LoginForm from "./components/LoginForm";

const App = () => {
  if (!localStorage.getItem("userName")) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID="383c2abe-abb4-4596-ba68-83238c7199cb"
      userName={localStorage.getItem("userName")}
      userSecret={localStorage.getItem("password")}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
