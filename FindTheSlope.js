function slope(points)
{
var y = points[3] - points[1];
var x = points[2] - points[0];

if (x==0){return String(undefined);}

return String(y/x);
}