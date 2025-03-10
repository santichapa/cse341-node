const express = require('express');
const app = express();
const port = 8080
const data = {
  professionalName: "Alex Developer",
  base64Image: "iUklGRiYFAABXRUJQVlA4IBoFAABwFwCdASpgAGAAPm0wlEckIqIhKPM7YIANiWMAvCRBy3n17grnhjxnv28Sf0fhrpdGniqOK7QzlA5h+scjS/TZL+34KJcTOzm2rKJoF0i7+mKvyJNfhoqfh3/I01N4RDUhShkZMyXWgIF7v0TspnF9RndnNFOjXCuLRZsvQTYW1cYvx1kXsG7wzRcbpRN/orhxYYRvJ+8wceUA6WoCUZfttH4Tjhba2JytX18xzf6kfus/KS3GaiDdhUDe3r3u4F/jwxXgAP7yXxsUf6sC7Ge1wbRNMr1WLDYv6+9l7jPssdm2wJMUrliE50Ph+A9tYYdVAlYHgzlbdhpUgGgEcWBGr3WZ0PIl+Z+NOPtjNWrNqG7TjgdmdG4s+GLPRSL37jVo3YuEZcdAVv5V8u0CPjEqi863gHy+If24FNc7ZB+Z38G+WHT/y+9p/5uaxoDUuNzMhXSlPB/M8h6JxkJMuAOQIOb0HH2aJaL3EMCY0QlSXInFSGki0Cjk3RQjVzkzoRCbcDTrG8U3bstk6r/sAmAauQLSwe3hnys1V4AyNF1Kaj5TJGHenWVGNAeGGs8br3U+C4QAxQFtWumUt0WtmDX7qahjyexuD1NQWfelq4NnR580NTmIV3q8+9pEupMg45tyWRIzcs7GzmSZfUQ69+1jvYX1Vyt1bvYH0+NM+GEEjUAJcyONegPhIcCFNlBLWlPyR46x35vOBlpeQolWjL10icv3IL179SAgiD0gIG6BSuC/XeivOMvrQcQr2CKdXyZE6Ws2jV0DahY/zvYHfMs7el8PFfb6VxniMuPU4b5OMA2oASlDdbdRd6Q7aARmkQ1GvDSaZTdRBwPeb1bv1a7q9LlgSG91OLWABE78cvqFGEjbyf7PXcUl2xLNne/DMJBeOGw9YkNvoAzO1VFKBwzsB8MRzvZ8JnHEZhbMdEA/4I3keFfb4II/CLwt2+9hrHv0M9wmXmeU7KcaMHZDZcG1MRQMo42TYaCtdEfHpm2lzyaUQaXsWcZSNrSny7gKuKGdEY2IkEGkSd3GJtfe1s4XW567+ZKNofy4lyZdXs32wcd9jxbzdiGBGa3n1kdbLsrJYQZtnDn/XP5DFlXRtJrijgK5IgcpV37B26QK6w85GEC/m+mfNbxk+TAqZP+5p0WU074NJSG9ZFhUZFUaIhm9SPAUOhApoY48xDp+3X9l4QsDuArMC0Bbq+vTWHKLPJ/hOR16qgtqytnPZXY5pIrI9UfxS6tavgFxz97FmcAhNAR1ZMUo5LxEVF7XhbHsQpZbiiMtBmPB3uyV09BkvLa8gMOToGitW9POJspsssZC5mvRg5q35InDfpSjrVQCIek5UnloglR2RHAeJsok/G2tqoCu+swAC6r4yVT6Ocqo3Ss2Od75tem1D6hmHCuxDgQ4gNCf/8aEFTRseIVrP3UknnE6RHTjBjL5wVTMrGMo21Q3JnQmY1KZD+Fq3BmC8irTjBpxfh/GprzN8xNlwH6iLV3o77BwU1IojRMCnMxGu+WmlZLNO8z57VwhgcvX6lMEO0stP0EJcGtd9NUeTrMuuveSOaOxhk3CdUhorYOC0dCtVoL7VS583Txfekt9ju4XmO+Bw70rdl/8UCpypET0H+TySuCWae8KxT8Hj5+kgPWbkz3slyz9j20bZtFM7LyvtYxOuXHDZv8/f+3suXhzNuUxPnkDYiXydVYKNU/ghxrE1Kn6r67bub6V7vfQgFbiglMybLUUAAAA", // Replace this with actual base64 image data
  nameLink: {
      firstName: "Alex",
      url: "https://alex-portfolio.com"
  },
  primaryDescription: "Full-stack developer with a passion for building user-friendly applications.",
  workDescription1: "Experienced in JavaScript, React, Node.js, and MongoDB.",
  workDescription2: "Enjoys problem-solving and exploring innovative tech solutions.",
  linkTitleText: "Find me on social platforms:",
  linkedInLink: {
      text: "LinkedIn",
      link: "https://linkedin.com/in/alexdeveloper"
  },
  githubLink: {
      text: "GitHub",
      link: "https://github.com/alexdeveloper"
  }
}
 
app.get('/professional', (req, res) => {
    res.json(data);
});
 
app.listen(process.env.PORT || port, () => {
  console.log('Web Server is listening at port ' + (process.env.PORT || port));
});