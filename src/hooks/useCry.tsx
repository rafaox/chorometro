import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from "react";

import { data } from '../services/answers';
import { compare } from "../utils/compare";

interface CryProviderProps {
  children: ReactNode;
}

interface Cry {
  id: string;
  crybaby: string;
  cry: string;
  shame: string;
}

interface CryRank {
  crybaby: string;
  total: number;
  shame: string;
  position: number;
}

interface CryContextData {
  cry?: Cry;
  toCry: () => void;
  rank: CryRank[];
}

const CryContext = createContext<CryContextData>({} as CryContextData);

export function CryProvider({ children }: CryProviderProps) {
  const [cry, setCry] = useState<Cry>();
  const [original, setOriginal] = useState<Cry[]>([]);
  const [cries, setCries] = useState<Cry[]>([]);
  const [cried, setCried] = useState<Cry[]>([]);
  const [rank, setRank] = useState<CryRank[]>([]);

  useEffect(() => {
    const temp = data.map(cry => {
      return {
        id: cry.id,
        crybaby: cry.crybaby,
        cry: cry.cry,
        shame: cry.shame
      } as Cry;
    });

    setOriginal(temp);
    calculateCry(temp, []);
  }, []);

  useEffect(() => {
    let flags: any = [],
      crybabies: string[] = [],
      l = original.length,
      i: number;

    for (i = 0; i < l; i++) {
      if (flags[original[i].crybaby])
        continue;
      flags[original[i].crybaby] = true;
      crybabies.push(original[i].crybaby);
    }
  
    let temp: CryRank[] = [];
    for (i = 0; i < crybabies.length; i++) {
      const item = original.find(o => o.crybaby === crybabies[i]);
      const tempCrybaby: CryRank = {
        crybaby: item?.crybaby || '',
        shame: item?.shame || '',
        total: original.filter(o => o.crybaby === item?.crybaby).length,
        position: 0
      };
      temp.push(tempCrybaby);
    }

    temp.sort(compare);
    for (let i = 0, j = 1; i < temp.length; i++) {
      if (i == 0) {
        temp[i].position = j;
        j++;
        continue;
      }

      if (temp[i].total === temp[i - 1].total) {
        temp[i].position = temp[i - 1].position;
      } else {
        temp[i].position = j++;
      }
    }
console.log(temp)
    setRank(temp);
  }, [original]);

  function toCry() {
    if (cries.length === 0) {
      setCries(cried);
      setCried([]);
      calculateCry(original, []);
    } else {
      calculateCry(cries, cried);
    }
  }

  function calculateCry(cryList: Cry[], criedList: Cry[]) {
    const item = cryList[Math.floor(Math.random() * cryList.length)];
    setCry(item);
    setCried([...criedList, item])
    setCries(cryList.filter(c => c.id !== item.id));
  }

  return (
    <CryContext.Provider value={{ cry, toCry, rank }}>
      {children}      
    </CryContext.Provider>
  );
}

export const useCry = () => useContext(CryContext);
