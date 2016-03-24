angular.module('MyApp')
  .factory('Client', ['$resource', '$auth', 'railsResourceFactory', 
    function($resource, $auth, railsResourceFactory, SituationType, SituationKind) {
      var resource = railsResourceFactory({
        url: $auth.apiUrl() + '/clients', 
        name: 'personal',
        interceptors: ['setPagingHeadersInterceptor']
      });

      resource.name_plural = 'Alunos';
      resource.name_single = 'Aluno';
      resource.this_plural = 'os';
      resource.this_single = 'o';
      resource.resource_type = 'Client';
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