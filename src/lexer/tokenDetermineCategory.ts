import TokenCategory from './TokenCategory';
import tokenDetermineLineAndCol from './tokenDetermineLineAndCol';
import tokenValueToTypeMap from './tokenValueToTypeMap';

const preproRegex = /^[#\\]/,
  preproOrOperatorRegex = /^[<]/,
  commentOrOperatorRegex = /^\//,
  preproMacroOrKeywordOrIdentifierOrLabelRegex = /^[a-zA-Z_]/,
  constantRegex = /^[0-9'"]/,
  operatorRegex = /^[+\-~!*/%=>&|^.?:]/;

/**
 * Determines the category of a token based on its first character.
 * @param fileContents
 * @param tokenStartIndex The index of the first char in `fileContents`.
 */
export default function tokenDetermineCategory(
  fileContents: string,
  tokenStartIndex: number,
): TokenCategory {
  const tokenFirstChar = fileContents.charAt(tokenStartIndex);

  if (tokenFirstChar.charAt(0) === '\n') {
    return TokenCategory.newline;
  }
  if (tokenFirstChar.match(preproRegex)) {
    return TokenCategory.prepro;
  }
  if (tokenFirstChar.match(preproOrOperatorRegex)) {
    return TokenCategory.preproOrOperator;
  }
  if (tokenFirstChar.match(commentOrOperatorRegex)) {
    return TokenCategory.commentOrOperator;
  }
  if (tokenFirstChar.match(preproMacroOrKeywordOrIdentifierOrLabelRegex)) {
    return TokenCategory.preproMacroOrKeywordOrIdentifierOrLabel;
  }
  if (tokenFirstChar.match(constantRegex)) {
    return TokenCategory.constant;
  }
  if (tokenFirstChar.match(operatorRegex)) {
    return TokenCategory.operator;
  }
  if (tokenValueToTypeMap.get(tokenFirstChar) !== undefined) {
    return TokenCategory.special;
  }

  const { lineNum, colNum } = tokenDetermineLineAndCol(
    fileContents,
    tokenStartIndex,
  );
  throw new Error(
    `unable to determine category of token at line ${lineNum} col ${colNum} (startIndex = ${tokenStartIndex}, firstChar = ${JSON.stringify(
      tokenFirstChar,
    )})`,
  );
}
