
export const typeColors = {
    normal:{name: "normal", tColor: "bg-[#a8a878]", bColor: "bg-[#a8a878]", dName: "NORMAL"},
    fighting:{name: "fighting", tColor: "bg-[#e83000]", bColor: "bg-[#e83000]", dName: "FIGHT"},
    flying:{name: "flying", tColor: "bg-[#98d8d8]", bColor: "bg-[#a8a878]", dName: "FLYING"},
    poison:{name: "poison", tColor: "bg-[#f85888]", bColor: "bg-[#a040a0]", dName: "POISON"},
    ground:{name: "ground", tColor: "bg-[#d8e030]", bColor: "bg-[#b8a038]", dName: "GROUND"},
    rock:{name: "rock", tColor: "bg-[#b8a038]", bColor: "bg-[#b8a038]", dName: "ROCK"},
    bug:{name: "bug", tColor: "bg-[#d8e030]", bColor: "bg-[#d8e030]", dName: "BUG"},
    ghost:{name: "ghost", tColor: "bg-[#a040a0]", bColor: "bg-[#a040a0]", dName: "GHOST"},
    steel:{name: "steel", tColor: "bg-[#a8a878]", bColor: "bg-[#507888]", dName: "STEEL"},
    fairy:{name: "fairy", tColor: "bg-[#9cdede]", bColor: "bg-[#ff5a8c]", dName: "FAIRY"},
    fire:{name: "fire", tColor: "bg-[#f08030]", bColor: "bg-[#f08030]", dName: "FIRE"},
    water:{name: "water", tColor: "bg-[#6890f0]", bColor: "bg-[#6890f0]", dName: "WATER"},
    grass:{name: "grass", tColor: "bg-[#78c850]", bColor: "bg-[#78c850]", dName: "GRASS"},
    electric:{name: "electric", tColor: "bg-[#f8b010]", bColor: "bg-[#f8b010]", dName: "ELECTR"},
    psychic:{name: "psychic", tColor: "bg-[#f85888]", bColor: "bg-[#f85888]", dName: "PSYCHC"},
    ice:{name: "ice", tColor: "bg-[#98d8d8]", bColor: "bg-[#98d8d8]", dName: "ICE"},
    dragon:{name: "dragon", tColor: "bg-[#6890f0]", bColor: "bg-[#e83000]", dName: "DRAGON"},
    dark:{name: "dark", tColor: "bg-[#507888]", bColor: "bg-[#507888]", dName: "DARK"},
}

export function getTypeTopColor(array, id){
    switch(array[id].types[0].type.name){
      case ("normal"): return (typeColors.normal.tColor);
      case ("fighting"): return (typeColors.fighting.tColor);
      case ("flying"): return (typeColors.flying.tColor);
      case ("poison"): return (typeColors.poison.tColor);
      case ("ground"): return (typeColors.ground.tColor);
      case ("rock"): return (typeColors.rock.tColor);
      case ("bug"): return (typeColors.bug.tColor);
      case ("ghost"): return (typeColors.ghost.tColor);
      case ("steel"): return (typeColors.steel.tColor);
      case ("grass"): return (typeColors.grass.tColor);
      case ("fire"): return typeColors.fire.tColor;
      case ("water"): return typeColors.water.tColor;
      case ("electric"): return typeColors.electric.tColor;
      case ("psychic"): return typeColors.psychic.tColor;
      case ("ice"): return typeColors.ice.tColor;
      case ("dragon"): return typeColors.dragon.tColor;
      case ("dark"): return typeColors.dark.tColor;
      default: return (typeColors.fairy.tColor);
    }
}

export function getTypeTopColor2(array, id){
    if((array[id].types).length >= 2){
      switch(array[id].types[1].type.name){
        case ("normal"): return (typeColors.normal.tColor);
        case ("fighting"): return (typeColors.fighting.tColor);
        case ("flying"): return (typeColors.flying.tColor);
        case ("poison"): return (typeColors.poison.tColor);
        case ("ground"): return (typeColors.ground.tColor);
        case ("rock"): return (typeColors.rock.tColor);
        case ("bug"): return (typeColors.bug.tColor);
        case ("ghost"): return (typeColors.ghost.tColor);
        case ("steel"): return (typeColors.steel.tColor);
        case ("grass"): return (typeColors.grass.tColor);
        case ("fire"): return typeColors.fire.tColor;
        case ("water"): return typeColors.water.tColor;
        case ("electric"): return typeColors.electric.tColor;
        case ("psychic"): return typeColors.psychic.tColor;
        case ("ice"): return typeColors.ice.tColor;
        case ("dragon"): return typeColors.dragon.tColor;
        case ("dark"): return typeColors.dark.tColor;
        default: return (typeColors.fairy.tColor);
      }
    }
    else{
      return "bg-[#ffffff]";
    }
}

