import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import {bindActionCreators} from 'redux';

import {fetchRandomGames} from '../actions'

class GamesIndex extends Component{
  componentWillMount(){
    this.props.fetchRandomGames();
  }

  render(){
    return(
      <div className="garage-box">
        <p>A List of Games</p>
        {this.props.games.map((game) => {
          return(
            <div>
              <h3>{`${game.id}`}</h3>
            </div>
          );
        })}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchRandomGames},dispatch);
}

function mapStateToProps(state){
  return{
    games: state.games
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(GamesIndex);
