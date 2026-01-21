const navbarHTML = `
    <ul>
        <li><a href="index.html" class="home">NATHANIEL KESSEL</a></li>
        
        <li class="dropdown">
            <a href="projects.html" class="dropbtn">
                PROJECTS
            </a>

            <div class="dropdown-content">
                <a href="#">ESP32 DESK CLOCK</a>
                <a href="#">PORTFOLIO SITE</a>
                <a href="#">TI84 BASE CONVERTER</a>
            </div>
        </li>
        
        <li><a href="skills.html">SKILLS</a></li>
        <li class="push-right"><a href="contact.html">CONTACT ME</a></li>
    </ul>
`;

document.getElementById("nav-placeholder").innerHTML = navbarHTML;