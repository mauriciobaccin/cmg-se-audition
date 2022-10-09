import ResultEnum from '../enums/Result'

/*
    thermometer:
        ultra precise: avg within 0.5 && deviation < 3
        very precise: avg within 0.5 && deviation <= 5
        precise: rest
*/

function calcThermometer (values: number[], ref: number): ResultEnum {
  const avg = values.reduce((acc, cur) => acc + cur, 0) / values.length
  const avgDiff = Math.abs(ref - avg)

  if (avgDiff <= 0.5) {
    const minDiff = Math.abs(ref - Math.min(...values))
    const maxDiff = Math.abs(ref - Math.max(...values))

    if (minDiff < 3 && maxDiff < 3) return ResultEnum['ultra precise']
    else if (minDiff <= 5 && maxDiff <= 5) return ResultEnum['very precise']
  }

  return ResultEnum.precise
}

export default calcThermometer
