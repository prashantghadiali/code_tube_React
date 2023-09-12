import { Component } from "react";
import Course from "./components/Course";
import { courses } from "./data";

class List extends Component {
  constructor(props) {
    super(props);
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
    return (
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
    );
  }
}

export default List;
