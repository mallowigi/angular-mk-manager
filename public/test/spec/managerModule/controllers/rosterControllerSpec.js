/**
 * Created by Elior on 30/10/13.
 */
define(['angularMocks', 'managerModule/managerModule',
	'managerModule/controllers/RosterController'
], function(ngMocks, ManagerModule, RosterController){
	"use strict";
	var $rootScope, $controller, rosterCtrlScope, rosterCtrl;
	describe('Testing controllers', function(){

		beforeEach(module('mk.managerModule.controllers'));

		beforeEach(inject(['$rootScope', '$controller', function(_$rootScope_, _$controller_){
			$rootScope = _$rootScope_;
			$controller = _$controller_;
		}]))

		describe('Testing RosterController: ', function(){

			beforeEach(function() {
				rosterCtrlScope = $rootScope.$new();
				rosterCtrl = new RosterController(rosterCtrlScope);
			});

			it('should be defined', function(){
				expect(rosterCtrl).toBeDefined();
			})

		})

		describe('Testing RosterController integration:', function(){
			beforeEach(function() {
				rosterCtrlScope = $rootScope.$new();
				rosterCtrl = $controller('RosterController', {
					$scope: rosterCtrlScope
				});
			});

			it('should be defined', function(){
				expect(rosterCtrl).toBeDefined();
			});
		});
	})
})