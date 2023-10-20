function encodeText(text) {
    let encodedText = [];
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      const charCode = char.charCodeAt(0);
    
      encodedText.push(charCode.toString(16).toUpperCase());
    }
    const lentext = encodedText.length
    const resultOfdiv_lentext = Math.ceil(lentext / 2);
    const array1 = encodedText.slice(0, resultOfdiv_lentext);  // ตั้งแต่ index 0 ถึงครึ่งหนึ่งของอาร์เรย์
    const array2 = encodedText.slice(resultOfdiv_lentext);  //แบ่งครึ่ง Array
    const mergedArray_decimal = [...array2, ...array1];

    const data = mergedArray_decimal.map(item => item + "%").join('');

    return data
    
  }
  
  
  function decodeText(encodedText) {
    let data = '';
  const parts = encodedText.split('%');
    function removeEmptyValuesFromArray(arr) {
      // ใช้ filter() เพื่อกรองค่าที่เป็นค่าว่างออก
      const filteredArray = arr.filter(value => value !== null && value !== undefined && value !== '');
      return filteredArray;
    }
  newarray = removeEmptyValuesFromArray(parts)
  const lentext = newarray.length
  const halfLength = Math.floor(lentext / 2);
  const array1 = newarray.slice(0, halfLength);  // ตั้งแต่ index 0 ถึงครึ่งหนึ่งของอาร์เรย์
  const array2 = newarray.slice(halfLength);  //แบ่งครึ่ง Array
  const mergedArray_decimal = [...array2, ...array1];

  for (let i = 0; i < mergedArray_decimal.length; i++) {
    const charCode = parseInt(mergedArray_decimal[i], 16);
    data += String.fromCharCode(charCode);
  }
  return data;
  }
  
  // ตัวอย่างการใช้งาน
  const thaiText = "Hello, 123";
  const encodedText = encodeText(thaiText);
  console.log(encodedText); 
  
  const decodedText = decodeText(encodedText);
  console.log(decodedText);