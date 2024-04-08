export default {
    common: {
        list: 'Source List',
        modify: 'Modify Source [ $NAME ]',
        source: 'Source',
        configure: 'Configure',
        authorization: 'Authorization',
        advanced: 'Advanced',
        custom: 'Custom',
        host: 'Host Address',
        port: 'Port',
        name: 'Name',
        username: 'Username',
        password: 'Password',
        database: 'Database',
        ssl: 'SSL',
        file: 'File',
        create: 'Create Source',
        delete: 'Delete Source [ $NAME ]',
        syncMetadata: 'Sync Metadata',
        syncHistory: 'Sync History',
        manager: 'Data Manager',
        info: 'Basic Information',
        notSpecified: 'Not Specified',
        notUpdated: 'Not Updated',
        engine: 'Engine',
        notSpecifiedEngine: 'Not Specified Engine',
        collation: 'Collation',
        notSpecifiedCollation: 'Not Specified Collation',
        dataInfo: 'Data Information',
        totalRows: 'Total Rows',
        format: 'Format',
        notSpecifiedFormat: 'Not Specified Format',
        avgRowLength: 'Average Row Length',
        dataSize: 'Data Size',
        indexSize: 'Index Size',
        notSpecifiedIndex: 'Not Specified Index',
        autoIncrement: 'Auto Increment',
        notSpecifiedPrimaryKey: 'Not Specified Primary Key',
        resetAutoIncrement: 'Reset Auto Increment',
        resetTo: 'Reset to',
        comment: 'Table Comment',
        menuNew: 'New',
        menuNewTable: 'New Table',
        tableName: 'Table Name',
        columnName: 'Column Name',
        columnType: 'Column Type',
        columnLength: 'Column Length',
        columnDefaultValue: 'Default Value',
        columnPrimaryKey: 'Primary Key',
        columnAutoIncrement: 'Auto Increment',
        columnIsNullable: 'Is Nullable',
        columnComment: 'Column Comment',
        newColumn: 'New Column',
        menuExport: 'Export',
        exportData: 'Export Data',
        exportDataTable: 'Export [ $VALUE ] Table Data',
        exportDataFormat: 'Export Data Format',
        exportDataCount: 'Export Data Count',
        downloadPath: 'Download Path',
        downloadFile: 'Download File',
        truncateTable: 'Truncate Table',
        truncateTableInfo: 'Truncate [ $VALUE ] Table',
        dropTable: 'Drop Table',
        dropTableInfo: 'Drop [ $VALUE ] Table',
        structure: 'Structure',
        isNullable: 'Is Nullable',
        defaultValue: 'Default Value',
        extra: 'Extra',
        changeColumn: 'Change Column',
        changeColumnInfo: 'Change [ $VALUE ] Column',
        dropColumn: 'Drop Column',
        dropColumnInfo: 'Drop [ $VALUE ] Column',
        tableData: 'Table Data',
        firstPage: 'First Page',
        previousPage: 'Previous Page',
        nextPage: 'Next Page',
        lastPage: 'Last Page',
        jumpPage: 'Jump to Page',
        showPageSize: 'Show Page Size',
        records: 'Records',
        addRows: 'Add Rows',
    },
    tip: {
        selectSource: 'Please select a source',
        deleteSuccess: 'Delete source [ $NAME ] success',
        deleteAlert1: 'You are deleting a data source. This action permanently deletes all data and configurations associated with that data source. Please be sure to confirm your actions before proceeding.',
        deleteAlert2: 'Warning: Doing this will not be undone. All data and configurations associated with that data source will be permanently deleted.',
        deleteAlert3: 'To confirm, type [ $NAME ] in the box below',
        syncMetadata1: 'Sync metadata will run in the background',
        syncMetadata2: 'Synchronizing metadata will overwrite the current metadata, which may result in data loss.',
        syncMetadata3: 'To confirm, type [ $NAME ] in the box below',
        syncMetadata4: 'Task [ $NAME ] has started',
        selectDatabase: 'Please select a database',
        notSelectedNode: 'Please select the node on the left to display the results',
        resetAutoIncrementSuccess: 'Reset auto increment to [ $VALUE ] success',
        createTableSuccess: 'Create table [ $VALUE ] success',
        createColumnSuccess: 'Create column [ $VALUE ] success',
        truncateTableSuccess: 'Truncate table [ $VALUE ] success',
        truncateTable1: 'You are about to truncate the table. This will delete all data in the table. Are you sure you want to continue? ',
        truncateTable2: 'Please note that the truncation table operation is irreversible. Doing this will permanently delete all data in the table. Please make sure you have backed up important data. ',
        truncateTable3: 'Performing a truncate table operation will immediately delete all data in the table, which may affect ongoing work. Please make sure you have saved the data you need and that other users are not affected. ',
        truncateTable4: 'We recommend that you first test the truncate table operation in a non-production environment to ensure that it does not have unexpected effects on your production data. ',
        truncateTable5: 'If you have any questions or need assistance performing a truncate table operation, please contact your database administrator or technical support team. ',
        dropTableSuccess: 'Drop table [ $VALUE ] success',
        dropTable1: 'You are about to delete a table. This operation will permanently delete the table and all its data. Are you sure you want to continue? ',
        dropTable2: 'Please note that dropping a table is irreversible. Doing this will permanently delete the table and all its data. Please make sure you have backed up important data. ',
        dropTable3: 'Performing a drop table operation will immediately delete the table and all its data, which may affect ongoing work. Please make sure you have saved the data you need and that other users are not affected. ',
        dropTable4: 'We recommend that you first test the drop table operation in a non-production environment to ensure that it does not have unintended effects on your production data. ',
        dropTable5: 'If you have any questions or need assistance performing a drop table operation, please contact your database administrator or technical support team. ',
        changeColumnSuccess: 'Change column [ $VALUE ] success',
        dropColumnSuccess: 'Drop column [ $VALUE ] success',
        dropColumn1: 'You are about to delete a column. This operation will permanently delete the column and all its data. Are you sure you want to continue? ',
        dropColumn2: 'Please note that deleting a column is irreversible. Doing this will permanently delete the column and all its data. Please make sure you have backed up important data. ',
        dropColumn3: 'Performing a drop column operation will immediately delete the column and all its data, which may affect ongoing work. Please make sure you have saved the data you need and that other users are not affected. ',
        dropColumn4: 'We recommend that you first test the drop column operation in a non-production environment to ensure that it does not have unintended effects on your production data. ',
        dropColumn5: 'If you have any questions or need assistance performing a drop column operation, please contact your database administrator or technical support team. '
    }
}