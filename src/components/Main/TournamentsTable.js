import React from "react";

function TournamentsTable() {
    return (
        <div>
            <h2>Tournaments</h2>
            <table border="1px" width="100%">
                <tr>
                    <th>Tournament Name</th>
                    <th>Category</th>
                    <th>Dates</th>
                </tr>
                <tr>
                    <td>Champions of tennis</td>
                    <td>Mixed Doubles</td>
                    <td>December 21-22</td>
                </tr>
                <tr>
                    <td>Summer Comp</td>
                    <td>All</td>
                    <td>January</td>
                </tr>
            </table>
        </div>
    );
}

export default TournamentsTable;
