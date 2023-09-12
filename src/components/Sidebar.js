import { Component } from "react";
import { instructors } from "../data";
import {Button} from '../reusable.styled'

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      following: []
    };
  }

  isFollowingInstructor = (id) => {
    return !!this.state.following.find((i) => i.id === id);
  };

  handleFollow = (id) => {
    const instructor = instructors.find((i) => i.id === id);
    this.setState({ following: [instructor, ...this.state.following] });
  };

  handleUnFollow = (id) => {
    const filteredList = this.state.following.filter((i) => i.id !== id);
    this.setState({ following: filteredList });
  };

  render() {
    return (
      <div className="sidebar">
        {instructors.map((i) => (
          <div key={i.id} className="instructor">
            <img src={i.image} alt={i.name} />
            <h3>{i.name}</h3>
            <Button bg='blue' onClick={() =>
                !this.isFollowingInstructor(i.id)
                  ? this.handleFollow(i.id)
                  : this.handleUnFollow(i.id)
              }>
              {!this.isFollowingInstructor(i.id) ? "Follow" : "Unfollow"}
            </Button>
            {/* <button
              onClick={() =>
                !this.isFollowingInstructor(i.id)
                  ? this.handleFollow(i.id)
                  : this.handleUnFollow(i.id)
              }
            >
              {!this.isFollowingInstructor(i.id) ? "Follow" : "Unfollow"}
            </button> */}
          </div>
        ))}
      </div>
    );
  }
}

export default Sidebar;
