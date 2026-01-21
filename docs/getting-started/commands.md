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

## Assets
| Command | Commentary |
| --- | --- |
| /model | Open change player model UI |
| /update | Updating assets and prefabs via git. Haven't tested it. |

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
| /give | Give an item to a player |
| /player | Command for viewing info about and modifying the player. Also has some camera modifications. |
| /memories | Command for managing a player's memories |

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
| /instances | Everything instance related. Not sure exactly what instances are but they seem like copies of worlds? |
| /entity | Everyting entity related. Did not test. |
| /spawnitem | Spawns in an item to the world |

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
| /debugplayerposition | Prints pos, rot, head rot, and some tp information; spawns a "blue debug thingy" at your position. |

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
| /hitdetection | Toggle on hitboxes for hit detection for attacks |
| /hide | Hide/show players from everyone or specifically another player. |
| /droplist | Simulate drops from droplists assets. |

## Redundant
| Command | Commentary |
| --- | --- |
| /buildertoolslegend | Same thing as builder tools keybind |

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
| /packetstats | Seems ilke largely unhelpful packet information |
| /hitboxcollision | The help appears to indicate this allows you to attach a HitboxCollisionConfig asset to an entity |
| /ambience | Manage ambient sound and music |
| /debug | Seems to just draw useless debug shapes at the players location, but `/debug shape showforce` seems potentially useful |
| /spawnblock | Spawns a block it looks like as an entity at the specified location. DO NOT USE IF YOU MISSPELL THE BLOCK IT WILL CRASH THE WORLD |
| /editprefab | This command seems buggy as hell and is just less functional than /prefab. |
| /interaction | Run interactions like attack, use, abilities, etc. Some of them error out "no root interaction" and others disconnect you. |
| /networkchunksending | Toggle on/off whether you should receive chunks from the server. |
| /perm | Permissions management although I assume LuckPerms will be a cleaner way to do this |
| /path | Control npc pathing. Did not test |
| /objective | Mostly seems like a dev tool for managing player objectives. |
| /stresstest | Stress tests the server. Couldn't get this to work but seems like it could be helpful |
| /lighting | For getting and changing the lighting system. Can't get this to do anything. |
| /prefabspawner | Dev command for getting and setting data for prefab spawner blocks which can already be done via interacting. |
| /blockspawner | Unlike prefab spawners, block spawners don't appear to have a ui yet, but I can't get them to do anything for that matter. |
| /convertprefabs | Helps in updating prefabs. Presumably useful but the game just came out so not sure. |
| /itemstate | Sets the state of the currently held item but gives no indication of how to do that |

## Probably not relevant to most people
| Command | Commentary |
| --- | --- |
| /play | Single player only command for multiplayer gameplay |
| /landiscovery |  |

## Gameplay
| Command | Commentary |
| --- | --- |
| /fragment | Adjusts the fragment timer for a fragment world |
| /voidevent | Immediately triggers the void event in the given fragment world. Seems to also kick the player out of it or shut it down at the moment though |
| /leave | Leaves the fragment world. Does not work on my multiplayer server but works in singleplayer. |

## Don't know what this is
| Command | Commentary |
| --- | --- |
| /bindings | No idea |
| /hitbox | No idea |
| /desyncdamage | No idea |
| /blockset | Lists all block sets without args, errors if you put in a valid block set |
| /stash | Not sure what "container" means because it doesn't seem to work when looking at chests |
| /assets | Seems like an asset debugging tool |
| /checkpoint | Related to parkour checkpoints, no idea how to interact with them. |
| /worldpath | Looks to be an ordered series of waypoints in the world. Not sure what it is used for though |
| /reputation | No idea |
| /repulsion | No idea what a repulsion component is |
| /blockselect | Loads clipboard with every block in the game |