export function interpolate(obj) {
    let str = this.valueOf();
    return str.replace(/{{(.*?)}}/g, function(k, v){
        return obj[v];
    });
}