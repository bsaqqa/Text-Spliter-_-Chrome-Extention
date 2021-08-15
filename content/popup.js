document.addEventListener(
  "DOMContentLoaded",
  function () {
      chrome.storage.sync.get(['split_prefix','split_append'], function(result) {
          document.querySelector('#prefix').value = result.split_prefix || "";
          document.querySelector('#append').value = result.split_append || "";
      });
    var generate = document.getElementById("generate");
    generate.addEventListener(
      "click",
      function () {
            var prefix = document.querySelector('#prefix').value;
            var title = document.querySelector('#title').value;
            var append = document.querySelector('#append').value;
            var result = document.querySelector('#result');

            chrome.storage.sync.set({"split_prefix": prefix}, function() {
                console.log('Value is set to ' + prefix);
            });
            chrome.storage.sync.set({"split_append": append}, function() {
                console.log('Value is set to ' + append);
            });
            title = title.split(' ').join('_');
            append = append.length>0 ? '_' + append: '';
            result.value = prefix + '_' + title + append;
      },
      false
    );
  },
  false
);

