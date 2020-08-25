import React, {Component} from 'react';
import classes from './App.module.css';
import UserInput from './UserInput/UserInput';
import TaskList from './TaskList/TaskList';
import Header from './HeaderComponent/Header';
import DotContent from './ContentOfDots/DotContents';

class App extends Component {
    
      state = {
        tasks: [],
        currentTask: {
          content: '',
          key: ''
        },

        showDotContent: false
      }

    UserInputHandler = (e) => {
      this.setState({
        currentTask:{
          content: e.target.value,
          key: Date.now()
        }
      })
    }

    addTaskHandler =(e)=>{
      const newTask = this.state.currentTask;
      if(newTask.content !== " "){
        const tasks = [...this.state.tasks, newTask];
        this.setState({
          tasks: tasks,
          currentTask:{
            content: '',
            key: ''
          }
  
        })
        console.log(tasks);
        console.log('added successfully');
      }
    }
    deleteTaskHandler = (key) => {
      const filteredTask = this.state.tasks.filter(task => task.key !== key)
        this.setState({
          tasks: filteredTask
        })

    }

    refreshTasksHandler = ()=> {
      if(this.state.tasks !== []){
        if(window.confirm('All your task list will be gone. Are you sure you want to do this?')){
          this.setState({
            tasks: []
          })
            
        }
        
        else{
          alert('you do not have any task listed');
        }
      }

        this.setState({
          showDotContent: false
        })
      
      
      
     
    }
     // function to toggle refresh popUp when the 3dots on header are clicked
  toggleDotContentHandler =() => {
    const toggleDotContent = this.state.showDotContent;
    this.setState({showDotContent: !toggleDotContent});
  }

  render (){
    //condition to hide/show dot Contents
    let dotContent = null;

    if(this.state.showDotContent){
      dotContent= (
        <DotContent refreshList={this.refreshTasksHandler}/>)
    }
    return (

      <main className={classes.main}>
          <Header clickToggleDotContent={this.toggleDotContentHandler}/>
          {dotContent}
          <TaskList tasks={this.state.tasks}  deleteTask={this.deleteTaskHandler}/>
          <UserInput 
          inputVal={this.state.currentTask.content}
          handleUserInput={this.UserInputHandler} 
          addTask={this.addTaskHandler}/>
      </main>
      

    )
  }
}

export default App;
