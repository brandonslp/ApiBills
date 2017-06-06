
exports.up = function(knex, Promise) {
  return Promise.all([
	  	knex.schema.createTable('bills', function(table){
	  		table.increments('id');
	  		table.string('name');
			table.integer('month');
			table.decimal('cost');
			table.string('company');
			table.integer('type');
			table.timestamp("limit_date");
			table.integer('status').defaultTo(0);
			table.timestamp("created_at").defaultTo(knex.fn.now());
		    table.timestamp("updated_at").defaultTo(knex.fn.now());
		    table.timestamp("deleted_at").nullable();
  		})
  	])
};

exports.down = function(knex, Promise) {
  knex.schema.droptable('bills');
};
