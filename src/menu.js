import Breeze from './images/breeze.jpeg';
import Burger from './images/burger.jpeg';
import Mead from './images/mead.jpeg';
import Pizza from './images/pizza.jpeg';
import Ribs from './images/ribs.jpeg';
import Soup from './images/soup.jpeg';
import VeggiePlatter from './images/veggieplatter.jpeg';

function displayMenu(div) {
    div.innerHTML = "";
    
    const headline = document.createElement("p");
    headline.classList.add("headline");
    headline.textContent = "Our Menu";
    div.appendChild(headline);

    const menu = [
        {
            "title": "Thor's Thunderous Ribs",
            "description": "Tender pork ribs marinated in a savory blend of spices and grilled to perfection, served with a side of Viking slaw and Odin's ale-infused barbecue sauce.",
            "image": Ribs,
            "price": 250.00
        },
        {
            "title": "Bifröst Burger",
            "description": "A towering burger piled high with a juicy beef patty, crispy bacon, melted Gouda cheese, caramelized onions, and tangy barbecue sauce, served on a toasted brioche bun.",
            "image": Burger,
            "price": 120.00
        },
        {
            "title": "Yggdrasil Veggie Delight Pizza",
            "description": "A mouthwatering pizza featuring a crispy thin crust topped with a flavorful tomato sauce, melted mozzarella cheese, and a colorful array of roasted vegetables.",
            "image": Pizza,
            "price": 180.00
        },
        {
            "title": "Odin's Wisdom Soup",
            "description": "A comforting soup made with roasted root vegetables, barley, and hearty beans, simmered in a savory broth infused with herbs and spices.",
            "image": Soup,
            "price": 65.00
        },
        {
            "title": "Valkyrie's Valor Veggie Platter",
            "description": "A colorful assortment of roasted root vegetables, grilled mushrooms, and crispy kale chips, drizzled with Freyja's honey-mustard dressing and sprinkled with toasted almonds.",
            "image": VeggiePlatter,
            "price": 90.00
        },      
        {
            "title": "Bifröst Breeze",
            "description": "A tropical-inspired cocktail made with rum, pineapple juice, coconut cream, and a splash of lime juice, shaken with ice and strained into a chilled glass.",
            "image": Breeze,
            "price": 30.00
        },         
        {
            "title": "Odin's Mead",
            "description": "A traditional Nordic honey wine crafted using ancient recipes, offering a rich and complex flavor profile with notes of honey, herbs, and spices.",
            "image": Mead,
            "price": 45.00
        }
    ];

    for (const item of menu) {
        const menuItem = document.createElement("div");
        menuItem.classList.add("menu-item");

        const menuItemLeft = document.createElement("div");
        const menuItemImage = document.createElement("img");
        menuItemImage.classList.add("menu-item-image");
        menuItemImage.src = item["image"];
        menuItemLeft.appendChild(menuItemImage);
        menuItem.appendChild(menuItemLeft);

        const menuItemRight = document.createElement("div");
        const menuItemName = document.createElement("p");
        menuItemName.classList.add("menu-item-name");
        menuItemName.textContent = item["title"];
        menuItemRight.appendChild(menuItemName);

        const menuItemDescription = document.createElement("p");
        menuItemDescription.textContent = item["description"];
        menuItemRight.appendChild(menuItemDescription);

        const menuItemPrice = document.createElement("p");
        menuItemPrice.classList.add("menu-item-price");
        menuItemPrice.textContent = `₼${item["price"].toFixed(2)}`;
        menuItemRight.appendChild(menuItemPrice);
        menuItem.appendChild(menuItemRight);

        div.appendChild(menuItem);
    }
}

export default displayMenu;