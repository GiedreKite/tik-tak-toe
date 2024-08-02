export class Scores {
    constructor() {
        this.DOM = document.getElementById('result');
      
        this.render();
    
    }
    render() {
        this.DOM.innerHTML = `
            <section class="row">
                <div class="first">
                    <h1>Player 1</h1>
                    <p>0</p>
                </div>
                <div class="noone">
                    <h1>Nobady Wins!</h1>
                    <p>0</p>
                </div>
               <div class="second">
                    <h1>Player 2</h1>
                    <p>0</p>
                </div>
                
            </section>`;
    }
}