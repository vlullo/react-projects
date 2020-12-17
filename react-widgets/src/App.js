import './App.css';
// import Accordion from './components/Accordion';
import Search from './components/Search';

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



function App() {
  return (
    <div className="ui container">
      <Search />
     {/* <Accordion items={items} /> */}
    </div>
  );
}

export default App;
