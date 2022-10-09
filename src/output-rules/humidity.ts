import ResultEnum from '../enums/Result'

/*
    himidity:
        keep: all readings deviations <= 1
        discard: rest
*/

function calcHumidity (values: number[], ref: number): ResultEnum {
  const minDiff = Math.abs(ref - Math.min(...values))
  const maxDiff = Math.abs(ref - Math.max(...values))

  if (minDiff <= 1 && maxDiff <= 1) return ResultEnum.keep

  return ResultEnum.discard
}

export default calcHumidity
