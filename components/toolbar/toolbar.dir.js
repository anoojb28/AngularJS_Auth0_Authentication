(function(){
    'use strict';
    angular.module('authApp').directive('toolbar',toolbar);
    function toolbar(){
        return {
        templateUrl: 'components/toolbar/toolbar.tpl.html',
            controller :toolbarController,
            controllerAs : 'toolbar'
        }
    }
    
    function toolbarController(auth, store, $location){
        console.log(auth);
        var vm = this;
        vm.login = login;
        vm.logout = logout;
        vm.auth = auth;
        
        function login(){
            console.log("sdfdsf");
            auth.signin({},function(profile,token){
                console.log("sdfsdf");
               store.set('profile',profile);
                store.set('id_token',token);
                $location.path('/home');
            },function(error){
                console.log("error")
            });
        }
        function logout(){
            store.remove('profile');
            store.remove('id_token');
            auth.signout();
            $location.path('/home');
        }
    }
    
})()