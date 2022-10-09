import ResultEnum from '../enums/Result'

/*
    monoxide:
        keep: all readings deviations <= 3
        discard: rest
*/

function calcMonoxide (values: number[], ref: number): ResultEnum {
  const minDiff = Math.abs(ref - Math.min(...values))
  const maxDiff = Math.abs(ref - Math.max(...values))

  if (minDiff <= 3 && maxDiff <= 3) return ResultEnum.keep

  return ResultEnum.discard
}

export default calcMonoxide
