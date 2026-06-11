const isInsideProjects = window.location.pathname.includes("/projects/") || window.location.pathname.includes("/esp32docs/");
const prefix = isInsideProjects ? "../" : "";

const navbarHTML = `
    <ul class="navbar" id="myNavbar">
        <li class="nav-brand"><a href="index-e32.html" class="home">KUMISUJI</a></li>

        <div class="nav-items">  
            <li><a href="tutorials.html">TUTORIALS</a></li>
            
            <li><a href="documentation.html">DOCUMENTATION</a></li>
        <li class="push-right">
            <a href="${prefix}index.html" class="rbutton">MY PORTFOLIO</a>
        </li>
        </div>
    </ul>
`;

document.getElementById("nav-placeholder").innerHTML = navbarHTML;

function toggleMobileMenu() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}