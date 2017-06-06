
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('bills').del()
    .then(function () {
      // Inserts seed entries
      return knex('bills').insert([
        {id: 1, name:'Luz',month:'2',cost:'150000',company:'Electricaribe',type:'2',limit_date:knex.fn.now()},
        {id: 2, name:'Agua',month:'5',cost:'200000',company:'Triple A',type:'1',limit_date:knex.fn.now()},
        {id: 3, name:'Gas',month:'7',cost:'15000',company:'Gases del caribe',type:'3',limit_date:knex.fn.now()},
      ]);
    });
};
