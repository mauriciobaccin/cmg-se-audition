import WidgetSupportedEnum from '../enums/WidgetSupported'

interface SensorsWithData {
  [key: string]: {
    type: keyof typeof WidgetSupportedEnum
    logValues: number[]
  }
}

function extractSensorsWithData (sensorsRawData: string[]): SensorsWithData {
  let tempWidgetName: string

  const sensors: SensorsWithData = sensorsRawData.reduce((acc: SensorsWithData, cur: string) => {
    const [curentWidgetTypeOrReadingTime, currentWidgetNameOrValue] = cur.split(' ')

    if (Object.values(WidgetSupportedEnum).includes(curentWidgetTypeOrReadingTime)) {
      acc[currentWidgetNameOrValue] = {
        type: curentWidgetTypeOrReadingTime as keyof typeof WidgetSupportedEnum,
        logValues: []
      }

      tempWidgetName = currentWidgetNameOrValue
    } else {
      acc[tempWidgetName]?.logValues.push(Number(currentWidgetNameOrValue))
    }

    return acc
  }, {})

  return sensors
}

export default extractSensorsWithData
