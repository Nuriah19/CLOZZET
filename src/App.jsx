import Router from "./componets/Router";
import StateProvider from "./context/State";
function App() {
  return (
    <StateProvider>
      <Router/>
    </StateProvider>
  );
}

export default App;
