angular.module('MyApp')
  .factory('Personal', ['$resource', '$auth', 'railsResourceFactory', 
    function($resource, $auth, railsResourceFactory, SituationType, SituationKind) {
      var resource = railsResourceFactory({
        url: $auth.apiUrl() + '/personals', 
        name: 'personal',
        interceptors: ['setPagingHeadersInterceptor']
      });

      resource.name_plural = 'Personais';
      resource.name_single = 'Personal';
      resource.this_plural = 'os';
      resource.this_single = 'o';
      resource.resource_type = 'Personal';
      resource.fields = { 
        email: Entity.createStandardField('Email', 'email', 'default', false),
        password: Entity.createCustomField('Senha', 'password', 'default', false),
        password_confirmation: Entity.createCustomField('Confirmação de Senha', 'password_confirmation', 'default', false)
      }
      resource.fields_before = [ ];
      resource.fields_after = [ resource.fields.email, resource.fields.password, resource.fields.password_confirmation ];
      
      resource.fields.password.hide_on_list = true;
      resource.fields.password_confirmation.hide_on_list = true;

      return resource;
  }]);