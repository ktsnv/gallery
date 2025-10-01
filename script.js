const id = window.location.hash.substring(1); // gets "12345"
console.log(id);
document.addEventListener('DOMContentLoaded', () => {

 var mypixels = [
  ['#FFF', '#FFF', '#FFF', '#FFF', '#FFF', '#FFF', '#FFF'],
  ['#FFF', '#FFF', '#F00', '#FFF', '#F70', '#FFF', '#FFF'],
  ['#FFF', '#FFF', '#F70', '#FFF', '#FF0', '#FFF', '#FFF'],
  ['#FFF', '#FFF', '#FF0', '#FFF', '#0F0', '#FFF', '#FFF'],
  ['#FFF', '#FFF', '#FFF', '#FFF', '#FFF', '#FFF', '#FFF'],
  ['#FFF', '#FF0', '#FFF', '#FFF', '#FFF', '#F0F', '#FFF'],
  ['#FFF', '#FFF', '#0F0', '#0FF', '#00F', '#FFF', '#FFF'],
  ['#FFF', '#FFF', '#FFF', '#FFF', '#FFF', '#FFF', '#FFF']
 ];

 function createImage(pixels) {
  var canvas = document.createElement('canvas');
  canvas.width = pixels[0].length;
  canvas.height = pixels.length;
  var context = canvas.getContext('2d');
  for(var r = 0; r < canvas.height; r++) {
   for(var c = 0; c < canvas.width; c++) {
    context.fillStyle = pixels[r][c];
    context.fillRect(c, r, 1, 1);
   }
  }
  return canvas.toDataURL('image/png');
 }

 document.querySelector('img').src = createImage(mypixels);

});
