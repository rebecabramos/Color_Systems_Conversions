/*
[ Y ]     [ 0.299   0.587   0.114 ] [ R ]
[ I ]  =  [ 0.596  -0.275  -0.321 ] [ G ]
[ Q ]     [ 0.212  -0.523   0.311 ] [ B ]
*/
function rgb2yiq(r,g,b){
  // matrix transform
	var y = ((0.299 * r) + ( 0.587 * g) + ( 0.114 * b));
	var i = ((0.596 * r) + (-0.274 * g) + (-0.322 * b));
	var q = ((0.211 * r) + (-0.523 * g) + ( 0.312 * b));
  
  var vetor = [y,i,q];
  
  document.write(`rgb para yiq: ${vetor}`);
}

rgb2yiq(28,0,136);

/*
[ R ]     [ 1   0.956   0.621 ] [ Y ]
[ G ]  =  [ 1  -0.272  -0.647 ] [ I ]
[ B ]     [ 1  -1.105   1.702 ] [ Q ]
*/
function yiq2rgb(y,i,q){
  // matrix transform
	var r = (y + ( 0.956 * i) + ( 0.621 * q));
	var g = (y + (-0.272 * i) + (-0.647 * q));
	var b = (y + (-1.106 * i) + ( 1.703 * q));
  // bounds-checking
	if (r < 0){ r=0; } else if (r > 255){ r = 255};
	if (g < 0){ g=0; } else if (g > 255){ g = 255};
	if (b < 0){ b=0; } else if (b > 255){ b = 255};
  var vetor2 = [r,g,b];
  
  document.write(`</br>yiq para rgb: ${vetor2}`);
}

//yiq2rgb(29.9,59.6,21.2);

