import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
 let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon', 'puedes'];
let extensions = ['.com', '.net', '.us', '.io', '.es'];

for (let p of pronoun) {
  for (let a of adj) {
    for (let n of noun) {
      let base = p + a + n;

      let hackApplied = false;

      for (let ext of extensions) {
        let domainHack = '';

        if (n.endsWith(ext.slice(1))) {
          
          domainHack = p + a + n.replace(ext.slice(1), '') + ext;
          console.log(domainHack);
          hackApplied = true;
        } else {
          
          console.log(base + ext);
        }
      }
    }
  }
}

  console.log("Hello Rigo from the console!");
};
