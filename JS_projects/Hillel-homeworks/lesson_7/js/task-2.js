function getLink() {
    return prompt('Type a link which you would like to visit');
}

function followLink(link) {
    location.href = link;
}

followLink(getLink());