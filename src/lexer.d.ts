export type Token = string
export type TokenType =
  'keyword' |
  'integer' |
  'variable' |
  'logicOperator' |
  'string' |
  'assign' |
  'operator' |
  'delimiter' |
  'char' |
  'number' |
  'separator' |
  'multComment' |
  'sigComment' |
  'LBracket' |
  'RBracket' |
  'LBrace' |
  'RBrace'

export type LexArray = Array<[Token, TokenType]>

export interface Lexer {
  (srcCode: string): LexArray
}
