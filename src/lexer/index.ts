import { Lexer } from './index.d'

const lexer : Lexer = (codes : string) => {
  while (codes !== '') {
    codes = codes.slice(1)
    console.log(codes)
  }
  return [['1', 'LBrace']] // return example
}

export default lexer
