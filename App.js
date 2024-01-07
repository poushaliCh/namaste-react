// const heading = React.createElement(
//   'h1',
//   { id: 'heading', xyz: 'abcd' },
//   'hellow world from React'
// );

//nested element create in react
/*
<div id="parent">
        <div id="child1">
            <h1>i am h1 heading</h1>
            <h2>i am h2 heading</h2>
        </div>
        <div id="child2">
            <h1>i am h3 heading</h1>
            <h2>i am h4 heading</h2>
        </div>
    </div>
 */
import React from 'react';
import ReactDOM from 'react-dom/client';

// const parent = React.createElement('div', { id: 'parent' }, [
//   React.createElement('div', { id: 'child1' }, [
//     React.createElement('h1', {}, 'Hi i am h1 heading'),
//     React.createElement('h2', {}, 'Hi i am h2 heading'),
//   ]),
//   React.createElement('div', { id: 'child2' }, [
//     React.createElement('h1', {}, 'Hi i am h3 heading'),
//     React.createElement('h2', {}, 'Hi i am h4 heading'),
//   ]),
// ]);
//console.log(heading); //heading is just a react element, react element is actually a object
// const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(heading); //render method helps to take that object and put it into the dom.
// heading become HTML while it ending to dom using render method

// root.render(parent);

//now with JSX
// const hradingJSX = <h1 id="heading">Namaste React by JSX</h1>;
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(hradingJSX);

//react functional component---

const Title = () => {
  return <h2>Title Component</h2>;
};
const elem = <span>span react element</span>;
const TitleElement = <h2>{elem}hii am Recat Element</h2>;

const num = 10000;
const HeadingComponent = () => (
  <div id="container">
    <Title /> //component composition
    {Title()}
    <Title></Title>
    {TitleElement}
    <p>{num}</p>
    <p>{100 + 200}</p>
    <h1 className="heading">functional component</h1>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent />);
