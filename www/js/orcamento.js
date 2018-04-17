$$(document).on('page:init','.page[data-name="orcamento"]', function(e){
        var page = e.detail;
        console.log(page.name);
        $$('#btnSalvar').on('click',function () {

                //var formData = app.form.convertToData('#form-user-content')
                var nameInput = $$('#nameInput').val();
                var cidadeInput = $$('#cidadeInput').val();
                var emailInput = $$('#emailInput').val();
                var comodoInput = $$('#comodoInput').val();
                // var inputBirth = $$('#inputBirth').val();
                var inputBio = $$('#inputBio').val();
                
                var formData = { name: nameInput, cidade: cidadeInput, email: emailInput, comodo: comodoInput, bio: inputBio }
                console.log(formData);
                // alert(JSON.stringify(formData))
                firebase.database().ref().child('orçamento').push(formData)
                .then( function () {
                        app.dialog.alert('Enviado com Sucesso');
                        $$('input#nameInput').val('');
                        $$('input#cidadeInput').val('');
                        $$('input#emailInput').val('');
                        $$('input#comodoInput').val('');
                        $$('input#inputBio').val('');
                        // $$('input#inputBirth').val('');
                        
                }, function(error){
                        app.dialog.alert('Erro, confira no console');
                        console.error(error)
                })  
                                    
                //firebase.database().ref().child('usuarios').push(JSON.stringify(formData))

        });      

});      

