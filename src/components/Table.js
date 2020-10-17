import React from 'react';
import MaterialTable from 'material-table';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';

function Table( { rows }) {

    const theme = createMuiTheme({
        palette: {
          primary: {
            main: '#4caf50',
          },
          secondary: {
            main: '#ff9100',
          },
        },
    
    });

    const columns = [
        { 
            title: "EMP ID", 
            field: "id", 
            headerStyle: {
                backgroundColor: 'rgb(220, 222, 224)',
                fontWeight: 'bold',
                fontSize: '18px'
            } 
        },
        { 
            title: "EMP Name", 
            field: "employee_name",
            headerStyle: {
                backgroundColor: 'rgb(220, 222, 224)',
                fontWeight: 'bold',
                fontSize: '18px'
            }
        },
        { 
            title: "EMP Salary", 
            field: "employee_salary",
            headerStyle: {
                backgroundColor: 'rgb(220, 222, 224)',
                fontWeight: 'bold',
                fontSize: '18px'
            }
        },
        { 
            title: "EMP Age", 
            field: "employee_age",
            headerStyle: {
                backgroundColor: 'rgb(220, 222, 224)',
                fontWeight: 'bold',
                fontSize: '18px'
            }
        },
        // { title: "Picture", field: "profile_image" }
    ]

    return (
        <div>
            <ThemeProvider theme={theme}>
                <MaterialTable 
                    title="Employee Details"
                    data = {rows}
                    columns = {columns}
                    options = {{
                        search: true,
                        sorting: true,
                        selection: true,
                        paging: true,
                        pageSizeOptions: [5, 10]
                    }}
                    actions={[
                        {
                        tooltip: 'Display All Selected Users',
                        icon: 'notification_important',
                        onClick: (evt, data) =>  {
                            var details = "DETAILS OF SELECTED ROWS\n"
                            for(let i=0; i<data.length; i++) {
                                details = details + data[i].id + "-> " +data[i].employee_name + "\n"
                            }
                            alert(details)
                        }  
                        }
                    ]}
            />
            </ThemeProvider>
        </div>
    )
}

export default Table;
