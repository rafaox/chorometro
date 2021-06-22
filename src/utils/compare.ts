interface CryRank {
  crybaby: string;
  total: number;
  shame: string;
  position: number;
}

export function compare(a: CryRank, b: CryRank) {
  if ( a.total > b.total ){
    return -1;
  }
  if ( a.total < b.total ){
    return 1;
  }
  return 0;
}