# StorageApp

Plain UI app. The UI was **heavily** inspired by https://dribbble.com/shots/16380355-Propio-Storage-Management-App/attachments/9550708?mode=media

## General
Execute the following scripts

[] `yarn install`
[] `yarn lint`

## Android
For android please add a local.properties file inside of android/ root folder with the android sdk path
Note: if you do not have android sdk install, install Android Studio, it will install all necessary android libraries (adb, android sdk)

[] example path: `sdk.dir=/Users/<username>/Library/Android/sdk`
[] execute this command
`cd android && ./gradlew clean && cd .. && yarn android`

## iOS
For ios please install xcode from the appstore

[] execute this command
`cd ios && pod install && cd .. && yarn ios`