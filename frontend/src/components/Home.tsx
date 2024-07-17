import Header from "./Header";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Header />
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="card shadow-sm">
              <div className="card-body">
                <h1 className="card-title text-center mb-4">
                  Welcome to ScooterTracker
                </h1>
                <p className="card-text">
                  Welcome to <strong>ScooterTracker</strong>, your ultimate
                  destination for tracking and sharing real-world performance
                  data of electric scooters. Whether you are a seasoned scooter
                  enthusiast or a newcomer looking for reliable information, our
                  platform offers you the most accurate and up-to-date range
                  data, reported by actual users.
                </p>
                <p className="card-text">
                  Our community-driven approach ensures that you get insights
                  into the actual range of different scooter models under
                  various conditions. Register with us to contribute your
                  scooter's performance data, and help others make informed
                  decisions based on real-world experiences.
                </p>
                <p className="card-text">
                  We strive to build a comprehensive and transparent repository
                  of scooter performance data to benefit all users. Explore the
                  different models, compare their real-world range, and join our
                  community today!
                </p>
                <p className="card-text text-center font-italic mt-4">
                  Be safe and good luck on your rides!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
