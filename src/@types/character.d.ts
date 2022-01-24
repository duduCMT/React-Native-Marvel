type Character = {
  id: number;
  name: string;
  description: string;
  image: string;
  stars: number;
  appearances: PairData[]
}

type SimpleCharacter = {
  id: number;
  name: string;
  image: string;
  stars: number; 
}

type  BestCharacters = {
  best: Character;
  others: SimpleCharacter[];
}
