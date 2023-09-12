import "./styles.css";
import Course from "./components/Course";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { courses } from "./data";
import { Component } from 'react'

export class App extends Component {
  constructor() {
    super();
    this.state = { bagItems: [] };
  }

  isCourseinBag = (id) => {
    return !!this.state.bagItems.find((c) => c.id === id);
  };

  handleAddToBag = (id) => {
    const course = courses.find((c) => c.id === id);
    this.setState({ bagItems: [course, ...this.state.bagItems] });
  };

  handleRemoveFromBag = (id) => {
    const filteredCourses = this.state.bagItems.filter((c) => c.id !== id);
    this.setState({ bagItems: filteredCourses });
  };
  
  render() {
    console.log(this.isCourseinBag);
    return (
      <div className="App">
      <Navbar bag={this.state.bagItems.length} />
      <h3>CodeTube Catalog</h3>
      <div className="container">
        <div className="list">
          {courses.map((v) => (
            <Course
              key={v.id}
              video={v}
              onAdd={this.handleAddToBag}
              onRemove={this.handleRemoveFromBag}
              isInBag={this.isCourseinBag(v.id)}
            />
          ))}
        </div>
        <Sidebar />
      </div>
    </div>
    )
  }
}

export default App



