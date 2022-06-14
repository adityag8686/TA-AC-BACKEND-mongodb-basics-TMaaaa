use blog
db.createCollection("articles")
db.articles.insertMany([
    {
        id : 1,
        title: 'Introduction to internet of things',
        details: 'This is the first article',
        author: {
            name: 'Aditya Goswami',
            email: 'agoswami0708@gmail.com',
            age: 26
        },
        tags: ['js', 'mongo']
    },
    {
        id : 2, 
        title: 'C mother of all language',
        details: 'This is the second article',
        author: {
            name: 'Abhishek Kumar',
            email: 'example@gmail.com',
            age: 24
        },
        tags: ['c', 'c++']
    },
    {
        id : 3,
        title: 'Learn Maching learning',
        details: 'This is the third article',
        author: {
            name: 'Ravi KUmar',
            email: 'ravi@gmail.com',
            age: 19
        },
        tags: ['java', 'python']
    }
])
db.articles.find().pretty()
db.articles.find({id :3}).pretty()
db.articles.find({title: 'C mother of all language'}).pretty()
db.articles.find({'author.name': 'Aditya Goswami'}).pretty()
db.articles.find({tags : {$all: ['java']}}).pretty();
db.articles.update({id : 1},{$set:{title : 'How to learn'}})
db.articles.update({title :'C mother of all language'},{$set:{'author.name' : 'Ricky Goswami'}});

db.articles.updateMany({ $rename: { "details": "descrption" } })

db.articles.update({id : 1}, {$push:{tags: 'internet tricks'}});

db.articles.update({id : 2},{$set:{title : 'c++ the mother of all languages'}});
db.articles.update({id : 3}, {title : 'Master Data science '})

db.articles.update({title :'c++ the mother of all languages'} , {$set:{'author.age' : author.age + 5}});
db.articles.remove({id : 1})

// second section

db.users.insertMany([
    {
      age: 49,
      name: "Maurice Brock",
      email: "wuk@hibpiz.ch",
      gender: "Female",
      sports: ["cricket", "football"],
      scores: [24, 35, 18, 16],
      weight: 45,
    },
    {
      age: 37,
      birthday: "7/15/1986",
      name: "Virgie Cunningham",
      email: "ezogafa@de.gm",
      gender: "Male",
      sports: ["football"],
      scores: [17, 35, 43],
      weight: 52,
    },
    {
      age: 48,
      birthday: "5/14/1961",
      name: "Alexander Holt",
      email: "han@mu.pe",
      gender: "Male",
      sports: ["cricket", "football", "TT"],
      scores: [24, 30, 16],
      weight: 55,
    },
    {
      age: 53,
      birthday: "11/15/1963",
      name: "Derek Dawson",
      email: "polril@now.de",
      gender: "Male",
      sports: ["cricket", "hockey"],
      scores: [20, 15, 38, 23],
      weight: 49,
    },
    {
      age: 34,
      birthday: "7/24/1964",
      name: "Cynthia Cobb",
      email: "wujjarpob@jecimpar.gu",
      gender: "Female",
      sports: ["cricket"],
      scores: [41, 17, 28],
      weight: 51,
    },
    {
      age: 33,
      birthday: "10/26/1982",
      name: "Isabella Atkins",
      email: "ononuzas@givhoz.ca",
      gender: "Female",
      sports: ["cricket", "football", "hockey", "TT"],
      scores: [14, 38, 29, 45, 20],
      weight: 49,
    },
    {
      age: 47,
      birthday: "10/12/1978",
      name: "Katharine Bryan",
      email: "zo@pebi.sa",
      gender: "Male",
      sports: ["TT", "hockey", "khokho"],
      scores: [27, 20, 34],
      weight: 58,
    },
    {
      age: 41,
      birthday: "1/28/1991",
      name: "Beatrice Fleming",
      email: "ufufsa@pujizren.tk",
      gender: "Female",
      sports: ["football", "khokho"],
      scores: [30, 20, 15, 29, 43],
      weight: 47,
    },
    {
      age: 26,
      birthday: "3/23/1998",
      name: "Tom Fields",
      email: "wasodjow@ofaba.gf",
      gender: "Female",
      sports: ["khokho"],
      scores: [37, 29, 18, 43, 49],
      weight: 50,
    },
    {
        age: 33,
        birthday: "11/14/1960",
        name: "Steve Ortega",
        email: "dupus@ca.ls",
        gender: "Female",
        sports: ["cricket", "football", "hockey"],
        scores: [12, 15, 20],
        weight: 51,
    },
    {
        age: 24,
        birthday: "1/5/1994",
        name: "Suraj Kumar",
        weight: 50,
        gender: "Male",
        sports: ["football", "cricket", "TT"],
    },  ]);
db.users.find({gender : 'Male' }, {sports : 'cricket'});
db.users.update({name: "Steve Ortega"},{$push:{sports:'golf'}})
db.users.find({sports : {$in:['cricket','football']}});
db.users.find({name : /ri/i});
