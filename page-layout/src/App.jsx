import Layout from "./components/layout";

const App = () => {
  return (
    <div>
      {/* Homepage layout */}
      <Layout title="Welcome page">
        <h1>Welcome to JavaScript</h1>
        <p>This is a basic React layout using reusable components</p>
        <p>You can use this layout for any kind of web application</p>
      </Layout>

      {/* Services */}
      <Layout>
        <h2>Our Services</h2>
        <hr />
        <ul>
          <li>Web Development</li>
          <li>UI/UX Design</li>
          <li>Mobile App Solution</li>
        </ul>
      </Layout>
    </div>
  );
};

export default App;
