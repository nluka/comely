import TokenType from '../lexer/TokenType';

const tokenTypeToValueMap = new Map<TokenType, string>([
  [TokenType.preproDirectiveInclude, '#include'],
  [TokenType.preproDirectiveDefine, '#define'],
  [TokenType.preproLineContinuation, '\\'],
  [TokenType.preproDirectiveUndef, '#undef'],
  [TokenType.preproDirectiveIfdef, '#ifdef'],
  [TokenType.preproDirectiveIfndef, '#ifndef'],
  [TokenType.preproDirectiveIf, '#if'],
  [TokenType.preproDirectiveElse, '#else'],
  [TokenType.preproDirectiveElif, '#elif'],
  [TokenType.preproDirectiveEndif, '#endif'],
  [TokenType.preproDirectiveError, '#error'],
  [TokenType.preproDirectivePragma, '#pragma'],
  [TokenType.preproMacroFile, '__FILE__'],
  [TokenType.preproMacroLine, '__LINE__'],
  [TokenType.preproMacroDate, '__DATE__'],
  [TokenType.preproMacroTime, '__TIME__'],
  [TokenType.preproMacroTimestamp, '__TIMESTAMP__'],
  [TokenType.preproOperatorConcat, '##'],

  [TokenType.keywordAlignas, 'alignas'],
  [TokenType.keywordAlignof, 'alignof'],
  [TokenType.keywordAuto, 'auto'],
  [TokenType.keywordAtomic, 'atomic'],
  [TokenType.keywordBool, 'bool'],
  [TokenType.keywordBreak, 'break'],
  [TokenType.keywordCase, 'case'],
  [TokenType.keywordChar, 'char'],
  [TokenType.keywordComplex, 'complex'],
  [TokenType.keywordConst, 'const'],
  [TokenType.keywordContinue, 'continue'],
  [TokenType.keywordDefault, 'default'],
  [TokenType.keywordDo, 'do'],
  [TokenType.keywordDouble, 'double'],
  [TokenType.keywordElse, 'else'],
  [TokenType.keywordEnum, 'enum'],
  [TokenType.keywordExtern, 'extern'],
  [TokenType.keywordFloat, 'float'],
  [TokenType.keywordFor, 'for'],
  [TokenType.keywordGeneric, 'generic'],
  [TokenType.keywordGoto, 'goto'],
  [TokenType.keywordIf, 'if'],
  [TokenType.keywordImaginary, 'imaginary'],
  [TokenType.keywordInt, 'int'],
  [TokenType.keywordLong, 'long'],
  [TokenType.keywordNoreturn, 'noreturn'],
  [TokenType.keywordRegister, 'register'],
  [TokenType.keywordReturn, 'return'],
  [TokenType.keywordShort, 'short'],
  [TokenType.keywordSigned, 'signed'],
  [TokenType.keywordSizeof, 'sizef'],
  [TokenType.keywordStatic, 'static'],
  [TokenType.keywordStaticassert, 'static_assert'],
  [TokenType.keywordStruct, 'struct'],
  [TokenType.keywordSwitch, 'switch'],
  [TokenType.keywordThreadlocal, 'thread_local'],
  [TokenType.keywordTypedef, 'typedef'],
  [TokenType.keywordUnion, 'union'],
  [TokenType.keywordUnsigned, 'unsigned'],
  [TokenType.keywordVoid, 'void'],
  [TokenType.keywordVolatile, 'volatile'],
  [TokenType.keywordWhile, 'while'],

  [TokenType.operatorUnaryArithmeticIncrementPrefix, '++'],
  [TokenType.operatorUnaryArithmeticIncrementPostfix, '++'],
  [TokenType.operatorUnaryArithmeticDecrementPrefix, '--'],
  [TokenType.operatorUnaryArithmeticDecrementPostfix, '--'],
  [TokenType.operatorUnaryBitwiseOnesComplement, '~'],
  [TokenType.operatorUnaryLogicalNegation, '!'],
  [TokenType.operatorUnaryIndirection, '*'],
  [TokenType.operatorUnaryDereference, '*'],
  [TokenType.operatorBinaryArithmeticAddition, '+'],
  [TokenType.operatorBinaryArithmeticSubtraction, '-'],
  [TokenType.operatorBinaryArithmeticDivision, '/'],
  [TokenType.operatorBinaryArithmeticMultiplication, '*'],
  [TokenType.operatorBinaryArithmeticModulo, '%'],
  [TokenType.operatorBinaryComparisonEqualTo, '=='],
  [TokenType.operatorBinaryComparisonNotEqualTo, '!='],
  [TokenType.operatorBinaryComparisonGreaterThan, '>'],
  [TokenType.operatorBinaryComparisonGreaterThanOrEqualTo, '>='],
  [TokenType.operatorBinaryComparisonLessThan, '<'],
  [TokenType.operatorBinaryComparisonLessThanOrEqualTo, '<='],
  [TokenType.operatorBinaryLogicalAnd, '&&'],
  [TokenType.operatorBinaryLogicalOr, '||'],
  [TokenType.operatorBinaryBitwiseAnd, '&'],
  [TokenType.operatorBinaryBitwiseOr, '|'],
  [TokenType.operatorBinaryBitwiseXor, '^'],
  [TokenType.operatorBinaryBitwiseShiftLeft, '<<'],
  [TokenType.operatorBinaryBitwiseShiftRight, '>>'],
  [TokenType.operatorBinaryAssignmentDirect, '='],
  [TokenType.operatorBinaryAssignmentAddition, '+='],
  [TokenType.operatorBinaryAssignmentSubtraction, '-='],
  [TokenType.operatorBinaryAssignmentMultiplication, '*='],
  [TokenType.operatorBinaryAssignmentDivision, '/='],
  [TokenType.operatorBinaryAssignmentModulo, '%='],
  [TokenType.operatorBinaryAssignmentBitwiseShiftLeft, '<<='],
  [TokenType.operatorBinaryAssignmentBitwiseShiftRight, '>>='],
  [TokenType.operatorBinaryAssignmentBitwiseAnd, '&='],
  [TokenType.operatorBinaryAssignmentBitwiseOr, '|='],
  [TokenType.operatorBinaryAssignmentBitwiseXor, '^='],
  [TokenType.operatorTernaryQuestion, '?'],
  [TokenType.operatorTernaryColon, ':'],
  [TokenType.operatorMemberSelectionDirect, '.'],
  [TokenType.operatorMemberSelectionIndirect, '->'],

  [TokenType.specialParenthesisLeft, '('],
  [TokenType.specialParenthesisRight, ')'],
  [TokenType.specialBraceLeft, '{'],
  [TokenType.specialBraceRight, '}'],
  [TokenType.specialBracketLeft, '['],
  [TokenType.specialBracketRight, ']'],
  [TokenType.specialComma, ','],
  [TokenType.specialSemicolon, ';'],

  [TokenType.ambiguousAsterisk, '*'],
  [TokenType.ambiguousPlus, '+'],
  [TokenType.ambiguousMinus, '-'],
  [TokenType.ambiguousDecrement, '--'],
  [TokenType.ambiguousIncrement, '++'],
  [TokenType.ambiguousAmpersand, '&']
]);

export default tokenTypeToValueMap;
