angular
	.module('fm', ['FileManagerApp'])
	.config(['fileManagerConfigProvider', function (config) {
		var defaults = config.$get();
		config.set({
				listUrl: 'http://localhost:5000/list',
				downloadFileUrl: 'http://localhost:5000/download',
				uploadUrl: 'http://localhost:5000/upload',
				removeUrl: 'http://localhost:5000/remove',
				createFolderUrl: 'http://localhost:5000/createFolder',
				renameUrl: 'http://localhost:5000/rename',
				copyUrl: 'http://localhost:5000/copy'
			});
		config.set({
			// appName: 'angular-filemanager',
			pickCallback: function (item) {
				var msg = 'Picked %s "%s" for external use'
					.replace('%s', item.type)
					.replace('%s', item.fullPath());
				window.alert(msg);
			},

			allowedActions: angular.extend(defaults.allowedActions, {
				pickFiles: true,
				pickFolders: false,
			}),
		});

		// this is how we override modal functionality
		config.set({noModals: true})
	}]);

