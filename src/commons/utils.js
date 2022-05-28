// Remove acentuação da string e deixa em minúsculo
function simplifyString(str){
    const parsed = str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    return parsed.toLowerCase()
}

function formatUpdateArray(body){
    let str = {};
    Object.entries(body).forEach(entry => {
        const [key, value] = entry;
   
        switch (key){
            case 'id': break
            case 'nascimento':
                str[key] = new Date(value)
                break
            default:
                str[key] = value
                break
        }
    });
    return [str,body.id]
}

module.exports = {simplifyString, formatUpdateArray}