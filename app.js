const express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    Case = require('./models/casestudy'),
    Comment = require('./models/comment'),
    bodyParser = require("body-parser"),
    seedDB = require('./seeds');



mongoose.connect('mongodb+srv://lupupaul:qwertyuiop@cluster0-7zpxz.mongodb.net/PaulsDB', { useNewUrlParser: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'));

// seedDB(); // seeds database with cases

//INDEX route
app.get('/', (req, res) => {
    res.render('index');
});

//About me section
app.get('/aboutme', (req, res) => {
    res.render('aboutme');

});

//contact route
app.get('/contact', (req, res) => {
    res.render('contact')
});

//endodontics route
app.get('/endo', (req, res) => {
    res.render('endo');
});

// Case studies
app.get('/casestudies', (req, res) => {
    Case.find({}, (err, foundCase) => {
        if (err) {
            console.log(err);
        } else {
            //console.log(foundCase);
            res.render('casestudies', { data: foundCase });
        }
    });

});

// Show Case
app.get('/casestudies/:id', (req, res) => {
    Case.findById(req.params.id).populate('comments').exec((err, caseFound) => {
        if (err) {
            console.log(err);
        } else {
            //console.log(caseFound.image.length);
            res.render('show', { data: caseFound });
        }
    });
});

// ==========================================
// comments route
// ==========================================

app.get('/casestudies/:id/comments/new', (req, res) => {
    // find case and send through to NEW ejs
    Case.findById(req.params.id, (err, caseFound) => {
        if (err) {
            console.log(err);
        } else {
            res.render('new', { data: caseFound })
        }
    })
})

app.post('/casestudies/:id', (req, res) => {
    // lookup campground usingID
    Case.findById(req.params.id, (err, caseFound) => {
        if (err) {
            console.log(err);
            res.redirect('/casestudies');
        } else {
            Comment.create(req.body.comment, (err, comment) => {
                if (err) {
                    console.log(err)
                } else {
                    caseFound.comments.push(comment);
                    caseFound.save();
                    //console.log(caseFound);
                    res.redirect('/casestudies/' + caseFound._id);
                }
            });
        }
    });
    //create new comment
    //connect new comment to camp
    //redirect to campground showpage
});

//local listen
app.listen(3000, () => console.log(`Example app listening on port ${3000}!`))
    //deply listen
    // app.listen(process.env.PORT, process.env.IP);