# Command Commentary

I think the next step after finishing filling this out is to group the commands by type (mostly already done by the Owner property which I'll remove later) in order to cleanly present to people the commands they should check out.

## Building
| Command | Commentary |
| --- | --- |
| /tint | Tints the selection a certain color (pass a hex value like `#000000`) |
| /submerge | Replaces air/fluids in selection with another fluid |
| /scriptedbrushes | No idea |
| /repairfillers | No idea |
| /replace | Replace a block with another |
| /setblocks | Set all blocks in selection |
| /redo | Redo |
| /fillblocks | Fill air with blocks |
| /pos1 | Set selection position 1 |
| /pos2 | Set selection position 2 |
| /stack | Stack selection in looking or otherwise specified direction |
| /move | Moves the selection unlike worldedit |
| /settoolhistorysize |  |
| /copy | Copy selection to clipboard |
| /shift | Moves the selection. Not an easy command to use |
| /selectchunk | Changes selection to be the current chunk |
| /selectchunksection | Changes selection to be the current chunk section |
| /cut | Cut selection to clipboard |
| /flip | Flips clipboard |
| /paste | Pastes clipboard |
| /wall | Creates walls with selection. Can also generate floor/roof |
| /hotbar | Saves up to 10 hotbars and allows you to switch between them |
| /rotate | Rotates clipboard |
| /expand | Same as contract but expanding |
| /contractselection | Downsizes selection in the direction(s) you are looking. IT SAYS ALL DIRECTIONS THAT ISN'T TRUE. Negative values still shrink selection but from the other side. |
| /clearblocks | Effective alias of /set 0 |
| /extendface | No idea |
| /hollow | Sets inside |
| /deselect | Clears selection |
| /editline | Might be bugged says it needs 7 arguments |
| /clearedithistory | Clear clipboard history |
| /editprefab |  |
| /importobj |  |
| /updateselection |  |
| /environment |  |
| /prefab |  |
| /gmask |  |
| /clearentities | Clears entities in selection |
| /undo |  |
| /importimage |  |
| /selectionhistory |  |
<!-- Leaving a gap here for the moment to show the divide between the things categorized as builder tools and the ones not to see how similar they are before merging -->
| /fluid | Can be used to spawn a lot of fluid |

## Utility
| Command | Commentary |
| --- | --- |
| /tp | Teleport a player to a location or other player |
| /gamemode | Switching a player's gamemode |
| /sudo | Execute a command as another player |
| /help | UI command manual |
| /stop |  |
| /auth | Manages authentication for the server |
| /backup |  |
| /warp | A way to set manage locations to teleport to |
| /say | Broadcasts message to server |
| /toggleblockplacementoverride | Enable or disable block plavement override |
| /plugin | Command for managing plugins |

## Player Management
| Command | Commentary |
| --- | --- |
| /ban | Does proper account lookup so all bans are based on account and not name; also only works on real accounts |
| /whitelist | Manage whitelist |
| /kick | Kick a player |
| /unban | Unban command |
| /op | Add/remove server operators |
| /recipe | Manage recipies a player knows |
| /maxplayers | Sets the maximum allows players |
| /kill | Kill a player |
| /inventory | Managing player inventories |

## World Management
| Command | Commentary |
| --- | --- |
| /time | Sets the time for a world |
| /block | Block getting, setting, debugging, and some WorldEdit-esk operations as well |
| /world | Everything for managing worlds |
| /particle |  |
| /chunk | Similar to block command but for chunks; info/debugging/regenerating |
| /npc |  |
| /spawning | Related to the spawning of NPCs |
| /spawn | Teleport or setthe world spawn |
| /setticking | Toggle on or off world ticking |
| /worldgen | Benchmarking command and worldgen config reload command. Guessing the worldgen reload might be needed when working on custom world generation? |
| /worldmap | World map related settings |
| /weather | Manage the weather |
| /hide |  |

## Info
| Command | Commentary |
| --- | --- |
| /whereami | Get current location of a player |
| /who |  |
| /version |  |
| /whoami |  |
| /ping | Get the ping for a player |
| /server |  |
| /commands | Dumps all commands into file on server |
| /packs | Lists all loaded asset packs |

## Test Behaviors
| Command | Commentary |
| --- | --- |
| /eventtitle | Debug command to send a title to all players |
| /notify | Send a notification to all players |
| /mount | Dismount or check mount status |
| /cursethis | Curses or un-curses the item in your hand. No idea what this does. |
| /camshake | Apply effects to the camera |
| /refer | Initiates a server transfer |
| /damage | Deals damage to a player |
| /sound | Opens play sound UI |
| /network | Simlated network latency |

## Debug/Useless
| Command | Commentary |
| --- | --- |
| /wait | Wait a specified amount of time. No idea what this might be used for |
| /emote | Plays an animation? Right now there is a short list of 5 allowed ones |
| /hub | Something related to the CreativeHub instance only probably |
| /validatecpb | Literally crashed my client |
| /sleep | Appears to test consecutive short sleep calls |
| /messagetest | Appears to test something about messages |
| /viewport | Literally no idea creating a viewport seems to regenerate chunks. |
| /hudtest | Test that hides the hotbar |
| /pidcheck | Check if a process with a given id is running |
| /echo | Echos the input text |
| /log | Set log levels |
| /tagpattern | Seems like a debug command for testing stuff that probably doesn't matter to modders |

## Probably not relevant to most people
| Command | Commentary |
| --- | --- |
| /play | Single player only command for multiplayer gameplay |
| /landiscovery |  |

## Unsorted

| Command | Owner | Server/Development Relevance | Commentary |
| --- | --- | --- | --- |
| /ambience | Ambience | No | Manage ambient sound and music |
| /droplist | AssetModule | Unknown | Simulate drops from droplists |
| /blockset | BlockSetModule | No | Lists all block sets without args, errors if you put in a valid block set |
| /blockspawner | BlockSpawner | Maybe | Gets and sets the spawner id of blockspawner blocks |
| /hitbox | CollisionModule |  | No idea |
| /desyncdamage | DamageModule |  |  |
| /debug | DebugPlugin | Infrequent | Seems to just draw useless debug shapes at the players location, but `/debug shape showforce` seems potentially useful |
| /instances | Instances |  | Everything instance related. Not sure exactly what instances are but they seem like copies of worlds? |
| /interaction | InteractionModule |  |  |
| /spawnitem | ItemModule | No | Spawns in an item to the world |
| /memories | Memories |  |  |
| /model | Model | No | Open change player model UI |
| /objective | Objectives |  |  |
| /checkpoint | Parkour | Parkour | Related to parkour checkpoints |
| /worldpath | Path |  |  |
| /path | Path |  |  |
| /perm | PermissionsModule | No | Permissions management although I assume LuckPerms will be a cleaner way to do this |
| /fragment | Portals |  | No idea |
| /voidevent | Portals |  | No idea |
| /leave | Portals |  | No idea |
| /prefabspawner | PrefabSpawnerModule |  |  |
| /reputation | Reputation |  |  |
| /bindings | ServerManager | No | Not sure what the response of this command is |
| /blockselect | Universe | No | Loads clipboard with every block in the game |
| /assets | HytaleServer | No | Seems like an asset debugging tool |
| /buildertoolslegend | HytaleServer | No | Same thing as builder tools keybind |
| /lighting | HytaleServer |  |  |
| /repulsion | HytaleServer |  | No idea what a repulsion component is |
| /player | HytaleServer |  |  |
| /convertprefabs | HytaleServer | Frequent | Helps in updating prefabs. Presumably useful but the game just came out so not sure. |
| /itemstate | HytaleServer |  | Sets the state of the currently held item but gives no indication of how to do that |
| /update | HytaleServer |  |  |
| /give | HytaleServer |  |  |
| /spawnblock | HytaleServer |  |  |
| /entity | HytaleServer |  |  |
| /networkchunksending | HytaleServer |  |  |
| /hitdetection | HytaleServer |  | Toggle on hitboxes for hit detection for attacks |
| /stash | HytaleServer |  | Not sure what "container" means because it doesn't seem to work when looking at chests |
| /debugplayerposition | HytaleServer | No | Prints pos, rot, head rot, and some tp information; spawns a "blue debug thingy" at your position. |
| /hitboxcollision | HytaleServer |  | The help appears to indicate this allows you to attach a HitboxCollisionConfig asset to an entity |
| /packetstats | HytaleServer | No | Seems ilke largely unhelpful packet information |
| /stresstest | HytaleServer | Maybe | Stress tests the server. Couldn't get this to work but seems like it could be helpful |
