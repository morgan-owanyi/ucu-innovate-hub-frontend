import Navbar from '../components/Navbar';

function LecturerDashboard() {
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <h2>Lecturer Dashboard</h2>
        <p>Here you will see pending projects for approval.</p>
      </div>
    </>
  );
}

export default LecturerDashboard;