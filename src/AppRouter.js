import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'
import Courses from './pages/Courses'
import CourseDetails from './pages/CourseDetails'
import MyLearning from './pages/MyLearning'

const AppRouter = () => (
  <Switch>
    <Route path="/" exact>
      <HomePage />
    </Route>
    <Route path="/courses" exact>
      <Courses />
    </Route>
    <Route path="/course/:id">
      <CourseDetails />
    </Route>
    <Route path="/myLearning" exact>
      <MyLearning />
    </Route>
  </Switch>
);

export default AppRouter;
