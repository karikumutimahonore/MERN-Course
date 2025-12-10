const DonationCards = () => {
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "space-around",
        padding: "2rem",
      }}
    >
      <div
        style={{ border: "1px solid #ccc", padding: "1rem", width: "200px" }}
      >
        <h3>Education</h3>
        <p>
          <p>Support school programs and supplies</p>
        </p>
        <button>Donate Now</button>
      </div>

      <div
        style={{ border: "1px solid #ccc", padding: "1rem", width: "200px" }}
      >
        <h3>Health Cares</h3>
        <p>
          <p>Provide medicines and care for families</p>
        </p>
        <button>Donate Now</button>
      </div>

      <div
        style={{ border: "1px solid #ccc", padding: "1rem", width: "200px" }}
      >
        <h3>Food AID</h3>
        <p>
          <p>Deliver meals to those in need</p>
        </p>
        <button>Donate Now</button>
      </div>
    </section>
  );
};

export default DonationCards;
