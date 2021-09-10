Ext.define('VT.store.BaseStore', {
    extend: 'Ext.data.TreeStore',

    requires: [
        'Ext.data.proxy.JsonP',
        'Ext.data.reader.Json',
        // 'Ext.util.Filter'
    ],

    config: {
        autoLoad: false,
        model: 'VT.model.BaseModel',
        // remoteFilter: true,
        storeId: 'BaseStore',
        // syncRemovedRecords: false,
        defaultRootProperty: 'items',
        proxy: {
            type: 'jsonp',
            url: 'https://vasil.iag.bg/tel/v2',
            reader: {
                type: 'json',
                rootProperty: '',
            }
        }
    }
});