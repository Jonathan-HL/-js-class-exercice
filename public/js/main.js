// Exo 1
// class Personne1 {
//     constructor(nom,prenom,age,taille){
//             this.nom = nom;
//             this.prenom = prenom;
//             this.age = age;
//             this.taille = taille;
//     };
// };
// let Personne11 = new Personne1("Bang","kmt","20","222");
// console.log(Personne11);

// class Personne2 {
//     constructor(nom,prenom,age,taille){
//             this.nom = nom;
//             this.prenom = prenom;
//             this.age = age;
//             this.taille = taille;
//     };
// };
// let Personne22 = new Personne2("Dokz","Akk","27","777");
// console.log(Personne22);

// class Personne3 {
//     constructor(nom,prenom,age,taille){
//             this.nom = nom;
//             this.prenom = prenom;
//             this.age = age;
//             this.taille = taille;
//     };
// };
// let Personne33 = new Personne3("Godz","By","30","333");
// console.log(Personne33);
// // Exo 2
// class Personne4 {
//     constructor(age,nom,ville){
//             this.age = age;
//             this.nom = nom;
//             this.ville = ville;
//             this.sePresenter = () => {
//                 return `Bonjour, je m'appelle ${this.nom}.`
//             };
//         ;}
// };
// let Personne44 = new Personne4(30,"Kazz","Bxl");
// console.log(Personne44.sePresenter());
// Exo 3
// Exo 4
// class objet {
//         constructor(nom,prix){
//             this.nom = nom
//             this.prix = prix
//         };
// };
// let objet1 = new objet("costume",120);
// let boite = new objet(["robe"],[220]);
// console.log(objet1);
// console.log(boite);

// class personnage {
//     constructor(nom,sac,argent){
//             this.nom = nom
//             this.sac = [sac]
//             this.argent = argent;

//             this.jePrends = (objet) => {
//                 this.objet = objet
//                 return this.objet
//             };
//             this.acheter = (vendeur) => {
//                 this.vendeur = vendeur;
//                 return this.vendeur 
//             };
//     };
// };
// let Personnage1 = new personnage("Mark",["androide"],500);
// let Personnage2 = new personnage("Elise",["iphone"],1000);
// console.log(Personnage1.jePrends("Costume"));
// console.log(Personnage1.acheter("iphone"));
// console.log(Personnage2.jePrends("robe"));
// console.log(Personnage1);
// console.log(Personnage2);
