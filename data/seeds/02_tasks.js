exports.seed = function(knex, Promise) {
    return knex("tasks").insert([
      {
        task_description: "Read",
        task_notes: "read",
        completed: 0,
        project_id: 1
      },
      {
        task_description: "Eat",
        task_notes: "nom nom nom",
        completed: 0,
        project_id: 1
      },
      {
        task_description: "Sleep",
        task_notes: "zzzzzzzzzz",
        completed: 0,
        project_id: 2
      },
      {
        task_description: "Shower",
        task_notes: "water noises",
        completed: 0,
        project_id: 2
      },
      {
        task_description: "Get dressed",
        task_notes: "put shirt + pants on before leaving",
        completed: 0,
        project_id: 3
      },
      {
        task_description: "Pour Cereal",
        task_notes: "dont you dare pour the cereal first you monster",
        completed: 0,
        project_id: 3
      },
      {
        task_description: "Put on shoes",
        task_notes: "left on left right on right",
        completed: 0,
        project_id: 3
      }
    ]);
  };