import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface Student {
  name: string;
  tier: number;
}

const StudentRegistrationForm: React.FC = () => {
  const [name, setName] = useState('');
  const [tier, setTier] = useState(0);
  const [students, setStudents] = useState<Student[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !tier) {
      setError('Please fill in both name and select a tier');
      return;
    }

    const newStudent: Student = { name, tier };
    setStudents([...students, newStudent]);
    setName('');
    setTier(0);
    setError(null);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          required
        />
        <select
          value={tier}
          onChange={(e) => setTier(Number(e.target.value))}
          required
        >
          <option value="">Select a tier</option>
          <option value="10000">Tier 1: 10,000 Naira (5% interest)</option>
          <option value="20000">Tier 2: 20,000 Naira (10% interest)</option>
          <option value="30000">Tier 3: 30,000 Naira (20% interest)</option>
        </select>
        <button type="submit">Register</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <Link to="/dashboard">View Savings Dashboard</Link>
    </div>
  );
};

export default StudentRegistrationForm;
