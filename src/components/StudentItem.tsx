import React from 'react';

interface StudentItemProps {
  name: string;
  tier: number;
  interest: number;
  onWithdraw: () => void;
}

const StudentItem: React.FC<StudentItemProps> = ({ name, tier, interest, onWithdraw }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>Tier: {tier} Naira</p>
      <p>Weekly Interest: {interest.toFixed(2)} Naira</p>
      <button onClick={onWithdraw}>Withdraw</button>
    </div>
  );
};

export default StudentItem;
