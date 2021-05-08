import React from 'react'
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import { ToastContainer } from 'react-toastify';
import Header from './components/Header';
import Home from './components/Home';
import AllCourses from './components/AllCourses';
import AddCourse from './components/AddCourse';
import Menus from './components/Menus';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  // const btnHandle = () => {
  //   toast.error("done", {
  //     position: "top-center",
  //   });
  // };
  return (
    <div>
      <Router>
        <ToastContainer />
        <Container>
          <Header />
          <Row>
            <Col md={4}><Menus /></Col>
            <Col md={8}>
              <Route path="/" component={Home} exact></Route>
              <Route path="/add-course" component={AddCourse} exact></Route>
              <Route path="/view-courses" component={AllCourses} exact></Route>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
