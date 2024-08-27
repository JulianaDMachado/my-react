import User from "./User";
import UserClass from "./UserClass";
import React from "react";

// const About = () => {
//     return (
//         <>
//         <div className="about">
//             <h1>About Us</h1>
//             <p>Our company is a leading provider of web hosting services. We offer a range of hosting plans to suit your needs. Whether you're a small business or a large corporation, we have the perfect solution for you. Our team of experts is here to help you every step of the way. Contact us today to learn more about our services.</p>
//         </div>

//         <User name={ " Juliana (functional)"}/>

//         <UserClass name={ " Juliana (class)"}/>
//         </>
//     )
// };

class About extends React.Component {
  constructor(props) {
    super(props);


    console.log("constructor parent called");
  }

// parent's componentDidMount method will be called only after it's children is mounted
  componentDidMount() {
    console.log("componentDidMount parent called");
  }

  render() {
    console.log("render parent called");
    return (
      <>
        <div className="about">
          <h1>About Us</h1>
          <p>
            Our company is a leading provider of web hosting services. We offer
            a range of hosting plans to suit your needs. Whether you're a small
            business or a large corporation, we have the perfect solution for
            you. Our team of experts is here to help you every step of the way.
            Contact us today to learn more about our services.
          </p>
        </div>

        <User name={" Juliana (functional)"} />

        <UserClass name={" First child(class)"} />
        {/* <UserClass name={" Second child(class)"} /> */}
      </>
    );
  }
}

export default About;
