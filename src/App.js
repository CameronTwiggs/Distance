import records from "./file.json"  // this is the file that contains the json data
import LocationCard from "./LocationCard.jsx";

export default function App() {
  // loop through the json data and display it

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Records</h1>
        <div className="records">
          {records.timelineObjects.map((record) => (
            <LocationCard props={record} />
          ))}

        </div>
      </header>
    </div>
  );
}


