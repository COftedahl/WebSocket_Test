import { useEffect, useState } from 'react';
import './App.css'

function App() {

  const [text, setText] = useState<string>("Hi");
  const [socket, setSocket] = useState<WebSocket | null>(null);

  const startupConnectFunction = () => {
    setText("Started Connect Function");

    if (socket !== null) {
      socket.close();
      setSocket(null);
    }

    // Connect to the WebSocket server
    const localSocketRef = new WebSocket('ws://localhost:5000/game1')
    setSocket(localSocketRef);

    if (localSocketRef === null) {
      console.error("Error creating socket!");
      return;
    }

    // Event: Connection opened
    localSocketRef.addEventListener('open', () => {
      console.log('Connected to server');
      localSocketRef.send('Hello Server!'); // Send a message to the server
    });

    // Event: Message received from the server
    localSocketRef.addEventListener('message', (event) => {
      console.log(`Message from server: ${event.data}`);
      setText(event.data);
    });

    // Event: Connection closed
    localSocketRef.addEventListener('close', () => {
      console.log('Disconnected from server');
      setText("Disconnected from server");
    });
  }

  useEffect(() => {
    // if (text.length === 0) {
      // startupConnectFunction();
    // }  
  }, [])

  return (
    <>
      <div>
        <p>
          {text}
        </p>
        <button onClick={() => startupConnectFunction()}>
          Click Me
        </button>
      </div>
    </>
  )
}

export default App