export function getTypeBottomColor(array, id){
    switch(array[id].types[0].type.name){
      case ("normal"): return (typeColors.normal.bColor);
      case ("fighting"): return (typeColors.fighting.bColor);
      case ("flying"): return (typeColors.flying.bColor);
      case ("poison"): return (typeColors.poison.bColor);
      case ("ground"): return (typeColors.ground.bColor);
      case ("rock"): return (typeColors.rock.bColor);
      case ("bug"): return (typeColors.bug.bColor);
      case ("ghost"): return (typeColors.ghost.bColor);
      case ("steel"): return (typeColors.steel.bColor);
      case ("grass"): return (typeColors.grass.bColor);
      case ("fire"): return typeColors.fire.bColor;
      case ("water"): return typeColors.water.bColor;
      case ("electric"): return typeColors.electric.bColor;
      case ("psychic"): return typeColors.psychic.bColor;
      case ("ice"): return typeColors.ice.bColor;
      case ("dragon"): return typeColors.dragon.bColor;
      case ("dark"): return typeColors.dark.bColor;
      default: return (typeColors.fairy.bColor);
    }
}

export function getTypeBottomColor2(array, id){
    if((array[id].types).length >= 2){
      switch(array[id].types[1].type.name){
        case ("normal"): return (typeColors.normal.bColor);
        case ("fighting"): return (typeColors.fighting.bColor);
        case ("flying"): return (typeColors.flying.bColor);
        case ("poison"): return (typeColors.poison.bColor);
        case ("ground"): return (typeColors.ground.bColor);
        case ("rock"): return (typeColors.rock.bColor);
        case ("bug"): return (typeColors.bug.bColor);
        case ("ghost"): return (typeColors.ghost.bColor);
        case ("steel"): return (typeColors.steel.bColor);
        case ("grass"): return (typeColors.grass.bColor);
        case ("fire"): return typeColors.fire.bColor;
        case ("water"): return typeColors.water.bColor;
        case ("electric"): return typeColors.electric.bColor;
        case ("psychic"): return typeColors.psychic.bColor;
        case ("ice"): return typeColors.ice.bColor;
        case ("dragon"): return typeColors.dragon.bColor;
        case ("dark"): return typeColors.dark.bColor;
        default: return (typeColors.fairy.bColor);
      }
    }
    else{
      return "bg-[#ffffff]";
    }
}

export function getTypeName1(array, id){
    switch(array[id].types[0].type.name){
      case ("normal"): return (typeColors.normal.dName);
      case ("fighting"): return (typeColors.fighting.dName);
      case ("flying"): return (typeColors.flying.dName);
      case ("poison"): return (typeColors.poison.dName);
      case ("ground"): return (typeColors.ground.dName);
      case ("rock"): return (typeColors.rock.dName);
      case ("bug"): return (typeColors.bug.dName);
      case ("ghost"): return (typeColors.ghost.dName);
      case ("steel"): return (typeColors.steel.dName);
      case ("grass"): return (typeColors.grass.dName);
      case ("fire"): return typeColors.fire.dName;
      case ("water"): return typeColors.water.dName;
      case ("electric"): return typeColors.electric.dName;
      case ("psychic"): return typeColors.psychic.dName;
      case ("ice"): return typeColors.ice.dName;
      case ("dragon"): return typeColors.dragon.dName;
      case ("dark"): return typeColors.dark.dName;
      default: return (typeColors.fairy.dName);
    }
}

export function getTypeName2(array, id){
    if((array[id].types).length >= 2){
      switch(array[id].types[1].type.name){
        case ("normal"): return (typeColors.normal.dName);
        case ("fighting"): return (typeColors.fighting.dName);
        case ("flying"): return (typeColors.flying.dName);
        case ("poison"): return (typeColors.poison.dName);
        case ("ground"): return (typeColors.ground.dName);
        case ("rock"): return (typeColors.rock.dName);
        case ("bug"): return (typeColors.bug.dName);
        case ("ghost"): return (typeColors.ghost.dName);
        case ("steel"): return (typeColors.steel.dName);
        case ("grass"): return (typeColors.grass.dName);
        case ("fire"): return typeColors.fire.dName;
        case ("water"): return typeColors.water.dName;
        case ("electric"): return typeColors.electric.dName;
        case ("psychic"): return typeColors.psychic.dName;
        case ("ice"): return typeColors.ice.dName;
        case ("dragon"): return typeColors.dragon.dName;
        case ("dark"): return typeColors.dark.dName;
        default: return (typeColors.fairy.dName);
      }
    }
    else{
      return "";
    }
}