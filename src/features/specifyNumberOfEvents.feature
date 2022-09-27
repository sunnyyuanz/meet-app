Feature: Specify number of events

    Scenario: When user hasn’t specified a number, 32 is the default number.
        Given the user hasn't specified the numbers of events he want to see.
        When the user is viewing the events.
        Then show thirty two events as default setting.

    Scenario: User can change the number of events they want to see.
        Given the user is viewing the events.
        When the user want to decide the number of events they want see.
        Then the number of events they specified show in the app.