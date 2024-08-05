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

    }