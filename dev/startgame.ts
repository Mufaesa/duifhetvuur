/// <reference path="world.ts"/>
/// <reference path="player.ts"/>

/**
 * Startgame
 */
class Startgame {
    
    private world : World;
    
    private player : Player;

    private startWrapper : HTMLElement;
    private startButton : HTMLElement;
    public nameTextField : HTMLElement;
    
    constructor() {
        
        //wrapper for button and text field
        this.startWrapper = document.createElement("wrapper");
        this.startWrapper.setAttribute("id", "startWrapper");
        document.body.appendChild(this.startWrapper);
        
        //button with startgame
        this.startButton = document.createElement("button");
        this.startButton.setAttribute("id", "startButton");
        this.startButton.innerHTML = "Start game";
        this.startWrapper.appendChild(this.startButton);
        this.startButton.addEventListener("click", function () {
            
        //text field

            
            //add player
            this.player = new Player();
            //this.startWrapper.removeChild(this);
            //create World
            this.world = new World(1);
       });
       
        //if button is clicked > create the world
        //this.world = new World();
        
    }
}