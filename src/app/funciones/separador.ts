export default function separarURL(url: string) : string {
    let id = "";
    let concatenar = false;

    for (let caracter of url){
      if(caracter == '?' || caracter == '='){
        concatenar = true;
        continue;
      }
      if(concatenar){
        id += caracter;
      }
    }

    return id;
}