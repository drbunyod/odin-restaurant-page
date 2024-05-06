import Banner1 from './images/asgardeats1.png';
import Banner2 from './images/asgardeats2.png';

function displayHome(div) {
    div.innerHTML = "";
    
    const headline = document.createElement("p");
    headline.classList.add("headline");
    headline.textContent = "Embark on a Culinary Journey to Asgard!";
    div.appendChild(headline);

    const banner1 = document.createElement("img");
    banner1.classList.add("banner");
    banner1.src = Banner2;
    div.appendChild(banner1);

    const banner2 = document.createElement("img");
    banner2.classList.add("banner");
    banner2.src = Banner1;
    div.appendChild(banner2);

    const about = document.createElement("p");
    about.textContent = "Step into the enchanting realm of AsgardEats, where every visit is a journey into the heart of Norse mythology. Nestled amidst the mortal realm, our restaurant beckons adventurers and epicureans alike to experience the magic of Asgardian hospitality. Join us on a voyage beyond the realms of ordinary dining, where every meal is an epic saga waiting to unfold. Discover the wonders of AsgardEats and let your taste buds embark on a culinary odyssey like no other.";
    div.appendChild(about);
}

export default displayHome;