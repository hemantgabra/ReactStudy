//import logo from "./logo.svg";
import "./App.css";
import StudentData from "./Components/StudentData";

let newData = [];
async function fetchData() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let json = await response.json();
    console.log("Fetched Data:", json);
    newData = json;
    return json;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData().then((newData) => {
  console.log("latestData", newData);
});

function App() {
  return (
    <div className="App">
      <h1>This is initial Poject10</h1>
      <StudentData studentPropsdata={newData}/>
    </div>
  );
}

export default App;
