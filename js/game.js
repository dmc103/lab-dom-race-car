class Game {
    // code to be added
    constructor () {
        this.startScreen = document.getElementById(`game-intro`);
        this.gameScreen = document.getElementById(`game-screen`);
        this.gameEndScreen = document.getElementById(`game-end`);
        this.player = null;
        this.height = 600;
        this.width = 500;
        this.obstacles = [];
        this.score = 0;
        this.lives = 3;
        this.gameIsOver = false;
    }

    start (){
        this.hideElements(this.startScreen);
        this.showElements(this.gameScreen);

    }




    gameLoop (){

    }
    
    


    
    update(){





    }





}