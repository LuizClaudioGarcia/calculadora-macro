// Remove acentuação da string e deixa em minúsculo
function simplifyString(str){
    const parsed = str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    return parsed.toLowerCase()
}

module.exports = {simplifyString}