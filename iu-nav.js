class IUNav extends HTMLElement {
    constructor() {
        super();

        this.shadow = this.attachShadow({
            'mode': 'open'
        });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        let css = `
        <style>        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        li {
            list-style: none;
        }
        
        a {
            text-decoration: none;
        }

        .header{
            border-bottom: 1px solid #E2E8F0;
        }
        
        .navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 1.5rem;
        }
               
        .hamburger {
            display: none;
        }
        
        .bar {
            display: block;
            width: 25px;
            height: 3px;
            margin: 5px auto;
            -webkit-transition: all 0.3s ease-in-out;
            transition: all 0.3s ease-in-out;
            background-color: #101010;
        }

        .nav-menu {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .nav-item {
            margin-left: 5rem;
        }
        
        .nav-link{
            font-size: 1rem;
            font-weight: 400;
            color: #475569;
        }
        
        
        @media only screen and (max-width: 768px) {
            .nav-menu {
                position: absolute;
                left: -100%;
                top: 5rem;
                flex-direction: column;
                background-color: #fff;
                width: 100%;
                border-radius: 10px;
                text-align: center;
                transition: 0.3s;
                box-shadow:
                    0 10px 27px rgba(0, 0, 0, 0.05);
                    z-index: 200;
                }
        
            .nav-menu.active {
                left: 0;
            }
        
            .nav-item {
                margin: 2.5rem 0;
            }
        
            .hamburger {
                display: block;
                cursor: pointer;
            }

            .hamburger.active .bar:nth-child(2) {
                opacity: 0;
            }
        
            .hamburger.active .bar:nth-child(1) {
                transform: translateY(8px) rotate(45deg);
            }
        
            .hamburger.active .bar:nth-child(3) {
                transform: translateY(-8px) rotate(-45deg);
            }


        
        }
        
        .logo {
            width: 100px;
        }

        a:hover, a:focus {
            color: #000;
        }
            
</style>
        `;
        let html = `
        <header class="header">
        <nav class="navbar">
            <a href="#" class="nav-logo"><img class="logo" src="/assets/img/logo.png"></a>
            <ul class="nav-menu">
                <li class="nav-item">
                    <a href="#" class="nav-link">Leistungen</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">Unternehmen</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">Karriere</a>
                </li>
                <li class="nav-item">
                <a target="_blank" href="impressum.html" class="nav-link">Impressum</a>
            </li>
            </ul>
            <div class="hamburger">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </nav>
</header>`;

        this.shadow.innerHTML = css + html;

        const hamburger = this.shadow.querySelector(".hamburger");
        const navMenu = this.shadow.querySelector(".nav-menu");

        hamburger.addEventListener("click", mobileMenu);

        function mobileMenu() {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        }

        const navLink = this.shadow.querySelectorAll(".nav-link");

        navLink.forEach(n => n.addEventListener("click", closeMenu));

        function closeMenu() {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        }
    }


}
customElements.define('iu-nav', IUNav);