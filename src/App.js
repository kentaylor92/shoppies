import './App.scss';
import Search from './Components/Search';

const App = () => {
  return (
    <div className="app">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 311.2 88.9"><path d="M107.6 49.3c-2.7-1.5-4.1-2.7-4.1-4.4 0-2.1 1.9-3.5 4.9-3.5 3.5 0 6.6 1.5 6.6 1.5l2.4-7.5s-2.2-1.8-8.9-1.8c-9.2 0-15.6 5.3-15.6 12.7 0 4.2 3 7.4 7 9.7 3.2 1.8 4.4 3.1 4.4 5 0 2-1.6 3.6-4.6 3.6-4.4 0-8.6-2.3-8.6-2.3l-2.6 7.5s3.9 2.6 10.4 2.6c9.5 0 16.3-4.7 16.3-13.1 0-4.4-3.5-7.6-7.6-10zm37.7-15.7c-4.7 0-8.3 2.2-11.2 5.6l-.2-.1 4.1-21.2h-10.5l-10.2 53.9h10.5l3.5-18.4c1.4-7 5-11.2 8.3-11.2 2.4 0 3.3 1.6 3.3 3.9 0 1.5-.2 3.2-.5 4.7l-4 21.1h10.5l4.1-21.8c.5-2.3.8-5 .8-6.9.2-6-2.9-9.6-8.5-9.6zm32.5 0c-12.7 0-21.1 11.5-21.1 24.2 0 8.2 5 14.8 14.5 14.8 12.5 0 20.9-11.2 20.9-24.2 0-7.6-4.4-14.8-14.3-14.8zm-5.2 30.9c-3.6 0-5.1-3.1-5.1-6.9 0-6 3.1-15.9 8.9-15.9 3.7 0 5 3.2 5 6.3-.1 6.5-3.2 16.5-8.8 16.5zm46.5-30.9c-7.1 0-11.2 6.3-11.2 6.3h-.2l.6-5.7H199c-.5 3.8-1.3 9.6-2.1 14l-7.3 38.6h10.5l2.9-15.6h.2s2.2 1.4 6.2 1.4c12.4 0 20.5-12.7 20.5-25.5.1-7.2-3.1-13.5-10.8-13.5zm-10.1 31c-2.7 0-4.4-1.5-4.4-1.5l1.8-9.9c1.2-6.6 4.7-10.9 8.3-10.9 3.2 0 4.2 3 4.2 5.8.1 6.8-4 16.5-9.9 16.5zm36-46.1c-3.4 0-6 2.7-6 6.1 0 3.1 2 5.3 5 5.3h.2c3.3 0 6.1-2.2 6.2-6.1-.1-3.1-2.2-5.3-5.4-5.3zm-14.7 53.3h10.5l7.2-37.4h-10.6zm44.5-37.4h-7.3l.4-1.8c.6-3.6 2.8-6.8 6.3-6.8 1.9 0 3.4.5 3.4.5l2.1-8.3s-1.8-.9-5.7-.9c-3.7 0-7.5 1.1-10.3 3.5-3.6 3.1-5.3 7.5-6.1 11.9l-.3 1.8h-4.9l-1.5 7.9h4.9L250 71.8h10.5l5.6-29.5h7.3l1.4-7.9zm25.4 0s-6.6 16.6-9.6 25.7h-.2c-.2-2.9-2.6-25.7-2.6-25.7h-11.1l6.3 34.3c.2.8.1 1.2-.2 1.8-1.2 2.4-3.3 4.7-5.7 6.3-2 1.5-4.2 2.4-6 3l2.9 8.9c2.1-.5 6.6-2.2 10.3-5.7 4.8-4.5 9.2-11.5 13.8-20.9L311 34.4h-10.8zM52.1 10.2s-1 .3-2.6.8c-.3-.9-.7-2-1.2-3-1.8-3.5-4.5-5.3-7.8-5.4h-.7l-.3-.3C38.1.8 36.3.1 34.1.1c-4.2.1-8.4 3.1-11.7 8.5-2.4 3.8-4.2 8.5-4.7 12.2-4.8 1.5-8.2 2.5-8.2 2.6-2.4.8-2.5.8-2.8 3.1C6.4 28.3 0 77.4 0 77.4l52.7 9.1V10.1c-.2 0-.5.1-.6.1zM39.9 14c-2.8.9-5.8 1.8-8.9 2.8.9-3.3 2.5-6.6 4.5-8.7.7-.8 1.8-1.7 3-2.2 1.2 2.3 1.4 5.8 1.4 8.1zM34.2 2.9c1 0 1.8.2 2.5.7-1.1.6-2.2 1.4-3.3 2.5-2.7 2.9-4.7 7.3-5.5 11.6-2.5.8-5 1.6-7.3 2.3 1.5-6.8 7.1-16.9 13.6-17.1zM26 41.3c.3 4.5 12.1 5.5 12.7 16 .5 8.3-4.4 13.9-11.5 14.4-8.5.5-13.2-4.5-13.2-4.5l1.8-7.6s4.7 3.5 8.5 3.3c2.5-.2 3.3-2.2 3.2-3.6-.4-5.8-10-5.5-10.6-15.1-.5-8.1 4.8-16.3 16.5-17 4.5-.3 6.8.9 6.8.9l-2.7 10s-3-1.4-6.5-1.1c-5 .2-5 3.4-5 4.3zm16.7-28.2c0-2.1-.3-5.1-1.3-7.6 3.2.6 4.7 4.2 5.4 6.3-1.2.4-2.6.8-4.1 1.3zm11.8 73.2l21.9-5.4S67 17.2 66.9 16.8c-.1-.4-.4-.7-.8-.7-.3 0-6.5-.1-6.5-.1s-3.8-3.6-5.2-5v75.3z"></path></svg>
      <h1>The 2021 Shoppies</h1>
      <Search />
    </div>
  );
}

export default App;
