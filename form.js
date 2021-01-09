class Form
{
    constructor()
    {
        this.title = createElement("h1");
        this.input = createInput("name");
        this.button = createButton("play");
        this.greeting = createElement("h3");
    }
    hide()
    {
        this.title.hide();
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
    display()
    {
        
        this.title.html("Multiplayer Car Racing Game");
        this.title.position(width/2 - 175, 100);
        this.input.position(width/2 - 50, 200);
        this.button.position(width/2, 300);
        this.button.mousePressed(() =>
        {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount++;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Welcome to the game " + player.name + "!");
            this.greeting.position(width/2 - 80, 200);
        })
    }
}