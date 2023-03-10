declare module 'spelling' {
  class Spelling {
    constructor(dictionary?: string | string[]);
    insert(word: string, rank?: number): Spelling;
    lookup(word: string | string[], opts?: { suggest?: boolean }): SearchResult | SearchResult[];
    remove(word: string): Spelling;
    search(prefix: string, opts?: { depth?: number }): SearchResult[];
  }

  interface SearchResult {
    found: boolean;
    word: string;
    rank?: number;
    suggestions?: SearchResult[];
  }

  export default Spelling;
}
