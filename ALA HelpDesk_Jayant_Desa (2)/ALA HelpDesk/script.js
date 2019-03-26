    //Klantnaam
    var person = prompt("Please enter your name");

    while ( person == "" || person == null) {
      person = prompt("Sorry, but you have to awnser your name,");
    }
    document.getElementById("person").innerHTML =
    "klantnaam = " + person;

    //datum
    var datum = prompt("wat is de datum?");

    while ( datum == "" || datum == null) {
      datum = prompt("Sorry, maar u moet de datum invoeren");
    }
      document.write("<br> de klant beld op: " + datum);

    //modem
    var modem = prompt("Van welk merk is uw modem?");

    while ( modem == "" || modem == null) {
    modem = prompt ("vul u merk van uw modem in aub");
     }
   document.write("<br>merk van modem is " + modem);

    //klacht internet
    document.write("<Fieldset><legend>Internet</legend>");
    var klachten= confirm("heeft u een klacht te melden? Ja / Nee??");

    if (klachten == true) {
      document.write ("<br>klant heeft  klachten ");
    }
    else  {
      document.write("<br> klant heeft geen klachten")
    }

    //Nu.nl
    var nu = confirm("kunt u browsen naar nu.nl?");

    if (nu == true){
      document.write("<br>Browsen naar www.nu.nl lukt");
    }

    else {
      document.write("<br>Browsen naar www.nu.nl lukt niet");
    }

    //F5
    var fasta= confirm("reageert de pagina snel als u op f5 drukt?");

    if (fasta == true) {
      document.write("<br>De pagina reageert snel");
    }
    else {
      document.write("<br>de pagina reageert langzaam");
    }

    document.write("</fieldset>");

    //klacht Internet en Bellen
    document.write("<Fieldset><legend>Internet en bellen</legend>");
    var product= confirm("Heeft u een klacht over Product internet en Bellen?");

    if (product == true) {
      document.write("De klant meldt probleem met internet en bellen:");
    }
    else {
      document.write("De klant meld geen problemen met interner en bellen");
    }

    //kiestoon
    var kiestoon= confirm("Hoort u een kiestoon?");

    if (kiestoon == true) {
      document.write("<br>Klant hoort een kiestoon");
    }
    else {
      document.write("<br>Klant hoort geen kiestoon");
    }

    //Bellen
    var bellen= confirm("Kunt u uw zelf bellen op BIJV. een mobiel nummer?");

    if (bellen == true) {
      document.write("<br>klant kan zichzelf bellen");
    }
    else {
      document.write("<br>Klant kan niet zichzelf bellen");
    }

    //Mobiel nummer Bellen
    var mnb= confirm("Kunt u met uw mobiel nummer bellen waar u een klacht over heeft?");

    if (mnb == true) {
      document.write("<br>klant kan met zijn/ haar eigen nummer bellen ");
}
    else {
      document.write("<br>Klant kan zijn/ haar eigen nummer niet bellen");
}
  document.write("</fieldset>");
  document.write("<Fieldset><legend>Internet, bellen en televisie</legend>");

  //Internet, Bellen en Televisie
    var ibt= confirm("Heeft u een klacht over porduct Internet, Bellen en Televisie?");

    if (ibt == true) {
      document.write("<br>Klant heeft klacht over porduct Internet, Bellen en Televisie");
}
    else {
      document.write("<br>Klant heeft geen klacht over porduct Internet, Bellen en Televisie");
}

  //Aantal Televisie
    var televisie= prompt("Aantal televisie toestellen?");

    while(televisie== "") {
    televisie = prompt("aantal toestellen aub!");
}
document.write("<br>Aantal toestellen: " + televisie);
