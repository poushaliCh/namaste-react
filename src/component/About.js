import User from './User';
import UserClass from './UserClass';
import React from 'react';

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log('Parent Constuctor');
  }

  componentDidMount() {
    // console.log('Parent componentDidMount');
  }

  render() {
    // console.log('Parent render');
    return (
      <div>
        <h1>About Us from class component</h1>
        <UserClass
          name={'poushali chowdhury'}
          location={'Kolkata,West Bengal'}
        />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About Us</h1>
//       <UserClass name={'poushali chowdhury'} location={'Suri,Birbhum'} />
//     </div>
//   );
// };

export default About;
