import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App" style="background-color:#F5F5F5">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <title>Banking Buddies</title>
        <p>
          Welcome to our website!
        </p>
        <Divider>Look Below!</Divider>
      </header>

      <body>
      <p>
        This website is designed ........
        There is a section where you can input your data and it will visualise the information for you.
        Also, you can use another section to produce future projecions based on your inputs.
      </p>
      </body>
    </div>
  );
}

export default App;
