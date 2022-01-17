import TokenCategory, { tokenCategoryToStringMap } from './TokenCategory';
import tokenDetermineLineNumAndColNumRaw from './tokenDetermineLineNumAndColNumRaw';
import TokenType from './TokenType';
import tokenValueToTypeMap from './tokenValueToTypeMap';

const standardHeaderRegex = /^<[a-zA-Z0-9_\-/\\]+(\.h)|(\.c)>$/;

export default function tokenDetermineType(
  fileContents: string,
  tokenStartIndex: number,
  tokenLastIndex: number,
  tokenCategory: TokenCategory,
): TokenType {
  const createErr = () =>
    createError(fileContents, tokenStartIndex, tokenLastIndex, tokenCategory);

  switch (tokenCategory) {
    case TokenCategory.newline: {
      return TokenType.newline;
    }

    case TokenCategory.special: {
      const rawToken = fileContents.slice(tokenStartIndex, tokenLastIndex + 1);
      const type = tokenValueToTypeMap.get(rawToken);
      if (type === undefined) {
        throw createErr();
      }
      return type;
    }

    case TokenCategory.prepro: {
      const rawToken = fileContents.slice(tokenStartIndex, tokenLastIndex + 1);
      const type = tokenValueToTypeMap.get(rawToken);
      if (type === undefined) {
        throw createErr();
      }
      return type;
    }

    case TokenCategory.preproOrOperator: {
      const rawToken = fileContents.slice(tokenStartIndex, tokenLastIndex + 1);
      if (rawToken.match(standardHeaderRegex)) {
        return TokenType.preproStandardHeader;
      }
      const type = tokenValueToTypeMap.get(rawToken);
      if (type === undefined) {
        throw createErr();
      }
      return type;
    }

    case TokenCategory.commentOrOperator: {
      const rawToken = fileContents.slice(tokenStartIndex, tokenLastIndex + 1);
      const type = tokenValueToTypeMap.get(rawToken);
      if (type !== undefined) {
        return type;
      }
      // We have a comment
      const commentFirstTwoChars = rawToken.slice(0, 2);
      return commentFirstTwoChars === '//'
        ? TokenType.commentSingleline
        : TokenType.commentMultiline;
    }

    case TokenCategory.operator: {
      const rawToken = fileContents.slice(tokenStartIndex, tokenLastIndex + 1);
      const type = tokenValueToTypeMap.get(rawToken);
      if (type === undefined) {
        throw createErr();
      }
      return type;
    }

    case TokenCategory.constant: {
      const firstChar = fileContents.charAt(tokenStartIndex);
      switch (firstChar) {
        case '"':
          return TokenType.constantString;
        case "'":
          return TokenType.constantCharacter;
        default:
          return TokenType.constantNumber;
      }
    }

    case TokenCategory.preproMacroOrKeywordOrIdentifierOrLabel: {
      const rawToken = fileContents.slice(tokenStartIndex, tokenLastIndex + 1);
      if (rawToken.charAt(rawToken.length - 1) === ':') {
        return TokenType.label;
      }
      return tokenValueToTypeMap.get(rawToken) || TokenType.identifier;
    }
  }
}

function createError(
  fileContents: string,
  tokenStartIndex: number,
  tokenLastIndex: number,
  tokenCategory: TokenCategory,
) {
  const [lineNum, colNum] = tokenDetermineLineNumAndColNumRaw(
    fileContents,
    tokenStartIndex,
  );
  return new Error(
    `unable to determine type of token at line ${lineNum} col ${colNum} (startIndex = ${tokenStartIndex}, lastIndex = ${tokenLastIndex}, category = ${tokenCategoryToStringMap.get(
      tokenCategory,
    )}, value = ${JSON.stringify(
      fileContents.slice(tokenStartIndex, tokenLastIndex + 1),
    )})`,
  );
}
