var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles = {
  'article-one':{
      title: 'article one',
      heading: 'article one by jap',
      date: '2nd jan',
      content: 'content of first article goes here'
  }, 
  'article-two':{
      title: 'article two',
      heading: 'article two by jap',
      date: '2nd jan',
      content: 'content of second article goes here' 
  },
  'article-three':{
      title: 'article three',
      heading: 'article three by jap',
      date: '2nd jan',
      content: 'content of third article goes here'   
      
  }
  
};
function createTemplate(data){
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
    var htmlTemplate=`
    <html>
        <head>
             <link href="ui/style.css" rel="stylesheet" />
             <title>
               ${title}
             </title>
             <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
         </head>
         <body>
             ${date}
             <h3>
             ${heading}
             </h3>
             <p>
             ${content}<br/>
             <hr/>
             yipeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
             </p>
         </body>
     </html>
    `;
return htmlTemplate;
    
    
}





app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/:articleName', function (req, res) {
  var articleName=req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
