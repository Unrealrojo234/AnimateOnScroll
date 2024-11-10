<h1>Animate On Scroll</h1>
<p>For this, we will use a JavaScript API called <strong>Intersection Observer</strong></p>

<h3>How Does it Work 🤔?</h3>
<p>
  Basically the api, observes the position of all elements that it has been asigned. With this it will be able to identify intersectiong elements and a corresponding css animation will be added to it, either by adding a class list with the css animations or by using utility classes from css animations libraries e.g Animate CSS.
</p>

<h3>Lets get a hands on example 🫴.</h3>

<h3>PREREQUISITIES.</h3>
<ol>
  <li>Have an HTML and JAVSCRIPT file in a folder</li>
  <li>The html file should contain a basic template and "div's" with same class name e.g animDiv</li>
  <li>In the "Div's you can put any elements and content that you want"</li>
  <li>We'll also use JQUERY and Animate CSS libraries</li>
</ol>

<h3>Getting JQUERY(JAVASCRIPT LIBRARY) and Animate CSS(CSS LIBRARY) libraries via CDN</h3>
<a href="https://cdnjs.com/libraries/jquery">JQURY</a>
<br>
<a href="https://cdnjs.com/libraries/animate.css">Animate CSS </a>

<p>Copy and paste the respective link tags in the head section of your html file and don't forget to link your html and javascript file</p>

```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      $("h1").addClass("animate__animated animate__fadeInTopLeft");
      
    } else {
      $("h1").removeClass("animate__animated animate__fadeInTopLeft");
    }
  });
});

const cards = document.querySelectorAll(".animDiv");

cards.forEach((card) => {
  observer.observe(card);
});
```
<p>With this code snippet, we will only animate the h1 tags in divAnim class.</p>

<p>
  If you would like to explore more animations in the animate css library, visit their <a href="https://animate.style/">Website</a>
</p>

<h5>Happy coding! Feel free to modify the code to suit your animation style and look.</h5>
