'use strict';

import React from 'react';
import Griddle from 'griddle-react';

export class RepoList extends React.Component {
  getInitialState () {
    return {
      repos: [{"name": "Bob"}]
    }
  }
  constructor () {
    super();
  }
  componentDidMount () {
    const Repo = client.models.Repo;
    Repo.find({}, function(err, repos){
      this.state.repos = repos;
      console.log(repos);
    }.bind(this))
  }
  render() {
    return (
      <h2>Happy Birthday</h2>
  //     <Griddle results={repos} tableClassName="table" showFilter={true}
  //  showSettings={true} columns={["name"]}/>
    );
  }
}
