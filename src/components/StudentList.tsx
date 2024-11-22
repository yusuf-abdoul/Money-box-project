import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import StudentRegistrationForm from './components/StudentRegistrationForm';
import SavingsDashboard from './SavingsDashboard';

const StudentList: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={StudentRegistrationForm} />
        <Route path="/dashboard" component={SavingsDashboard} />
      </Switch>
    </Router>
  );
};

export default StudentList;
