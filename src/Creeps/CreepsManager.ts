import { CreepType } from "Spawners";
import { HarvesterCreep } from "./HarvesterCreep";


export class CreepManager {

    static run() {
        for (var name in Game.creeps) {
            var creep = Game.creeps[name];
            if (creep.memory.role == CreepType.MINER) {
                var harvester = new HarvesterCreep(creep);
                harvester.run();
            }
            if (creep.memory.role == CreepType.BUILDER) {
                //Do builder stuff
            }
        }
    }

}
