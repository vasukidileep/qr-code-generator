import "./App.css";
import QRCode from "./components/QRCodeGenerator";

function App() {
  return (
    <div className="App">
      <h1>QR Code Generator</h1>
      <div>
        <QRCode />
      </div>
    </div>
  );
}

export default App;
