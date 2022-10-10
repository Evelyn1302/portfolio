const about = document.getElementById("about");
const projects = document.getElementById("projects");
const contact = document.getElementById("contact");

const about_title = document.getElementsByClassName("about_title")[0];
const projects_title = document.getElementsByClassName("projects_title")[0];
const contact_title = document.getElementsByClassName("contact_title")[0];

about.addEventListener("click", _about_active);
projects.addEventListener("click", _projects_active);
contact.addEventListener("click", _contact_active);

document.body.addEventListener("click", function(event) {
    if (!document.getElementById("container").contains(event.target)){
        about.classList.remove("about_active");
        about.classList.add("about");
        projects.classList.remove("projects_active");
        projects.classList.add("projects");
        contact.classList.remove("contact_active");
        contact.classList.add("contact");

        about_title.innerText = "About Me";
        projects_title.innerText = "Projects";
        contact_title.innerText = "Contact";

        if (document.getElementById("about_content")){
            let about_content = document.getElementById("about_content");
            about.removeChild(about_content);
        }
        else if (document.getElementById("projects_content")){
            let projects_content = document.getElementById("projects_content");
            projects.removeChild(projects_content);
        }
        else if (document.getElementById("contact_content")){
            let contact_content = document.getElementById("contact_content");
            contact.removeChild(contact_content);
        }

        about.style.margin = "2.5%";
        projects.style.margin = "2.5%";
        contact.style.margin = "2.5%";
    }
});

function _about_active(){
    about.classList.remove("about");
    about.classList.add("about_active");
    projects.classList.remove("projects_active");
    projects.classList.add("projects");
    contact.classList.remove("contact_active");
    contact.classList.add("contact");

    if (window.innerWidth > window.innerHeight){
        projects_title.innerText = "P\nR\nO\nJ\nE\nC\nT\nS";
        contact_title.innerText = "C\nO\nN\nT\nA\nC\nT";
    }
    else {
        projects_title.innerText = "PROJECTS";
        contact_title.innerText = "CONTACT";
    }

    if (document.getElementById("projects_content")){
        let projects_content = document.getElementById("projects_content");
        projects.removeChild(projects_content);
    }
    else if (document.getElementById("contact_content")){
        let contact_content = document.getElementById("contact_content");
        contact.removeChild(contact_content);
    }

    projects.style.margin = "1%";
    contact.style.margin = "1%";
    about_title.innerText = "About Me";

    if (!document.getElementById("about_content")){
        _about_content();
    }   
}

function _projects_active(){
    about.classList.remove("about_active");
    about.classList.add("about");
    projects.classList.remove("projects");
    projects.classList.add("projects_active");
    contact.classList.remove("contact_active");
    contact.classList.add("contact");

    if (window.innerWidth > window.innerHeight){
        about_title.innerText = "A\nB\nO\nU\nT\n\nM\nE";
        contact_title.innerText = "C\nO\nN\nT\nA\nC\nT";
    }
    else {
        about_title.innerText = "ABOUT ME";
        contact_title.innerText = "CONTACT";
    }
    
    if (document.getElementById("about_content")){
        let about_content = document.getElementById("about_content");
        about.removeChild(about_content);
    }
    else if (document.getElementById("contact_content")){
        let contact_content = document.getElementById("contact_content");
        contact.removeChild(contact_content);
    }

    about.style.margin = "1%";
    contact.style.margin = "1%";
    projects_title.innerText = "Projects";

    if (!document.getElementById("projects_content")){
        _projects_content();
    }
}

function _contact_active(){
    about.classList.remove("about_active");
    about.classList.add("about");
    projects.classList.remove("projects_active");
    projects.classList.add("projects");
    contact.classList.remove("contact");
    contact.classList.add("contact_active");

    if (window.innerWidth > window.innerHeight){
        about_title.innerText = "A\nB\nO\nU\nT\n\nM\nE";
        projects_title.innerText = "P\nR\nO\nJ\nE\nC\nT\nS";
    }
    else {
        about_title.innerText = "ABOUT ME";
        projects_title.innerText = "PROJECTS";
    }

    if (document.getElementById("about_content")){
        let about_content = document.getElementById("about_content");
        about.removeChild(about_content);
    }
    else if (document.getElementById("projects_content")){
        let projects_content = document.getElementById("projects_content");
        projects.removeChild(projects_content);
    }
    
    about.style.margin = "1%";
    projects.style.margin = "1%";
    contact_title.innerText = "Contact";

    if (!document.getElementById("contact_content")){
        _contact_content();
    }
}

function _about_content(){
    let about_content_div = document.createElement('div');
    about_content_div.classList.add("about_content");
    about_content_div.id = "about_content";

    about_content_div.innerText = "First of all, welcome to this page, where you will find all of my projects to date." + "\n\n" +
                                  "I am a graduate from University of Southampton with a Second Upper Class Honours Master's \
                                  Degree for the programme MEng Mechanical Engineering with Acoustical Engineering." + "\n\n" +
                                  "I discovered that I enjoy doing codings and to deal with some designing work during my study \
                                  in the University. Hence, I self-taught web development, starting from the HTML and CSS, followed by Javscript.";

    about.appendChild(about_content_div);
}

