function whoIsPaying(name){
    if (name.length <= 2) {
        return [name];
    }else{
        return [name,name [0] + name [1]]
    }
    
    }