Feature: Show/hide an event's details

    Scenario: An event element is collapsed by default.
        Given An event element is collapsed by default
        When the user just open the app.
        Then the user should see an event of the closest date is collapsing to show the details by default.

    Scenario: User can expand an event to see its details.
        Given main page is open and events are showing the title but no details.
        When the user click into a specific event title.
        Then the user should see the details of the event which just clicked.

    Scenario: User can collapse an event to hide its details
        Given an event is clicked to collapse.
        When the user click on the event tile again.
        Then the event should hide it's detail and only show the event title.