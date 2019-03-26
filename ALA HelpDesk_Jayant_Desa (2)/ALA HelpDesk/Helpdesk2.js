 var foutmelding = 0;
 //Klantnaam
    var person = prompt("Wat is uw naam?");

    while ( person == "" || person == null) {
      person = prompt("Sorry, maar u moet uw naam invoeren.");
    }
    document.getElementById("person").innerHTML =
    "klantnaam = " + person;

    //datum
    var datum = prompt("wat is de datum?");

    while ( datum == "" || datum == null) {
      datum = prompt("Sorry, maar u moet de datum invoeren");
    }
      document.write("<br> de klant belt op: " + datum + "<br>");

    //modem
    var modem = prompt("Van welk merk is uw modem?");

    while ( modem === "" || modem === null) {
    modem = prompt("vul u merk van uw modem in aub.");
     }
   document.write("merk van modem is " + modem + "<br>");
  
    //klacht internet
    document.write("<Fieldset><legend>Internet</legend>");
    var klachten= confirm("heeft u een klacht te melden? Ja / Nee??");

    if (klachten == true) {
      document.write ("<br>klant heeft  klachten ");
    }
    else  {
      document.write("<br> klant heeft geen klachten")
      foutmelding += 1;
    }

    //Nu.nl
    var nu = confirm("kunt u browsen naar nu.nl?");

    if (nu == true){
      document.write("<br>Browsen naar www.nu.nl lukt");
    }

    else {
      document.write("<br>Browsen naar www.nu.nl lukt niet :");
      document.write("<a href ='internet-laden.html' target= '_blank'> oplossing internet laden</a><br> ")
      foutmelding += 1;
    }

    //F5
    var fasta= confirm("reageert de pagina snel als u op f5 drukt?");

    if (fasta == true) {
      document.write("<br>De pagina reageert snel");

    }
    else {
      document.write("<br>de pagina reageert langzaam :");
      document.write("<a href ='snelheid-laden.html' target= '_blank'> oplossing internet snelheid</a><br> ")
      foutmelding += 1;
    }

    document.write("</fieldset>");

    //klacht Internet en Bellen
    document.write("<Fieldset><legend>Internet en bellen</legend>");
    var product= confirm("Heeft u een klacht over Product internet en Bellen?");

    if (product == true) {
      document.write("De klant meldt probleem met internet en bellen");
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
      document.write("<br>Klant hoort geen kiestoon :");
      document.write("<a href ='geen-kiestoon.html' target= '_blank'> oplossing geen-kiestoon</a><br> ")
      foutmelding += 1;
    }

    //Bellen
    var bellen= confirm("Kunt u uw zelf bellen op BIJV. een mobiel nummer?");

    if (bellen == true) {
      document.write("<br>klant kan zichzelf bellen");
    }
    else {
      document.write("<br>Klant kan niet zichzelf bellen :");
      document.write("<a href ='gebeld-worden.html' target= '_blank'> oplossing gebeld-worden</a><br> ");
      foutmelding += 1;
    }

    //Mobiel nummer Bellen
    var mnb= confirm("Kunt u met uw mobiel nummer bellen waar u een klacht over heeft?");

    if (mnb == true) {
      document.write("<br>klant kan met zijn/ haar eigen nummer bellen ");
}
    else {
      document.write("<br>Klant kan zijn/ haar eigen nummer niet bellen :");
      document.write("<a href ='uit-bellen.html' target= '_blank'> oplossing uit-bellen</a><br> ");
      foutmelding += 1;
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


  //SPLITTER    
  var splitter= confirm(" Is uw splitter goed aangesloten?");

  if (splitter == true) {
    document.write("<br>Splitter is goed aangesloten");
}
  else {
    document.write("<br>splitter is niet goed aangesloten :");
    document.write("<a href ='splitter-aangesloten.html' target= '_blank'> oplossing splitter-aangesloten</a><br> ");
    foutmelding += 1;
}
  //setupbox
  var setupbox= confirm("Is uw setupbox goed aangesloten?");

  if (setupbox == true) {
    document.write("<br>Setup box is goed aangesloten");
}
  else {
    document.write("<br>Setup box is niet goed aangesloten :");
    document.write("<a href ='settopbox-aangesloten.html' target= '_blank'> oplossing settopbox-aangesloten</a><br> ");
    foutmelding += 1;
  }
//zenders
var zenders= confirm("Worden de zenders gevonden?");

if (zenders == true) {
  document.write("<br>Zenders worden gevonden");
}
else {
  document.write("<br>Zenders worden niet gevonden :");
  document.write("<a href ='zender-niet-gevonden.html' target= '_blank'> oplossing zender-niet-gevonden</a><br> ");
  foutmelding += 1;
}
document.write("</fieldset>")
if(foutmelding > 0) {
 document.write("u heeft " + foutmelding + " klacht(en) gemeld op:"+ datum) 
}
else if(foutmelding < 0) {
    document.write("u heeft " + foutmelding + " klacht(en) gemeld op:"+ datum) 
   }
