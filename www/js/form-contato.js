$$(document).on('page:init','.page[data-name="form"]', function(e){
        var page = e.detail;
        console.log(page.name);
        $$('#btnEnviar').on('click',function () {

                //var formData = app.form.convertToData('#form-user-content')
                var nameInput = $$('#nameInput').val();
                var emailInput = $$('#emailInput').val();
                var telefoneInput = $$('#telefoneInput').val();
                var inputBio = $$('#inputBio').val();
                
                var formData = { name: nameInput, email: emailInput, telefone: telefoneInput, bio: inputBio }
                console.log(formData);
                alert(JSON.stringify(formData))
                firebase.database().ref().child('contato').push(formData)
                .then( function () {
                        app.dialog.alert('Enviado com Sucesso');
                        $$('input#nameInput').val('');
                        $$('input#emailInput').val('');
                        $$('input#telefoneInput').val('');
                        $$('input#inputBio').val('');
                        
                }, function(error){
                        app.dialog.alert('Erro, confira no console');
                        console.error(error)
                })  
                                    
                //firebase.database().ref().child('usuarios').push(JSON.stringify(formData))

        });      

});      
    