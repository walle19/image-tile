function checkImageURL(url) {
    return(url.match(/\.(jpeg|jpg|gif|png|svg)$/) != null);
}

export {
    checkImageURL
}