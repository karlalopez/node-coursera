module.exports = function(app) {
	var MongoDB = app.dataSources.MongoDB;

	MongoDB.automigrate('Customer', function(err){
		if (err) throw (err);
		// create the first two users
		var Customer = app.models.Customer;
		Customer.create([
			{username: 'admin', email: 'admin@admin.com', password: 'password'},
			{username: 'user', email: 'user@admin.com', password: 'password'}
			], function(err, users) {
				if (err) return cb(err);
				console.log(users)
				
				var Role = app.models.Role;
				var RoleMapping = app.models.RoleMapping;

				// create the admin role
				Role.create({
					name: 'administrator'
				}, function(err,role){
					if (err) throw (err);

					// make the first user (created above) the admin
					role.principals.create({
						principalType: RoleMapping.USER,
						principalId: users[0].id
					}, function(err, principal) {
						if (err) throw (err);
					});
				});

			}
		);
	});
};