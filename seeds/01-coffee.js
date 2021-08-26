exports.seed = function(knex, Promise) {
    return knex("coffee").del().then(() => {
        return knex("coffee").insert([{
            id: 1,
            name: "Black and Tan",
            roaster: "Ink",
            aroma: 3
        },{
            id: 2,
            name: "Holiday Roast",
            roaster: "Starbucks",
            aroma: 9
        },{
            id: 3,
            name: "House Quake",
            roaster: "Denver Coffee",
            aroma: 6
        }]);
    })
};
