import React, { Component } from "react";
import './player.css';
class Stuff extends Component {
  render() {
    return (
      <div class = "input-control">
        <label1 for = "player1" >Player1: <input type = "text" id = "player1" placeholder = "enter player 1 name" autofocus/></label1><br/>
        <label1 for = "player1">Colour <select id="colour" name="colour">
                    <option value="australia">red</option>
                    <option value="canada">yellow</option>
                    <option value="usa">pink</option>
                  </select></label1><br/>
        
        <div class = "input-control-1">
        <label1 for = "player2">Player2: <input type = "text" id = "player2" placeholder = "enter player 2 name" autofocus/></label1><br/>
        <label1 for = "player1">Colour <select id="colour" name="colour">
                    <option value="australia">red</option>
                    <option value="canada">yellow</option>
                    <option value="usa">pink</option>
                  </select></label1><br/>
      <div class="submit">
      <button>Submit</button>
      </div>
      </div>
      </div>
    );
  }
}
export default Stuff;