import TokenType from './TokenType';

// For easier testing and debugging
const tokenTypeToNameMap = new Map<TokenType, string>([
  [TokenType.preproDirectiveInclude, 'preproDirectiveInclude'],
  [TokenType.preproDirectiveDefine, 'preproDirectiveDefine'],
  [TokenType.preproDirectiveUndef, 'preproDirectiveUndef'],
  [TokenType.preproDirectiveIfdef, 'preproDirectiveIfdef'],
  [TokenType.preproDirectiveIfndef, 'preproDirectiveIfndef'],
  [TokenType.preproDirectiveIf, 'preproDirectiveIf'],
  [TokenType.preproDirectiveElse, 'preproDirectiveElse'],
  [TokenType.preproDirectiveElif, 'preproDirectiveElif'],
  [TokenType.preproDirectiveEndif, 'preproDirectiveEndif'],
  [TokenType.preproDirectiveError, 'preproDirectiveError'],
  [TokenType.preproDirectivePragma, 'preproDirectivePragma'],
  [TokenType.preproMacroFile, 'preproMacroFile'],
  [TokenType.preproMacroLine, 'preproMacroLine'],
  [TokenType.preproMacroDate, 'preproMacroDate'],
  [TokenType.preproMacroTime, 'preproMacroTime'],
  [TokenType.preproMacroTimestamp, 'preproMacroTimestamp'],
  [TokenType.preproStandardHeader, 'preproStandardHeader'],
  [TokenType.preproOperatorConcat, 'preproOperatorConcat'],
  [TokenType.preproLineContinuation, 'preproLineContinuation'],

  [TokenType.keywordAlignas, 'keywordAlignas'],
  [TokenType.keywordAlignof, 'keywordAlignof'],
  [TokenType.keywordAuto, 'keywordAuto'],
  [TokenType.keywordAtomic, 'keywordAtomic'],
  [TokenType.keywordBool, 'keywordBool'],
  [TokenType.keywordBreak, 'keywordBreak'],
  [TokenType.keywordCase, 'keywordCase'],
  [TokenType.keywordChar, 'keywordChar'],
  [TokenType.keywordComplex, 'keywordComplex'],
  [TokenType.keywordConst, 'keywordConst'],
  [TokenType.keywordContinue, 'keywordContinue'],
  [TokenType.keywordDefault, 'keywordDefault'],
  [TokenType.keywordDo, 'keywordDo'],
  [TokenType.keywordDouble, 'keywordDouble'],
  [TokenType.keywordElse, 'keywordElse'],
  [TokenType.keywordEnum, 'keywordEnum'],
  [TokenType.keywordExtern, 'keywordExtern'],
  [TokenType.keywordFloat, 'keywordFloat'],
  [TokenType.keywordFor, 'keywordFor'],
  [TokenType.keywordGeneric, 'keywordGeneric'],
  [TokenType.keywordGoto, 'keywordGoto'],
  [TokenType.keywordIf, 'keywordIf'],
  [TokenType.keywordImaginary, 'keywordImaginary'],
  [TokenType.keywordInt, 'keywordInt'],
  [TokenType.keywordLong, 'keywordLong'],
  [TokenType.keywordNoreturn, 'keywordNoreturn'],
  [TokenType.keywordRegister, 'keywordRegister'],
  [TokenType.keywordReturn, 'keywordReturn'],
  [TokenType.keywordShort, 'keywordShort'],
  [TokenType.keywordSigned, 'keywordSigned'],
  [TokenType.keywordSizeof, 'keywordSizeof'],
  [TokenType.keywordStatic, 'keywordStatic'],
  [TokenType.keywordStaticassert, 'keywordStaticassert'],
  [TokenType.keywordStruct, 'keywordStruct'],
  [TokenType.keywordSwitch, 'keywordSwitch'],
  [TokenType.keywordThreadlocal, 'keywordThreadlocal'],
  [TokenType.keywordTypedef, 'keywordTypedef'],
  [TokenType.keywordUnion, 'keywordUnion'],
  [TokenType.keywordUnsigned, 'keywordUnsigned'],
  [TokenType.keywordVoid, 'keywordVoid'],
  [TokenType.keywordVolatile, 'keywordVolatile'],
  [TokenType.keywordWhile, 'keywordWhile'],

  [TokenType.constantNumber, 'constantNumber'],
  [TokenType.constantCharacter, 'constantCharacter'],
  [TokenType.constantString, 'constantString'],

  [TokenType.operatorUnaryArithmeticIncrementPrefix, 'operatorUnaryArithmeticIncrementPrefix'],
  [TokenType.operatorUnaryArithmeticIncrementPostfix, 'operatorUnaryArithmeticIncrementPostfix'],
  [TokenType.operatorUnaryArithmeticDecrementPrefix, 'operatorUnaryArithmeticDecrementPrefix'],
  [TokenType.operatorUnaryArithmeticDecrementPostfix, 'operatorUnaryArithmeticDecrementPostfix'],
  [TokenType.operatorUnaryBitwiseOnesComplement, 'operatorUnaryBitwiseOnesComplement'],
  [TokenType.operatorUnaryLogicalNegation, 'operatorUnaryLogicalNegation'],
  [TokenType.operatorUnaryPlus, 'operatorUnaryPlus'],
  [TokenType.operatorUnaryMinus, 'operatorUnaryMinus'],
  [TokenType.operatorUnaryIndirection, 'operatorUnaryIndirection'],
  [TokenType.operatorUnaryDereference, 'operatorUnaryDereference'],
  [TokenType.operatorUnaryAddressOf, 'operatorUnaryAddressOf'],
  [TokenType.operatorBinaryArithmeticAddition, 'operatorBinaryArithmeticAddition'],
  [TokenType.operatorBinaryArithmeticSubtraction, 'operatorBinaryArithmeticSubtraction'],
  [TokenType.operatorBinaryArithmeticDivision, 'operatorBinaryArithmeticDivision'],
  [TokenType.operatorBinaryArithmeticMultiplication, 'operatorBinaryArithmeticMultiplication'],
  [TokenType.operatorBinaryArithmeticModulo, 'operatorBinaryArithmeticModulo'],
  [TokenType.operatorBinaryComparisonEqualTo, 'operatorBinaryComparisonEqualTo'],
  [TokenType.operatorBinaryComparisonNotEqualTo, 'operatorBinaryComparisonNotEqualTo'],
  [TokenType.operatorBinaryComparisonGreaterThan, 'operatorBinaryComparisonGreaterThan'],
  [TokenType.operatorBinaryComparisonGreaterThanOrEqualTo, 'operatorBinaryComparisonGreaterThanOrEqualTo'],
  [TokenType.operatorBinaryComparisonLessThan, 'operatorBinaryComparisonLessThan'],
  [TokenType.operatorBinaryComparisonLessThanOrEqualTo, 'operatorBinaryComparisonLessThanOrEqualTo'],
  [TokenType.operatorBinaryLogicalAnd, 'operatorBinaryLogicalAnd'],
  [TokenType.operatorBinaryLogicalOr, 'operatorBinaryLogicalOr'],
  [TokenType.operatorBinaryBitwiseAnd, 'operatorBinaryBitwiseAnd'],
  [TokenType.operatorBinaryBitwiseOr, 'operatorBinaryBitwiseOr'],
  [TokenType.operatorBinaryBitwiseXor, 'operatorBinaryBitwiseXor'],
  [TokenType.operatorBinaryBitwiseShiftLeft, 'operatorBinaryBitwiseShiftLeft'],
  [TokenType.operatorBinaryBitwiseShiftRight, 'operatorBinaryBitwiseShiftRight'],
  [TokenType.operatorBinaryAssignmentDirect, 'operatorBinaryAssignmentDirect'],
  [TokenType.operatorBinaryAssignmentAddition, 'operatorBinaryAssignmentAddition'],
  [TokenType.operatorBinaryAssignmentSubtraction, 'operatorBinaryAssignmentSubtraction'],
  [TokenType.operatorBinaryAssignmentMultiplication, 'operatorBinaryAssignmentMultiplication'],
  [TokenType.operatorBinaryAssignmentDivision, 'operatorBinaryAssignmentDivision'],
  [TokenType.operatorBinaryAssignmentModulo, 'operatorBinaryAssignmentModulo'],
  [TokenType.operatorBinaryAssignmentBitwiseShiftLeft, 'operatorBinaryAssignmentBitwiseShiftLeft'],
  [TokenType.operatorBinaryAssignmentBitwiseShiftRight, 'operatorBinaryAssignmentBitwiseShiftRight'],
  [TokenType.operatorBinaryAssignmentBitwiseAnd, 'operatorBinaryAssignmentBitwiseAnd'],
  [TokenType.operatorBinaryAssignmentBitwiseOr, 'operatorBinaryAssignmentBitwiseOr'],
  [TokenType.operatorBinaryAssignmentBitwiseXor, 'operatorBinaryAssignmentBitwiseXor'],
  [TokenType.operatorMemberSelectionDirect, 'operatorMemberSelectionDirect'],
  [TokenType.operatorMemberSelectionIndirect, 'operatorMemberSelectionIndirect'],
  [TokenType.operatorTernaryQuestion, 'operatorTernaryQuestion'],
  [TokenType.operatorTernaryColon, 'operatorTernaryColon'],

  [TokenType.specialParenthesisLeft, 'specialParenthesisLeft'],
  [TokenType.specialParenthesisRight, 'specialParenthesisRight'],
  [TokenType.specialBraceLeft, 'specialBraceLeft'],
  [TokenType.specialBraceRight, 'specialBraceRight'],
  [TokenType.specialBracketLeft, 'specialBracketLeft'],
  [TokenType.specialBracketRight, 'specialBracketRight'],
  [TokenType.specialComma, 'specialComma'],
  [TokenType.specialSemicolon, 'specialSemicolon'],

  [TokenType.identifier, 'identifier'],
  [TokenType.label, 'label'],
  [TokenType.commentSingleline, 'commentSingleLine'],
  [TokenType.commentMultiline, 'commentMultiLine'],
  [TokenType.newline, 'newline'],

  [TokenType.ambiguousPlus, 'ambiguousPlus'],
  [TokenType.ambiguousMinus, 'ambiguousMinus'],
  [TokenType.ambiguousIncrement, 'ambiguousIncrement'],
  [TokenType.ambiguousDecrement, 'ambiguousDecrement'],
  [TokenType.ambiguousAsterisk, 'ambiguousAsterisk'],
  [TokenType.ambiguousAmpersand, 'ambiguousAmpersand'],
]);

export default tokenTypeToNameMap;
