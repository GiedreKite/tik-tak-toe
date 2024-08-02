import { Scores } from "./Scores.js";
import { Game } from "./Game.js";

export class Layout {

        constructor() {
            this.mainDOM = document.querySelector('main.container');
            new Scores();
            new Game();
        
            this.DOM = document.getElementById('app');
            this.DOM = document.getElementById('result');
    
            this.render();
            
    
           
        }
    
        header() {    
            return `
                <header class="container main-header">
                    <div class="row">
                        <div class="header-content">
                            <img class="logo" src="" alt="Logo">
                            <h1 class="name">Tik Tak Toe</h1>
                        </div>
                    </div>
                </header>`;
        }

    
        main() {
            return `
                <main class="container">
                    EMPTY CONTENT
                </main>`;
        }
    
        footer() {
            return '<footer class="container">&copy; Copyright belongs to Giedre https://github.com/GiedreKite 2024</footer>';
        }
    
        render() {
            const HTML = this.header() + this.main() + this.footer();
            this.DOM.insertAdjacentHTML('beforeend', HTML);
        }

        gameEvents() {
            this.btnsDOM = this.DOM.querySelectorALL('.btn');
             const btn1 = this.DOM.getElementById('a0');
             const btn2 = btnsDOM.getElementById('a1');
             const btn3 = btnsDOM.getElementById('a2');
             const btn4 = btnsDOM.getElementById('b0');
             const btn5 = btnsDOM.getElementById('b1');
             const btn6 = btnsDOM.getElementById('b2');
             const btn7 = btnsDOM.getElementById('c0');
             const btn8 = btnsDOM.getElementById('c1');
             const btn9 = btnsDOM.getElementById('c2');
           
         console.log('veikia',btnsDOM)
         console.log('veikia',btn1)
             btn1.addEventListener('click', writeSimbol());
         
         
         function writeSimbol() {
            let sum = 0;
            if (sum===0) {
                btn1.innerText = 1;
            }
            if (sum===1) {
                btn1.innerText = 10;
            }
            if (sum===11) {
                btn1.innerText = 1;
            }
            if (sum===12) {
                btn1.innerText = 10;
            }
            if (sum===22) {
                btn1.innerText = 1;
            }
            if (sum===23) {
                btn1.innerText = 10;
            }
            if (sum===33) {
                btn1.innerText = 1;
            }
            if (sum===34) {
                btn1.innerText = 10;
            }
            if (sum===44) {
                btn1.innerText = 1;
            }
         
         
         return console.log('veikia');
         
         
         
         
         }
         }
    }