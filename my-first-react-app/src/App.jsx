const App = () => {
  // Example1: Basic JSX with variables
  const name = "React Learner";
  const greeting = "welcome to JSX";

  // Example2: JSX with expressions
  const num1 = 10;
  const num2 = 5;

  // Example3: JSX with conditional rendering
  const isLoggedIn = false;

  // Example4: JSX with lists
  const fruits = ["Apple", "Banana", "Cherry", "Date"];
  return (
    <div>
      <h1>This is Examples</h1>
      {/*Example1: Basic JSX with variables*/}
      <section>
        <h2>1. Basic JSX with variables</h2>
        {name}, {greeting};
        <p>JSX let's insert JavaScript expressions inside curl braces {"{}"}</p>
      </section>
      <section>
        {/*Example2: JSX with expressions*/}
        <h2>2. JSX with expressions</h2>
        {num1} + {num2} = {num1 + num2}
      </section>
      <section>
        {/*Example3: JSX with conditional rendering*/}
        <h2>3. JSX with conditional rendering</h2>
        <p>{isLoggedIn ? "You are logged in" : "Please log in"}</p>
      </section>
      <section>
        <h1>4. JSX with lists</h1>
        <ul>
          {fruits.map((fruit) => {
            return <li key={fruit}>{fruit}</li>;
          })}
        </ul>
      </section>
    </div>
  );
};

export default App;
