const isInsideProjects = window.location.pathname.includes("/projects/");
const prefix = isInsideProjects ? "../" : "";

const navbarHTML = `
    <ul class="navbar" id="myNavbar">
        <li class="nav-brand"><a href="${prefix}index.html" class="home">NATHANIEL KESSEL</a></li>

        <div class="nav-items">
            <li class="dropdown">
                <a href="${prefix}projects/projects.html" class="dropbtn">PROJECTS</a>
                <div class="dropdown-content">
                    <a href="${prefix}projects/clock.html">ESP32 DESK CLOCK</a>
                </div>
            </li>
            
            <li><a href="${prefix}skills.html">SKILLS</a></li>
            
            <li class="push-right">
                <a href="${prefix}contact.html" class="rbutton">CONTACT ME</a>
                <a href="${prefix}NathanielKesselResumeFALL2026_v12.1A.pdf" class="rbutton" target="_blank">RESUME</a>
            </li>
        </div>

        <a href="javascript:void(0);" class="icon" onclick="toggleMobileMenu()">
            MENU
        </a>
    </ul>
`;

document.getElementById("nav-placeholder").innerHTML = navbarHTML;

// Function to toggle the mobile menu
function toggleMobileMenu() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}