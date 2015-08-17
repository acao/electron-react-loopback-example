'use strict';

import React from 'react';
import shell from 'shell';
import Griddle from 'griddle-react';

export class Main extends React.Component {
  state = {
    results: []
  }
  constructor () {
    super();
    this.changeSort = ::this.changeSort
  }
  getInitialState() {
   return {
     results: [],
     "externalSortColumn":null,
     "externalSortAscending":true,
     "currentPage": 0,
     "serverData": []
   }
  }
  componentDidMount () {
    this.getExternalData();
  }
  getExternalData () {
    const Repo = client.models.Repo;
    Repo.find({}, function(err, repos){
      this.setState({
        serverData: repos
      })
    }.bind(this))
  }
  changeSort () {
    this.setState(this.sortData(sort, sortAscending, this.state.serverData));
  }.bind(this)
  sortData (sort, sortAscending, serverData) {
    let order = sortAscending ? " ASC":" DESC";
    const Repo = client.models.Repo;
    const sortedData = [];
    Repo.find({order: sort + order}, function(err, repos){
      sortedData = repos;
    }
    return {
      "currentPage": 0,
      "externalSortColumn": sort,
      "externalSortAscending": sortAscending,
      "serverData": sortedData,
      "results": sortedData
    };
  }
  render() {
    return (
      <Griddle
        useExternal={true}
        results={this.state.results}
        externalCurrentPage={0} externalSetPageSize={400} externalChangeSort={changeSort} tableClassName="table" showFilter={true}
 columns={["name", "description", "open_issues", "watchers_count", "forks"]}/>
    );
  }
}
