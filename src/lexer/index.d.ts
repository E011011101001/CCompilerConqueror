export type Token = string
export type TokenType =
  'Keyword' |
  '<INT>' |
  '<ID>' |
  'LogicOperator' | // forbid tmp
  'String' |        // forbid tmp
  'Assign' |
  'Operator' |
  'Delimiter' |
  'Char' |          // forbid tmp
  'Number' |        // forbid tmp
  'Separator' |
  'MultComment' |   // forbid tmp
  'SigComment' |    // forbid tmp
  'LBracket' |
  'RBracket' |
  'LBrace' |
  'RBrace'

// Number means Line-no
export type LexItem = [Token, TokenType, Number]
export type LexArray = Array<LexItem>

export interface Lexer {
  (srcCode: string): LexArray
}
