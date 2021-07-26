let text1 =  "Uwielbiam JaveaScript";
let text2 = "Jestem świetnym programistą";


const dluzszyTekst = (text1,text2) => {
	

   if(text1.length > text2.length){
      return text1;
   }
   else{
      return text2;
   }
}
console.log(dluzszyTekst(text1,text2));//przekazujemy zmienne do paramentru


//wersja 2


const dluzszyTekstDwa = (t1,t2) => {
	

   if(t1.length > t2.length){
      return t1;
   }
   else{
      return t2;
   }
}
console.log(dluzszyTekstDwa(text1,text2));//przekazujemy zmienne do paramentru
