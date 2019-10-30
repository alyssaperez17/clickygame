import React from 'react';
import './App.css';
import  Cards from "./components/Cards";
import Navbar from "./components/Navbar";
import Header from "./components/Header";



class App extends Component{
  state ={
    count: 0,
    topScore: 0
  }

}

updateCurrentScore = (newCount) => {
  this.setState({newCount});
  }

  updateTopScore = (newTop) => {
    if (newTop > this.state.topScore) {

      this.setState({topScore: newTop - 1})
    }

  }

  render() {
    return (
      <div>
        <Navbar score={this.state.count} top={this.state.topScore}/>
        <Header/>
        <CardContainer updateCurrentScore={this.updateCurrentScore} updateTopScore={this.updateTopScore}/>
      </div>
    );
  }
}

  



export default App;



