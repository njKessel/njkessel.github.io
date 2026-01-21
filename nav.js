const isInsideProjects = window.location.pathname.includes("/projects/");
const prefix = isInsideProjects ? "../" : "";

const navbarHTML = `
    <ul>
        <li><a href="${prefix}index.html" class="home">NATHANIEL KESSEL</a></li>
        
        <li class="dropdown">
            <a href="${prefix}projects/projects.html" class="dropbtn">
                PROJECTS
            </a>

            <div class="dropdown-content">
                <a href="#">ESP32 DESK CLOCK</a>
                <a href="#">PORTFOLIO SITE</a>
                <a href="#">TI84 BASE CONVERTER</a>
            </div>
        </li>
        
        <li><a href="${prefix}skills.html">SKILLS</a></li>
        
        <li class="push-right">
            <a href="${prefix}contact.html" class="rbutton">CONTACT ME</a>
            <a href="${prefix}resume.pdf" class="rbutton">RESUME</a>
        </li>
    </ul>
`;

document.getElementById("nav-placeholder").innerHTML = navbarHTML;