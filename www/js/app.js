// Dom7
var $$ = Dom7;

    $$('.SignOut').hide();
     $$('.orcamento').hide();
    $$('.login-screen-open').show();


// Framework7 App main instance
var app  = new Framework7({
  root: '#app', // App root element
  id: 'io.framework7.testapp', // App bundle ID
  name: 'Framework7', // App name
  theme: 'auto', // Automatic theme detection
  // App root data
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
      // Demo products for Catalog section
      products: [
        {
          id: '1',
          title: 'Apple iPhone 8',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis.'
        },
        {
          id: '2',
          title: 'Apple iPhone 8 Plus',
          description: 'Velit odit autem modi saepe ratione totam minus, aperiam, labore quia provident temporibus quasi est ut aliquid blanditiis beatae suscipit odio vel! Nostrum porro sunt sint eveniet maiores, dolorem itaque!'
        },
        {
          id: '3',
          title: 'Apple iPhone X',
          description: 'Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero blanditiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet quos, accusamus earum asperiores officiis assumenda optio architecto quia neque, quae eum.'
        },
      ]
    };
  },
  // App root methods
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  // App routes
  routes: routes,
});

// Init/Create views
var homeView = app.views.create('#view-home', {
  url: '/'
});
var catalogView = app.views.create('#view-catalog', {
  url: '/catalog/'
});
var settingsView = app.views.create('#view-settings', {
  url: '/settings/'
});


// Login Screen Demo
$$('#my-login-screen .SignUp').on('click', function () {
  var username = $$('#my-login-screen [name="email"]').val();
  var password = $$('#my-login-screen [name="password"]').val();

  // Alert username and password
  app.dialog.alert('Username: ' + username + '<br>Password: ' + password);

  firebase
  .auth()
  .createUserWithEmailAndPassword(username,password) //promisses
  .then(function(){
    app.dialog.alert('Bem vindo:' + username);
    this.$$('.toolbar-inner').Text('Bem vindo:' + username);
  })
  .catch(function(error){
    console.error(error.code)
    console.error(error.message)
    app.dialog.alert('Falha ao cadastrar, verifique o erro no console');
    //this.$$('.toolbar-inner').Text('Bem Vindo: '+username);
  })
  // Close login screen
  app.loginScreen.close('#my-login-screen');
});

$$('#my-login-screen .SignIn').on('click', function () {
  var username = $$('#my-login-screen [name="email"]').val();
  var password = $$('#my-login-screen [name="password"]').val();

  // Alert username and password
  //app.dialog.alert('Username: ' + username + '<br>Password: ' + password);

  firebase
  .auth()
  .signInWithEmailAndPassword(username,password) //promisses
  .then(function(){
    app.dialog.alert('Bem vindo:' + username);
    // this.$$('.toolbar-inner').text('Bem vindo:' + username + 'vc esta logado');
    $$('.SignOut').show();
    $$('.orcamento').show();
    $$('.login-screen-open').show();
    $$('input#email').val('');
    $$('input#password').val('');
  })
  .catch(function(error){
    console.error(error.code)
    console.error(error.message)
    if (error.code == 'auth/invalid-email'){
      app.dialog.alert('E-mail invalido no seu formato!')
    }
    app.dialog.alert('Falha ao cadastrar, verifique o erro no console');
    //this.$$('.toolbar-inner').Text('Bem Vindo: '+username);
  })
  // Close login screen
  app.loginScreen.close('#my-login-screen');
});

$$('#my-login-screen .SignOut').on('click', function () {
  app.loginScreen.close('#my-login-screen');
    $$('input#email').val('');
    $$('input#password').val('');

  firebase
  .auth()
  .signOut()//promisses
  .then(function(){
    //this.$$('.toolbar-inner').Text('Usuario não autenticado');
    app.dialog.alert('Usuario deslogado');
    app.loginScreen.close('#my-login-screen');
    $$('.SignOut').hide();
    $$('.orcamento').hide();
    $$('.login-screen-open').show();
  }, function(error){
    console.error(error)
  })
});
  $$('#my-login-screen .login-screen-close').on('click', function(){
     $$('input#email').val('');
     $$('input#password').val(''); 
  })
  // $$('.logoff').on('click', function() {
  //   firebase
  //   .auth()
  //   signOut()
  //   .then(function (){
  //     this.$$('.toolbar-inner').text('Usuario não autenticado');
  //     app.dialog.alert('Usuario não autenticado');
  //     $$('input#email').val('');
  //     $$('input#password').val('');
  //     $$('.logoff').hide();
  //     $$('.orcamento').hide();
  //     $$('.login-screen-open').show();
  //   }, function(error){
  //     console.error(error)
  //   })
  // })
