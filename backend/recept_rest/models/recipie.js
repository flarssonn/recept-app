
var counter = 100;

function Recipie(id, name, description, picture) {
    this.id = (!id)
        ? counter++
        : id;
    this.name = (!name)
        ? "empty"
        : name;
    this.description = (!description)
        ? "empty"
        : description;
    //this.picture = (!done)
        //? false
        //: done;
};

module.exports = Recipie;
