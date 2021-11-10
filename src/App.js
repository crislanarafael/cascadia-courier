import logo from "./logo.svg";
import "./App.css";
import { CourierProvider } from "@trycourier/react-provider";
import { Toast } from "@trycourier/react-toast";
import { Inbox } from "@trycourier/react-inbox";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CourierProvider
          clientKey={"YTk4MGVmNWUtMWMzMS00OTQxLWI4Y2MtZDA0ZDViNDM3ZmU2"}
          userId={"courier-333"}
        >
          <Toast />
        </CourierProvider>
      </header>
    </div>
  );
}

export default App;
