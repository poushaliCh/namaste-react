import React from 'react';
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
    // console.log(this.props.name + 'Child Constuctor');
    // this.state = {
    //   count: 1,
    //   countTwo: 2,
    // };
    this.state = {
      userInfo: {
        name: 'Dummy',
        location: 'Default Location',
      },
    };
  }

  async componentDidMount() {
    // console.log(this.props.name + 'Child componentDidMount');
    this.timer = setInterval(() => {
      // console.log('ABCDEFGH');
    }, 1000);
    const data = await fetch('https://api.github.com/users/poushalich');
    const dataInJson = await data.json();
    // console.log(dataInJson);
    this.setState({
      userInfo: dataInJson,
    });
  }

  componentDidUpdate() {
    // console.log('component did updated');
  }

  componentWillUnmount() {
    // console.log('component will unmount');
    clearInterval(this.timer);
  }
  render() {
    // console.log(this.props.name + 'Child render');
    // const { name, location } = this.props; //destucture
    //const { count } = this.state; //destucture
    const { name, location, id, avatar_url } = this.state.userInfo;
    // debugger;
    return (
      <div className="userCard">
        <img src={avatar_url} className="userIMG" />
        <h2>Name: {name}</h2>
        <h2>Loaction: {location}</h2>
        <h2>Id: {id}</h2>
      </div>
    );
  }
}
export default UserClass;
