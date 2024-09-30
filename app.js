let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogges", "racom"];
let extension = [".com", ".net", ".es", ".zas"];


// FOR OF
// console.time("bucle");
// for (let pro of pronoun) {
//   for (let ad of adj) {
//     for (let no of noun) {
//       for (let ext of extension) console.log(pro + ad + no + ext);
//     }
//   }
// }
// console.timeEnd("bucle");


// FOR EACH

let domains = [];
let combinacion = [];

pronoun.forEach(pro=>{
  adj.forEach(a=>{
    noun.forEach(no=>{
      extension.forEach(ext=>{
        let nounEnd1 = no.slice(-2);
        let extBeginning1 = ext.slice(1,3);
        let nounEnd2 = no.slice(-3);
        let extBeginning2 = ext.slice(1,4);

        combinacion = domains.push(pro+a+no+ext);
        if (nounEnd1 === extBeginning1) {
          combinacion = domains.push(pro+a+no.slice(0,-2)+ext);
        }
        if (nounEnd2 === extBeginning2) {
          combinacion = domains.push(pro+a+no.slice(0,-3)+ext);
        }

     });
    });
  });
});

domains.forEach(domain=>{console.log(domain)});