function _projects_content(){
    let projects_content_div = document.createElement('div');
    projects_content_div.classList.add("projects_content");
    projects_content_div.id = "projects_content";

    let pc_login_div = _create_projects_details("login");
    let pc_metronome_div = _create_projects_details("metronome");

    projects_content_div.appendChild(pc_login_div);
    projects_content_div.appendChild(pc_metronome_div);
    projects.appendChild(projects_content_div);
}

function _contact_content(){
    let contact_content_div = document.createElement('div');
    contact_content_div.classList.add("contact_content");
    contact_content_div.id = "contact_content";

    let cc_mail_div = _create_contact_details("mail");
    let cc_phone_div = _create_contact_details("phone");
    let cc_git_div = _create_contact_details("github");
    let cc_cv_div = _create_contact_details("description");
    
    contact_content_div.appendChild(cc_mail_div);
    contact_content_div.appendChild(cc_phone_div);
    contact_content_div.appendChild(cc_git_div);
    contact_content_div.appendChild(cc_cv_div);
    contact.appendChild(contact_content_div);
}

function _create_projects_details(project){
    let div = document.createElement('div');
    let pic_div = document.createElement('div');
    let text_div = document.createElement('div');
    let pic = document.createElement('img');
    let title = document.createElement('div');
    let text = document.createElement('div');

    let link_pic = document.createElement('a');
    let link_title = document.createElement('a');
    link_pic.target = "_blank";
    link_title.target = "_blank";
    if (project == "login"){
        link_pic.href = "https://evelyn1302.github.io/login-with-keyboard/";
        link_title.href = "https://evelyn1302.github.io/login-with-keyboard/";
    }
    else if (project == "metronome"){
        link_pic.href = "https://evelyn1302.github.io/metronome/";
        link_title.href = "https://evelyn1302.github.io/metronome/";
    }
    link_title.classList.add("pc_link");

    pic.src = `styles/${project}.png`;
    title.innerText = _create_project_title(project);
    text.innerText = _create_project_text(project);

    pic_div.classList.add("pc_pic_div");
    pic.classList.add("pc_pic");
    text_div.classList.add("pc_text_div");
    title.classList.add("pc_title");
    text.classList.add("pc_text");
    div.classList.add("pc_div");

    link_pic.appendChild(pic);
    link_title.appendChild(title);
    pic_div.appendChild(link_pic);
    text_div.appendChild(link_title);
    text_div.appendChild(text);
    div.appendChild(pic_div);
    div.appendChild(text_div);

    return div;
}

function _create_project_title(project){
    let title;

    if (project == "login"){
        title = "Login Page with Virtual Keyboard";
    }
    else if (project == "metronome"){
        title = "Metronome";
    }

    return title;
}

function _create_project_text(project){
    let text;

    if (project == "login"){
        text = "Login page with username and password input fields. The page also has a responsive virtual \
                keyboard with three keys layouts which could be used for typing on the page.";
    }
    else if (project == "metronome"){
        text = "Online metronome with changable beats per minute (b.p.m.), ranging from 30 to 180. \
                The metronome by default counts four crochets beats per bar. Four note lengths (crochet, \
                quaver, semi-quaver and triplets) are available.";
    }

    return text;
}

function _create_contact_details(contact){
    let div = document.createElement('div');
    let icon_div = document.createElement('div');
    let text_div = document.createElement('div');

    if (contact == "github"){
        let icon = document.createElement('img');
        icon.src = "styles/github_logo.png";
        icon.classList.add("git_icon");
        icon_div.appendChild(icon);
    }
    else {
        icon_div.innerHTML = _create_icon_google(contact);
    }
    text_div.innerHTML = _create_link_html(contact);

    div.classList.add("cc_div");
    icon_div.classList.add("cc_icon_div");
    text_div.classList.add("cc_text_div");

    div.appendChild(icon_div);
    div.appendChild(text_div);

    return div;
}

function _create_icon_google(contact){
    return `<span class="material-icons" style="font-size:3rem">${contact}</span>`;
}

function _create_link_html(contact){
    if (contact == "mail"){
        return '<a class="cc_link" href="mailto:enling.evelyn@gmail.com" target="_blank">enling.evelyn@gmail.com</a>';
    }
    else if(contact == "phone"){
        return '<a class="cc_link" href="tel:+4407716292706">+44 (0)7716292706</a>';
    }
    else if (contact == "github"){
        return '<a class="cc_link" href="https://github.com/Evelyn1302" target="_blank">Github Profile</a>';
    }
    else if (contact == "description"){
        return '<a class="cc_link" href="https://acrobat.adobe.com/link/track?uri=urn:aaid:scds:US:63045f2b-461a-3004-b40b-75f296075e2f" \
        target="_blank">Curriculum Vitae / Resume</a>';
    }
}