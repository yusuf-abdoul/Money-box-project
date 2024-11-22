import React, { useState } from 'react';
import StudentItem from './components/StudentItem';

interface SavingsState {
  totalSaved: number;
  students: Array<{ name: string; tier: number; interest: number }>;
}

const SavingsDashboard: React.FC = () => {
  const [savingsState, setSavingsState] = useState<SavingsState>({
    totalSaved: 0,
    students: [],
  });

  const calculateInterest = (amount: number, tier: number): number => {
    switch (tier) {
      case 10000:
        return amount * 0.05;
      case 20000:
        return amount * 0.10;
      case 30000:
        return amount * 0.20;
      default:
        return 0;
    }
  };

  const updateSavings = () => {
    setSavingsState((prev) => ({
      totalSaved: prev.totalSaved + savingsState.students.reduce((sum, student) => sum + student.tier, 0),
      students: prev.students.map(student => ({
        ...student,
        interest: calculateInterest(student.tier, student.tier)
      }))
    }));
  };

  const withdrawStudent = (name: string) => {
    setSavingsState(prev => ({
      totalSaved: prev.totalSaved - savingsState.students.find(s => s.name === name)?.tier || 0,
      students: prev.students.filter(s => s.name !== name)
    }));
  };

  return (
    <div>
      <h2>Savings Dashboard</h2>
      <p>Total Saved: {savingsState.totalSaved} Naira</p>
      <ul>
        {savingsState.students.map(student => (
          <li key={student.name}>
            <StudentItem
              name={student.name}
              tier={student.tier}
              interest={student.interest}
              onWithdraw={() => withdrawStudent(student.name)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SavingsDashboard;
