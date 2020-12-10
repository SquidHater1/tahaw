(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['rank'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"rank\" score=\"score\">\r\n	<h5 class=\"rank_place\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"place") || (depth0 != null ? lookupProperty(depth0,"place") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"place","hash":{},"data":data,"loc":{"start":{"line":2,"column":24},"end":{"line":2,"column":33}}}) : helper)))
    + "</h5><span class=\"score\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":2,"column":58},"end":{"line":2,"column":66}}}) : helper)))
    + "--"
    + alias4(((helper = (helper = lookupProperty(helpers,"score") || (depth0 != null ? lookupProperty(depth0,"score") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"score","hash":{},"data":data,"loc":{"start":{"line":2,"column":68},"end":{"line":2,"column":77}}}) : helper)))
    + "</span>\r\n</div>";
},"useData":true});
})();