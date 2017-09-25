class TicTacToe {
    constructor() {
			
			this.field = [[null, null, null],
										[null, null, null],
										[null, null, null]];
			
    }

    getCurrentPlayerSymbol() {
			
			var arr = this.field.reduce(function(a,b) {
				return a.concat(b);
			});
			var arrX = arr.filter(function(e){
				return e ==='x';
			});
			var arrO = arr.filter(function(e){
				return e ==='o';
			});
			if (arrX.length <= arrO.length) {
				return 'x'
			} else return 'o';
			
    }

    nextTurn(rowIndex, columnIndex) {
			
			if (this.getFieldValue(rowIndex, columnIndex) === null) {
				if (this.getCurrentPlayerSymbol() === 'x') {
					this.field[rowIndex][columnIndex] = 'x';
				} else {
					this.field[rowIndex][columnIndex] = 'o'
				}
			}
			
    }

    isFinished() {
			
			return (this.winSequence('x') || this.winSequence('o') || this.noMoreTurns())? true :false
			
    }
	
		winSequence(player) {
			
			if (
				(this.field[0][0] == player && this.field[0][1] == player && this.field[0][2] == player) ||
				(this.field[1][0] == player && this.field[1][1] == player && this.field[1][2] == player) ||
				(this.field[2][0] == player && this.field[2][1] == player && this.field[2][2] == player) ||
				(this.field[0][0] == player && this.field[1][0] == player && this.field[2][0] == player) ||
				(this.field[0][1] == player && this.field[1][1] == player && this.field[2][1] == player) ||
				(this.field[0][2] == player && this.field[1][2] == player && this.field[2][2] == player) ||
				(this.field[0][0] == player && this.field[1][1] == player && this.field[2][2] == player) ||
				(this.field[2][0] == player && this.field[1][1] == player && this.field[0][2] == player)
			) {
				return true;
			} else return false;
			
		}
	
    getWinner() {
			if (this.winSequence('x')) {
				return 'x';
			} else if (this.winSequence('o')) {
				return 'o'
			} else return null;
    }

    noMoreTurns() {
			return this.field.reduce(function(a,b) {
				return a.concat(b);
			}).indexOf(null) === -1 ? true : false  ;
    }

    isDraw() {
			
			return (this.noMoreTurns() &&	this.getWinner() === null) ? true : false

    }

    getFieldValue(rowIndex, colIndex) {
			
			return this.field[rowIndex][colIndex];
			
    }
}

module.exports = TicTacToe;
