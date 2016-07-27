var React = require('react');
var Thumbnaillist = require('./thumbnail-list')

var options = {
  thumbnailData: [{
    title: 'Tutorials',
    number: 32,
    header: 'learn react',
    description: 'React is a fantastic new library for making fast, dynamic pages. React is a fantastic new library for making fast, dynamic pages.',
    imageUrl: 'https://tleunen.github.io/react-mdl/react.svg'
  }, {
    title: 'Tutorials',
    number: 25,
    header: 'learn gulp',
    description: 'Gulp is a fantastic in every way. Gulp is a fantastic in every way.',
    imageUrl: 'https://cms-assets.tutsplus.com/uploads/users/45/posts/20903/preview_image/gulp-preview.png'
}]
};

//Ask react to render this class
var element = React.createElement(Thumbnaillist, options);

//when we ask react to render this class, we will tell it where to place the rendered element in the DOM
ReactDOM.render(element, document.querySelector('.target'));
