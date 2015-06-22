requirejs.config({baseUrl: 'js'});
requirejs(
    ['scribe', 'scribe-plugin-toolbar'],
    function (ScribeEditor, ScribePluginToolbar) {
      var toolbar = document.getElementById('toolbar');
      ['title', 'summary', 'body'].forEach(function (id) {
        var element = document.getElementById(id);
        var scribe = new ScribeEditor(element);
        scribe.use(ScribePluginToolbar(toolbar));
      });
    }
);
