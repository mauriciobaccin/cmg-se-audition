import WidgetSupportedEnum from '../enums/WidgetSupported'

interface References {
  [key: string]: number
}

function getRefsForWidgets (line: string): References {
  const avgs = line.split(' ')
  const referenceAvgs: References = {}

  avgs.forEach((avg, index) => {
    if (WidgetSupportedEnum[index] !== '') {
      referenceAvgs[WidgetSupportedEnum[index] as keyof typeof WidgetSupportedEnum] = Number(avg)
    }
  })

  return referenceAvgs
}

export default getRefsForWidgets
