let listGame=[];
function drawBoardGame(size){
    let game="<table>";
    for(i=0;i<size;i++){
        game+="<tr>";
        listGame[i]=[];
        for(j=0;j<size;j++){
            game+="<td onclick='changeStatus(this,"+i+","+j+");'>&nbsp;</td>";
            listGame[i][j]=-1;
        }
        game+="</tr>";
    }
    game+="</table>";
    document.getElementById("gameboard").innerHTML=game;
}
let status='x';
function changeStatus(cell,xPos,yPos){
    cell.innerHTML=status;
    if(status=='x'){
        listGame[xPos][yPos]=0;
        status='o';
    }
    else{
        listGame[xPos][yPos]=1;
        status='x';
    }
    checkWin(xPos,yPos);
}
function checkWin(xPos,yPos){
    console.log(listGame);
    let count=1;
    let i=xPos;
    let j=yPos;
    let valueOfCell=listGame[xPos][yPos];
    alert(valueOfCell);
    while(listGame[i][j+1]==valueOfCell){
        count++;
        confirmWinner(count,3);
        j++;
    }
    i=xPos;
    j=yPos;
    while(listGame[i][j-1]==valueOfCell){
        count++;
        confirmWinner(count,3);
        j--;
    }while(listGame[i+1][j]==valueOfCell){
        count++;
        confirmWinner(count,3);
        i++;
    }
    while(listGame[i-1][j]==valueOfCell){
        count++;
        confirmWinner(count,3);
        i--;
    }
}
function confirmWinner(count,number){
    if(count==number){
        alert("You are winner!");
        return;
    }
}