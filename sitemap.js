
var numposts = 100;
var standardstyling = true;

/*  
    rawgit url (https://cdn.rawgit.com/D-dig/js/gh-pages/sitemap3.js)
*/

function startpost(json){
  for (var i = 0; i < numposts; i++){
    var entry = json.feed.entry[i];
    var posttitle = entry.title.$t;
    var posturl;
    
    if (i == json.feed.entry.length) break;
    
    for (var k = 0; k < entry.link.length; k++){
      if (entry.link[k].rel == 'alternate'){
        posturl = entry.link[k].href;break;
      }
    }
        
    posttitle = posttitle.link(posturl);
    if (standardstyling) document.write('<li>');
    
    document.write(posttitle);
  }
  
  if (standardstyling) document.write('</li>');
}

function finished(){
  document.write('<br /><br /><a href="https://kandangfile.blogspot.com" style="font-size: 10 px; text-decoration:none; color: #616469;" target="_blank" title="SITEMAP LABEL">SITEMAP LABEL</a>');
}
