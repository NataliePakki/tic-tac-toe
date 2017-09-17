class TicTacToe {
    constructor() {
        this.players = ['x', 'o'];        
        this.currentPlayer = 0;
        this.size = 3;
        this.winner = null;
        
        this.field = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
          ];
    }

    getCurrentPlayerSymbol() {
        return this.players[this.currentPlayer];
    }

    nextTurn(rowIndex, columnIndex) {
        if(this.field[rowIndex][columnIndex] === null) {
            this.field[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
            this.currentPlayer = 1 - this.currentPlayer;
         }        
    }

    isFinished() {
        return this.getWinner() != null || this.noMoreTurns();
    }

    getWinner() {
        if(this.winner != null)
            return this.winner;
        for (var i = 0; i < this.size; i++) {
            if(this.field[i][0] === this.field[i][1] && this.field[i][1] === this.field[i][2] && this.field[i][0] != null && this.field[i][1] != null && this.field[i][2] != null) {
                this.winner = this.field[i][0];
                break;
            }
                
            if(this.field[0][i] === this.field[1][i] && this.field[1][i] === this.field[2][i] && this.field[0][i] != null && this.field[1][i] != null && this.field[2][i] != null) {
                this.winner = this.field[0][i];
                break;
            }
        }
        if(this.winner === null) {
            if(this.field[0][0] === this.field[1][1] && this.field[1][1] === this.field[2][2] && this.field[0][0] != null && this.field[1][1] != null && this.field[2][2] != null)
                this.winner = this.field[1][1];
            if(this.field[0][2] === this.field[1][1]  && this.field[1][1]  === this.field[2][0] && this.field[0][2] != null && this.field[1][1] != null && this.field[2][0] !=null)
                this.winner = this.field[1][1];
        }
        return this.winner;
    }

    noMoreTurns() {
        for (var i = 0; i < this.size; i++) {
            for (var j = 0; j <this.size; j++) {
                if(this.field[i][j] === null)
                    return false;                
            }            
        }
        return true;
    }

    isDraw() {
        return this.noMoreTurns() && this.getWinner() === null;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
