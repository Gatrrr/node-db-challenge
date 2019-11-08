exports.seed = function(knex, Promise) {
    return knex("resources").insert([
      {
        resource_name: "1 resource",
        resource_description: "need resourece"
      },
      {
        resource_name: "2 resource",
        resource_description: "need resourece"
      },
      {
        resource_name: "3 cresource",
        resource_description: "need resourece"
      },
      {
        resource_name: "green resource",
        resource_description: "need resourece"
      },
      {
        resource_name: "blue resource",
        resource_description: "need resourece"
      },
      {
        resource_name: "red resource",
        resource_description: "need resourece"
      }
    ]);
  };