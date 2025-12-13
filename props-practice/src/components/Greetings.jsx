const Greeting = ({ name, message, age }) => {
  return (
    <h2>
      Hello, {name} - {message}, Your age is {age}
    </h2>
  );
};

export default Greeting;
