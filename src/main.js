document.getElementById('app-menu').onclick =() => {
    
};

let blogBox = new WinBox({
    index: 2,
    title: "Blog",
    maxHeight: 400,
    maxWudth: 600,
    top: "5%",
    right: 5,
    bottom: "10%",
    left: 5,
    background: "#252b4e",
    url: "https://olivermharris.co.uk/blog",
});

blogBox.x = 250;
blogBox.y = 250;
blogBox.move();