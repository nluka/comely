import { readFileSync } from 'fs';
import removeCarriageReturns from '../utility/removeCarriageReturns';
import TokenArray from './TokenArray';
import tokenDisambiguate from './tokenDisambiguate';
import tokenEncode from './tokenEncode';
import Tokenizer from './Tokenizer';

/**
 * Tokenizes a file, encoding each token into a 32 bit number (using `tokenEncode`).
 * Each token stores its starting index in the first 25 bits and the type
 * (`TokenType`) in the remaining 7 bits. Use `tokenDecode` to extract the start
 * index and type for any encoded token.
 * @param filePathname The pathname of the file to tokenize.
 * @returns An array, the first element is the contents of the file, the second
 * is the array of encoded tokens in their order of appearance within the file.
 */
export function tokenizeFile(
  filePathname: string
): [string, TokenArray] {
  const fileBuffer = readFileSync(filePathname);
  const fileContents = removeCarriageReturns(fileBuffer.toString());
  const tokenizer = new Tokenizer(fileContents);
  const tokens = new TokenArray(Math.ceil(fileContents.length / 3));

  while (true) {
    const extractedToken = tokenizer.extractNextTokenEncoded();
    if (extractedToken === null) {
      break;
    }
    tokens.push(extractedToken);
  }

  for (const ambigTokenIndex of tokenizer.getAmbiguousTokenIndices()) {
    const disambiguatedTokenType = tokenDisambiguate(ambigTokenIndex, tokens);
    const ambigTokenStartIndex = tokens.getTokenDecoded(ambigTokenIndex)[0];
    tokens.setTokenEncoded(
      ambigTokenIndex,
      tokenEncode(ambigTokenStartIndex, disambiguatedTokenType),
    );
  }

  return [fileContents, tokens];
}
