define(['jade'], function(jade){
  return function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
 var houseName = house.toLowerCase()
buf.push('<div');
buf.push(attrs({ 'data-house':(houseName), "class": ('clearfix') }, {"data-house":true}));
buf.push('><h5 class="title">' + escape((interp = name) == null ? '' : interp) + ' (' + escape((interp = house) == null ? '' : interp) + ')</h5><p class="text-muted">Played by: ' + escape((interp = actor) == null ? '' : interp) + '</p><p class="text-primary">Best quote: <strong>' + escape((interp = quote) == null ? '' : interp) + '</strong></p><strong>' + escape((interp = episodes) == null ? '' : interp) + ' </strong><span class="text-muted">episodes as ' + escape((interp = name) == null ? '' : interp) + '</span></div>');
}
return buf.join("");
};
});