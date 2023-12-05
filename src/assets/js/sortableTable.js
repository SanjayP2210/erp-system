import { useState } from "react";

function getDefaultSorting(defaultTableData, columns) {
    const sorted = [...defaultTableData].sort((a, b) => {
        const filterColumn = columns?.filter((column) => column.sortbyOrder);

        // Merge all array objects into single object and extract accessor and sortbyOrder keys
        let { accessor = "id", sortbyOrder = "asc" } = Object.assign(
            {},
            ...filterColumn
        );

        if (a[accessor] === null) return 1;
        if (b[accessor] === null) return -1;
        if (a[accessor] === null && b[accessor] === null) return 0;

        const ascending = a[accessor]?.toString()?.localeCompare(b[accessor].toString(), "en", {
                numeric: true,
            });

        return sortbyOrder === "asc" ? ascending : -ascending;
    });
    return sorted;
}

export const useSortableTable = (data, columns) => {

    /* Table Logics */
  // State for sorting
//   const [sortedColumn, setSortedColumn] = useState(null);
//   const [sortOrder, setSortOrder] = useState('asc');

//   // State for pagination
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage] = useState(5); // Change this value according to your preference

//   // Your table data (replace this with your actual data)
//   const [tableData, setTableData] = useState([])

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = tableData.slice(indexOfFirstItem, indexOfLastItem);
//   // Sorting function
//   const handleSort = (column) => {
//     const order = sortOrder === 'asc' ? 'desc' : 'asc'
//     if (sortedColumn === column) {
//       setSortOrder(order);
//     } else {
//       setSortedColumn(column);
//       setSortOrder(order);
//     }
//     if (column) {
//       const sorted = [...tableData].sort((a, b) => {
//         if (a[column] === null) return 1;
//         if (b[column] === null) return -1;
//         if (a[column] === null && b[column] === null) return 0;
//         return (
//           a[column].toString().localeCompare(b[column].toString(), "en", {
//             numeric: true,
//           }) * (order === "asc" ? 1 : -1)
//         );
//       });
//       setTableData(sorted);
//     }
//   };

    const [tableData, setTableData] = useState(data);
    let tableColumns = columns || [];
    const handleSorting = (sortField, sortOrder,key) => {
        if (sortField) {
            const sorted = [...tableData]?.sort((a, b) => {
                if (a[sortField] === null) return 1;
                if (b[sortField] === null) return -1;
                if (a[sortField] === null && b[sortField] === null) return 0;
                return (
                    a[sortField]?.toString()?.localeCompare(b[sortField]?.toString(), "en", {
                        numeric: true,
                    }) * (sortOrder === "asc" ? 1 : -1)
                );
            });
            setTableData(sorted);
            tableColumns = {
                [key]:
                {
                    ...tableColumns[key],
                    'sortbyOrder' : sortOrder
                }
            }
        }
    };

    return [tableColumns, tableData, handleSorting];
};