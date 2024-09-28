let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let extension = [".com", ".net", ".es", ".zas"];


// FOR OF

/*for (let pro of pronoun) {
  for (let ad of adj) {
    for (let no of noun) {
      for (let ext of extension) console.log(pro + ad + no + ext);
    }
  }
}*/



// FOR EACH

let domains = [];

pronoun.forEach(pro=>{
  adj.forEach(a=>{
    noun.forEach(no=>{
      extension.forEach(ext=>{
        domains.push(pro+a+no+ext);
     });
    });
  });
});

domains.forEach(domain=>{console.log(domain)});
