# Command Commentary
I'm not 100% finished but I've looked through source/game and tested almost all the commands that exist. I've grouped them together and added commentary that might (or might not) help you better understand what commands would be useful to you. If you find an inaccuracy in any of this (typos, missing commands, wrong information), please create an issue on the GitHub and I'll do my best to correct it!

> [!NOTE]
> If you see this and happen to be a Hytale Developer (or know one), I've compiled a list of bugs at the bottom of this page relating to commands.

### Aside: Macros
I have yet to put aside the time to figure out exactly what macros exist/whether or not I have mixed some into this list, but at the very least I know they exist as I use `/noon` regularly (set time to noon and toggles time cycle).

## Utility
| Command | Commentary |
| --- | --- |
| /tp | Teleport a player to a location or other player. |
| /gamemode | Switching a player's gamemode. |
| /sudo | Execute a command as another player. |
| /help | UI command manual. |
| /stop | Shuts down the server. |
| /auth | Manages authentication for the server. |
| /warp | A way to set manage locations to teleport to. |
| /say | Broadcasts message to server. |
| /toggleblockplacementoverride | Enable or disable block plavement override. |
| /plugin | Command for managing plugins. |

## Server Administration
| Command | Commentary |
| --- | --- |
| /kick | Kick the specified player. |
| /ban | Ban the specified player (by UUID). |
| /unban | Unban the specified player. |
| /whitelist | Manage whitelist. |
| /op | Manage server operators. |
| /maxplayers | Sets the maximum allows players (modifies ) |
| /give | Give an item to a player. |
| /player | Manage other players (stats, effects, camera, etc.). |
| /inventory | Manage player inventories. |
| /memories | Manage player memories. |
| /kill | Kill the specified player. |

## World Management
| Command | Commentary |
| --- | --- |
| /block | Everything for managing blocks. |
| /chunk | Everything for managing chunks. |
| /world | Everything for managing worlds. |
| /entity | Everyting for managing entities. |
| /npc | Everything for managing NPCs. |
| /spawning | Related to the spawning of NPCs. 
| /worldmap | Everything for managing the world map. |
| /instances | Everything for managing instances. |
| /time | Sets the time for a world. ||
| /spawn | Teleport or set the world spawn. |
| /weather | Manage the weather. |

## Info
| Command | Commentary |
| --- | --- |
| /whereami | Get current location of a player. |
| /whoami | Get basic info about a player. |
| /who | Get your name and displayname (ONLY WORKS ON YOU). |
| /version | Get the current server version. |
| /ping | Get the ping for a player. |
| /server | Get performance information about the server. |
| /commands | Dumps all commands into file on server .|
| /packs | Lists all loaded asset packs. |
| /packetstats | Gets statistics about a given packet. |

## Singleplayer
| Command | Commentary |
| --- | --- |
| /play | Single player only command for toggling multiplayer modes. |
| /landiscovery | Toggles lan discovery. |
| /hub | Used in the singleplayer "Creative" type world (server) to go back to the hub world (game world). |

## Building

> [!WARNING]
> I haven't finished going over this category of commands yet, so the commentary is incomplete and the commands could be miscategorized.

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

## Test Behaviors
| Command | Commentary |
| --- | --- |
| /hitdetection | Toggle on hitboxes for hit detection for attacks. |
| /eventtitle | Debug command to send a title to all players. |
| /notify | Send a notification to all players. |
| /mount | Dismount or check mount status. |
| /cursethis | Curses or un-curses the item in your hand. Cursed items are removed from the player if they die in a fragment (possibly also when they leave a fragment but this kicks me atm). |
| /camshake | Apply effects to the camera. |
| /refer | Initiates a server transfer. |
| /damage | Deals damage to a player. |
| /sound | Plays a sound to the player/opens play sound UI. |
| /model | Set/reset a player's model/open change player model UI. |
| /particle | Opens particle spawning UI. |
| /network | Simlated network latency. |
| /hide | Hide/show players from everyone or specifically another player. |
| /droplist | Simulate drops from droplists assets. |
| /debug | Mostly useless dev tool that draws debug shapes at the players location, but `/debug shape showforce` seems like a useful tool to show applied velocities. |
| /networkchunksending | Toggle on/off whether you should receive chunks from the server. |
| /objective | Mostly seems like a dev tool for managing player objectives. |
| /itemstate | Takes the players currently held item and applys the argument as the item's state. |
| /fragment | Adjusts the fragment timer for a fragment world. |
| /leave | Leaves the fragment world. It seems like there are currently some issues leaving the fragment world so this command sometimes disconnects the player (same as leaving through the portal though). |
| /fluid | Can be used to spawn a lot of fluid. |
| /recipe | Mange recipies a player knows. |
| /setticking | Toggle on or off world ticking. |
| /spawnitem | Spawns in an item to the world. |

