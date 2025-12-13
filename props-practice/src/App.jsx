import Greeting from "./components/Greetings";

const App = () => {
  return (
    <div>
      <Greeting name="Honore" message="Good morning" age="20 years" />
      <Greeting name="John" message="Good afternoon" age="22 years" />
      <Greeting name="Smith" message="Good evening" age="30 years" />
    </div>
  );
};

export default App;
