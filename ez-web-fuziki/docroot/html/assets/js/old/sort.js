let ths = document.querySelectorAll(".sorting,.sorting-sc");
for (var i = 0; i < ths.length; i++) {
    ths[i].onclick = event => {
        let element = event.target;
        if (element.classList.contains('asc')) {
            element.classList.replace('asc', 'desc');
        } else if (element.classList.contains('desc')) {
            element.classList.replace('desc', 'asc');
        } else {
            element.classList.add('asc');
        }

        Array.from(element.parentNode.children)
            .filter(e => e !== element)
            .forEach(e => e.classList.remove('asc', 'desc'));
    };
}
