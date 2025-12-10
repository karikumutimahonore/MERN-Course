const Footer = () => {
  return (
    <footer
      style={{
        background: "#1a1a1a",
        color: "#fff",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <p>
        &copy; {new Date().getFullYear()} Charity Organization. All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;
