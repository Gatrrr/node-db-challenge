exports.seed = function(knex, Promise) {
    return knex("projects").insert([
      {
        project_name: "Do work",
        project_description: "A lot of work to do here",
        completed: 0
      },
      {
        project_name: "Work Work Work",
        project_description: "krow krow krow",
        completed: 0
      },
      {
        project_name: "wOrK wOrK wOrK",
        project_description: "WoRk WoRk WoRk",
        completed: 0
      }
    ]);
  };