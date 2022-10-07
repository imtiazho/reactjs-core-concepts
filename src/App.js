import logo from './logo.svg';
import './App.css';

const number = 555;
const singer = {name: 'Dr mahfujur Rahman', job: 'Singer'}
const singer2 = {name: 'Eva', job: 'Singer'}

const singers = [
  {name: 'Dr mahfujur Rahman', job: 'Singer'},
  {name: 'Eva', job: 'Singer'},
  {name: 'Agun', job: 'Shopno'},
  {name: 'Shubro', job: 'pathor'}
]

const singerStyle = {
  color: 'Red',
  backgroundColor: 'white'
}

function App() {
  const nayoks = ['Rubel', 'Bapparaz', 'kuber', 'Jashim', 'salman Shah', 'Riaz']
  return (
    <div className="App">
    {/* {
      nayoks.map(nayok => <li>Name: {nayok}</li>)
    } */}

    {/* {
      nayoks.map(nayok => <Person name={nayok}></Person>)
    } */}
    {
      singers.map(singer => <Person name={singer.name}></Person>)
    }
    {/* <Person name={nayoks[0]} naika="Muishumi"></Person>
    <Person name={nayoks[1]} naika="seka"></Person>
    <Person naika="Kopila" name={nayoks[2]}></Person> */}

    <h3>New Component: Yay!</h3>
    <Friend name="Bangla Bhai" phone="018172"></Friend>
    <Friend name="Muab" phone="2323231"></Friend>
    <Friend name="Indows dhga" phone="23623823"></Friend>

    {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>JSX</h1>
        <div className="container">
          <h1>Hello Dude! React How are you?</h1>
        </div>
        <div className="music">
          <p style={singerStyle}>Name: {222 + number}</p>
          <p>Name: {singer.name} {singer.job}</p>
          <p style={{color: 'blue', backgroundColor: 'red'}}>Name: {singer2.name} {singer2.job}</p>
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      
    </div>
  );
}

function Person(props){
  // console.log(props)
  return (
    <div className='person'>
      <h1>{props.name}</h1>
      <p>{props.naika}</p>
    </div>
  );
}

function Friend(props){
  console.log(props)
  return (
    <div className="container">
        <h3>Name: {props.name}</h3>
        <p>Phone: {props.phone}</p>
    </div>
  );
}

export default App;
