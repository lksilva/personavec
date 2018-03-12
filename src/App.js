import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import { List, ListItem } from 'material-ui/List';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <List>
          <ListItem
            primaryText="yanis.guerin@example.com"
            leftAvatar={<Avatar src="https://randomuser.me/api/portraits/thumb/women/48.jpg" />}
          />
          <ListItem
            primaryText="ramis.barrett@example.com"
            leftAvatar={<Avatar src="https://randomuser.me/api/portraits/thumb/men/50.jpg" />}
          />
        </List>
      </div>
    );
  }
}

export default App;
