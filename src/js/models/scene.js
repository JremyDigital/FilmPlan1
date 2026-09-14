export class Scene {
    static allScenes = [];
    constructor(intOrExt, location, timeOfDay, actors, script) {
        this.intOrExt = intOrExt;
        this.location = location;
        this.timeOfDay = timeOfDay;
        this.actors = actors;
        this.script = script;

        Scene.allScenes.push(this);
    }
}
