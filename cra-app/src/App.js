
import './App.css';
import React from 'react';
// import Count from './conponents/Count';
import TaskApp from './conponents/TaskApp';
// import UseEffectWithDependencies from './conponents/UseEffectWithDependencies';
import IndexComponent from './task/TaskComponent/IndexComponent';

function App() {
  return (
    <div>
      {/* <UseEffectWithDependencies /> */}
      <IndexComponent />
      {/* <TaskApp /> */}
    </div>
  );
}

export default App;