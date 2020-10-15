import ReactFlexyTable from "react-flexy-table"
import "react-flexy-table/dist/index.css"
import React from 'react';
import dataList from './jsonData';

export default function tableList(){
    return(
        <ReactFlexyTable data={dataList} sortable nonSortCols={["id","name"]} />
    )
}
