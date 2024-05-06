import Banner from './images/asgardeats2.png';

function displayAbout(div) {
    div.innerHTML = "";
    
    const headline = document.createElement("p");
    headline.classList.add("headline");
    headline.textContent = "AsgardEats";
    div.appendChild(headline);

    const banner = document.createElement("img");
    banner.classList.add("banner");
    banner.src = Banner;
    div.appendChild(banner);

    const contacts = {
        "Address": "12 Valhalla Avenue, Asgard",
        "Opening Hours": "9am - 12am",
        "Phone": "+1 (555) 123-VALHALLA",
        "Email": "asgardeats@odinmail.com"
    };

    for (const contact in contacts) {
        const line = document.createElement("p");
        const primary = document.createElement("strong");
        primary.textContent = `${contact}: `;
        line.appendChild(primary);
        const secondary = document.createTextNode(contacts[contact]);
        line.appendChild(secondary);
        div.appendChild(line);
    }
}

export default displayAbout;