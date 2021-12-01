This is a short explanation of what each file on the backend does, for more details see the comments in the files.  This only describes the files found in AWS.

## Dev-CivilDiscourseMap-ModifyTableData

This file is used to update the dynamodb database information.  To do this you need a JSON file with all the data and then you should modify the function as needed.

To get a JSON file with all the data you need to convert an excel CSV file to a JSON file.

[This link to a stackoverflow question has an excellent explanation on how to accomplish this.](https://stackoverflow.com/questions/19187085/what-is-the-easiest-way-to-convert-an-excel-spreadsheet-with-tabular-data-to-jso)

## Dev-CivilDiscourseMap-ModifyTableData2021

This is a copy of the *Dev-CivilDiscourseMap-ModifyTableData* with slight changes for the version of the data we imported.

## Prod-CivilDiscourseMap-ModifyTableData

This file is for when the data in the *Dev-CivilDiscourseMap* table is what you want to use on the production site.  Small changes to this might be needed if you have new variables.

## Dev-CivilDiscourseMap-UpdatePopulationData

This can be used to update the population data for every country in the *Dev-CivilDiscourseMap* table

## Prod-CivilDiscourseMap-UpdatePopulationData

This runs once a day and updates the population data in the *Prod-CivilDiscourseMap* table

## Dev-CivilDiscourseMap-RefreshNewsCache

This is used to update the news articles for the specified country on the dev side.  This uses the NewsAPI

## Prod-CivilDiscourseMap-RefreshNewsCache

This is used to update the news articles on the production side.  This uses the NewsAPI and runs once every day.  EventBridge is used to schedule it to run.

## Dev-CivilDiscourseMap-ScrapeRWB

At the time of writing this this file is unfinished but it might have code that scrapes data from the RWB website.

## Dev-CivilDiscourseMap-GetNewsByName

Returns the JSON of news articles that are stored in the dev folder in S3 for the specified country.

## Prod-CivilDiscourseMap-GetNewsByName

Returns the JSON of the news articles that are stored in the prod folder in S3 for the specified country.

## Dev-CivilDiscourseMap-ImportMongoData

This is currently unused and is an older version of the *Dev-CivilDiscourseMap-ModifyTableData* function.

## Prod-CivilDiscourseMap-ImportMongoData

This is currently unused and is an older version of the *Prod-CivilDiscourseMap-ModifyTableData* function.

## Dev-CivilDiscourseMap-GetAllAttributes

Returns all the data stored in the *Dev-CivilDiscourseMap* table.

## Prod-CivilDiscourseMap-GetAllAttributes

Returns all the data stored in the *Prod-CivilDiscourseMap* table.

## Dev-CivilDiscourseMap-GetAttributesByName

Returns the data stored in the *Dev-CivilDiscourseMap* table for the specified country.

## Prod-CivilDiscourseMap-GetAttributesByName

Returns the data stored in the *Prod-CivilDiscourseMap* table for the specified country.
