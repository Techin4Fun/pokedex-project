import { useState, useEffect } from 'react';
import Card from './components/Card';
import Display from './components/Display';
import Loading from './components/Loading';
import { getTypeTopColor, getTypeTopColor2, getTypeBottomColor, getTypeBottomColor2, getTypeName1, getTypeName2 } from './colors';


// Pokedex Image reference: https://i.redd.it/onfiy4uxt9i91.png

let flag_index = 0;
let jumpAnimation = "animate-jump";

export default function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [flag, setFlag] = useState(flag_index);
  const [jump, setJump] = useState("");
  
  useEffect(function () {

    async function getPokemon() {
      const list = [];
      const baseURL = 'https://pokeapi.co/api/v2/pokemon/';
      for (let i = 1; i <= 151; i++) {
        const response = await fetch(baseURL + i);
        const data = await response.json();
        list.push(data);
        setPokemonList(list.map(item => item));
      }
    }

    getPokemon();

  }, []);

  function playSound(id){
    const baseURL = `https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/`
    let audio = new Audio(`${baseURL}${id + 1}.ogg`);
    audio.volume = 0.025;
    audio.play();
  }

  function checkId(id){
    if(id < 10){
      return "00"+id;
    }
    else if(id >= 10 && id < 100){
      return "0"+id;
    }
    else{
      return id;
    }
  }

  function getAnimation(functionName, animationName, delayInMs = 0){
      functionName(animationName);
      setTimeout(function(){
        functionName("");
        console.log(jump)
      }, delayInMs);
  }


  return (
    <>
      {/* Pokedex will display when all data is loaded */}

      {pokemonList.length === 0 ? <Loading/> :
        <div className="w-[375px] bg-[#f8f8f8] font-pokemon tracking-tighter pb-3 border-4 border-black rounded-md shadow-xl">
            <div className="bg-red-500 py-1 mb-3 border-b-4 border-black shadow-lg">
              <h1
                onClick={function (e) {
                  console.log(e.target);
                }}
                className='text-center font-bold text-white drop-shadow-[0px_1px_black]'
              >
                Pokémon Red Pokédex
              </h1>
            </div>
            
            <div className="flex">
              <Display
                name={pokemonList[flag].name}
                image={pokemonList[flag].sprites.front_default}
                typeName1={getTypeName1(pokemonList, flag)}
                topColor1={getTypeTopColor(pokemonList, flag)}
                bottomColor1={getTypeBottomColor(pokemonList, flag)}
                typeName2={getTypeName2(pokemonList, flag)}
                topColor2={getTypeTopColor2(pokemonList, flag)}
                bottomColor2={getTypeBottomColor2(pokemonList, flag)}
                animation={jump}
              />

              <div className="w-[200px] h-[200px] overflow-y-auto rounded-lg border-y-[3px] border-l-[3px]  border-black">
                {pokemonList.map((pokemon, index) => (
                  <div
                    key={index}
                    onClick={function () {
                      flag_index = index;
                      setFlag(flag_index);
                      playSound(index);
                      getAnimation(setJump, jumpAnimation, 500);
                      console.log(jump);
                      // console.log(flag_index);
                    }}
                    className=''
                  >
                    <Card 
                      id={checkId(pokemon.id)} 
                      name={pokemon.name}
                    />
                  </div>
                ))}
              </div>
              <br />
            </div>
        </div>
        }
    </>
  );
}
