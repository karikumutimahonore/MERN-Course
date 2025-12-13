import Greeting from "./components/Greetings";
import DonationButton from "./components/DonationButton";

const App = () => {
  const DonateFn = () => {
    alert("Thank you for your donation!");
  };
  return (
    <div>
      <Greeting name="Honore" message="Good morning" age="20 years" />
      <Greeting name="John" message="Good afternoon" age="22 years" />
      <Greeting name="Smith" message="Good evening" age="30 years" />
      <DonationButton onDonate={DonateFn} />
    </div>
  );
};

export default App;
