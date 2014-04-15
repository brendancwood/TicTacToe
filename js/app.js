var turn = "X";
hasWon = false;

var main = {

	changeTurn: function(id){
		if(turn === "X"){
			$("#" + id).html("X");
			this.checkWin();
			console.log(hasWon);
			turn = "O";

			
		}else{
			$("#" + id).html("O");
			this.checkWin();
			console.log(hasWon);
			turn = "X";
		}
	},

//display Winner
	displayWinner: function(){
	 	alert(turn + " wins!");
	},

//check win condition
	checkWin: function(){

	//put values into an array
	var row1 = [$("#a1").html(), $("#a2").html(), $("#a3").html()];
	var row2 = [$("#b1").html(), $("#b2").html(), $("#b3").html()];
	var row3 = [$("#c1").html(), $("#c2").html(), $("#c3").html()];
	var col1 = [$("#a1").html(), $("#b1").html(), $("#c1").html()];
	var col2 = [$("#a2").html(), $("#b2").html(), $("#c2").html()];
	var col3 = [$("#a3").html(), $("#b3").html(), $("#c3").html()];
	//diagonals
	var diag1 = [$("#a1").html(), $("#b2").html(), $("#c3").html()];
	var diag2 = [$("#c1").html(), $("#b2").html(), $("#a3").html()];

	//check first row
	if (row1[0] == "X" && row1[1] == "X" && row1[2] == "X" || row1[0] == "O" && row1[1] == "O" && row1[2] == "O"){
		hasWon = true;
		this.displayWinner();
	}
	//check second row
	else if(row2[0] == "X" && row2[1] == "X" && row2[2] == "X" || row2[0] == "O" && row2[1] == "O" && row2[2] == "O"){
		hasWon = true;
		this.displayWinner();
	}
	//check third row
	else if(row3[0] == "X" && row3[1] == "X" && row3[2] == "X" || row3[0] == "O" && row3[1] == "O" && row3[2] == "O"){
		hasWon = true;
		this.displayWinner();
	}
	//check first column
	else if(col1[0] == "X" && col1[1] == "X" && col1[2] == "X" || col1[0] == "O" && col1[1] == "O" && col1[2] == "O"){
		hasWon = true;
		this.displayWinner();
	}
	//check second column
	else if(col2[0] == "X" && col2[1] == "X" && col2[2] == "X" || col2[0] == "O" && col2[1] == "O" && col2[2] == "O"){
		hasWon = true;
		this.displayWinner();
	}
	//check third column
	else if(col3[0] == "X" && col3[1] == "X" && col3[2] == "X" || col3[0] == "O" && col3[1] == "O" && col3[2] == "O"){
		hasWon = true;
		this.displayWinner();
	}
	//check diagonal1
	else if(diag1[0] == "X" && diag1[1] == "X" && diag1[2] == "X" || diag1[0] == "O" && diag1[1] == "O" && diag1[2] == "O"){
		hasWon = true;
		this.displayWinner();
	}
	//check diagonal2
	else if(diag2[0] == "X" && diag2[1] == "X" && diag2[2] == "X" || diag2[0] == "O" && diag2[1] == "O" && diag2[2] == "O"){
		hasWon = true;
		this.displayWinner();
	}


}
};

// function myClick(){
// 	//check to see if the game has been won
// 	if(hasWon == false){
// 		var squareId = $(this).attr("id");
// 		main.changeTurn(squareId);
// 	}
// }

$(".game-board td").on("click", function(){
	//if ($(this).html() !== "")
	if(hasWon == false){
		var squareId = $(this).attr("id");
		main.changeTurn(squareId);
	}

});
