Changelog
=========

## 0.3.1
- update to react 0.14
- update babel-loader
- switch to using fbjs for keymirror

## 0.3.0
- added new prop: shouldTriggerOnChangeForDateTimeOutsideRange
- on click of 'Today', if it's already today, panel dismisses

## 0.2.4
- [bug] fixed bug related to hour scrolling and jumping entire page

## 0.2.3
- [bug] clicking the decades button in calendar navigator will not crash anymore
- [bug] min and max date will not be red for same dates
- hour selector will scroll to selected hour or nearest hour

## 0.2.2
- fixed JSS modules
- KNOWN ISSUE: minified is not working

## 0.2.1
- fixed dependency

## 0.2.0
- added `min` & `max` props for date ranges

## 0.1.6
- allow empty input strings for null
- for moment-range@1.0.9 until it is fixed

## 0.1.5
- clean up

## 0.1.4
- fix moment and prop options initialization

## 0.1.3
- fix setting of moment locale
- add '.react-kronos' as a top level css class for customization
- allow for null date/time values
- remove colored background from input focus
- move Lodash to be peer dependency

## 0.1.2
- add React 0.13 as peer dependency
- fix react defined [issue](https://github.com/dubert/react-kronos/issues/1)
- fix multiple instances [issue](https://github.com/dubert/react-kronos/issues/5)

## 0.1.1
- initial release
