 const m2j = require('markdown-to-json');
 const glob = require('glob');

 let options = {
   minify: false,
   width: 70,
   outfile: null,
 };

 glob('posts/*.md', function(er, files) {
   const results = m2j.parse(files, options);
   console.log(results);
 });
