
import './App.css';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import Count from './conponents/Count';
import TaskApp from './conponents/TaskApp';
import UseEffectWithDependencies from './conponents/UseEffectWithDependencies';
function App() {
  return (
    <div>
      <UseEffectWithDependencies />
      {/* <TaskApp /> */}
    </div>
  );
}

export default App;