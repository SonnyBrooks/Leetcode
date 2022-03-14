# Water Drinking Habit Tracker

## Description and Requirements
You are tasked with developing an app to track the amount of water a user has drank in a day.

Users will input their water intake as they drink. The data needs to be stored for historical purposes and needs to reset daily.

## Prompts
* How would you design the structure of this app? (1)
* What features would make it easier for a user to input their data? (2)
* How would you let a customer select a bottle size or add a new bottle size for future use? (3)
* How would you notify users if they're not drinking enough water? (4)

## My Solution

(1)
### User
* name: string
* email: string

### Water Intake Record
* time recorded: datetime
* amount: integer (_in oz_)

### Water Container
* name: string
* capacity: integer (_in oz_)


(2) The water intake screen would have your total amount of intake so far. You'd have an option to input an amount in oz. There would be quick action buttons that would let you add preset amounts quickly - 8oz, 16oz, 32oz, add your own bottle. The add your own bottle would let you add a custom quick action button of a size of your choosing. (3)

(4) Periodically, I would check the last time a user entered their water intake by looking at the last Water Intake Record recorded. If it had been more than 4 hours since the last recording, I would send a notification reminding the user to drink water.

By design, you keep a history of all your water intake by datetime. This allows you to "reset" daily by only querying off of today's records using Water Intake Record's time recorded property. This also allows you to go back in time to see how much water you've been drinking over time. This design also allows opportunities for short and long-term metrics. You could graph your intake over the last 5-days, 7-days, 14-days, 1-month, etc. 

Using this data, you could recommend products to help users stay on track with their water intake. 

## MVPs in order of development
1. Record Water Intake by entering oz's
2. Notifications
3. Add Quick Action buttons
4. Add the ability to add your own quick action button
5. Add recommended products
6. Metrics and long-term tracking


