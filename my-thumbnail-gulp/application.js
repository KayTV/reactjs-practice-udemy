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

var Badge = React.createClass({displayName: "Badge",
  render: function(){

    return React.createElement("button", {className: "btn btn-primary", type: "button"}, 
    this.props.title, " ", React.createElement("span", {className: "badge"}, this.props.number)
  )
  }
});

var Thumbnaillist = React.createClass({displayName: "Thumbnaillist",
  render: function() {
    var list = this.props.thumbnailData.map(function(thumbnailProps){
      return React.createElement(Thumbnail, React.__spread({},  thumbnailProps))
    })

    return React.createElement("div", null, 
        list
      )
  }
})

var Thumbnail = React.createClass({displayName: "Thumbnail",
  render: function() {
    return React.createElement("div", {className: "thumbnail"}, 
    React.createElement("img", {src: this.props.imageUrl}), 
    React.createElement("div", {className: "caption"}, 
      React.createElement("h3", null, this.props.header), 
      React.createElement("p", null, this.props.description), 
      React.createElement("p", null, 
        React.createElement(Badge, {title: this.props.title, number: this.props.number})
      )
    )
  )
  }
});
