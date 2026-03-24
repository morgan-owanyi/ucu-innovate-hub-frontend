import { useState } from 'react';
import { createProject } from '../api/api';
import Navbar from '../components/navbar.js';

function SubmitInnovation() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createProject({ title, description });
      alert('Innovation submitted!');
      setTitle('');
      setDescription('');
    } catch (err) {
      alert('Error submitting project');
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h1>Submit Your Innovation</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} required />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </>
  );
}

export default SubmitInnovation;