tinymce.PluginManager.add('vrml', function(editor, url) {
  // Add a button that opens a window
  editor.addButton('vrml', {
    text: 'Add Changes',
    icon: false,
    onclick: function() {
      var content = editor.getContent({ format: 'text' });
      changeScene(String(content).trim());
    }

  /* $('#submitButton').click(function() {
  //$('.ola').append("<x3d width='500px' height='400px'> " + "<scene>" +"<shape>" + "<appearance>" + "<material diffuseColor='0 1 0'></material>" + "</appearance>" + "<cone></cone>"+ "</shape>" + "</scene>" + "</x3d>");
  //$(".ola").append("<scene>" +"<shape>" + "</shape>" + "</scene>");
  //console.log("<x3d width='500px' height='400px'> " + "<scene>" +"<shape>" + "<appearance>" + "<material diffuseColor='0 1 0'></material>" + "</appearance>" + "<cone></cone>"+ "</shape>" + "</scene>" + "</x3d>");

  //var shape = '<shape><appearance> <material diffuseColor="0 1 0"></material> </appearance><cone></cone></shape>';
  console.log($('.wrlArea').val().trim());
  var shape = $('.wrlArea').val().trim();
  $("scene").append(shape);

  /*x = Math.random() * 6 - 3;
  y = Math.random() * 6 - 3;
  z = Math.random() * 6 - 3;

  s0 = Math.random() + 0.5;
  s1 = Math.random() + 0.5;
  s2 = Math.random() + 0.5;
  
    var t = document.createElement('Transform');
    t.setAttribute("translation", x + " " + y + " " + z );
    t.setAttribute("scale", s0 + " " + s1 + " " + s2 );
    var s = document.createElement('Shape');
  
  // Appearance Node
  var app = document.createElement('Appearance');
  
  // Material Node
  var mat = document.createElement('Material');
  
  app.appendChild(mat);
  
  s.appendChild(app);
  
    t.appendChild(s);
    var b = document.createElement('Box');
    s.appendChild(b);
    
    //var ot = document.getElementById('root');
    //ot.appendChild(t);

  var root = document.getElementById("unbao");
  root.appendChild(t);
  //console.log(root)
})*/


  });
  //Add Shape button
    editor.addButton('Shape', {
    text: 'Shapes',
    icon: false,
    onclick: function() {
      editor.windowManager.open({
        title: 'Shape Editor',
        body: [
          {type: 'checkbox', name: 'Appearance', label: 'Appearance', class: 'Appearance'},
          {type: 'checkbox', name: 'Geometry', label: 'Geometry', class: 'Geometry'}
        ],
        onsubmit: function(e) {
          send_to_editor = '#VRML V2.0 utf8' + "<br />" + 'Shape {' + "<br />";

          if (e.data.Appearance == true){
            send_to_editor += '&nbsp; appearance' + "<br />";
          }
          if (e.data.Geometry == true){
            send_to_editor += '&nbsp; geometry' + "<br />";
          }

          send_to_editor += '}';
          editor.insertContent(send_to_editor); 
        }
      });
    }
  });

  // Adds a menu item to the tools menu
  editor.addMenuItem('vrml', {
    text: 'VRML EDITOR',
    context: 'tools',
    onclick: function() {
      // Open window with a specific url
      editor.windowManager.open({
        title: 'TinyMCE site',
        url: 'http://www.tinymce.com',
        width: 800,
        height: 600,
        buttons: [{
          text: 'Close',
          onclick: 'close'
        }]
      });
    }
  });
});