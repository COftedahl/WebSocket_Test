import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState<string>("");

  const startupConnectFunction = () => {
    setText("Started Connect Function");

    // Connect to the WebSocket server
    const socket = new WebSocket('ws://localhost:8080');

    // Event: Connection opened
    socket.addEventListener('open', () => {
      console.log('Connected to server');
      socket.send('Hello Server!'); // Send a message to the server
    });

    // Event: Message received from the server
    socket.addEventListener('message', (event) => {
      console.log(`Message from server: ${event.data}`);
    });

    // Event: Connection closed
    socket.addEventListener('close', () => {
      console.log('Disconnected from server');
    });
  }

  useEffect(() => {
    if (text.length === 0) {
      startupConnectFunction();
    }  
  }, [])

  return (
    <>
      <div>
        <p>
          {text}
        </p>
      </div>
    </>
  )
}

export default App
