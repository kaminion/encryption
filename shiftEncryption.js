function shiftEncryption(str, num)
{ 
  if(num > 25) return false;

  var input = str;
  var result = ''
  for(var i = 0; i < input.length;i++)
  {
    var charCode = input.charCodeAt(i) + num;
    charCode %= 91;
    if(charCode < 65) charCode += 65;

    result += String.fromCharCode(charCode);
  }
  return result;
}