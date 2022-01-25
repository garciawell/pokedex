export default {

    pokemons: {
      loadingStatus: 'loaded',
      pokes: [
        {
          id: 1,
          name: 'bulbasaur',
          img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
          types: [
            {
              slot: 2,
              type: {
                name: 'poison',
                url: 'https://pokeapi.co/api/v2/type/4/'
              }
            },
            {
              slot: 1,
              type: {
                name: 'grass',
                url: 'https://pokeapi.co/api/v2/type/12/'
              }
            }
          ],
          stats: [
            {
              base_stat: 45,
              effort: 0,
              stat: {
                name: 'speed',
                url: 'https://pokeapi.co/api/v2/stat/6/'
              }
            },
            {
              base_stat: 65,
              effort: 0,
              stat: {
                name: 'special-defense',
                url: 'https://pokeapi.co/api/v2/stat/5/'
              }
            },
            {
              base_stat: 65,
              effort: 1,
              stat: {
                name: 'special-attack',
                url: 'https://pokeapi.co/api/v2/stat/4/'
              }
            },
            {
              base_stat: 49,
              effort: 0,
              stat: {
                name: 'defense',
                url: 'https://pokeapi.co/api/v2/stat/3/'
              }
            },
            {
              base_stat: 49,
              effort: 0,
              stat: {
                name: 'attack',
                url: 'https://pokeapi.co/api/v2/stat/2/'
              }
            },
            {
              base_stat: 45,
              effort: 0,
              stat: {
                name: 'hp',
                url: 'https://pokeapi.co/api/v2/stat/1/'
              }
            }
          ],
          abilities: [
            {
              ability: {
                name: 'chlorophyll',
                url: 'https://pokeapi.co/api/v2/ability/34/'
              },
              is_hidden: true,
              slot: 3
            },
            {
              ability: {
                name: 'overgrow',
                url: 'https://pokeapi.co/api/v2/ability/65/'
              },
              is_hidden: false,
              slot: 1
            }
          ]
        },
        {
          id: 2,
          name: 'ivysaur',
          img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
          types: [
            {
              slot: 2,
              type: {
                name: 'poison',
                url: 'https://pokeapi.co/api/v2/type/4/'
              }
            },
            {
              slot: 1,
              type: {
                name: 'grass',
                url: 'https://pokeapi.co/api/v2/type/12/'
              }
            }
          ],
          stats: [
            {
              base_stat: 60,
              effort: 0,
              stat: {
                name: 'speed',
                url: 'https://pokeapi.co/api/v2/stat/6/'
              }
            },
            {
              base_stat: 80,
              effort: 1,
              stat: {
                name: 'special-defense',
                url: 'https://pokeapi.co/api/v2/stat/5/'
              }
            },
            {
              base_stat: 80,
              effort: 1,
              stat: {
                name: 'special-attack',
                url: 'https://pokeapi.co/api/v2/stat/4/'
              }
            },
            {
              base_stat: 63,
              effort: 0,
              stat: {
                name: 'defense',
                url: 'https://pokeapi.co/api/v2/stat/3/'
              }
            },
            {
              base_stat: 62,
              effort: 0,
              stat: {
                name: 'attack',
                url: 'https://pokeapi.co/api/v2/stat/2/'
              }
            },
            {
              base_stat: 60,
              effort: 0,
              stat: {
                name: 'hp',
                url: 'https://pokeapi.co/api/v2/stat/1/'
              }
            }
          ],
          abilities: [
            {
              ability: {
                name: 'chlorophyll',
                url: 'https://pokeapi.co/api/v2/ability/34/'
              },
              is_hidden: true,
              slot: 3
            },
            {
              ability: {
                name: 'overgrow',
                url: 'https://pokeapi.co/api/v2/ability/65/'
              },
              is_hidden: false,
              slot: 1
            }
          ]
        },
        {
          id: 3,
          name: 'venusaur',
          img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
          types: [
            {
              slot: 2,
              type: {
                name: 'poison',
                url: 'https://pokeapi.co/api/v2/type/4/'
              }
            },
            {
              slot: 1,
              type: {
                name: 'grass',
                url: 'https://pokeapi.co/api/v2/type/12/'
              }
            }
          ],
          stats: [
            {
              base_stat: 80,
              effort: 0,
              stat: {
                name: 'speed',
                url: 'https://pokeapi.co/api/v2/stat/6/'
              }
            },
            {
              base_stat: 100,
              effort: 1,
              stat: {
                name: 'special-defense',
                url: 'https://pokeapi.co/api/v2/stat/5/'
              }
            },
            {
              base_stat: 100,
              effort: 2,
              stat: {
                name: 'special-attack',
                url: 'https://pokeapi.co/api/v2/stat/4/'
              }
            },
            {
              base_stat: 83,
              effort: 0,
              stat: {
                name: 'defense',
                url: 'https://pokeapi.co/api/v2/stat/3/'
              }
            },
            {
              base_stat: 82,
              effort: 0,
              stat: {
                name: 'attack',
                url: 'https://pokeapi.co/api/v2/stat/2/'
              }
            },
            {
              base_stat: 80,
              effort: 0,
              stat: {
                name: 'hp',
                url: 'https://pokeapi.co/api/v2/stat/1/'
              }
            }
          ],
          abilities: [
            {
              ability: {
                name: 'chlorophyll',
                url: 'https://pokeapi.co/api/v2/ability/34/'
              },
              is_hidden: true,
              slot: 3
            },
            {
              ability: {
                name: 'overgrow',
                url: 'https://pokeapi.co/api/v2/ability/65/'
              },
              is_hidden: false,
              slot: 1
            }
          ]
        },
        {
          id: 4,
          name: 'charmander',
          img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
          types: [
            {
              slot: 1,
              type: {
                name: 'fire',
                url: 'https://pokeapi.co/api/v2/type/10/'
              }
            }
          ],
          stats: [
            {
              base_stat: 65,
              effort: 1,
              stat: {
                name: 'speed',
                url: 'https://pokeapi.co/api/v2/stat/6/'
              }
            },
            {
              base_stat: 50,
              effort: 0,
              stat: {
                name: 'special-defense',
                url: 'https://pokeapi.co/api/v2/stat/5/'
              }
            },
            {
              base_stat: 60,
              effort: 0,
              stat: {
                name: 'special-attack',
                url: 'https://pokeapi.co/api/v2/stat/4/'
              }
            },
            {
              base_stat: 43,
              effort: 0,
              stat: {
                name: 'defense',
                url: 'https://pokeapi.co/api/v2/stat/3/'
              }
            },
            {
              base_stat: 52,
              effort: 0,
              stat: {
                name: 'attack',
                url: 'https://pokeapi.co/api/v2/stat/2/'
              }
            },
            {
              base_stat: 39,
              effort: 0,
              stat: {
                name: 'hp',
                url: 'https://pokeapi.co/api/v2/stat/1/'
              }
            }
          ],
          abilities: [
            {
              ability: {
                name: 'solar-power',
                url: 'https://pokeapi.co/api/v2/ability/94/'
              },
              is_hidden: true,
              slot: 3
            },
            {
              ability: {
                name: 'blaze',
                url: 'https://pokeapi.co/api/v2/ability/66/'
              },
              is_hidden: false,
              slot: 1
            }
          ]
        },
        {
          id: 5,
          name: 'charmeleon',
          img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png',
          types: [
            {
              slot: 1,
              type: {
                name: 'fire',
                url: 'https://pokeapi.co/api/v2/type/10/'
              }
            }
          ],
          stats: [
            {
              base_stat: 80,
              effort: 1,
              stat: {
                name: 'speed',
                url: 'https://pokeapi.co/api/v2/stat/6/'
              }
            },
            {
              base_stat: 65,
              effort: 0,
              stat: {
                name: 'special-defense',
                url: 'https://pokeapi.co/api/v2/stat/5/'
              }
            },
            {
              base_stat: 80,
              effort: 1,
              stat: {
                name: 'special-attack',
                url: 'https://pokeapi.co/api/v2/stat/4/'
              }
            },
            {
              base_stat: 58,
              effort: 0,
              stat: {
                name: 'defense',
                url: 'https://pokeapi.co/api/v2/stat/3/'
              }
            },
            {
              base_stat: 64,
              effort: 0,
              stat: {
                name: 'attack',
                url: 'https://pokeapi.co/api/v2/stat/2/'
              }
            },
            {
              base_stat: 58,
              effort: 0,
              stat: {
                name: 'hp',
                url: 'https://pokeapi.co/api/v2/stat/1/'
              }
            }
          ],
          abilities: [
            {
              ability: {
                name: 'solar-power',
                url: 'https://pokeapi.co/api/v2/ability/94/'
              },
              is_hidden: true,
              slot: 3
            },
            {
              ability: {
                name: 'blaze',
                url: 'https://pokeapi.co/api/v2/ability/66/'
              },
              is_hidden: false,
              slot: 1
            }
          ]
        },
        {
          id: 6,
          name: 'charizard',
          img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
          types: [
            {
              slot: 2,
              type: {
                name: 'flying',
                url: 'https://pokeapi.co/api/v2/type/3/'
              }
            },
            {
              slot: 1,
              type: {
                name: 'fire',
                url: 'https://pokeapi.co/api/v2/type/10/'
              }
            }
          ],
          stats: [
            {
              base_stat: 100,
              effort: 0,
              stat: {
                name: 'speed',
                url: 'https://pokeapi.co/api/v2/stat/6/'
              }
            },
            {
              base_stat: 85,
              effort: 0,
              stat: {
                name: 'special-defense',
                url: 'https://pokeapi.co/api/v2/stat/5/'
              }
            },
            {
              base_stat: 109,
              effort: 3,
              stat: {
                name: 'special-attack',
                url: 'https://pokeapi.co/api/v2/stat/4/'
              }
            },
            {
              base_stat: 78,
              effort: 0,
              stat: {
                name: 'defense',
                url: 'https://pokeapi.co/api/v2/stat/3/'
              }
            },
            {
              base_stat: 84,
              effort: 0,
              stat: {
                name: 'attack',
                url: 'https://pokeapi.co/api/v2/stat/2/'
              }
            },
            {
              base_stat: 78,
              effort: 0,
              stat: {
                name: 'hp',
                url: 'https://pokeapi.co/api/v2/stat/1/'
              }
            }
          ],
          abilities: [
            {
              ability: {
                name: 'solar-power',
                url: 'https://pokeapi.co/api/v2/ability/94/'
              },
              is_hidden: true,
              slot: 3
            },
            {
              ability: {
                name: 'blaze',
                url: 'https://pokeapi.co/api/v2/ability/66/'
              },
              is_hidden: false,
              slot: 1
            }
          ]
        },
        {
          id: 7,
          name: 'squirtle',
          img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
          types: [
            {
              slot: 1,
              type: {
                name: 'water',
                url: 'https://pokeapi.co/api/v2/type/11/'
              }
            }
          ],
          stats: [
            {
              base_stat: 43,
              effort: 0,
              stat: {
                name: 'speed',
                url: 'https://pokeapi.co/api/v2/stat/6/'
              }
            },
            {
              base_stat: 64,
              effort: 0,
              stat: {
                name: 'special-defense',
                url: 'https://pokeapi.co/api/v2/stat/5/'
              }
            },
            {
              base_stat: 50,
              effort: 0,
              stat: {
                name: 'special-attack',
                url: 'https://pokeapi.co/api/v2/stat/4/'
              }
            },
            {
              base_stat: 65,
              effort: 1,
              stat: {
                name: 'defense',
                url: 'https://pokeapi.co/api/v2/stat/3/'
              }
            },
            {
              base_stat: 48,
              effort: 0,
              stat: {
                name: 'attack',
                url: 'https://pokeapi.co/api/v2/stat/2/'
              }
            },
            {
              base_stat: 44,
              effort: 0,
              stat: {
                name: 'hp',
                url: 'https://pokeapi.co/api/v2/stat/1/'
              }
            }
          ],
          abilities: [
            {
              ability: {
                name: 'rain-dish',
                url: 'https://pokeapi.co/api/v2/ability/44/'
              },
              is_hidden: true,
              slot: 3
            },
            {
              ability: {
                name: 'torrent',
                url: 'https://pokeapi.co/api/v2/ability/67/'
              },
              is_hidden: false,
              slot: 1
            }
          ]
        },
        {
          id: 8,
          name: 'wartortle',
          img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png',
          types: [
            {
              slot: 1,
              type: {
                name: 'water',
                url: 'https://pokeapi.co/api/v2/type/11/'
              }
            }
          ],
          stats: [
            {
              base_stat: 58,
              effort: 0,
              stat: {
                name: 'speed',
                url: 'https://pokeapi.co/api/v2/stat/6/'
              }
            },
            {
              base_stat: 80,
              effort: 1,
              stat: {
                name: 'special-defense',
                url: 'https://pokeapi.co/api/v2/stat/5/'
              }
            },
            {
              base_stat: 65,
              effort: 0,
              stat: {
                name: 'special-attack',
                url: 'https://pokeapi.co/api/v2/stat/4/'
              }
            },
            {
              base_stat: 80,
              effort: 1,
              stat: {
                name: 'defense',
                url: 'https://pokeapi.co/api/v2/stat/3/'
              }
            },
            {
              base_stat: 63,
              effort: 0,
              stat: {
                name: 'attack',
                url: 'https://pokeapi.co/api/v2/stat/2/'
              }
            },
            {
              base_stat: 59,
              effort: 0,
              stat: {
                name: 'hp',
                url: 'https://pokeapi.co/api/v2/stat/1/'
              }
            }
          ],
          abilities: [
            {
              ability: {
                name: 'rain-dish',
                url: 'https://pokeapi.co/api/v2/ability/44/'
              },
              is_hidden: true,
              slot: 3
            },
            {
              ability: {
                name: 'torrent',
                url: 'https://pokeapi.co/api/v2/ability/67/'
              },
              is_hidden: false,
              slot: 1
            }
          ]
        },
        {
          id: 9,
          name: 'blastoise',
          img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png',
          types: [
            {
              slot: 1,
              type: {
                name: 'water',
                url: 'https://pokeapi.co/api/v2/type/11/'
              }
            }
          ],
          stats: [
            {
              base_stat: 78,
              effort: 0,
              stat: {
                name: 'speed',
                url: 'https://pokeapi.co/api/v2/stat/6/'
              }
            },
            {
              base_stat: 105,
              effort: 3,
              stat: {
                name: 'special-defense',
                url: 'https://pokeapi.co/api/v2/stat/5/'
              }
            },
            {
              base_stat: 85,
              effort: 0,
              stat: {
                name: 'special-attack',
                url: 'https://pokeapi.co/api/v2/stat/4/'
              }
            },
            {
              base_stat: 100,
              effort: 0,
              stat: {
                name: 'defense',
                url: 'https://pokeapi.co/api/v2/stat/3/'
              }
            },
            {
              base_stat: 83,
              effort: 0,
              stat: {
                name: 'attack',
                url: 'https://pokeapi.co/api/v2/stat/2/'
              }
            },
            {
              base_stat: 79,
              effort: 0,
              stat: {
                name: 'hp',
                url: 'https://pokeapi.co/api/v2/stat/1/'
              }
            }
          ],
          abilities: [
            {
              ability: {
                name: 'rain-dish',
                url: 'https://pokeapi.co/api/v2/ability/44/'
              },
              is_hidden: true,
              slot: 3
            },
            {
              ability: {
                name: 'torrent',
                url: 'https://pokeapi.co/api/v2/ability/67/'
              },
              is_hidden: false,
              slot: 1
            }
          ]
        },
        {
          id: 10,
          name: 'caterpie',
          img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png',
          types: [
            {
              slot: 1,
              type: {
                name: 'bug',
                url: 'https://pokeapi.co/api/v2/type/7/'
              }
            }
          ],
          stats: [
            {
              base_stat: 45,
              effort: 0,
              stat: {
                name: 'speed',
                url: 'https://pokeapi.co/api/v2/stat/6/'
              }
            },
            {
              base_stat: 20,
              effort: 0,
              stat: {
                name: 'special-defense',
                url: 'https://pokeapi.co/api/v2/stat/5/'
              }
            },
            {
              base_stat: 20,
              effort: 0,
              stat: {
                name: 'special-attack',
                url: 'https://pokeapi.co/api/v2/stat/4/'
              }
            },
            {
              base_stat: 35,
              effort: 0,
              stat: {
                name: 'defense',
                url: 'https://pokeapi.co/api/v2/stat/3/'
              }
            },
            {
              base_stat: 30,
              effort: 0,
              stat: {
                name: 'attack',
                url: 'https://pokeapi.co/api/v2/stat/2/'
              }
            },
            {
              base_stat: 45,
              effort: 1,
              stat: {
                name: 'hp',
                url: 'https://pokeapi.co/api/v2/stat/1/'
              }
            }
          ],
          abilities: [
            {
              ability: {
                name: 'run-away',
                url: 'https://pokeapi.co/api/v2/ability/50/'
              },
              is_hidden: true,
              slot: 3
            },
            {
              ability: {
                name: 'shield-dust',
                url: 'https://pokeapi.co/api/v2/ability/19/'
              },
              is_hidden: false,
              slot: 1
            }
          ]
        },
        {
          id: 11,
          name: 'metapod',
          img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png',
          types: [
            {
              slot: 1,
              type: {
                name: 'bug',
                url: 'https://pokeapi.co/api/v2/type/7/'
              }
            }
          ],
          stats: [
            {
              base_stat: 30,
              effort: 0,
              stat: {
                name: 'speed',
                url: 'https://pokeapi.co/api/v2/stat/6/'
              }
            },
            {
              base_stat: 25,
              effort: 0,
              stat: {
                name: 'special-defense',
                url: 'https://pokeapi.co/api/v2/stat/5/'
              }
            },
            {
              base_stat: 25,
              effort: 0,
              stat: {
                name: 'special-attack',
                url: 'https://pokeapi.co/api/v2/stat/4/'
              }
            },
            {
              base_stat: 55,
              effort: 2,
              stat: {
                name: 'defense',
                url: 'https://pokeapi.co/api/v2/stat/3/'
              }
            },
            {
              base_stat: 20,
              effort: 0,
              stat: {
                name: 'attack',
                url: 'https://pokeapi.co/api/v2/stat/2/'
              }
            },
            {
              base_stat: 50,
              effort: 0,
              stat: {
                name: 'hp',
                url: 'https://pokeapi.co/api/v2/stat/1/'
              }
            }
          ],
          abilities: [
            {
              ability: {
                name: 'shed-skin',
                url: 'https://pokeapi.co/api/v2/ability/61/'
              },
              is_hidden: false,
              slot: 1
            }
          ]
        },
        {
          id: 12,
          name: 'butterfree',
          img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png',
          types: [
            {
              slot: 2,
              type: {
                name: 'flying',
                url: 'https://pokeapi.co/api/v2/type/3/'
              }
            },
            {
              slot: 1,
              type: {
                name: 'bug',
                url: 'https://pokeapi.co/api/v2/type/7/'
              }
            }
          ],
          stats: [
            {
              base_stat: 70,
              effort: 0,
              stat: {
                name: 'speed',
                url: 'https://pokeapi.co/api/v2/stat/6/'
              }
            },
            {
              base_stat: 80,
              effort: 1,
              stat: {
                name: 'special-defense',
                url: 'https://pokeapi.co/api/v2/stat/5/'
              }
            },
            {
              base_stat: 90,
              effort: 2,
              stat: {
                name: 'special-attack',
                url: 'https://pokeapi.co/api/v2/stat/4/'
              }
            },
            {
              base_stat: 50,
              effort: 0,
              stat: {
                name: 'defense',
                url: 'https://pokeapi.co/api/v2/stat/3/'
              }
            },
            {
              base_stat: 45,
              effort: 0,
              stat: {
                name: 'attack',
                url: 'https://pokeapi.co/api/v2/stat/2/'
              }
            },
            {
              base_stat: 60,
              effort: 0,
              stat: {
                name: 'hp',
                url: 'https://pokeapi.co/api/v2/stat/1/'
              }
            }
          ],
          abilities: [
            {
              ability: {
                name: 'tinted-lens',
                url: 'https://pokeapi.co/api/v2/ability/110/'
              },
              is_hidden: true,
              slot: 3
            },
            {
              ability: {
                name: 'compound-eyes',
                url: 'https://pokeapi.co/api/v2/ability/14/'
              },
              is_hidden: false,
              slot: 1
            }
          ]
        },
        {
          id: 13,
          name: 'weedle',
          img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png',
          types: [
            {
              slot: 2,
              type: {
                name: 'poison',
                url: 'https://pokeapi.co/api/v2/type/4/'
              }
            },
            {
              slot: 1,
              type: {
                name: 'bug',
                url: 'https://pokeapi.co/api/v2/type/7/'
              }
            }
          ],
          stats: [
            {
              base_stat: 50,
              effort: 1,
              stat: {
                name: 'speed',
                url: 'https://pokeapi.co/api/v2/stat/6/'
              }
            },
            {
              base_stat: 20,
              effort: 0,
              stat: {
                name: 'special-defense',
                url: 'https://pokeapi.co/api/v2/stat/5/'
              }
            },
            {
              base_stat: 20,
              effort: 0,
              stat: {
                name: 'special-attack',
                url: 'https://pokeapi.co/api/v2/stat/4/'
              }
            },
            {
              base_stat: 30,
              effort: 0,
              stat: {
                name: 'defense',
                url: 'https://pokeapi.co/api/v2/stat/3/'
              }
            },
            {
              base_stat: 35,
              effort: 0,
              stat: {
                name: 'attack',
                url: 'https://pokeapi.co/api/v2/stat/2/'
              }
            },
            {
              base_stat: 40,
              effort: 0,
              stat: {
                name: 'hp',
                url: 'https://pokeapi.co/api/v2/stat/1/'
              }
            }
          ],
          abilities: [
            {
              ability: {
                name: 'run-away',
                url: 'https://pokeapi.co/api/v2/ability/50/'
              },
              is_hidden: true,
              slot: 3
            },
            {
              ability: {
                name: 'shield-dust',
                url: 'https://pokeapi.co/api/v2/ability/19/'
              },
              is_hidden: false,
              slot: 1
            }
          ]
        },
        {
          id: 14,
          name: 'kakuna',
          img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png',
          types: [
            {
              slot: 2,
              type: {
                name: 'poison',
                url: 'https://pokeapi.co/api/v2/type/4/'
              }
            },
            {
              slot: 1,
              type: {
                name: 'bug',
                url: 'https://pokeapi.co/api/v2/type/7/'
              }
            }
          ],
          stats: [
            {
              base_stat: 35,
              effort: 0,
              stat: {
                name: 'speed',
                url: 'https://pokeapi.co/api/v2/stat/6/'
              }
            },
            {
              base_stat: 25,
              effort: 0,
              stat: {
                name: 'special-defense',
                url: 'https://pokeapi.co/api/v2/stat/5/'
              }
            },
            {
              base_stat: 25,
              effort: 0,
              stat: {
                name: 'special-attack',
                url: 'https://pokeapi.co/api/v2/stat/4/'
              }
            },
            {
              base_stat: 50,
              effort: 2,
              stat: {
                name: 'defense',
                url: 'https://pokeapi.co/api/v2/stat/3/'
              }
            },
            {
              base_stat: 25,
              effort: 0,
              stat: {
                name: 'attack',
                url: 'https://pokeapi.co/api/v2/stat/2/'
              }
            },
            {
              base_stat: 45,
              effort: 0,
              stat: {
                name: 'hp',
                url: 'https://pokeapi.co/api/v2/stat/1/'
              }
            }
          ],
          abilities: [
            {
              ability: {
                name: 'shed-skin',
                url: 'https://pokeapi.co/api/v2/ability/61/'
              },
              is_hidden: false,
              slot: 1
            }
          ]
        },
        {
          id: 15,
          name: 'beedrill',
          img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png',
          types: [
            {
              slot: 2,
              type: {
                name: 'poison',
                url: 'https://pokeapi.co/api/v2/type/4/'
              }
            },
            {
              slot: 1,
              type: {
                name: 'bug',
                url: 'https://pokeapi.co/api/v2/type/7/'
              }
            }
          ],
          stats: [
            {
              base_stat: 75,
              effort: 0,
              stat: {
                name: 'speed',
                url: 'https://pokeapi.co/api/v2/stat/6/'
              }
            },
            {
              base_stat: 80,
              effort: 1,
              stat: {
                name: 'special-defense',
                url: 'https://pokeapi.co/api/v2/stat/5/'
              }
            },
            {
              base_stat: 45,
              effort: 0,
              stat: {
                name: 'special-attack',
                url: 'https://pokeapi.co/api/v2/stat/4/'
              }
            },
            {
              base_stat: 40,
              effort: 0,
              stat: {
                name: 'defense',
                url: 'https://pokeapi.co/api/v2/stat/3/'
              }
            },
            {
              base_stat: 90,
              effort: 2,
              stat: {
                name: 'attack',
                url: 'https://pokeapi.co/api/v2/stat/2/'
              }
            },
            {
              base_stat: 65,
              effort: 0,
              stat: {
                name: 'hp',
                url: 'https://pokeapi.co/api/v2/stat/1/'
              }
            }
          ],
          abilities: [
            {
              ability: {
                name: 'sniper',
                url: 'https://pokeapi.co/api/v2/ability/97/'
              },
              is_hidden: true,
              slot: 3
            },
            {
              ability: {
                name: 'swarm',
                url: 'https://pokeapi.co/api/v2/ability/68/'
              },
              is_hidden: false,
              slot: 1
            }
          ]
        },
        {
          id: 16,
          name: 'pidgey',
          img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png',
          types: [
            {
              slot: 2,
              type: {
                name: 'flying',
                url: 'https://pokeapi.co/api/v2/type/3/'
              }
            },
            {
              slot: 1,
              type: {
                name: 'normal',
                url: 'https://pokeapi.co/api/v2/type/1/'
              }
            }
          ],
          stats: [
            {
              base_stat: 56,
              effort: 1,
              stat: {
                name: 'speed',
                url: 'https://pokeapi.co/api/v2/stat/6/'
              }
            },
            {
              base_stat: 35,
              effort: 0,
              stat: {
                name: 'special-defense',
                url: 'https://pokeapi.co/api/v2/stat/5/'
              }
            },
            {
              base_stat: 35,
              effort: 0,
              stat: {
                name: 'special-attack',
                url: 'https://pokeapi.co/api/v2/stat/4/'
              }
            },
            {
              base_stat: 40,
              effort: 0,
              stat: {
                name: 'defense',
                url: 'https://pokeapi.co/api/v2/stat/3/'
              }
            },
            {
              base_stat: 45,
              effort: 0,
              stat: {
                name: 'attack',
                url: 'https://pokeapi.co/api/v2/stat/2/'
              }
            },
            {
              base_stat: 40,
              effort: 0,
              stat: {
                name: 'hp',
                url: 'https://pokeapi.co/api/v2/stat/1/'
              }
            }
          ],
          abilities: [
            {
              ability: {
                name: 'big-pecks',
                url: 'https://pokeapi.co/api/v2/ability/145/'
              },
              is_hidden: true,
              slot: 3
            },
            {
              ability: {
                name: 'tangled-feet',
                url: 'https://pokeapi.co/api/v2/ability/77/'
              },
              is_hidden: false,
              slot: 2
            },
            {
              ability: {
                name: 'keen-eye',
                url: 'https://pokeapi.co/api/v2/ability/51/'
              },
              is_hidden: false,
              slot: 1
            }
          ]
        },
        {
          id: 17,
          name: 'pidgeotto',
          img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png',
          types: [
            {
              slot: 2,
              type: {
                name: 'flying',
                url: 'https://pokeapi.co/api/v2/type/3/'
              }
            },
            {
              slot: 1,
              type: {
                name: 'normal',
                url: 'https://pokeapi.co/api/v2/type/1/'
              }
            }
          ],
          stats: [
            {
              base_stat: 71,
              effort: 2,
              stat: {
                name: 'speed',
                url: 'https://pokeapi.co/api/v2/stat/6/'
              }
            },
            {
              base_stat: 50,
              effort: 0,
              stat: {
                name: 'special-defense',
                url: 'https://pokeapi.co/api/v2/stat/5/'
              }
            },
            {
              base_stat: 50,
              effort: 0,
              stat: {
                name: 'special-attack',
                url: 'https://pokeapi.co/api/v2/stat/4/'
              }
            },
            {
              base_stat: 55,
              effort: 0,
              stat: {
                name: 'defense',
                url: 'https://pokeapi.co/api/v2/stat/3/'
              }
            },
            {
              base_stat: 60,
              effort: 0,
              stat: {
                name: 'attack',
                url: 'https://pokeapi.co/api/v2/stat/2/'
              }
            },
            {
              base_stat: 63,
              effort: 0,
              stat: {
                name: 'hp',
                url: 'https://pokeapi.co/api/v2/stat/1/'
              }
            }
          ],
          abilities: [
            {
              ability: {
                name: 'big-pecks',
                url: 'https://pokeapi.co/api/v2/ability/145/'
              },
              is_hidden: true,
              slot: 3
            },
            {
              ability: {
                name: 'tangled-feet',
                url: 'https://pokeapi.co/api/v2/ability/77/'
              },
              is_hidden: false,
              slot: 2
            },
            {
              ability: {
                name: 'keen-eye',
                url: 'https://pokeapi.co/api/v2/ability/51/'
              },
              is_hidden: false,
              slot: 1
            }
          ]
        },
        {
          id: 18,
          name: 'pidgeot',
          img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png',
          types: [
            {
              slot: 2,
              type: {
                name: 'flying',
                url: 'https://pokeapi.co/api/v2/type/3/'
              }
            },
            {
              slot: 1,
              type: {
                name: 'normal',
                url: 'https://pokeapi.co/api/v2/type/1/'
              }
            }
          ],
          stats: [
            {
              base_stat: 101,
              effort: 3,
              stat: {
                name: 'speed',
                url: 'https://pokeapi.co/api/v2/stat/6/'
              }
            },
            {
              base_stat: 70,
              effort: 0,
              stat: {
                name: 'special-defense',
                url: 'https://pokeapi.co/api/v2/stat/5/'
              }
            },
            {
              base_stat: 70,
              effort: 0,
              stat: {
                name: 'special-attack',
                url: 'https://pokeapi.co/api/v2/stat/4/'
              }
            },
            {
              base_stat: 75,
              effort: 0,
              stat: {
                name: 'defense',
                url: 'https://pokeapi.co/api/v2/stat/3/'
              }
            },
            {
              base_stat: 80,
              effort: 0,
              stat: {
                name: 'attack',
                url: 'https://pokeapi.co/api/v2/stat/2/'
              }
            },
            {
              base_stat: 83,
              effort: 0,
              stat: {
                name: 'hp',
                url: 'https://pokeapi.co/api/v2/stat/1/'
              }
            }
          ],
          abilities: [
            {
              ability: {
                name: 'big-pecks',
                url: 'https://pokeapi.co/api/v2/ability/145/'
              },
              is_hidden: true,
              slot: 3
            },
            {
              ability: {
                name: 'tangled-feet',
                url: 'https://pokeapi.co/api/v2/ability/77/'
              },
              is_hidden: false,
              slot: 2
            },
            {
              ability: {
                name: 'keen-eye',
                url: 'https://pokeapi.co/api/v2/ability/51/'
              },
              is_hidden: false,
              slot: 1
            }
          ]
        },
        {
          id: 19,
          name: 'rattata',
          img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png',
          types: [
            {
              slot: 1,
              type: {
                name: 'normal',
                url: 'https://pokeapi.co/api/v2/type/1/'
              }
            }
          ],
          stats: [
            {
              base_stat: 72,
              effort: 1,
              stat: {
                name: 'speed',
                url: 'https://pokeapi.co/api/v2/stat/6/'
              }
            },
            {
              base_stat: 35,
              effort: 0,
              stat: {
                name: 'special-defense',
                url: 'https://pokeapi.co/api/v2/stat/5/'
              }
            },
            {
              base_stat: 25,
              effort: 0,
              stat: {
                name: 'special-attack',
                url: 'https://pokeapi.co/api/v2/stat/4/'
              }
            },
            {
              base_stat: 35,
              effort: 0,
              stat: {
                name: 'defense',
                url: 'https://pokeapi.co/api/v2/stat/3/'
              }
            },
            {
              base_stat: 56,
              effort: 0,
              stat: {
                name: 'attack',
                url: 'https://pokeapi.co/api/v2/stat/2/'
              }
            },
            {
              base_stat: 30,
              effort: 0,
              stat: {
                name: 'hp',
                url: 'https://pokeapi.co/api/v2/stat/1/'
              }
            }
          ],
          abilities: [
            {
              ability: {
                name: 'hustle',
                url: 'https://pokeapi.co/api/v2/ability/55/'
              },
              is_hidden: true,
              slot: 3
            },
            {
              ability: {
                name: 'guts',
                url: 'https://pokeapi.co/api/v2/ability/62/'
              },
              is_hidden: false,
              slot: 2
            },
            {
              ability: {
                name: 'run-away',
                url: 'https://pokeapi.co/api/v2/ability/50/'
              },
              is_hidden: false,
              slot: 1
            }
          ]
        },
        {
          id: 20,
          name: 'raticate',
          img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png',
          types: [
            {
              slot: 1,
              type: {
                name: 'normal',
                url: 'https://pokeapi.co/api/v2/type/1/'
              }
            }
          ],
          stats: [
            {
              base_stat: 97,
              effort: 2,
              stat: {
                name: 'speed',
                url: 'https://pokeapi.co/api/v2/stat/6/'
              }
            },
            {
              base_stat: 70,
              effort: 0,
              stat: {
                name: 'special-defense',
                url: 'https://pokeapi.co/api/v2/stat/5/'
              }
            },
            {
              base_stat: 50,
              effort: 0,
              stat: {
                name: 'special-attack',
                url: 'https://pokeapi.co/api/v2/stat/4/'
              }
            },
            {
              base_stat: 60,
              effort: 0,
              stat: {
                name: 'defense',
                url: 'https://pokeapi.co/api/v2/stat/3/'
              }
            },
            {
              base_stat: 81,
              effort: 0,
              stat: {
                name: 'attack',
                url: 'https://pokeapi.co/api/v2/stat/2/'
              }
            },
            {
              base_stat: 55,
              effort: 0,
              stat: {
                name: 'hp',
                url: 'https://pokeapi.co/api/v2/stat/1/'
              }
            }
          ],
          abilities: [
            {
              ability: {
                name: 'hustle',
                url: 'https://pokeapi.co/api/v2/ability/55/'
              },
              is_hidden: true,
              slot: 3
            },
            {
              ability: {
                name: 'guts',
                url: 'https://pokeapi.co/api/v2/ability/62/'
              },
              is_hidden: false,
              slot: 2
            },
            {
              ability: {
                name: 'run-away',
                url: 'https://pokeapi.co/api/v2/ability/50/'
              },
              is_hidden: false,
              slot: 1
            }
          ]
        }
      ],
      pages: 964,
      isSearchFilled: false,
      error: '',
      stats: [],
      abilities: [],
      currentPokemon: {
        id: 6,
        name: 'charizard',
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
        types: [
          {
            slot: 2,
            type: {
              name: 'flying',
              url: 'https://pokeapi.co/api/v2/type/3/'
            }
          },
          {
            slot: 1,
            type: {
              name: 'fire',
              url: 'https://pokeapi.co/api/v2/type/10/'
            }
          }
        ],
        stats: [
          {
            base_stat: 100,
            effort: 0,
            stat: {
              name: 'speed',
              url: 'https://pokeapi.co/api/v2/stat/6/'
            }
          },
          {
            base_stat: 85,
            effort: 0,
            stat: {
              name: 'special-defense',
              url: 'https://pokeapi.co/api/v2/stat/5/'
            }
          },
          {
            base_stat: 109,
            effort: 3,
            stat: {
              name: 'special-attack',
              url: 'https://pokeapi.co/api/v2/stat/4/'
            }
          },
          {
            base_stat: 78,
            effort: 0,
            stat: {
              name: 'defense',
              url: 'https://pokeapi.co/api/v2/stat/3/'
            }
          },
          {
            base_stat: 84,
            effort: 0,
            stat: {
              name: 'attack',
              url: 'https://pokeapi.co/api/v2/stat/2/'
            }
          },
          {
            base_stat: 78,
            effort: 0,
            stat: {
              name: 'hp',
              url: 'https://pokeapi.co/api/v2/stat/1/'
            }
          }
        ],
        abilities: [
          {
            ability: {
              name: 'solar-power',
              url: 'https://pokeapi.co/api/v2/ability/94/'
            },
            is_hidden: true,
            slot: 3
          },
          {
            ability: {
              name: 'blaze',
              url: 'https://pokeapi.co/api/v2/ability/66/'
            },
            is_hidden: false,
            slot: 1
          }
        ]
      }
    },
    shared: {
      modal: false
    }
};
