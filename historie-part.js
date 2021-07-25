class HistoriePart extends HTMLElement {
    constructor() {
        super();

        this.shadow = this.attachShadow({'mode': 'open'});
    }

    connectedCallback() {
        this.render();
    }

    getOppositePosition(){
        if(this.getAttribute('position') === 'left'){
            return 'right';
        }

        return 'left';
    }

    getCSSGridPositioning(){
        if(this.getAttribute('position') === 'left'){
            return "left middle right";
        }

        return "right middle left";
    }

    getCSSGridWidth(){
        if(this.getAttribute('position') === 'left'){
            return "3fr 0.1fr 2fr";
        }

        return "2fr 0.1fr 3fr";
    }

    render() {
        let css = `<style>

@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400&display=swap');

    :host {
        display: block;
        margin-bottom: 40px;
        font-family: 'Noto Sans JP', sans-serif;
    }

    .content {
        display: grid;
        grid-template-columns: ${this.getCSSGridWidth()};
        grid-template-rows: 1fr;
        gap: 0px 0px;
        grid-template-areas: 
            "${this.getCSSGridPositioning()}"
    }

    .left {
        grid-area: left;
        background: ${this.getAttribute('bg-color')};
        font-size: 16px;
        color: #fff;
        line-height: 2.2;
        padding: 20px 20px 20px 80px;
    }

    .right {
        grid-area: right;
        background: url("/assets/img/${this.getAttribute('img')}");
        background-size: cover;
        background-position:center;
    }    
    
    .middle {
        grid-area: middle;
        background: ${this.getAttribute('bg-color')};
        line-height: 35vh;
        padding-left: 20px;
        padding-right: 20px;
        
    }
    
    .middle span {
        opacity: 0.1;
        font-size: 60px;
        color: ${this.getAttribute('font-color')};
    }
    
    h1 {
        font-size: 24px;
        color: ${this.getAttribute('font-color')};
    }
    
    .beschreibung {
        display: block;
        width: 80%;
        color: ${this.getAttribute('font-color')};
    }

     
      @media (max-width: 1200px) {
        * {
            font-size: .7rem;
        }

        h1 {
            font-size: 1rem;

        }

        .content {
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 2fr 0.1fr 1.5fr;
            gap: 0px 0px;
            grid-template-areas: 
            "right"
            "middle"
            "left"

        }

        .middle {
            text-align: center;
            line-height: 80px;

        }

        .middle span {
            font-size: 1.2rem;
            font-weight: bold;
            opacity: 1;

        }

        .left {
            padding: 0 80px 60px 80px;
            
        }

        .beschreibung {
            width: 100%;
        }
      }


       @media (max-width: 400px) {
       
        .content {
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 0.1fr 1.5fr;
            gap: 0px 0px;
            grid-template-areas: 
            "right"
            "middle"
            "left"

        }

    
      }
</style>
        `;
        let html = `<div class="content">
                      <div class="left">
                      <h1 class="headline">${this.getAttribute('title')}</h1>
                          <span class="beschreibung"><slot></slot></span>
                      </div>
                      <div class="middle">
                        <span>${this.getAttribute('jahr')}</span>
                        </div>
                      <div class="right"></div>
                    </div>`;

        this.shadow.innerHTML = css + html;
    }
}

customElements.define('historie-part', HistoriePart);