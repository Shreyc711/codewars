//Remove duplicates from arr;

function remove(a){
    let final = [];
    for(let i = 0;i< a.length;i++){
        if(!final.includes(a[i])){
            final.push(a[i])
        }
    }
    return final;;
}