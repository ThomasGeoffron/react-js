export function prop_access(path) {
    if (path === "" || typeof path !== "string") {return obj;}
    
    let slugs = path.split(".");
    let object = this.valueOf();
    for (let key of slugs) {
        if (typeof object[key] === "undefined") {return `${path} n'existe pas :(`;}
        object = obj[key];
    }
    return object;
}