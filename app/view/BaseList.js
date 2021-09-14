Ext.define('VT.view.BaseList', {
    extend: 'Ext.NestedList',
    alias: 'widget.baselist',
    xtype:'baselist',

    requires: [
        'Ext.XTemplate',
        'Ext.plugin.ListPaging',
        'Ext.plugin.PullRefresh'
    ],

    config: {
        id: 'baseList',
        store: 'BaseStore',
        onItemDisclosure: true,

        toolbar: {
            items: [
                {
                    xtype:'spacer'
                },
                {
                    xtype: 'button',
                    id: 'btnBackToHome',
                    align: 'right',
                    text: 'Начало',
                }
            ],
        },
    
        detailCard: {
            html: 'You are viewing the detail card!',
        },

        // itemTpl: [
        //     '<div class="tweet">{text}</div>'
        // ],

        // tpl:['{gsm}'],

        // listConfig: {
        //     html: (
        //         '<img style="float:left" src="https://vasil.iag.bg/upload/{glav_pod}/{picture}" width="80" heigh="80">',
        //         '</img><h1>{text}',
        //         '</h1><p>{gsm}</p>'
        //     ),
                    
        // },

        displayField: 'text',

        // fullscreen: true,
        title: '',

        // plugins: [
        //     {
        //         xclass: 'Ext.plugin.ListPaging',
        //         autoPaging: true,
        //         loadMoreText: 'Зареждам...',
        //         noMoreRecordsText: 'Няма други служители'
        //     },
        //     // {
        //     //     xclass: 'Ext.plugin.PullRefresh',
        //     //     pullText: 'Pull down to refresh'
        //     // }
        // ],

        scrollable: {
                direction: 'vertical',
                directionLock: true
            },

        // scrollable: {
        //     direction: 'vertical',
        //     // directionLock: false
        // },

        listeners: {
            leafitemtap: function(nestedList, list, index, target, record) {
                var detailCard = nestedList.getDetailCard();
                detailCard.setHtml([

                    '<table style="text-align:center">',
                    '    <tr>',
                    '        <td style="padding:5px"><img src="https://vasil.iag.bg/upload/'+record.get('glav_pod')+'/'+record.get('picture')+'" width="180" heigh="180">',
                    '    </td>',
                    '    <tr>',
                    '        <td><h1>'+record.get('text')+'</h1></td>',
                    '    </tr>',
                    '    <tr>',
                    '        <td><small>Поделение: </small><b>'+record.get('dgs')+'</td>',
                    '    </tr>',
                    '    <tr>',
                    '        <td><small>Моб. тел: </small><b>'+record.get('gsm')+'</b></td>',
                    '    </tr>',
                    '    <tr>',
                    '        <td><small>Email: </small><b>'+record.get('email')+'</b></td>',
                    '    </tr>',
                    '    <tr>',
                    '        <td><small>Длъжност: </small><b>'+record.get('dlagnost')+'</b></td>',
                    '    </tr>',
                    '    <tr>',
                    '        <td><small>Дирекция: </small><b>'+record.get('directorate')+'</b></td>',
                    '    </tr>  ',
                    // '   ',
                    '</table>'
                ].join(""));
            }
        },
     
        // plugins: [
        //     {
        //         autoPaging: true,
        //         // loadMoreText: 'Зареждам още ...',
        //         noMoreRecordsText: 'Няма повече записи.',
        //         type: 'listpaging'
        //     }
        // ]   
    }

});