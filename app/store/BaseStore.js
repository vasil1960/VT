Ext.define('VT.store.BaseStore', {
    extend: 'Ext.data.TreeStore',

    requires: [
        'Ext.data.proxy.JsonP',
        'Ext.data.reader.Json',
        'Ext.util.Filter'
    ],

    config: {
        autoLoad: true,
        model: 'VT.model.BaseModel',
        remoteFilter: false,
        storeId: 'BaseStore',
        pageSize: 15,
        // syncRemovedRecords: false,
        defaultRootProperty: 'text',
        proxy: {
            type: 'jsonp',
            url: 'https://vasil.iag.bg/',
            reader: {
                type: 'json',
                rootProperty: 'items',
                totalProperty: 'total'
            }
        }
    }
});