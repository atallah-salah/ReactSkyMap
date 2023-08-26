import './App.css';
import VirtualSky from "react-virtual-sky";


function App() {
  const config = {
    azOff: 0,
    height: 500,
    width: 500,
    latitude: 51.746449,
    longitude: 19.620693,
    time: new Date(),
    skyColors: ["#000", "#100050"],
    gridAzColor: "#100050",
    gridEqColor: "#105000",
    gridGalColor: "#500020",
    language: "en",
    visibility: {
      starMag: 6,
      showStarLabels: true,
      showPlanets: true,
      showPlanetsOrbit: true,
      showPlanetsLabels: true,
      showSunMoon: true,
      showConstellations: true,
      showConstellationBoundaries: true,
      showConstellationLabels: true,
      showAzLabels: true,
      showAzGrid: true,
      showEqGrid: true,
      showGalGrid: true,
      showGalaxy: true,
      showInfo: true
    }
  };



  return (
    <div className="App">
    <VirtualSky id="startmap" config={config} />
  </div>
  );
}

export default App;
