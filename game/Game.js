export class Game {
    constructor() {
        this.DOM = document.getElementById('app');
        
      
        this.render();
        
    
    }




    render() {
        this.DOM.innerHTML = `
    <section class="game">
        <span class="a">
            <button id="a0" class="btn">0</button>
            <button id="a1" class="btn">0</button>
            <button id="a2" class="btn">0</button>
        </span>
        <span class="b">
            <button id="b0" class="btn">0</button>
            <button id="b1" class="btn">0</button>
            <button id="b2" class="btn">0</button>
        </span>
        <span class="c">
            <button id="c0" class="btn">0</button>
            <button id="c1" class="btn">0</button>
            <button id="c2" class="btn">0</button>
        </span>
    </section>

    <section class="moves">
        <button class="undo">Undo</button>
        <button class="play">Play</button>
    </section>`;
    }


    
}