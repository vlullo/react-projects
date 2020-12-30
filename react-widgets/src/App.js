import React, {useState} from "react";
import './App.css';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

// const items = [
//   {
//     title: 'What is react.js?',
//     content: 'React is a front end javascript framework'
//   },
//   {
//     title: 'Why use react.js?',
//     content: 'React is a favourite JS library among engineers'
//   },
//   {
//     title: 'How do you use react.js?',
//     content: 'You use React by creating componets'
//   }
// ];

const options = [
  {
    label: 'The color red',
    value: 'red'
  },
  {
    label: 'The color blue',
    value: 'blue'
  },
  {
    label: 'The color yellow',
    value: 'yellow'
  }
];


export default () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className="ui container">
      {/* <Search /> */}
     {/* <Accordion items={items} /> */}
     <Dropdown 
        options={options} 
        onSelectedChange={setSelected} 
        selected={selected}
      />
    </div>
  );
};
