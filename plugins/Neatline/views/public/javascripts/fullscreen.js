
/**
 * @package     omeka
 * @subpackage  neatline
 * @copyright   2014 Rector and Board of Visitors, University of Virginia
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */

$(function() {

  var map = $('#neatline-map');
  var exhibit = $('#neatline');
  var body = $('body');

  body.css('margin', 0);

  exhibit.detach();
  $('body').empty()
   body.append("<div id='site-title'style='font-size:26px;text-align:center;margin-top:10px;margin-bottom:0px;'><a href='https://ds-omeka.haverford.edu/peacetestimonies' >Testimonies in Art & Action: Igniting Pacifism in the Face of Total  War</a></div><nav id='top-nav' role='navigation'> <ul class='navigation'><li>   <a href='https://ds-omeka.haverford.edu/peacetestimonies/neatline/fullscreen/mindmap2'>Home - Annotations Map</a></li><li>   <a href='/peacetestimonies/homepage'>Networks of Annotations by Artist</a>   <ul>  <li class='active'> <a href='/peacetestimonies/network-of-annotationspicasso'>Pablo Picasso</a>  </li>  <li> <a href='/peacetestimonies/neatline/fullscreen/group-meditteranean-annotation-version-two'>Muriel Rukeyser</a> <a href='/peacetestimonies/network-of-annotations-woolf'>Virginia Woolf</a> </li>  <li><a href='/peacetestimonies/neatline/fullscreen/hughes'>Langston Hughes</a>  </li>   </ul></li><li>   <a href='/peacetestimonies/posters'>Posters</a>   <ul>  <li> <a href='/peacetestimonies/art-as-a-way-of-spreading-ideas'>Art as a Way of Spreading Ideas</a>  </li>  <li> <a href='/peacetestimonies/definitions-of-pacifism'>Definitions of Pacifism</a>  </li>  <li> <a href='/peacetestimonies/feminism-virginia-woolf'>Feminism: Virginia Woolf</a>  </li>  <li> <a href='/peacetestimonies/pacifism-woolf'>Pacifism: Virgina Woolf</a>  </li>  <li> <a href='/peacetestimonies/poetry-and-peace-ruykeser'>Poetry and Peace: Ruykeser</a>  </li>  <li> <a href='/peacetestimonies/positive-peace-the-quakers-in-spain'>Positive Peace: the Quakers in Spain</a>  </li>  <li> <a href='/peacetestimonies/total-war-picasso'>Total War: Picasso</a>  </li>   </ul></li>  <li class='nav-item'><a href='https://ds-omeka.haverford.edu/peacetestimonies/collections/show/1' id='accessible-megamenu-1443645279021-6' class=''>Quaker &amp; Special Collections</a></li><li>   <a href='/peacetestimonies/about-project'>About</a>   <ul><li> <a href='/peacetestimonies/introduction'>Introduction</a>  </li><li><a href='/peacetestimonies/about-the-website' class=''>About the website</a></li><li> <a href='/peacetestimonies/acknowledgements'>Acknowledgements</a>  </li>  <li> <a href='/peacetestimonies/lead_curator' class=''>Lead Curator</a> </li> </ul></li></ul>  </nav>");

  $('body').append(exhibit);

  var position = function() {
    map.css('height', $(window).height());
    Neatline.execute('MAP:updateSize');
  }

  $(window).resize(position);
  position();

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-45185227-12', 'auto');
  ga('send', 'pageview');




});

