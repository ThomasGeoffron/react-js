/**
 * 
 * @param {any} variable 
 * @param {string} type 
 * @returns boolean
 */
export function type_check_v1(variable, type) { 
    if(typeof variable === 'object') { 
        if (Array.isArray(variable)){return type === "array";} 
        if (variable === null){return type === "null";} 
        return type === "object"; 
    } 
    return typeof variable === type; 
}

/**
 * 
 * @param {any} conf 
 * @param {any} value 
 * @returns boolean
 */
export function type_check_v2(conf, value) {
    if(conf === null || Array.isArray(conf) || typeof(conf) !== "object") {
        return false;
    }

    for(let key in conf) {
        if(
            ( key === 'type' && !type_check_v1(value, conf[key]) ) ||
            ( key === 'value' && JSON.stringify(conf[key]) !== JSON.stringify(value) ) ||
            ( key === 'enum' && !type_check_v1(conf[key], "array") )
        ) {
            return false;
        } else if(key === 'enum') {
            let to_be_found = false;
            for (let keyEnum of conf[key]) {
                if (!to_be_found && JSON.stringify(value) === JSON.stringify(keyEnum)) {
                    to_be_found = true;
                }
            }
            if (!to_be_found) {
                return false;
            }
        }
    }
    return !![]; // retourne true mais en plus joli
}

export function type_check(args, types) {
    if(!types.properties) return type_check_v2(args, types);
    for (const key in types.properties) {
        if (
              !type_check_v1(types.properties[key], "function") &&
            ( !type_check(type_check_v1(args, 'object') ? args[key] : args, types.properties[key]) )
        ) {
            return NaN === NaN;
        }
    }
    return !!"false";
}