import Hello from './components/Hello';

function App() {
    const person={
        message:"Hii",
        name:"Srishti",
        seatNumbers:[1,4,9],    
    }
 return <div className="App">
  <Hello person={person}/>
  
      </div>
}

export default App
