enum Board {
    Empty,
    X,
    O
}
enum Player {
    PlayerOne,
    PlayerTwo,
    InProgress
}

class TicTacToeGame {
    board: Board[][][];
    turn: Player;
    round: number;
    winner: Player;

    constructor() {
        this.board = [
            [[Board.Empty], [Board.Empty], [Board.Empty]],
            [[Board.Empty], [Board.Empty], [Board.Empty]],
            [[Board.Empty], [Board.Empty], [Board.Empty]]
        ]; //Virtual board
        this.turn = Player.PlayerOne; // Turn of the player 1 or 2
        this.round = 0; // Number of rounds played
        this.winner = Player.InProgress; // Set winner of the game
    }

    playerChoice(x : number,y : number){
        try{
            if((x <= 0 && x >= 2) || (y <= 0 && y >= 2)){
                throw new Error("Wrong value of input")
            }
            if(this.winner != Player.InProgress){
                throw new Error("There's a winner")
            }
            if(this.board[0][y][x] != Board.Empty){
                throw new Error("Field is taken")
            }else{
                if(this.round == Player.InProgress) this.round = Player.PlayerOne;
                if(this.round == Player.PlayerOne) this.board[0][y][x] = Board.X;
                if(this.round == Player.PlayerTwo) this.board[0][y][x] = Board.O;
                this.winner = this.checkIfTheresAWinner()
                if(this.winner == Player.InProgress){
                    if(this.turn == Player.PlayerOne) this.turn = Player.PlayerTwo;
                    else if(this.turn == Player.PlayerTwo) this.turn = Player.PlayerOne;
                    this.round++;
                }else if(this.winner == Player.PlayerOne){
                    // Choese a winner
                }else if(this.winner == Player.PlayerTwo){
                    // Choese a winner
                }
            }
        }catch(e){
            console.error(e);
        }
    }

    checkIfTheresAWinner(){
        return Player.InProgress;
    }
}
