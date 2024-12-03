import odinImage from "./chicken-satay.jpg";

function initPage() {

    const contentSel = document.querySelector(".content");
    contentSel.replaceChildren();
    const h1var = document.createElement("h1");
    h1var.textContent = "Classy Restaurant";
    contentSel.appendChild(h1var);

    let pvar = document.createElement("p");
    pvar.textContent = "This is a classy restaurant. We have classy doors. Classy walls. Classy tables.";
    contentSel.appendChild(pvar);

    pvar = document.createElement("p");
    pvar.textContent = "The meals themselves are nothing but class. The classiest ingredients know to man.";
    contentSel.appendChild(pvar);

    pvar = document.createElement("p");
    pvar.textContent = "Just don't look to closely at the staff. They are hard working and talented but they are noooot classy.";
    contentSel.appendChild(pvar);

    const image = document.createElement("img");
    image.src = odinImage;

    contentSel.appendChild(image);
}

function aboutPage() {
    const contentSel = document.querySelector(".content");
    contentSel.replaceChildren();
    const h1var = document.createElement("h1");
    h1var.textContent = "About Page";
    contentSel.appendChild(h1var);

}

function menuPage() {
    const contentSel = document.querySelector(".content");
    contentSel.replaceChildren();
    const h1var = document.createElement("h1");
    h1var.textContent = "Menu Page";
    contentSel.appendChild(h1var);

}

export { initPage, aboutPage, menuPage };


/* <h1>Classy Restaurant</h1>
        <p>This is a classy restaurant. We have classy doors. Classy walls. Classy tables.</p>
        <p>The meals themselves are nothing but class. The classiest ingredients know to man.</p>
        <p>Just don't look to closely at the staff. They are hard working and talented but they are noooot classy.</p>    */

