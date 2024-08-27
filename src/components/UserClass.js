import React from "react";

const styleUserCard = { margin: "unset" };

class UserClass extends React.Component {

  constructor(props) {
    super(props);
    console.log("child " + this.props.name + " contructor called");
 

    // to create s astate variable
    this.state = { 
        count: 0,
        userInfo: {
            name: "Dummy",
            location: "Default",
            avatar_url: 'http://dummy-photo.com'
        }
     };
}


  // This method is called after the component is rendered to the DOM.
  async componentDidMount() {
    console.log("child " + this.props.name + " componentDidMount called");

    const response = await fetch("https://api.github.com/users/akshaymarch7");
    const data = await response.json();
    console.log(data);

    this.setState({
        userInfo: {
            name: data.name,
            location: data.location,
            avatar_url: data.avatar_url
        }
    })

    console.log(this.state.userInfo);

  }


  render() {
    console.log("child " + this.props.name + " render called");
    return (
      <div className="user-card">
        <h3>Count(class): {this.state.count}</h3>
        <button onClick={() => {
            this.setState({ count: this.state.count + 1 });
        }}>Count Increase</button>
        {/* <h3>Count(class): {this.state.count2}</h3> */}
        <p style={styleUserCard}>
          <b>Name:</b> {this.props.name}
        </p>
        <p style={styleUserCard}>
          <b>Location:</b> Mumbai
        </p>

        <p style={styleUserCard}>
          <b>Name:</b> {this.state.userInfo.name}
        </p>
        <p style={styleUserCard}>
          <b>Location:</b> {this.state.userInfo.location}
        </p>
        <img src={this.state.userInfo.avatar_url} alt="avatar" />
        


        <p style={styleUserCard}>
          Juliana is a software developer with 5 years of experience. She has
          worked with a variety of programming languages and frameworks. In her
          free time, she enjoys reading, cooking, and traveling.
        </p>
      </div>
    );
  }


  //componentDidUpdate is called after the render method is called
    componentDidUpdate() {
        console.log("child " + this.props.name + " componentDidUpdate called");
    }

    //componentWillUnmount is called before the component is removed from the DOM
    componentWillUnmount() {
        console.log("child " + this.props.name + " componentWillUnmount called");
    }
}

export default UserClass;
