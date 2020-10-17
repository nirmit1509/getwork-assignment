This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


The website is mainly divided into 2 components : 
1. Navbar
2. Main

![Screenshot (26)](https://user-images.githubusercontent.com/55524764/96333563-56099f80-1088-11eb-8235-5f1c87ac82bc.png)

Main is further divided into 2 components - 

2.1. Sidebar
2.2. MainContent

o In Navbar, there is company logo and username visible on the top.

o In Sidebar, all the list items are static. A nice hover effect is enabled on these list items.

o In MainContent, all the sections above table are purely static and resembles the one provided in the assignment.
The Employee data for table has been populated from the API : http://dummy.restapiexample.com/api/v1/employees



Features implemented using table are-


i) Sorting: By default, it is sorted according to employee IDs (ascending order). Clicking on any column name will sort the data according to that particular field. Nice set of material Icons are used to display ORDER of sorting.

![Screenshot (28)](https://user-images.githubusercontent.com/55524764/96333594-7fc2c680-1088-11eb-9fb6-a9fb36280d2a.png)
The rows are increasingly sorted depending upon the salary of employee.



ii) Searching: You can search any text or number, and the relevant data will be available on the table.

![Screenshot (27)](https://user-images.githubusercontent.com/55524764/96333597-84877a80-1088-11eb-9250-88f436228fe5.png)
As soon as we type "Ga" in the search box, 2 records are filtered.



iii) Pagination: The no. of records to be displayed on the table can be adjusted. In this web-app, you have 2 options- you can either display 5 rows per page or 10 rows per page.

![Screenshot (29)](https://user-images.githubusercontent.com/55524764/96333665-ecd65c00-1088-11eb-8b75-e4f60e6f5bc2.png)



iv) Selecting rows: You can select any no. of rows using the checkbox provided. After selecting desired no of rows, press "NOTIFICATION IMPORTANT" icon on the right top corner of the table. Pressing this icon will pop up an alert with details of selected rows.

![Screenshot (30)](https://user-images.githubusercontent.com/55524764/96333672-f4960080-1088-11eb-8c52-f307cc1d127d.png)

![Screenshot (31)](https://user-images.githubusercontent.com/55524764/96333678-f8c21e00-1088-11eb-8bb6-b32b9579d45f.png)
You can select/deselect all rows at a time as well.