## Mostly Useless
| Command | Commentary |
| --- | --- |
| /prefabspawner | Dev command for getting and setting data for prefab spawner blocks which can already be done via interacting. |
| /perm | Simple permissions management command, although I would strongly recommend using [LuckPerms](https://www.curseforge.com/hytale/mods/luckperms) instead. |
| /blockspawner | Unlike prefab spawners, block spawners don't appear to have a ui yet, but I can't get them to do anything for that matter. |
| /convertprefabs | Helps in updating prefabs. Presumably useful but the game just came out so not sure. |

## Development Tools (Probably Useless)
| Command | Commentary |
| --- | --- |
| /log | Set log levels of loggers. |
| /wait | Wait a specified amount of time. Doesn't seem to do anything else, probably a dev tool. |
| /sleep | Test consecutive short sleep calls, or adjusts TickingThread.SLEEP_OFFSET (not sure what this does). Probably a dev tool. |
| /emote | Plays an animation? Right now I can barely get it to work on any assets and it plays the emote for such a short duration I assume the command is a dev tool. |
| /validatecpb | Literally crashed my client, command name and description sound like a dev tool. |
| /messagetest | Dev tool that tests something about translation params (internal way of handling messages with params in different languages). |
| /hudtest | Dev tool that toggles the hotbar visibility. |
| /pidcheck | Dev tool that checks if a process with a given id is running. The singleplayer flag when passed literally just makes the command tell you singleplayer isn't supported, which itself has a typo that says it "only works in singleplayer". :skull: |
| /echo | Echos the input text. |
| /bindings | Print IO server manager bindings. |
| /tagpattern | Tests a block type against a tag pattern. |
| /interaction | Run interactions like attack, use, abilities, etc. Some of them error out "no root interaction". |
| /buildertoolslegend | Same thing as toggle builder tools legend keybind. |
| /debugplayerposition | Prints pos, rot, head rot, and some tp information; spawns a "blue debug thingy" at your position. |
| /editprefab | It's hard to be 100% sure but this command seems buggy as hell and really just a less functional /prefab. |
| /hitbox | When given a hitbox id, returns information about the hitbox. |
| /desyncdamage | Togggles DamageSystems.FilterUnkillable.CAUSE_DESYNC which just makes players not take damage. |
| /assets | Asset debugging tool. |
| /blockselect | Loads clipboard with every block in the game. |

## Probable Bugs
| Command | Commentary |
| --- | --- |
| /lighting | For getting and changing the lighting system. The sub command to change the lighting `/lighting calcuation` mistakenly sets the lighting calculation to what it already is and not the value passed in by the user. |
| /voidevent | Immediately triggers the void event in the given fragment world. Also mistakenly sets the portal world's timer to 1 second (likely thinking or at one point this timer started the void event but this one timer is responsible both for starting the event at 180s and kicking the player out at 0s) which causes the player to immediately get booted out of the world. |
| /stresstest | Seems like a possibly helpful stress server stress testing command but currently there's an issue with the bots joining the server (happens on my local and multiplayer). |
| /viewport | Command almost certainly seems bugged. Running the command appears to just regenerate chunks. Reading the source the delete flag does nothing. Probably a dev tool. |
| /blockset | Lists all block sets without args, errors for a lot of the blocksets that you can put in. |
| /spawnblock | Spawns a block entity at the specified location. DO NOT USE IF YOU MISSPELL THE BLOCK IT WILL CRASH THE WORLD. |

### Other Small Bugs
* `/tp forward` has unfilled placeholder values.
* `/maxplayers` has unfilled placeholder values.

<!-- TODO: GO OVER -->
## Untested/Difficulty Testing
| Command | Commentary |
| --- | --- |
| /hitboxcollision | The help appears to indicate this allows you to attach a HitboxCollisionConfig asset to an entity. |
| /ambience | Manage ambient sound and music. I've always either been in a call or blasting music and have not gotten around to see if this actually does anything. |
| /path | Control npc pathing. Did not test |
| /update | Updating assets and prefabs via git. |
| /backup | Creates a backup of the world if the backup directory is set. |
| /stash | Can't get it to say anything but "No droplist for container." when hovering over container. |
| /checkpoint | Related to parkour checkpoints, no idea how to interact with them. |
| /worldpath | Looks to be an ordered series of waypoints in the world. Not sure what it is used for though. |
| /reputation | Might just be a small isolated plugin that basically just keeps track of arbitrary points that do nothing? I can't figure out if they do something/how to actually get the commands to work. |
| /repulsion | No idea what a repulsion component does. |
| /worldgen | Benchmarking command and worldgen config reload command. Maybe the worldgen reload might be needed when working on custom world generation? |