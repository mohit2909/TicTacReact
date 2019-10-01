import React from 'react';
function checkWinner(squares)
{
  for(let i=0;i<3;i++)
  {
    if(squares[i*3] && squares[i*3] === squares[i*3 + 1] && squares[i*3] === squares[i*3 + 2])
    {
      console.log(squares[i],squares[i])
      return squares[i];
    }
  }
  for(let i=0;i<3;i++)
  {
    if(squares[i] && squares[i] === squares[i+3] && squares[i] === squares[i+6])
      return squares[i];
  }
  if(squares[4] && squares[4] === squares[0] && squares[0] === squares[8])
    return squares[0];
  if(squares[4] && squares[4] === squares[2] && squares[4] === squares[6])
    return squares[4];
  return null;
}
function Square(props)
{
  return(
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}
/*
class Square extends React.Component {
  render() {
    return (
      <button className="square" onClick={this.props.onClick}>
        {this.props.value}
      </button>
    );
  }
}
*/
class Board extends React.Component {
  constructor(props)
  {
    super(props);
    this.state ={
      squares: Array(9).fill(null),
      xIsNext: true,
      gameOver: false,
      winner: null,
    };
  }
  handleClick(i)
  {
    const squares = this.state.squares.slice();
    if(squares[i] || this.state.gameOver)
    {
      return ;
    }
    if(this.state.xIsNext)
      squares[i]= 'X';
    else {
      squares[i] = '0';
    }
    const win = checkWinner(squares);
    if(win)
    {
        this.setState({squares: squares, xIsNext: !this.state.xIsNext, gameOver: true, winner: win});
    }
    else
      this.setState({squares: squares, xIsNext: !this.state.xIsNext, gameOver: false, winner: null});
  }
  renderSquare(i) {
    return <Square value={this.state.squares[i]}
             onClick={() => this.handleClick(i)}/>;
  }
  renderRestart()
  {
    this.setState({
      squares: Array(9).fill(null),
      xIsNext: true,
      gameOver: false,
      winner: null,
    });
  };
  render() {
    let status = 'Next player: ';
    const winner = 'Winner: '
    var turn = 'X'
    if(!this.state.xIsNext)
      turn = '0'
    status = status + turn;
    if(!this.state.winner)
    {
      return (
        <div >
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
          <div>
            <button className="restart-button" onClick={() => this.renderRestart()} > Restart Game </button>
          </div>
        </div>
      );
    }
    return(
      <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {this.renderSquare(0)}
        {this.renderSquare(1)}
        {this.renderSquare(2)}
      </div>
      <div className="board-row">
        {this.renderSquare(3)}
        {this.renderSquare(4)}
        {this.renderSquare(5)}
      </div>
      <div className="board-row">
        {this.renderSquare(6)}
        {this.renderSquare(7)}
        {this.renderSquare(8)}
      </div>
        <div className="winner">{winner} {this.state.winner} </div>
        <div>
          <button className="restart-button" onClick={() => this.renderRestart()} > Restart Game </button>
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board" >
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}
export default Game
