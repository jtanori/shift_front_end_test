define(['jade'], function(jade){
  return function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
buf.push('<nav role="navigation" class="navbar navbar-default"><span class="navbar-brand">Characters</span><form role="search" class="navbar-form"><div id="mainGroup" class="form-group"><input type="text" placeholder="Filter" class="form-control"/><button id="clear" type="reset" class="btn btn-link hide"><div class="glyphicon glyphicon-remove-sign"></div></button></div><div class="form-group"><button type="submit" class="btn btn-default">Go!</button></div></form></nav><ul class="nav nav-pills"><li data-sort-by="name" class="sort"><a>Name</a></li><li data-sort-by="house" class="sort"><a>House</a></li><li data-sort-by="episodes" class="sort"><a>Episodes</a></li><li data-sort-by="actor" class="sort"><a>Actor</a></li></ul><ul id="characters" class="listview list-unstyled clearfix"></ul>');
}
return buf.join("");
};
});