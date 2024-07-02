function getSize(width, height, depth) {
    var hw = width * height;
    var hd = height * depth;
    var wd = width * depth;

    var surf = (hw * 2) + (hd * 2) + (wd * 2);
    var Vol = width * height * depth
    var arr = [surf, Vol];
    return arr;
}
