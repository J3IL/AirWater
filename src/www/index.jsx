import React from 'react';
import ReactDOM from 'react-dom';

import Create from './components/create.jsx';
import Read from './components/read.jsx';
import Update from './components/update.jsx';
import Delete from './components/delete.jsx';

class App extends React.Component {

  render() {
    return (
      <div>
        <h1>AirWater</h1>
        <p> <a href=""></a><a href=""></a><a href=""></a><a href=""></a>.</p>
        <hr/>
        <Create/>
        <hr/>
        <Read/>
        <hr/>
        <Update/>
        <hr/>
        <Delete/>
      </div>
    );
  }
}

export default App;

ReactDOM.render(<App/>, document.getElementById('app'));