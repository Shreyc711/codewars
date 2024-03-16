function cubeChecker(volume, side){
    return side > 0  ? volume === side * side * side : false;
  };