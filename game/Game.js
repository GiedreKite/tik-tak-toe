export class Game {
    constructor() {
        this.DOM = document.getElementById('app');
        this.btnsDOM = null;
        
      
        this.render();
        this.gameEvents();
        
    
    }
    gameO (btnsDOM){
        btnsDOM = this.DOM.querySelectorAll('.btn');
        buttons = [
        {
            text: 'const btn',
            content : document.getElementById('1'),
        },
        {
            text: 'const btn',
            content : document.getElementById('2'),
        },
        {
            text: 'const btn',
            content : document.getElementById('3'),
        },
        {
            text: 'const btn',
            content : document.getElementById('4'),
        },
        {
            text: 'const btn',
            content : document.getElementById('5'),
        },
        {
            text: 'const btn',
            content : document.getElementById('6'),
        },
        {
            text: 'const btn',
            content : document.getElementById('7'),
        },
        {
            text: 'const btn',
            content : document.getElementById('8'),
        },
        {
            text: 'const btn',
            content : document.getElementById('9'),
        },
    ]
        
    

          for (let i =1; i<10; i++) {
            sumO.push(10);
            console.log('OOO');
            if(btn[i].innerText==="") {
                return `${buttons.text}${i} = ${buttons.content}.innerText = "O"`
            }
            
        }


    }
    gameX (btnsDOM ){
        btnsDOM = this.DOM.querySelectorAll('.btn');
        buttons = [
        {
            text: 'const btn',
            content : document.getElementById('1'),
        },
        {
            text: 'const btn',
            content : document.getElementById('2'),
        },
        {
            text: 'const btn',
            content : document.getElementById('3'),
        },
        {
            text: 'const btn',
            content : document.getElementById('4'),
        },
        {
            text: 'const btn',
            content : document.getElementById('5'),
        },
        {
            text: 'const btn',
            content : document.getElementById('6'),
        },
        {
            text: 'const btn',
            content : document.getElementById('7'),
        },
        {
            text: 'const btn',
            content : document.getElementById('8'),
        },
        {
            text: 'const btn',
            content : document.getElementById('9'),
        },
    ]
        
        for (let i =1; i<10; i++) {
            sumX.push(1);
            console.log('XXX')
            if(btn[i].innerText==="") {
                return  `${buttons.text}${i} = ${buttons.content}.innerText = "X"`
            }
        }
        

    }
    gameEvents() {
        this.btnsDOM = this.DOM.querySelectorAll('.btn');
        this.buttons = [
            {
                text: 'const btn',
                content : document.getElementById('1'),
            },
            {
                text: 'const btn',
                content : document.getElementById('2'),
            },
            {
                text: 'const btn',
                content : document.getElementById('3'),
            },
            {
                text: 'const btn',
                content : document.getElementById('4'),
            },
            {
                text: 'const btn',
                content : document.getElementById('5'),
            },
            {
                text: 'const btn',
                content : document.getElementById('6'),
            },
            {
                text: 'const btn',
                content : document.getElementById('7'),
            },
            {
                text: 'const btn',
                content : document.getElementById('8'),
            },
            {
                text: 'const btn',
                content : document.getElementById('9'),
            },
        ]
        const btn1 = document.getElementById('1');
        const btn2 = document.getElementById('2');
        const btn3 = document.getElementById('3');
        const btn4 = document.getElementById('4');
        const btn5 = document.getElementById('5');
        const btn6 = document.getElementById('6');
        const btn7 = document.getElementById('7');
        const btn8 = document.getElementById('8');
        const btn9 = document.getElementById('9');
       
     
     console.log('veikia',btn1)
         btn1.addEventListener('click', writeSimbol());
     
     
     function writeSimbol() {
        let sumX = [];
        let sumO = [];
        let sum = 0;
        
        for( let i=1;i<10;i++) {
            return `${buttons.text}${i} = ${buttons.content}.innerText = "X"`

        }

        if (sum=0) {
           this.gameX();
           console.log('nu')
        }
        if (sum===1) {
            this.gameO();
        }
        if (sum===11) {
            this.gameX();
            
        }
        if (sum===12) {
            this.gameO();
        }
        if (sum===22) {
            this.gameX();
        }
        if (sum===23) {
            this.gameO();
        }
        if (sum===33) {
            this.gameX();
        }
        if (sum===34) {
            this.gameO();
        }
        if (sum===44) {
            this.gameX();
        }
     
     
     sum = Number(sumX) + Number(sumO);
     
     
     
     
     }
    
     }




    render() {
        this.DOM.innerHTML = `
    <section class="game">
        <span class="a">
            <button id="1" class="btn"></button>
            <button id="2" class="btn"></button>
            <button id="3" class="btn"></button>
        </span>
        <span class="b">
            <button id="4" class="btn"></button>
            <button id="5" class="btn"></button>
            <button id="6" class="btn"></button>
        </span>
        <span class="c">
            <button id="7" class="btn"></button>
            <button id="8" class="btn"></button>
            <button id="9" class="btn"></button>
        </span>
    </section>

    <section class="moves">
        <button class="undo">Undo</button>
        <button class="play">Play</button>
    </section>`;
    }


    
}