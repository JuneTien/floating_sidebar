import React, { Component } from 'react';

class FloatingSidebar extends Component {
  constructor(props){
    super(props);
  }

  moveHandler = (e) => {
    let min = 300;
    let max = 3600;
    let mainmin = 200;
    e.preventDefault();

    let x = e.pageX - this.refs.leftSide.offsetLeft;
    this.refs.leftSide.style.width = x + 'px';
    this.refs.rightSide.style.marginLeft = x + 'px';
  }

  upHandler = () => {
    document.removeEventListener("mouseup", this.upHandler, true);
    document.removeEventListener("mousemove", this.moveHandler, true);    
  }

  onMouseDown = (e) => {
    e.preventDefault();
    document.addEventListener("mousemove", this.moveHandler, true);
    document.addEventListener("mouseup", this.upHandler, true); 
  }

  render() {
    const Style = {
      leftSide: {
        backgroundColor: '#7cad7c',
        width: '350px',
        float: 'left',
        height: '300px',
        textAlign: 'center'
      },
      rightSide: {
        backgroundColor: '#f7f76b',
        marginLeft: '200px',
        height: '300px',
        textAlign: 'center'
      },      
      splitBar: {
        backgroundColor: 'black',
        width: '6px',
        float: 'right',
        height: '100%',
        cursor: 'col-resize'
      }
    };

    return (
      <div>
        <div ref='leftSide' style={Style.leftSide}>
          <div ref='splitBar' style={Style.splitBar} onMouseDown={this.onMouseDown}></div>
          Left Side
        </div>
        <div ref='rightSide' style={Style.rightSide}>
          Right Side
        </div>
      </div>      
    );
  }
}

export default FloatingSidebar;