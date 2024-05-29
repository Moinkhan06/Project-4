const express = require("express");

const db = require("./config/database");
const bookDB = require("./models/bookTBL");

const app = express();

let bookstore = [
  // {
  //   ISBN: 9789046113110,
  //   title: "In het hart",
  //   author: "David Baldacci",
  //   summary:
  //     "Dit is het aangrijpende verhaal van de twaalfjarige Louisa Mae Cardinal, die in New York woont met haar verlegen broertje Oz. Het is 1940 en ze hebben het niet gemakkelijk, want het inkomen van hun vader, die schrijver is, is niet hoog. Maar dat kan Lou niet zoveel schelen, want ze aanbidt haar vader en is gek op zijn verhalen. Maar dan, in één verschrikkelijk moment, verandert Lou's leven voorgoed. Een auto-ongeluk maakt een einde aan hun vaders leven, waardoor zij en Oz moeten verhuizen naar het verre Virginia. Daar, in het isolement van de desolate bergen, komen ze te wonen bij hun excentrieke overgrootmoeder Louisa, Lou's naamgenote. Geplaatst tegenover nieuwe verantwoordelijkheden ziet Lou zich gedwongen snel volwassen te worden. Daar, op haar overgrootmoeders eenvoudige boerderij, op het land waarvan haar vader zo hield en waarover hij steeds weer schreef, ontdekt zij wie zij werkelijk is en wat zij kan betekenen voor deze wereld. En wanneer een vernietigend noodlot hun nieuwe huis treft kan zij de strijd die volgt het hoofd bieden; een strijd die gaat om recht en overleving en die gestreden wordt in een overvolle rechtszaal in Virginia...",
  //   image:
  //     "http://s.s-bol.com/imgbase0/imagebase/large/FC/2/6/2/1/1001004005971262.jpg",
  //   price: {
  //     currency: "EUR",
  //     value: 5,
  //     displayValue: "5.00",
  //   },
  // },
  // {
  //   ISBN: 9781447229902,
  //   title: "The Hit",
  //   author: "David Baldacci",
  //   summary:
  //     "The trap is set. Failure is not an option. When government hit man Will Robie is given his next target he knows he’s about to embark on his toughest mission yet. He is tasked with killing one of their own, following evidence to suggest that fellow assassin Jessica Reel has been turned. She’s leaving a trail of death in her wake including her handler. The trap is set. To send a killer to catch a killer. But what happens when you can’t trust those who have access to the nation’s most secret intelligence?",
  //   image:
  //     "http://s.s-bol.com/imgbase0/imagebase/large/FC/6/5/2/3/9200000009123256.jpg",
  //   price: {
  //     currency: "EUR",
  //     value: 21.99,
  //     displayValue: "21.99",
  //   },
  // },
  // {
  //   ISBN: 9789044339482,
  //   title: "De Tennisparty",
  //   author: "Sophie Kinsella",
  //   summary:
  //     "Het tennisweekend is Patricks idee. Zijn nieuwe landhuis, gekocht met de bonussen van zijn baan als beleggingsadviseur, is de ideale locatie. Patricks vrouw Caroline weet nog niet wat de werkelijke reden voor het feestje is. Zij vindt het leuk om haar oude buren Stephen en Annie weer te zien, maar ze is minder blij met de snoeverige Charles en zijn verwende vrouw Cressida. En het laatste koppel, Don en Valerie, beiden bloedfanatiek, is helemaal onuitstaanbaar. Terwijl de vier stellen zich op het zonnige terras installeren, lijkt al vast te staan wie de winnaars zijn in het leven en wie de verliezers. Maar wanneer de eerste bal over het net wordt geslagen, is dat het begin van twee dagen flirten, driftbuien, knallende ruzies en schokkende onthullingen. Door de komst van een ongenode gast wordt duidelijk dat dit weekend helemaal niets met tennis te maken heeft. Lang voordat ze beroemd werd met haar Shopaholic! serie schreef Sophie Kinsella onder haar eigen naam, Madeleine Wickham, zeven romans. De tennis party, haar allereerste boek, verscheen toen ze pas vierentwintig was en is daarom altijd heel bijzonder voor haar gebleven. Daarna volgden onder andere Het zwemfeestje en De vraagprijs. Haar werk is in meer dan dertig talen verschenen. De auteur woont met haar man en kinderen in Londen. 'Een rake roman met scherpe observaties. Licht maar dodelijk.' Mail on Sunday",
  //   image:
  //     "http://s.s-bol.com/imgbase0/imagebase/large/FC/3/7/6/4/9200000009984673.jpg",
  //   price: {
  //     currency: "EUR",
  //     value: 18.5,
  //     displayValue: "18.50",
  //   },
  // },
  // {
  //   ISBN: 9780552778459,
  //   title: "In One Person",
  //   author: "John Irving",
  //   summary:
  //     "A compelling novel of desire, secrecy, and sexual identity, In One Person is a story of unfulfilled love—tormented, funny, and affecting—and an impassioned embrace of our sexual differences. Billy, the bisexual narrator and main character of In One Person, tells the tragicomic story (lasting more than half a century) of his life as a “sexual suspect,” a phrase first used by John Irving in 1978 in his landmark novel of “terminal cases,” The World According to Garp. His most political novel since The Cider House Rules and A Prayer for Owen Meany, John Irving’s In One Person is a poignant tribute to Billy’s friends and lovers—a theatrical cast of characters who defy category and convention. Not least, In One Person is an intimate and unforgettable portrait of the solitariness of a bisexual man who is dedicated to making himself 'worthwhile.'",
  //   image:
  //     "http://s.s-bol.com/imgbase0/imagebase/large/FC/3/4/5/9/9200000009409543.jpg",
  //   price: {
  //     currency: "EUR",
  //     value: 25,
  //     displayValue: "25.00",
  //   },
  // },
];

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  // res.render('index',{bookstore});
  bookDB
    .find({})
    .then((bookstore) => {
      return res.render("index", {
        bookstore,
      });
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
});

// app.get('/data', (req, res) => {
//   return res.render('./pages/data')
// })
// app.get('/buy1', (req, res) => {
//   return res.render('./pages/buy1')
// })
// app.get('/buy2', (req, res) => {
//   return res.render('./pages/buy2')
// })
// app.get('/buy3', (req, res) => {
//   return res.render('./pages/buy3')
// })

app.post("/", (req, res) => {
  console.log(req.body);
  const { url, title, author, summary, price } = req.body;

  bookDB
    .create({
      url: url,
      title: title,
      author: author,
      summary: summary,
      price: price,
    })
    .then((user) => {
      console.log("data insert successfully..");
      return res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
});

app.get("/deleteData", (req, res) => {
  let id = req.query.id;
  console.log(id);
  bookDB
    .findByIdAndDelete(id)
    .then(() => {
      console.log("Data deleted successfully!");
      return res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
});

app.get('/editData', (req, res) => {
  let id = req.query.id;
  bookDB.findById(id).then((data) => {
      return res.render('edit', { data });
  }).catch((err) => {
      console.log(err);
      return false;
  })
})

app.post('/editData/:id', (req, res) => {
  const{url, title, author, summary, price } = req.body
  const { id } = req.params
  bookDB.findByIdAndUpdate(id,{url, title, author, summary, price }).then((data)=>{
      console.log("Data Updated!");
      return res.redirect('/');

  }).catch((err)=>{
      console.log(err)
      return false;
  })
})

app.listen(8081, (err) => {
  if (!err) {
    console.log("Server is running on port http://localhost:8081");
  }
});
