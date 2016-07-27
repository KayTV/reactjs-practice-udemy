var Badge = require('badge');

//render function, sometime later
render: function() {
  return <div>
    <Badge text={this.prop.text} number={this.prop.number} />
  </div>
}
