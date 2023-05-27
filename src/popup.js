
const showPopUp = (element) => {
    let classList = Array.from(element.classList);
    if (classList.includes("hide-popup")) {
        element.classList.remove("hide-popup");
        element.classList.add("show-popup");
    }
    else {
        element.classList.remove("show-popup");
        element.classList.add("hide-popup");
    }
}

export { showPopUp };