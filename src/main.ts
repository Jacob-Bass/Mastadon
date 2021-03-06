import { ErrorMapper } from "utils/ErrorMapper";
import { RoomMapper } from "Provisioning"
import { CreepManager } from "Creeps";
import { SpawnManager, SpawnQueueItem, CreepType } from "Spawners";
// When compiling TS to JS and bundling with rollup, the line numbers and file names in error messages change
// This utility uses source maps to get the line numbers and file names of the original, TS source code
export const loop = ErrorMapper.wrapLoop(() => {
  console.log(`Current game tick is ${Game.time}`);
  RoomMapper.provision();
  CreepManager.run();
  // Automatically delete memory of missing creeps
  for (const name in Memory.creeps) {
    if (!(name in Game.creeps)) {
      var creep = Memory.creeps[name];
      var room = Game.rooms[creep.room];
      SpawnManager.AddToSpawnQueue(room, new SpawnQueueItem(creep.role as CreepType, 1));
      delete Memory.creeps[name];
    }
  }
});
