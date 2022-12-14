## CMG Engineering Audition
365-Widgets makes inexpensive home sensors such as thermometers, humidistats, and carbon monoxide detectors. In order to spot check the
manufacturing process, some units are put in a test environment (for an unspecified amount of time) and their readings are logged. The test
environment is controlled with a known temperature, humidity, and CO concentration, but the inexpensive sensors are expected to have some
variation with each reading.

As a developer, your task is to process the log files and automate the quality control evaluation. The evaluation criteria are as follows:
1) For a thermometer, it is branded “ultra precise” if the mean of the readings is within 0.5 degrees of the known temperature, and the standard
deviation is less than 3. It is branded “very precise” if the mean is within 0.5 degrees of the room, and the standard deviation is under 5. Otherwise,
it’s sold as “precise”.
2) For a humidity sensor, it must be discarded unless it is within 1 humidity percent of the reference value for all readings. (All humidity sensor
readings are a decimal value representing percent moisture saturation.)
3) For a carbon monoxide detector, it must be discarded unless it is within 3 ppm of the reference value for all readings. (All carbon monoxide
readings are an integer value representing parts per million.)
An example log looks like the following. The first line means that the room was held at a constant 70 degrees, 45% relative humidity with 6 ppm
carbon monoxide. Subsequent lines either identify a sensor (<type> <name>) or give a reading (<time> <value>).

```log
reference 70.0 45.0 6
thermometer temp-1
2007-04-05T22:00 72.4
2007-04-05T22:01 76.0
2007-04-05T22:02 79.1
2007-04-05T22:03 75.6
2007-04-05T22:04 71.2
2007-04-05T22:05 71.4
2007-04-05T22:06 69.2
2007-04-05T22:07 65.2
2007-04-05T22:08 62.8
2007-04-05T22:09 61.4
2007-04-05T22:10 64.0
2007-04-05T22:11 67.5
2007-04-05T22:12 69.4
thermometer temp-2
2007-04-05T22:01 69.5
2007-04-05T22:02 70.1
2007-04-05T22:03 71.3
2007-04-05T22:04 71.5
2007-04-05T22:05 69.8
humidity hum-1
2007-04-05T22:04 45.2
2007-04-05T22:05 45.3
2007-04-05T22:06 45.1
humidity hum-2
2007-04-05T22:04 44.4
2007-04-05T22:05 43.9
2007-04-05T22:06 44.9
2007-04-05T22:07 43.8
2007-04-05T22:08 42.1
monoxide mon-1
2007-04-05T22:04 5
2007-04-05T22:05 7
2007-04-05T22:06 9
monoxide mon-2
2007-04-05T22:04 2
2007-04-05T22:05 4
2007-04-05T22:06 10
2007-04-05T22:07 8
2007-04-05T22:08 6
```

Sample Output
```json
{
    "temp-1": "precise",
    "temp-2": "ultra precise",
    "hum-1": "keep",
    "hum-2": "discard",
    "mon-1": "keep",
    "mon-2": "discard"
}
```

You have been tasked with creating a solution that takes the contents of a log file, and outputs the devices and their classification, as per the sample
output above.

You can assume you are submitting a PR for a feature that will go into production. You may use any library or tool available to you to solve this task.
You will own this process and will be responsible for future expansions to the code. You should solve the problem as described but you are
encouraged to be forward-thinking and advocate for any changes or demonstrate any practices that would improve the process (such as a change in
log format, a change in the class interface, etc.). While the sample log file is small, production log files are likely to be very large, and 365-Widgets will
be adding more sensor types (for example, a noise level detector) in the future.


## JavaScript
Create a JavaScript library that exports the following function: evaluateLogFile(logContentsStr) { }. The parameter
logContentsStr will simply be the logfile contents read in from a text file.
