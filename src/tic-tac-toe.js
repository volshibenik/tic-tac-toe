class TicTacToe {
    constructor() {
			this.field = [[null, null, null],
										[null, null, null],
										[null, null, null]]
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

    }

    getWinner() {

    }

    noMoreTurns() {

    }

    isDraw() {

    }

    getFieldValue(rowIndex, colIndex) {
			return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
