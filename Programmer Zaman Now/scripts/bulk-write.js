db.customers.bulkWrite([
  {
    insertOne: {
      document: {
        _id: "asep",
        full_name: "asep",
      },
    },
  },
  {
    insertOne: {
      document: {
        _id: "bambang",
        full_name: "bambang",
      },
    },
  },
  {
    updateMany: {
      filter: {
        _id: {
          $in: ["Ucup", "asep", "bambang"],
        },
      },
      update: {
        $set: {
          full_name: "Ucup Si Anak Haram",
        },
      },
    },
  },
]);
