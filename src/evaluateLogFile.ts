import WidgetSupportedEnum from './enums/WidgetSupported'
import ResultEnum from './enums/Result'

import getRefsForWidgets from './functions/getRefsForWidgets'
import extractSensorsWithData from './functions/extractSensorsWithData'

import { calcHumidity, calcMonixide, calcThermometer } from './output-rules/index'

interface ResultSensors {
  [key: string]: ResultEnum
}

const calcOutputRules = {
  [WidgetSupportedEnum[WidgetSupportedEnum.humidity]]: calcHumidity,
  [WidgetSupportedEnum[WidgetSupportedEnum.monoxide]]: calcMonixide,
  [WidgetSupportedEnum[WidgetSupportedEnum.thermometer]]: calcThermometer
}

function evaluateLogFile (logContentsStr: string): ResultSensors {
  const result: ResultSensors = {}

  const [reference, ...sensorsRawData] = logContentsStr.split('\n')

  const widgetRefs = getRefsForWidgets(reference)
  const sensorsWithData = extractSensorsWithData(sensorsRawData)

  Object.keys(sensorsWithData).forEach((widget) => {
    const widgetType = sensorsWithData[widget].type
    result[widget] = calcOutputRules[widgetType](
      sensorsWithData[widget].logValues,
      widgetRefs[widgetType]
    )
  })

  return result
}

export default evaluateLogFile
