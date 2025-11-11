import Header from './components/Header'

const App=()=>{
    const[count,setCount]=useState(0);
    return (
        <div>
            {count}
            <button onClick = {update} > Update </button>
            Inside App
            <Header heading = "Book Store" link="home"/>
        </div>
    )
}
export default App 

